import { Metadata } from "next";
import { ServicePageTemplate, ServicePageData } from "@/components/sections/ServicePageTemplate";
import { caseStudiesPreview } from "@/data/site-data";
import { webPageSchema } from "@/lib/schemas";

// Update this date whenever meaningful content changes are made to this page
const PAGE_LAST_MODIFIED = "2026-03-19";

export const metadata: Metadata = {
  title: "AI Integration & Agentic Workflows India — Voice Agents, Prompt Engineering & SaaS AI-ification",
  description:
    "Aryan Rawther (Apex Mind LLP) helps businesses integrate AI beyond chatbots — building real-time AI voice agents, designing LLM application architecture, and adding AI features to existing SaaS products. Based in Bengaluru, serving clients globally.",
  alternates: { canonical: "/services/ai-integration" },
  keywords: [
    "AI integration consultant India",
    "agentic workflow developer India",
    "AI voice agent developer India",
    "real-time voice AI India",
    "prompt engineering consultant India",
    "LLM application architecture India",
    "SaaS AI integration consultant",
    "AI feature integration legacy software",
    "conversational AI developer India",
    "AI agent developer Bengaluru",
    "low latency voice AI India",
    "hire AI integration consultant India",
    "SaaS AI-ification consultant",
    "OpenAI integration India",
    "Apex Mind LLP AI integration",
  ],
};

const data: ServicePageData = {
  name: "AI Integration & Agentic Workflows",
  slug: "ai-integration",
  href: "/services/ai-integration",
  h1: "AI Integration & Agentic Workflows",
  tagline: "Voice agents · Prompt architecture · SaaS AI-ification",
  description:
    "Most businesses don't need a chatbot — they need AI that actually does things. I help companies move beyond surface-level AI features to functional agentic systems: real-time voice agents that handle calls, LLM architectures that are reliable and cost-controlled, and AI capabilities embedded directly into your existing SaaS product.",
  deliverables: [
    "Custom AI voice agents — low-latency, real-time voice systems for customer service or internal ops",
    "Prompt engineering and LLM application architecture — reliable, secure, and cost-efficient",
    "SaaS \"AI-ification\" — integrating AI features into your existing product without a full rebuild",
    "Agentic workflow design — AI systems that take actions, not just generate text",
    "AI system evaluation and red-teaming — stress-testing prompts, outputs, and failure modes",
    "LLM cost optimisation — model selection, caching, and token budgeting strategies",
    "AI feature scoping for product teams — translating user needs into implementable AI specs",
  ],
  whoFor: [
    "SaaS founders who want to add AI features to their product but don't know where to start",
    "Companies running legacy software looking to modernise with AI without rebuilding from scratch",
    "Operations teams that need AI to handle real tasks — calls, routing, data extraction, escalation",
    "Product teams that have tried prompt-based features but keep hitting reliability or cost issues",
    "Businesses that want voice AI but need it to be fast, accurate, and production-ready",
    "CTOs and technical leads who want an architecture review before committing to an AI stack",
  ],
  process: [
    {
      title: "Use-case mapping",
      description:
        "We identify the specific AI capability that delivers the most value — not everything at once. I scope tightly: one reliable feature ships faster and teaches more than five half-built ones.",
    },
    {
      title: "Architecture design",
      description:
        "I design the full system: model selection, prompt architecture, tool integrations, fallback logic, and cost model. You see the plan before any code is written.",
    },
    {
      title: "Build and integrate",
      description:
        "Implementation in milestones — connecting the AI layer to your existing product or infrastructure, handling edge cases, and testing against real-world inputs, not just happy paths.",
    },
    {
      title: "Hardening and handoff",
      description:
        "Red-teaming, cost benchmarking, and load testing before go-live. Full documentation, a walkthrough session, and post-launch support so your team can own it long-term.",
    },
  ],
  tools: [
    { name: "OpenAI API" },
    { name: "Anthropic API" },
    { name: "Gemini API" },
    { name: "LangChain" },
    { name: "Twilio" },
    { name: "Deepgram" },
    { name: "ElevenLabs" },
    { name: "WebSockets" },
    { name: "LiveKit" },
    { name: "FastAPI" },
    { name: "Python" },
    { name: "TypeScript" },
    { name: "Next.js" },
    { name: "Redis" },
    { name: "Supabase" },
  ],
  faqs: [
    {
      question: "What's the difference between AI automation consulting and AI integration?",
      answer:
        "AI automation consulting focuses on replacing or augmenting business processes — things like document processing, data extraction, and workflow routing. AI integration goes deeper into your product: adding AI capabilities to existing software, building voice agents that handle real calls, or designing the LLM architecture that powers a user-facing feature. In practice, many engagements involve both.",
    },
    {
      question: "What does 'SaaS AI-ification' mean in practice?",
      answer:
        "It means taking your existing product and adding AI capabilities without rebuilding it from scratch. This could be a smart search feature, an AI-generated summary, an in-product assistant, or automated classification of user data. I scope what's genuinely valuable, design it to be reliable, and integrate it with your existing stack — not a bolted-on demo.",
    },
    {
      question: "How do you build low-latency AI voice agents?",
      answer:
        "Real-time voice AI requires a carefully tuned pipeline: speech-to-text (Deepgram or Whisper), a fast LLM inference layer (GPT-4o or Claude), and text-to-speech (ElevenLabs or Google TTS) — all connected over WebSockets or a real-time media platform like LiveKit. The key is minimising round-trip latency at each stage. I&apos;ve built production voice systems and know where latency hides and how to cut it.",
    },
    {
      question: "How do you make LLM applications reliable?",
      answer:
        "Reliability in LLM apps comes from architecture, not luck. I use structured outputs, strict prompt contracts, validation layers, fallback chains, and deterministic routing wherever possible. I also red-team prompts before deployment — testing for hallucination, prompt injection, and out-of-scope behaviour. The goal is a system that degrades gracefully, not one that fails silently.",
    },
    {
      question: "Can you work with our existing codebase and infrastructure?",
      answer:
        "Yes — most AI integration projects are additive, not replacements. I work with your existing stack (whether that&apos;s Node.js, Python, Rails, or something else) and add the AI layer on top through APIs, webhooks, or a standalone microservice. I don&apos;t require you to adopt a new framework or rebuild your database.",
    },
    {
      question: "How is pricing structured?",
      answer:
        "Milestone-based — you pay when each defined milestone is delivered and approved. No hourly billing, no retainer lock-in. I scope engagements tightly so you know what you&apos;re getting before we start. Reach out and I&apos;ll give you an honest scoping estimate based on your specific use case.",
    },
  ],
  relatedCaseStudies: [caseStudiesPreview[0], caseStudiesPreview[3], caseStudiesPreview[1]],
  relatedTestimonials: [
    {
      quote:
        "[TODO: Replace with real testimonial] The voice AI system Aryan built handles thousands of calls daily with remarkable accuracy. Genuinely impressive work.",
      name: "Client Name",
      role: "Operations Director",
      company: "Insurance Company",
      service: "AI Voice Agents",
    },
  ],
};

export default function AIIntegrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({
              title: "AI Integration & Agentic Workflows India — Voice Agents, Prompt Engineering & SaaS AI-ification",
              description:
                "Aryan Rawther (Apex Mind LLP) helps businesses integrate AI beyond chatbots — building real-time AI voice agents, designing LLM application architecture, and adding AI features to existing SaaS products.",
              url: "/services/ai-integration",
              datePublished: "2026-01-01",
              dateModified: PAGE_LAST_MODIFIED,
            })
          ),
        }}
      />
      <ServicePageTemplate data={data} />
    </>
  );
}
