import { Metadata } from "next";
import Link from "next/link";
import { AskAIButton } from "@/components/ui/AskAIButton";

export const metadata: Metadata = {
  title: "AI & SEO Glossary — Key Terms Explained | Aryan Rawther",
  description:
    "Plain-English definitions of AI, machine learning, SEO, and GEO terms. Written for business owners and non-technical decision-makers.",
  alternates: { canonical: "/glossary" },
};

const glossaryTerms = [
  // AI & Automation
  {
    term: "Agentic AI",
    slug: "agentic-ai",
    shortDefinition: "AI systems designed to plan, reason, use tools, and autonomously execute multi-step tasks — going far beyond single-turn question-and-answer interactions.",
    category: "AI & Automation",
  },
  {
    term: "AI Agent",
    slug: "ai-agent",
    shortDefinition: "A software system that can perceive its environment, make decisions, and take actions autonomously to achieve a goal.",
    category: "AI & Automation",
  },
  {
    term: "AI Orchestration",
    slug: "ai-orchestration",
    shortDefinition: "The coordination of multiple AI models, tools, memory systems, and agents to complete complex multi-step tasks — managed by frameworks like LangChain or CrewAI.",
    category: "AI & Automation",
  },
  {
    term: "Context Window",
    slug: "context-window",
    shortDefinition: "The maximum amount of text an LLM can process in a single interaction — encompassing the full conversation history, system instructions, and documents provided.",
    category: "AI & Automation",
  },
  {
    term: "Fine-tuning",
    slug: "fine-tuning",
    shortDefinition: "The process of further training a pre-trained AI model on a domain-specific dataset to improve its performance, tone, or knowledge for a particular task.",
    category: "AI & Automation",
  },
  {
    term: "Function Calling",
    slug: "function-calling",
    shortDefinition: "A capability that lets LLMs trigger predefined functions or external APIs — the mechanism that enables AI agents to take real-world actions rather than just generating text.",
    category: "AI & Automation",
  },
  {
    term: "Hallucination",
    slug: "hallucination",
    shortDefinition: "When an AI model generates confident-sounding but factually incorrect, fabricated, or unsupported information.",
    category: "AI & Automation",
  },
  {
    term: "Large Language Model (LLM)",
    slug: "large-language-model",
    shortDefinition: "A type of AI model trained on vast amounts of text data, capable of generating, summarising, and reasoning about language.",
    category: "AI & Automation",
  },
  {
    term: "Prompt Engineering",
    slug: "prompt-engineering",
    shortDefinition: "The practice of designing and refining the instructions given to an AI model to produce better, more accurate, and more reliable outputs.",
    category: "AI & Automation",
  },
  {
    term: "Retrieval-Augmented Generation (RAG)",
    slug: "rag",
    shortDefinition: "A technique that combines an LLM with a retrieval system, allowing the AI to look up external documents before generating a response.",
    category: "AI & Automation",
  },
  {
    term: "Revenue Cycle Management (RCM)",
    slug: "rcm",
    shortDefinition: "The end-to-end financial process healthcare organisations use to track patient care from registration through to final payment — a primary target for AI automation.",
    category: "AI & Automation",
  },
  {
    term: "Vector Database",
    slug: "vector-database",
    shortDefinition: "A database optimised for storing and searching high-dimensional numerical representations of meaning (embeddings) — the storage layer that makes RAG and semantic search possible.",
    category: "AI & Automation",
  },
  // SEO & GEO
  {
    term: "AI Overviews",
    slug: "ai-overviews",
    shortDefinition: "Google's AI-generated answer summaries that appear above organic search results, synthesising information from multiple sources to directly respond to a query.",
    category: "SEO & GEO",
  },
  {
    term: "Core Web Vitals",
    slug: "core-web-vitals",
    shortDefinition: "Google's set of user experience metrics (LCP, CLS, INP) that measure page loading, visual stability, and interactivity — used as a ranking signal.",
    category: "SEO & GEO",
  },
  {
    term: "E-E-A-T",
    slug: "e-e-a-t",
    shortDefinition: "Google's quality evaluation framework — Experience, Expertise, Authoritativeness, and Trustworthiness — used to assess the credibility of content and its creators.",
    category: "SEO & GEO",
  },
  {
    term: "Generative Engine Optimisation (GEO)",
    slug: "geo",
    shortDefinition: "The practice of optimising web content to be cited and surfaced in AI-generated answers from ChatGPT, Perplexity, and Google AI Overviews.",
    category: "SEO & GEO",
  },
  {
    term: "llms.txt",
    slug: "llms-txt",
    shortDefinition: "A plain-text file placed at a website's root that provides structured, AI-readable information about the site — designed specifically for large language models and AI crawlers.",
    category: "SEO & GEO",
  },
  {
    term: "Programmatic SEO",
    slug: "programmatic-seo",
    shortDefinition: "A strategy where large numbers of SEO-optimised pages are automatically generated from structured data — enabling search visibility at scale without writing each page manually.",
    category: "SEO & GEO",
  },
  {
    term: "Search Intent",
    slug: "search-intent",
    shortDefinition: "The underlying reason a user performs a search query — whether they want to learn something, find a website, research a purchase, or complete a transaction.",
    category: "SEO & GEO",
  },
  {
    term: "Semantic SEO",
    slug: "semantic-seo",
    shortDefinition: "An approach to SEO focused on topic relevance and meaning rather than exact keyword matching — aligning content with search intent and the relationships between concepts.",
    category: "SEO & GEO",
  },
  {
    term: "Structured Data / Schema Markup",
    slug: "structured-data",
    shortDefinition: "Machine-readable code added to web pages that helps search engines and AI systems understand page content and context.",
    category: "SEO & GEO",
  },
  {
    term: "Technical SEO",
    slug: "technical-seo",
    shortDefinition: "The practice of optimising a website's technical infrastructure — crawlability, indexability, page speed, and site architecture — so search engines can find and rank it effectively.",
    category: "SEO & GEO",
  },
  // AI Voice
  {
    term: "IVR (Interactive Voice Response)",
    slug: "ivr",
    shortDefinition: "A telephony system that interacts with callers through voice prompts and key presses — increasingly replaced by AI voice agents.",
    category: "AI Voice",
  },
  {
    term: "Speech-to-Text (STT)",
    slug: "speech-to-text",
    shortDefinition: "Technology that converts spoken audio into written text in real time — the listening layer of AI voice agents, powered by models like Deepgram and OpenAI Whisper.",
    category: "AI Voice",
  },
  {
    term: "Text-to-Speech (TTS)",
    slug: "text-to-speech",
    shortDefinition: "Technology that converts written text into natural-sounding spoken audio — the speaking layer of AI voice agents, powered by models like ElevenLabs and OpenAI TTS.",
    category: "AI Voice",
  },
  // Web & SaaS
  {
    term: "API (Application Programming Interface)",
    slug: "api",
    shortDefinition: "A defined contract that allows software systems to communicate with each other — enabling one application to request data or trigger actions in another.",
    category: "Web & SaaS",
  },
  {
    term: "Headless Architecture",
    slug: "headless-architecture",
    shortDefinition: "A design pattern that decouples the frontend (presentation layer) from the backend — allowing each to be built, deployed, and scaled independently via APIs.",
    category: "Web & SaaS",
  },
  {
    term: "Multi-tenant SaaS",
    slug: "multi-tenant-saas",
    shortDefinition: "A SaaS architecture where a single software instance serves multiple customers, with each customer's data kept isolated from others.",
    category: "Web & SaaS",
  },
  {
    term: "MVP (Minimum Viable Product)",
    slug: "mvp",
    shortDefinition: "The simplest version of a product that delivers genuine value to early users — built specifically to validate core assumptions before investing in full development.",
    category: "Web & SaaS",
  },
  {
    term: "Server-Side Rendering (SSR / SSG)",
    slug: "server-side-rendering",
    shortDefinition: "Rendering strategies that generate HTML on the server rather than in the browser — improving page load speed, SEO, and initial content visibility.",
    category: "Web & SaaS",
  },
  {
    term: "Technical Co-founder",
    slug: "technical-co-founder",
    shortDefinition: "The founder responsible for technology strategy, product architecture, and engineering decisions in a startup — the person who owns how the product gets built.",
    category: "Web & SaaS",
  },
  {
    term: "Webhook",
    slug: "webhook",
    shortDefinition: "An automated HTTP notification sent from one application to another when a specific event occurs — the 'push' alternative to polling an API for updates.",
    category: "Web & SaaS",
  },
];

