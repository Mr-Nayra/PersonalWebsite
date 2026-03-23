export function LangChainContent() {
  return (
    <>
      <p>
        Building a production-ready AI agent is not the same as building a demo. This guide covers
        exactly how to go from a working prototype to a reliable, deployable LangChain agent —
        including the mistakes most tutorials skip over.
      </p>

      <h2>What Is a LangChain Agent?</h2>
      <p>
        A LangChain agent is a system that uses a large language model (LLM) as its reasoning
        engine, combined with a set of tools — functions the model can call to interact with the
        outside world. The LLM decides which tool to use, calls it, observes the result, and
        continues until the task is complete.
      </p>
      <p>
        This is different from a simple LLM API call. An agent can browse the web, run Python code,
        query a database, send an email, or call any external API — all within a single autonomous
        workflow.
      </p>
      <p>
        LangChain provides the scaffolding: tool definitions, memory management, prompt formatting,
        and the agent executor loop that drives the model&apos;s decisions.
      </p>

      <h2>The Core Architecture</h2>
      <p>Every LangChain agent has four components:</p>

      <h3>1. The LLM (Reasoning Engine)</h3>
      <p>
        Usually GPT-4o, Claude 3.5 Sonnet, or Gemini 1.5 Pro. The model reads the task, decides
        what to do next, and interprets tool outputs. Model choice matters — weaker models make more
        tool-selection errors and get stuck in loops.
      </p>

      <h3>2. Tools</h3>
      <p>
        Functions with a name, description, and input schema. The LLM reads the description and
        decides when to call each tool. Write your tool descriptions carefully — they are effectively
        prompts. A vague description leads to the agent calling the wrong tool.
      </p>

      <h3>3. Memory</h3>
      <p>
        Conversation history passed back into the prompt. For long-running tasks, memory fills the
        context window quickly. Use summary memory or buffer memory with a token limit to keep
        agents from breaking.
      </p>

      <h3>4. The Agent Executor</h3>
      <p>
        The loop that runs: LLM generates action → tool is called → result is fed back → repeat.
        LangChain&apos;s <code>AgentExecutor</code> handles this, with configurable max iterations
        and early stopping.
      </p>

      <h2>Step-by-Step: Building a Research Agent</h2>
      <p>
        Here is a minimal but production-viable research agent that takes a company name, searches
        the web, and returns a structured summary.
      </p>

      <h3>Step 1: Install dependencies</h3>
      <pre><code>{`pip install langchain langchain-openai langchain-community fastapi uvicorn python-dotenv`}</code></pre>

      <h3>Step 2: Define your tools</h3>
      <pre><code>{`from langchain.tools import tool
from langchain_community.tools.tavily_search import TavilySearchResults

search = TavilySearchResults(max_results=3)

@tool
def summarise_company(company_name: str) -> str:
    """Search the web for information about a company and return a brief summary."""
    results = search.run(company_name)
    return results`}</code></pre>
      <p>
        Good tool descriptions do three things: state what the tool does, when to use it, and what
        format the input should be in.
      </p>

      <h3>Step 3: Initialise the agent</h3>
      <pre><code>{`from langchain_openai import ChatOpenAI
from langchain.agents import AgentExecutor, create_openai_tools_agent
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder

llm = ChatOpenAI(model="gpt-4o", temperature=0)

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a business research assistant. Always use tools to look up current information. Return structured summaries."),
    ("human", "{input}"),
    MessagesPlaceholder(variable_name="agent_scratchpad"),
])

tools = [summarise_company]
agent = create_openai_tools_agent(llm, tools, prompt)
executor = AgentExecutor(agent=agent, tools=tools, verbose=True, max_iterations=5)`}</code></pre>
      <p>
        Setting <code>max_iterations=5</code> is important. Without it, a confused agent can loop
        indefinitely and rack up API costs.
      </p>

      <h3>Step 4: Wrap in a FastAPI endpoint</h3>
      <pre><code>{`from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class ResearchRequest(BaseModel):
    company: str

@app.post("/research")
async def research_company(req: ResearchRequest):
    result = executor.invoke({"input": f"Research this company: {req.company}"})
    return {"output": result["output"]}`}</code></pre>

      <h2>Production Considerations</h2>
      <p>
        Most LangChain tutorials stop at the demo. Here is what actually matters when you go to
        production:
      </p>

      <h3>Error handling and retries</h3>
      <p>
        Tool calls fail. APIs time out. Rate limits hit. Wrap every tool function in a
        try/except and return a descriptive error string rather than raising an exception — the
        agent can often recover from a tool error if it reads a clear message. Use{" "}
        <code>tenacity</code> for exponential backoff on API calls.
      </p>

      <h3>Structured outputs</h3>
      <p>
        By default, agents return free-text. For production, use{" "}
        <code>with_structured_output()</code> or a Pydantic output parser to enforce a schema.
        Unstructured output downstream is a debugging nightmare.
      </p>

      <h3>Observability</h3>
      <p>
        Integrate LangSmith from day one. Every agent run, every tool call, and every token used is
        logged. When an agent makes a wrong decision in production, LangSmith is how you find out
        why. This is not optional for anything customer-facing.
      </p>

      <h3>Cost control</h3>
      <p>
        Log token counts per run. Set hard limits on <code>max_iterations</code>. Cache
        deterministic tool results (e.g., company data lookups) with Redis. A single poorly-designed
        agent in production can cost more per day than your infrastructure.
      </p>

      <h3>Streaming</h3>
      <p>
        For user-facing agents, stream the output using <code>astream_events</code>. Waiting 15
        seconds for a result kills UX. Streaming tokens as they arrive makes the agent feel fast
        even when it isn&apos;t.
      </p>

      <h2>When Not to Use LangChain</h2>
      <p>
        LangChain is powerful but adds complexity. For simple, single-step LLM calls — summarise
        this document, classify this email — you do not need an agent. Call the API directly.
      </p>
      <p>
        Use LangChain agents when: the task requires multiple steps, the steps are not known in
        advance, or the agent needs to interact with external systems. For complex multi-agent
        workflows where agents need to hand off work to each other, consider LangGraph — the
        graph-based extension of LangChain that gives you explicit control over agent routing.
      </p>

      <h2>Common Mistakes</h2>
      <p>
        <strong>Tool descriptions are too vague.</strong> The LLM reads descriptions to decide what
        to call. &ldquo;Search for stuff&rdquo; is not a tool description.
        &ldquo;Search the web for current news, company information, or factual queries. Input: a
        search query string.&rdquo; is.
      </p>
      <p>
        <strong>No max_iterations limit.</strong> Agents get confused and loop. Set a limit.
      </p>
      <p>
        <strong>Passing raw exceptions to the agent.</strong> If your tool raises an exception, the
        agent receives a Python traceback. It cannot use this. Catch exceptions and return a
        human-readable error string.
      </p>
      <p>
        <strong>Using the same agent instance across concurrent requests.</strong> Agent memory is
        stateful. For a multi-user API, create a new agent executor per request or use thread-safe
        session management.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>Do I need LangChain to build AI agents?</h3>
      <p>
        No. You can build agents directly with the OpenAI or Anthropic SDK using function calling.
        LangChain is useful because it handles boilerplate — the agent loop, tool formatting, memory
        management — so you can focus on your tools and prompts. For complex multi-agent systems,
        the abstractions pay off. For simple agents, raw SDK calls are often cleaner.
      </p>

      <h3>How do I choose between GPT-4o, Claude, and Gemini for my agent?</h3>
      <p>
        Test all three on your specific task. GPT-4o is strong at tool selection and JSON output.
        Claude is better at long-context reasoning and instruction-following. Gemini 1.5 Pro handles
        very large context windows cheaply. For most business automation tasks, any of the three
        will work — cost and latency are usually the deciding factors.
      </p>

      <h3>How much does running a LangChain agent cost?</h3>
      <p>
        It depends on model, token count, and number of tool calls. A research agent using GPT-4o
        that makes 5 tool calls and processes 3,000 tokens total costs roughly $0.03–0.08 per run.
        Volume and context window usage are the main drivers. Log token counts in development to
        forecast costs before scaling.
      </p>

      <h3>Can LangChain agents run autonomously without human oversight?</h3>
      <p>
        They can, but you should design for human-in-the-loop on any action with side effects —
        sending emails, writing to databases, making purchases. Use LangChain&apos;s
        interrupt/approval patterns or build a confirmation step before irreversible actions.
      </p>
    </>
  );
}
