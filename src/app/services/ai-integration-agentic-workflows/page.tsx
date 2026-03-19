import { Metadata } from "next";
import { ServicePageTemplate, ServicePageData } from "@/components/sections/ServicePageTemplate";
import { caseStudiesPreview } from "@/data/site-data";
import { Button } from "@/components/ui/Button";
import { webPageSchema } from "@/lib/schemas";

// Update this date whenever meaningful content changes are made to this page
const PAGE_LAST_MODIFIED = "2026-03-19";

export const metadata: Metadata = {
  title: "AI Integration & Agentic Workflows India — RAG Systems & Autonmous Agents",
  description:
    "Hire an AI integration consultant in India. Aryan Rawther (Apex Mind LLP) designs and builds RAG systems, multi-modal pipelines, and agentic workflows. Specialising in SaaS AI-ification, AI voice agents and more.",
  alternates: { canonical: "/services/ai-integration-agentic-workflows" },
  keywords: [
    "AI integration consultant India",
    "agentic workflow consultant",
    "RAG system development India",
    "LLM integration consultant",
    "SaaS AI features developer",
    "AI agent development India",
    "multi-agent system design",
    "LangChain developer India",
  ],
};

const data: ServicePageData = {
  name: "AI Integration & Agentic Workflows",
  slug: "ai-integration-agentic-workflows",
  href: "/services/ai-integration-agentic-workflows",
  h1: "AI Integration & Agentic Workflows",
  tagline: "RAG Systems · Autonomous Agents · SaaS 'AI-ification'",
  description:
    "Most businesses already have the tools. What they're missing is intelligence between them. I design and build AI systems that go beyond chatbots — autonomous agents that reason, retrieve, act, and integrate into the way your business actually operates.",
  deliverables: [
    // RAG
    "Custom RAG pipeline design and implementation",
    "Vector database setup — Pinecone, Weaviate, pgvector, Chroma",
    "Document ingestion pipelines — PDF, Notion, Google Drive, Confluence, web scraping",
    "Embedding model selection and optimisation (OpenAI, Cohere, open-source)",
    "Hybrid search — semantic + keyword for precision retrieval",
    "Retrieval evaluation and accuracy tuning",
    "Internal knowledge bases, AI search systems, document Q&A products",
    // Agents
    "AI agent design using LangChain, CrewAI, LangGraph, AutoGen",
    "Multi-agent orchestration — planner, executor, critic architectures",
    "Tool use and API integration — agents that take real actions in real systems",
    "Custom AI voice agents — low-latency voice pipelines using Twilio, Deepgram, Whisper for customer service and internal operations",
    "Process automation — data extraction, classification, routing, report generation",
    "Human-in-the-loop workflows — approval gates, escalation logic",
    "n8n and low-code agent orchestration for faster deployment",
    // SaaS AI
    "AI feature audit — identifying where AI adds genuine value vs. where it's noise",
    "Integration architecture design for existing codebases",
    "LLM API integration — OpenAI, Anthropic, Gemini, open-source models",
    "Prompt engineering and system prompt architecture for production reliability",
    "AI feature design — smart search, auto-classification, content generation, recommendations",
    "Cost and latency optimisation — model selection, caching, batching strategies",
    "AI reliability and safety — output validation, guardrails, fallback logic",
    // Multi modal
    "Real-time audio processing — speech-to-text, speaker diarisation, live transcription pipelines",
    "Speech → reasoning → response pipelines for voice AI applications",
    "Document intelligence — invoice processing, contract analysis, form extraction using vision models",
    "Image and video understanding — classification, captioning, content moderation pipelines",
    "Multi-modal RAG — retrieval across text, images, and documents simultaneously",
    "Whisper, GPT-4 Vision, Claude Vision, Gemini multi-modal integrations",
    "Custom fine-tuning and model adaptation for specialised domains",
  ],
  whoFor: [
    "CTOs scaling their AI initiatives",
    "Product Managers adding AI to existing SaaS",
    "Technical Founders building AI-first startups",
    "Engineering Leads needing production-ready agent architectures",
  ],
  process: [
    {
      title: "Architecture & Feasibility",
      description: "We determine exactly what is possible, what is hype, and design the system architecture before writing code. I identify the right models, vector databases, and agent frameworks.",
    },
    {
      title: "Data Pipeline & Infrastructure",
      description: "Setting up the foundational data layer — document ingestion, chunking strategies, embeddings, vector databases, and API integrations with your existing systems.",
    },
    {
      title: "Agent / RAG Development",
      description: "Building the core intelligence: prompt engineering, multi-agent orchestration, tool calling, retrieval logic, and multi-modal processing (audio/vision) if required.",
    },
    {
      title: "Evaluation & Production Handoff",
      description: "Rigorous testing of retrieval accuracy, agent reasoning, and latency. Delivery includes full documentation and handoff for your engineering team.",
    },
  ],
  tools: [
    { name: "LangChain" },
    { name: "CrewAI" },
    { name: "LangGraph" },
    { name: "AutoGen" },
    { name: "Pinecone" },
    { name: "Weaviate" },
    { name: "pgvector" },
    { name: "Chroma" },
    { name: "OpenAI API" },
    { name: "Anthropic API" },
    { name: "Gemini API" },
    { name: "Twilio Voice API" },
    { name: "Deepgram" },
    { name: "OpenAI Whisper" },
    { name: "Python" },
    { name: "FastAPI" },
    { name: "WebSockets" },
    { name: "Redis" },
    { name: "PostgreSQL" },
    { name: "n8n" },
  ],
  faqs: [
    {
      question: "What is an Agentic Workflow?",
      answer: "An agentic workflow is an AI system that doesn't just process data, but actively plans and executes multi-step tasks to achieve a goal. It perceives an objective, uses tools (like web search, running code, or calling APIs), reasons about the results, and adapts its plan — moving far beyond simple chat interfaces."
    },
    {
      question: "How is RAG different from just asking ChatGPT?",
      answer: "Retrieval-Augmented Generation (RAG) connects an LLM directly securely to your private, proprietary data (like internal wikis, customer unsupport tickets, or codebase). When queried, it first retrieves the highly-relevant context from your data, then generates an answer based *only* on that truth, preventing hallucinations and exposing your internal knowledge."
    },
    {
      question: "Do you build custom AI models?",
      answer: "Generally, no. Training foundation models from scratch is extremely expensive and rarely the right business decision. I focus on \"applied AI\" — taking state-of-the-art foundation models (OpenAI, Anthropic, open-source), augmenting them with your data via RAG, building agentic intelligence around them, and integrating them into software."
    },
    {
      question: "What is your approach to AI in existing SaaS products?",
      answer: "My approach is value-driven, not trend-driven. We start with an 'AI feature audit' to find where intelligence genuinely improves the user outcome. Then, I design integration architectures that augment your existing codebase without breaking it — focusing heavily on production reliability, prompt architecture, and cost/latency optimisation."
    }
  ],
  relatedCaseStudies: caseStudiesPreview.filter(cs => cs.service.includes("AI Integration & Agentic Workflows")),
};