// Group by first letter
const groupedTerms = glossaryTerms.reduce<Record<string, typeof glossaryTerms>>((acc, term) => {
  const letter = term.term[0].toUpperCase();
  if (!acc[letter]) acc[letter] = [];
  acc[letter].push(term);
  return acc;
}, {});

const sortedLetters = Object.keys(groupedTerms).sort();

// Group by category
const groupedByCategory = glossaryTerms.reduce<Record<string, typeof glossaryTerms>>((acc, term) => {
  if (!acc[term.category]) acc[term.category] = [];
  acc[term.category].push(term);
  return acc;
}, {});

export default function GlossaryPage() {
  return (
    <>
      {/* Hero */}
      <section className="aurora-bg pt-32 pb-16">
        <div className="container relative z-10 max-w-3xl">
          <p className="text-accent-primary font-mono text-sm mb-3 tracking-wide uppercase">
            Glossary
          </p>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            AI & SEO terms, explained simply.
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed">
            Plain-English definitions of the terms that come up when discussing AI automation, SEO,
            GEO, and modern web development. No jargon within the jargon.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AskAIButton pageUrl="/glossary" pageType="resource" />

          {/* A–Z navigation */}
          <div className="mt-10 mb-12 flex flex-wrap gap-2">
            {sortedLetters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-9 h-9 flex items-center justify-center rounded-btn border border-border bg-bg-surface text-text-secondary hover:border-accent-primary hover:text-accent-primary transition-colors text-sm font-mono font-medium"
              >
                {letter}
              </a>
            ))}
          </div>

          {/* Terms by letter */}
          <div className="space-y-12">
            {sortedLetters.map((letter) => (
              <div key={letter} id={`letter-${letter}`}>
                <h2 className="font-display text-3xl font-bold text-text-primary border-b border-border pb-3 mb-6">
                  {letter}
                </h2>
                <div className="space-y-4">
                  {groupedTerms[letter].map((term) => (
                    <Link
                      key={term.slug}
                      href={`/glossary/${term.slug}`}
                      className="block rounded-card border border-border bg-bg-surface p-5 card-hover group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors mb-1.5">
                            {term.term}
                          </h3>
                          <p className="text-text-secondary text-sm leading-relaxed">
                            {term.shortDefinition}
                          </p>
                        </div>
                        <span className="text-accent-primary text-sm flex-shrink-0 group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* By category */}
          <div className="mt-16 pt-12 border-t border-border">
            <h2 className="text-2xl font-bold text-text-primary mb-8">Browse by category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Object.entries(groupedByCategory).map(([category, terms]) => (
                <div key={category} className="rounded-card border border-border bg-bg-surface p-5">
                  <h3 className="font-semibold text-text-primary mb-3">{category}</h3>
                  <ul className="space-y-1.5">
                    {terms.map((term) => (
                      <li key={term.slug}>
                        <Link
                          href={`/glossary/${term.slug}`}
                          className="text-text-secondary text-sm hover:text-accent-primary transition-colors"
                        >
                          {term.term} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
