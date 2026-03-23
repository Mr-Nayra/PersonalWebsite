export function IvrContent() {
  return (
    <>
      <p>
        Traditional IVR systems are universally hated. Press 1 for billing, press 2 for support,
        press 3 to be transferred to a hold queue. They were designed around what was technically
        possible in 1995, not what callers actually need. AI voice agents change the architecture
        completely — instead of a decision tree, you have a live speech-to-text pipeline feeding an
        LLM that reasons about intent and responds with synthesised speech.
      </p>
      <p>
        This post walks through exactly how I built one for a US-based insurance verification
        company, including the mistakes that cost us two weeks.
      </p>

      <h2>The Business Problem</h2>
      <p>
        The client — a healthcare revenue cycle management (RCM) company — was handling 300+
        insurance verification calls per day. Each call required an agent to call the insurance
        payer, navigate their IVR, confirm patient eligibility, extract specific fields (policy
        number, copay, deductible, authorisation requirements), and log the data into eClinicalWorks.
        This was taking 7 full-time employees 6–8 hours per day.
      </p>
      <p>
        The goal: automate the outbound calls entirely, or at minimum handle the IVR navigation and
        data extraction so that human agents only needed to intervene for complex cases.
      </p>

      <h2>System Architecture Overview</h2>
      <p>The final architecture has five layers:</p>
      <ol>
        <li>
          <strong>Trigger layer</strong> — A Python scheduler reads new patient records from
          eClinicalWorks via their API and queues outbound calls
        </li>
        <li>
          <strong>Call layer</strong> — Twilio Programmable Voice places the outbound call and
          manages the audio stream
        </li>
        <li>
          <strong>STT layer</strong> — Deepgram Nova-2 transcribes the payer&apos;s IVR audio in
          real time via WebSocket
        </li>
        <li>
          <strong>Reasoning layer</strong> — GPT-4o processes the transcript, determines what input
          to provide (DTMF tones or speech), and extracts data fields when they appear
        </li>
        <li>
          <strong>Logging layer</strong> — Extracted fields are written back to eClinicalWorks and
          logged to a PostgreSQL audit table
        </li>
      </ol>
      <p>
        The key design decision: the LLM does not generate speech directly. It generates
        instructions — &ldquo;press 2&rdquo;, &ldquo;say the member ID&rdquo;, &ldquo;the
        deductible is $1,500 — extract this&rdquo; — and a deterministic layer executes them. This
        separation makes the system debuggable and auditable.
      </p>

      <h2>Twilio Setup</h2>
      <p>
        Twilio handles the telephony. You initiate a call via their REST API and point it at a
        TwiML webhook — a URL on your server that Twilio calls to get instructions.
      </p>
      <pre><code>{`from twilio.rest import Client

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

call = client.calls.create(
    to=payer_phone_number,
    from_=twilio_number,
    url="https://yourserver.com/twiml/start",
    status_callback="https://yourserver.com/twiml/status",
    record=True,
)`}</code></pre>
      <p>
        Your TwiML webhook returns XML that tells Twilio what to do with the call. For streaming
        audio to Deepgram:
      </p>
      <pre><code>{`<Response>
  <Start>
    <Stream url="wss://yourserver.com/audio-stream" track="inbound_track" />
  </Start>
  <Pause length="60"/>
</Response>`}</code></pre>
      <p>
        The <code>&lt;Stream&gt;</code> element opens a WebSocket from Twilio to your server,
        sending raw audio data (mulaw, 8kHz) in real time. The <code>&lt;Pause&gt;</code> keeps
        the call alive while you process.
      </p>

      <h2>Deepgram Integration</h2>
      <p>
        Deepgram Nova-2 handles real-time speech-to-text over a WebSocket. The audio from Twilio
        arrives as base64-encoded mulaw chunks. Decode it and forward it to Deepgram:
      </p>
      <pre><code>{`import websockets
import json
import base64

async def deepgram_stream(twilio_ws):
    dg_url = "wss://api.deepgram.com/v1/listen?encoding=mulaw&sample_rate=8000&model=nova-2&smart_format=true"

    async with websockets.connect(
        dg_url,
        extra_headers={"Authorization": f"Token {DEEPGRAM_API_KEY}"}
    ) as dg_ws:
        async for message in twilio_ws:
            data = json.loads(message)
            if data["event"] == "media":
                audio_chunk = base64.b64decode(data["media"]["payload"])
                await dg_ws.send(audio_chunk)

            transcript = await dg_ws.recv()
            transcript_data = json.loads(transcript)
            if transcript_data.get("is_final"):
                yield transcript_data["channel"]["alternatives"][0]["transcript"]`}</code></pre>
      <p>
        Use <code>is_final</code> rather than interim results for LLM processing — interim results
        change and sending them to the LLM every 200ms is expensive and noisy.
      </p>

      <h2>The LLM Reasoning Layer</h2>
      <p>
        Each final transcript is appended to a conversation log and sent to GPT-4o with a system
        prompt that knows the purpose of the call and what data fields to extract.
      </p>
      <pre><code>{`SYSTEM_PROMPT = """
You are an automated insurance verification agent on a call with a payer IVR system.

Your goal is to verify insurance eligibility and extract these fields:
- policy_number, group_number, copay, deductible, out_of_pocket_max, prior_auth_required

Respond with JSON only:
{
  "action": "dtmf" | "speak" | "wait" | "extract" | "complete" | "escalate",
  "value": "...",
  "extracted": { field: value } or null
}
"""`}</code></pre>
      <p>
        The structured output approach is critical. Early in development I used free-text output
        from the LLM, which was harder to parse reliably. Switching to JSON with an explicit action
        enum cut parsing errors to near zero.
      </p>

      <h2>DTMF and Speech Output</h2>
      <p>When the LLM returns an action, execute it via Twilio&apos;s REST API:</p>
      <pre><code>{`def send_dtmf(call_sid: str, digits: str):
    client.calls(call_sid).update(
        twiml=f"<Response><Play digits='{digits}'/></Response>"
    )

def speak(call_sid: str, text: str):
    client.calls(call_sid).update(
        twiml=f"<Response><Say voice='Polly.Joanna'>{text}</Say></Response>"
    )`}</code></pre>
      <p>
        For payers with automated detection that flags bot voices, ElevenLabs cloned voices with
        natural pacing work significantly better than AWS Polly or Twilio&apos;s built-in TTS.
      </p>

      <h2>Mistakes We Made</h2>
      <p>
        <strong>Mistake 1: Processing every Deepgram interim result.</strong> The LLM was being
        called every 200ms on partial transcripts. This burned tokens and caused the agent to act on
        incomplete sentences. Fix: only process <code>is_final</code> results.
      </p>
      <p>
        <strong>Mistake 2: No timeout handling.</strong> IVR systems go silent for 10–30 seconds
        between prompts. With no timeout, the agent waited indefinitely. Fix: implement a silence
        detector — if no audio arrives for 5 seconds, send a &ldquo;wait&rdquo; action and after 15
        seconds, escalate to a human.
      </p>
      <p>
        <strong>Mistake 3: Sending full conversation history every call.</strong> Token costs scaled
        linearly with call length. Fix: summarise completed exchanges before passing history to the
        LLM.
      </p>
      <p>
        <strong>Mistake 4: No recording on error.</strong> When calls failed, we had no way to
        replay what happened. Fix: enable Twilio call recording from day one, and log every LLM
        input/output with a <code>call_sid</code> reference.
      </p>

      <h2>Results</h2>
      <p>
        The system now handles 85% of calls fully automatically. The remaining 15% — payers that
        require CAPTCHAs, live agents, or have non-standard IVR flows — are escalated immediately
        rather than wasting time. Human agent time dropped from 48 person-hours per day to under 8.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>Is this legal? Are you allowed to use AI for automated calls?</h3>
      <p>
        In the US, outbound automated calls to businesses (including insurance payers) are generally
        permitted under TCPA and do not require the same consent rules as calls to consumers. For
        healthcare use cases, ensure your system is HIPAA-compliant — log access controls, encrypt
        data at rest, and have a BAA with your cloud providers. Always verify the legal requirements
        for your specific jurisdiction and use case.
      </p>

      <h3>Why Deepgram over AWS Transcribe or Google Speech-to-Text?</h3>
      <p>
        Deepgram Nova-2 has lower latency (typically 200–300ms to final transcript vs. 500–800ms
        for AWS Transcribe), better accuracy on telephone audio (which is 8kHz mulaw), and a simpler
        WebSocket API for streaming. For a real-time voice agent where every second of delay hurts
        the interaction, that latency difference matters.
      </p>

      <h3>Can this handle payers that use live human agents instead of IVRs?</h3>
      <p>
        Yes, but it requires a different prompt and more careful output — the agent needs to respond
        conversationally rather than navigating a menu tree. The same architecture works; the LLM
        just needs a different system prompt and longer context window.
      </p>

      <h3>What does this cost to run at scale?</h3>
      <p>
        At 300 calls per day, averaging 6 minutes per call: Twilio voice costs roughly $0.014/min
        ($0.084/call), Deepgram at $0.0043/min ($0.026/call), and GPT-4o at roughly $0.05/call
        assuming 1,500 tokens per call. Total: approximately $0.16 per automated call. At 255
        automated calls/day, that is $40/day — versus the previous cost of 7 full-time employees.
      </p>
    </>
  );
}