export default function AIIntegrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({
              title: "AI Integration & Agentic Workflows India — RAG Systems & Autonomous Agents",
              description:
                "Hire an AI integration consultant in India. Aryan Rawther (Apex Mind LLP) designs and builds RAG systems, multi-modal pipelines, and agentic workflows. Specialising in SaaS AI-ification, AI voice agents and more.",
              url: "/services/ai-integration-agentic-workflows",
              datePublished: "2026-01-01",
              dateModified: PAGE_LAST_MODIFIED,
            })
          ),
        }}
      />
      <ServicePageTemplate data={data} />
      
      {/* Capability Deep Dives */}
      <section className="section-padding bg-bg-elevated border-t border-border">
        <div className="container">
            <div className="max-w-3xl mx-auto mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  Core capabilities
                </h2>
                <p className="text-text-secondary text-lg">
                  Production-grade architectures for complex intelligence.
                </p>
            </div>

            <div className="flex flex-col gap-24 max-w-4xl mx-auto">
                {/* Capability 1 */}
                <div id="rag-systems">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary text-2xl">📚</div>
                        <h3 className="text-2xl font-bold text-text-primary">RAG & Knowledge Systems</h3>
                    </div>
                    <p className="text-text-secondary mb-8 leading-relaxed">
                        Your business has valuable knowledge locked in documents, databases, wikis, and emails that nobody can query in real time. RAG systems change that. I build custom retrieval pipelines that connect your proprietary data to large language models — so your AI answers questions using your knowledge, not just its training data. This includes vector database architecture, document ingestion and chunking pipelines, embedding strategies, hybrid search systems, and retrieval quality optimisation.
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-4">
                        {data.deliverables.slice(0, 7).map((item, i) => (
                            <li key={i} className="flex gap-3 text-text-secondary">
                                <span className="text-accent-primary mt-1 flex-shrink-0">✓</span>
                                <span className="text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Capability 2 */}
                <div id="agentic-systems">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary text-2xl">⚙️</div>
                        <h3 className="text-2xl font-bold text-text-primary">Workflow Automation & Agentic Systems</h3>
                    </div>
                    <p className="text-text-secondary mb-8 leading-relaxed">
                        An AI agent is not a chatbot. It&apos;s a system that perceives a goal, reasons about the steps to reach it, uses tools to take action, and adapts when things don&apos;t go as expected. I design multi-step agentic workflows that replace manual, repetitive, or coordination-heavy processes — including custom AI voice agents for operations that run on phone-based communication.
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-4">
                        {data.deliverables.slice(7, 14).map((item, i) => (
                             <li key={i} className="flex gap-3 text-text-secondary">
                                <span className="text-accent-primary mt-1 flex-shrink-0">✓</span>
                                <span className="text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Capability 3 */}
                <div id="saas-ai">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary text-2xl">💻</div>
                        <h3 className="text-2xl font-bold text-text-primary">SaaS AI-ification</h3>
                    </div>
                    <p className="text-text-secondary mb-8 leading-relaxed">
                       You have a product that works. Your users are asking for AI. Your board is asking about your AI strategy. But your codebase was never designed for any of this. I consult with software companies and product teams to identify exactly where AI creates real value in their product, design the integration architecture that doesn&apos;t break what already works, and implement it. This is not about adding a chatbot to a dashboard — it&apos;s about embedding intelligence where it changes user outcomes.
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-4">
                        {data.deliverables.slice(14, 21).map((item, i) => (
                             <li key={i} className="flex gap-3 text-text-secondary">
                                <span className="text-accent-primary mt-1 flex-shrink-0">✓</span>
                                <span className="text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Capability 4 */}
                <div id="multi-modal">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary text-2xl">👁️</div>
                        <h3 className="text-2xl font-bold text-text-primary">Multi-modal AI & Specialised Pipelines</h3>
                    </div>
                    <p className="text-text-secondary mb-8 leading-relaxed">
                        Not all AI problems are text-in, text-out. Some require processing images, audio, video, or documents alongside language. I design and build specialised AI pipelines for use cases that standard LLM integrations don&apos;t cover — combining the right models, the right retrieval strategies, and the right infrastructure for the task.
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-4">
                        {data.deliverables.slice(21, 28).map((item, i) => (
                             <li key={i} className="flex gap-3 text-text-secondary">
                                <span className="text-accent-primary mt-1 flex-shrink-0">✓</span>
                                <span className="text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <div className="mt-16 flex justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Discuss an integration project
              </Button>
            </div>
        </div>
      </section>
    </>
  );
}
