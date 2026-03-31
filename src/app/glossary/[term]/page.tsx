import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AskAIButton } from "@/components/ui/AskAIButton";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

type Params = { term: string };

const termData: Record<string, {
  term: string;
  slug: string;
  category: string;
  shortDefinition: string;
  definition: string[];
  whyItMatters: string;
  relatedTerms: { term: string; slug: string }[];
  relatedService?: { name: string; href: string };
  relatedPosts?: { title: string; href: string }[];
}> = {

  // ─── AI & AUTOMATION ───────────────────────────────────────────────────────

  "ai-agent": {
    term: "AI Agent",
    slug: "ai-agent",
    category: "AI & Automation",
    shortDefinition:
      "A software system that can perceive its environment, make decisions, and take actions autonomously to achieve a goal.",
    definition: [
      "An AI agent is a software system that perceives inputs from its environment, reasons about what action to take, and then executes that action — often without human intervention at each step. Unlike simple automation scripts that follow fixed rules, AI agents use large language models (LLMs) to make context-aware decisions.",
      "AI agents can browse the web, read files, send emails, query databases, call APIs, and interact with other software — all in service of completing a task. A single agent might handle a multi-step workflow that previously required a human sitting at a computer.",
      "In practice, a well-designed AI agent for a procurement team might read an incoming RFP document, extract the technical specifications, compare them against a vendor catalogue, flag discrepancies, and draft a comparison report — all without a human touching it.",
    ],
    whyItMatters:
      "Businesses that understand what AI agents can and can't do are better positioned to identify automation opportunities and avoid over-investing in use cases where traditional automation would suffice.",
    relatedTerms: [
      { term: "Large Language Model (LLM)", slug: "large-language-model" },
      { term: "Retrieval-Augmented Generation (RAG)", slug: "rag" },
      { term: "Prompt Engineering", slug: "prompt-engineering" },
      { term: "Agentic AI", slug: "agentic-ai" },
      { term: "Function Calling", slug: "function-calling" },
    ],
    relatedService: { name: "AI Automation Consulting", href: "/services/ai-automation-consulting" },
    relatedPosts: [
      { title: "The Business Leader's Guide to AI Automation", href: "/resources/ai-automation-guide-for-business" },
    ],
  },

  "large-language-model": {
    term: "Large Language Model (LLM)",
    slug: "large-language-model",
    category: "AI & Automation",
    shortDefinition:
      "A type of AI model trained on vast amounts of text data, capable of generating, summarising, and reasoning about language.",
    definition: [
      "A large language model (LLM) is a type of AI system trained on billions of words of text — web pages, books, code, academic papers, and more. This training allows LLMs to predict and generate coherent text, answer questions, summarise documents, write code, and perform complex reasoning tasks.",
      "The most well-known LLMs include OpenAI's GPT-4, Anthropic's Claude, Google's Gemini, and Meta's Llama family. Each has different strengths, pricing models, context window sizes, and appropriate use cases.",
      "For businesses, LLMs are the engine underneath most AI tools — from customer service chatbots to document analysis to code generation. You access them via APIs, paying per token (roughly per word) processed. Understanding their capabilities and limitations helps you make better decisions about where AI investment will and won't pay off.",
    ],
    whyItMatters:
      "LLMs are the core technology underlying most AI tools businesses are deploying today. Understanding their capabilities and limitations helps you make better decisions about AI investment.",
    relatedTerms: [
      { term: "AI Agent", slug: "ai-agent" },
      { term: "Retrieval-Augmented Generation (RAG)", slug: "rag" },
      { term: "Prompt Engineering", slug: "prompt-engineering" },
      { term: "Context Window", slug: "context-window" },
      { term: "Hallucination", slug: "hallucination" },
    ],
    relatedService: { name: "AI Automation Consulting", href: "/services/ai-automation-consulting" },
  },

  "rag": {
    term: "Retrieval-Augmented Generation (RAG)",
    slug: "rag",
    category: "AI & Automation",
    shortDefinition:
      "A technique that combines an LLM with a retrieval system, allowing the AI to look up external documents before generating a response.",
    definition: [
      "Retrieval-Augmented Generation (RAG) is an AI architecture where a language model is given access to an external knowledge base or document store. When a query comes in, the system first retrieves the most relevant documents, then passes those documents along with the query to the LLM to generate a grounded, accurate response.",
      "RAG is particularly useful for enterprise applications where you want an AI to answer questions based on your internal documents, knowledge bases, or proprietary data — without the expense and risk of fine-tuning a model or leaking data to a third party.",
      "A concrete example: a procurement company using RAG can have an AI assistant that answers questions about vendor contracts by retrieving the relevant clauses from a document store — rather than hoping the LLM's training data happens to contain the right information.",
    ],
    whyItMatters:
      "RAG allows businesses to build AI systems that reason over their own data without retraining models. It's the foundation of most enterprise AI assistants and internal knowledge tools.",
    relatedTerms: [
      { term: "AI Agent", slug: "ai-agent" },
      { term: "Large Language Model (LLM)", slug: "large-language-model" },
      { term: "Vector Database", slug: "vector-database" },
      { term: "Hallucination", slug: "hallucination" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
  },

  "prompt-engineering": {
    term: "Prompt Engineering",
    slug: "prompt-engineering",
    category: "AI & Automation",
    shortDefinition:
      "The practice of designing and refining the instructions given to an AI model to produce better, more accurate, and more reliable outputs.",
    definition: [
      "Prompt engineering is the discipline of crafting and iterating on the instructions (prompts) given to an AI language model. Because LLMs are sensitive to how a question or instruction is phrased, the same underlying task can produce dramatically different outputs depending on how the prompt is written.",
      "Good prompt engineering involves: being specific about the desired output format, providing relevant context and examples, specifying the tone and audience, defining what the model should and shouldn't do, and testing systematically to improve reliability.",
      "At a production level, prompt engineering extends to prompt architecture — designing system prompts, user prompts, and tool call structures that form the reliable 'brain' of an AI application. This includes building in guardrails, fallback behaviour, and validation logic to ensure the AI behaves predictably at scale.",
    ],
    whyItMatters:
      "Most AI implementations that underperform are suffering from poor prompt design rather than fundamental model limitations. Good prompt engineering is often a cheaper path to better results than switching to a more expensive model.",
    relatedTerms: [
      { term: "Large Language Model (LLM)", slug: "large-language-model" },
      { term: "Retrieval-Augmented Generation (RAG)", slug: "rag" },
      { term: "AI Agent", slug: "ai-agent" },
      { term: "Hallucination", slug: "hallucination" },
      { term: "Fine-tuning", slug: "fine-tuning" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
  },

  "agentic-ai": {
    term: "Agentic AI",
    slug: "agentic-ai",
    category: "AI & Automation",
    shortDefinition:
      "AI systems designed to plan, reason, use tools, and autonomously execute multi-step tasks — going far beyond single-turn question-and-answer interactions.",
    definition: [
      "Agentic AI refers to AI systems that operate with a degree of autonomy over extended task sequences. Rather than simply responding to a single prompt, an agentic system breaks a goal into steps, decides which tools to use at each step, executes actions, observes the results, and adjusts its approach — all in a loop until the task is complete or a human needs to be involved.",
      "The distinction from a basic chatbot is significant. A chatbot responds. An agentic system acts. It might search the web, read a document, write and execute code, send a message, update a database, or trigger an external API — then use the results to decide what to do next.",
      "In practice, agentic AI is what powers real-world automations like an insurance verification pipeline that reads a patient's details, queries a payer's eligibility portal, interprets the response, and updates the EHR — without a human touching it. The 'agent' orchestrates this sequence reliably and handles edge cases.",
    ],
    whyItMatters:
      "Agentic AI is where the real business value of AI lies — not in chat interfaces, but in systems that replace or augment entire workflows. Understanding agentic systems helps you identify which processes in your business are candidates for this kind of automation.",
    relatedTerms: [
      { term: "AI Agent", slug: "ai-agent" },
      { term: "Function Calling", slug: "function-calling" },
      { term: "AI Orchestration", slug: "ai-orchestration" },
      { term: "Large Language Model (LLM)", slug: "large-language-model" },
      { term: "Retrieval-Augmented Generation (RAG)", slug: "rag" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
    relatedPosts: [
      { title: "The Business Leader's Guide to AI Automation", href: "/resources/ai-automation-guide-for-business" },
    ],
  },

  "hallucination": {
    term: "Hallucination",
    slug: "hallucination",
    category: "AI & Automation",
    shortDefinition:
      "When an AI model generates confident-sounding but factually incorrect, fabricated, or unsupported information.",
    definition: [
      "AI hallucination occurs when a large language model produces text that sounds plausible and authoritative but is factually wrong, made up, or unsupported by its training data or the context provided. The term comes from the way the model 'perceives' something that isn't there — generating a citation that doesn't exist, a statistic that was never published, or a description of an event that never happened.",
      "Hallucination happens because LLMs are fundamentally text-prediction engines. They are optimised to produce coherent, contextually appropriate continuations of text — not to retrieve verified facts from a knowledge database. When the model doesn't 'know' something, it fills the gap with statistically plausible text rather than acknowledging uncertainty.",
      "For production AI systems, hallucination is one of the primary engineering challenges. Mitigations include: grounding the model in real documents via RAG (Retrieval-Augmented Generation), using structured outputs to constrain what the model can say, adding validation layers that verify outputs against a ground-truth source, and designing human-in-the-loop checkpoints for high-stakes decisions.",
    ],
    whyItMatters:
      "Any business deploying AI in a customer-facing or decision-making context needs to understand and actively mitigate hallucination. The risk is not just inaccuracy — it's confident inaccuracy, which can damage trust or cause real-world errors if left unchecked.",
    relatedTerms: [
      { term: "Large Language Model (LLM)", slug: "large-language-model" },
      { term: "Retrieval-Augmented Generation (RAG)", slug: "rag" },
      { term: "Prompt Engineering", slug: "prompt-engineering" },
      { term: "Fine-tuning", slug: "fine-tuning" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
  },

  "fine-tuning": {
    term: "Fine-tuning",
    slug: "fine-tuning",
    category: "AI & Automation",
    shortDefinition:
      "The process of further training a pre-trained AI model on a domain-specific dataset to improve its performance, tone, or knowledge for a particular task.",
    definition: [
      "Fine-tuning takes a general-purpose pre-trained model (like GPT-4 or Llama) and continues its training on a smaller, curated dataset relevant to a specific domain, task, or style. The result is a model that has adapted its weights to better handle that particular context — producing outputs more consistent with the training examples.",
      "Fine-tuning is often compared to RAG (Retrieval-Augmented Generation) as approaches to making an LLM more useful for a specific business context. The key distinction: fine-tuning changes what the model knows and how it behaves, while RAG changes what information it has access to at query time. Fine-tuning is better for adapting tone, style, or reasoning patterns; RAG is better for keeping knowledge current and grounding responses in specific documents.",
      "For most business use cases, RAG is the right starting point — it's cheaper, faster to iterate, and doesn't require maintaining a fine-tuned model as the underlying LLM is updated. Fine-tuning makes more sense when you need very consistent output formatting, domain-specific reasoning that can't be achieved with prompting alone, or when inference cost at scale makes a smaller fine-tuned model economically attractive.",
    ],
    whyItMatters:
      "Knowing when to fine-tune versus when to use RAG or prompt engineering saves significant time and cost. Most businesses that assume they need fine-tuning actually don't — and those that do fine-tune prematurely often regret it when the base model is updated.",
    relatedTerms: [
      { term: "Large Language Model (LLM)", slug: "large-language-model" },
      { term: "Retrieval-Augmented Generation (RAG)", slug: "rag" },
      { term: "Prompt Engineering", slug: "prompt-engineering" },
      { term: "Vector Database", slug: "vector-database" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
  },

  "vector-database": {
    term: "Vector Database",
    slug: "vector-database",
    category: "AI & Automation",
    shortDefinition:
      "A database optimised for storing and searching high-dimensional numerical representations of meaning (embeddings) — the storage layer that makes semantic search and RAG possible.",
    definition: [
      "A vector database stores data not as rows and columns, but as vectors — lists of numbers that represent the semantic meaning of text, images, or other content. These numerical representations (called embeddings) are generated by AI models and capture meaning in a mathematical space where similar concepts are numerically close to each other.",
      "This enables semantic search: instead of searching for exact keyword matches, you search for meaning. Ask 'what are the payment terms?' and a vector search will find the relevant contract clause even if it never uses those exact words. This is the retrieval mechanism that powers RAG systems.",
      "Popular vector database options include Pinecone (managed, cloud-native), Weaviate (open-source), Qdrant (high-performance), and pgvector (a PostgreSQL extension that adds vector capabilities to a standard relational database). For many projects, pgvector is the practical choice because it avoids adding a new infrastructure component.",
    ],
    whyItMatters:
      "If you're building any AI system that needs to work with your own documents, knowledge base, or data — whether that's a Q&A system, a semantic search feature, or an agentic workflow that retrieves context — a vector database is likely part of the infrastructure.",
    relatedTerms: [
      { term: "Retrieval-Augmented Generation (RAG)", slug: "rag" },
      { term: "AI Agent", slug: "ai-agent" },
      { term: "Large Language Model (LLM)", slug: "large-language-model" },
      { term: "Fine-tuning", slug: "fine-tuning" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
  },

  "function-calling": {
    term: "Function Calling",
    slug: "function-calling",
    category: "AI & Automation",
    shortDefinition:
      "A capability that lets LLMs trigger predefined functions or external APIs — the mechanism that enables AI agents to take real-world actions rather than just generating text.",
    definition: [
      "Function calling (also called 'tool use') is a feature of modern LLMs where the model can be given a list of available functions — each with a name, description, and parameter schema. When the model determines that calling a function would help complete a task, it outputs a structured call specifying which function to invoke and with what arguments. The calling application then executes the function and returns the result to the model.",
      "This is what separates a chatbot from an agent. Without function calling, the LLM can only generate text. With it, the LLM can search the web, query a database, send an email, update a CRM record, trigger a webhook, or call any API you connect to it — and then use the results in its reasoning.",
      "From a security standpoint, function calling requires careful design. Functions should have least-privilege access, destructive actions (like deleting records or sending emails) should have confirmation steps, and inputs should be validated before execution. Poorly designed tool sets can be manipulated via prompt injection attacks.",
    ],
    whyItMatters:
      "Function calling is the bridge between AI reasoning and real-world systems. Understanding it helps you evaluate what an AI integration can and can't do in your specific software environment.",
    relatedTerms: [
      { term: "Agentic AI", slug: "agentic-ai" },
      { term: "AI Agent", slug: "ai-agent" },
      { term: "API (Application Programming Interface)", slug: "api" },
      { term: "AI Orchestration", slug: "ai-orchestration" },
      { term: "Webhook", slug: "webhook" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
  },

  "context-window": {
    term: "Context Window",
    slug: "context-window",
    category: "AI & Automation",
    shortDefinition:
      "The maximum amount of text an LLM can process in a single interaction — encompassing the full conversation history, system instructions, and documents provided.",
    definition: [
      "The context window is the LLM's working memory for a single interaction. Everything the model can 'see' at once — the system prompt, the conversation history, any documents you've passed in, and the response it's generating — must fit within this limit. It's measured in tokens, where one token is roughly three-quarters of a word in English.",
      "Current context window sizes vary significantly: GPT-4o supports 128,000 tokens (~96,000 words), Claude 3.5 Sonnet supports 200,000 tokens (~150,000 words). These numbers sound large, but they fill up quickly in production applications — a long document, a multi-turn conversation, and a detailed system prompt can easily consume tens of thousands of tokens per request.",
      "Context window size directly affects cost and latency, since most LLM APIs charge per token processed. Well-architected AI systems use strategies like RAG (retrieving only relevant chunks rather than loading whole document libraries), conversation summarisation (compressing history rather than keeping every message), and chunking to work efficiently within context limits.",
    ],
    whyItMatters:
      "Context window limitations shape how AI applications must be architected. Misunderstanding them leads to unexpected costs, degraded model performance on long documents, or systems that break once conversations get long enough.",
    relatedTerms: [
      { term: "Large Language Model (LLM)", slug: "large-language-model" },
      { term: "Retrieval-Augmented Generation (RAG)", slug: "rag" },
      { term: "Prompt Engineering", slug: "prompt-engineering" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
  },

  "ai-orchestration": {
    term: "AI Orchestration",
    slug: "ai-orchestration",
    category: "AI & Automation",
    shortDefinition:
      "The coordination of multiple AI models, tools, memory systems, and agents to complete complex multi-step tasks — typically managed by frameworks like LangChain, LangGraph, or CrewAI.",
    definition: [
      "AI orchestration is the layer above individual AI models that coordinates how they work together. A single LLM call is straightforward. A production AI system might involve multiple specialised agents (one for retrieval, one for reasoning, one for formatting), tool calls to external APIs, memory systems that persist state between steps, and branching logic that depends on intermediate results. Orchestration frameworks manage this complexity.",
      "Key frameworks include LangChain (chains and agents for sequential and tool-augmented tasks), LangGraph (stateful graph-based execution for complex branching workflows), CrewAI (role-based multi-agent systems where agents collaborate with defined responsibilities), and n8n (visual no-code orchestration for connecting AI to business tools).",
      "The orchestration layer handles the hard parts of production AI: retry logic when a model call fails, managing state across a long-running workflow, routing between different tools based on intermediate results, handling errors gracefully without losing work, and logging everything needed for debugging when something goes wrong.",
    ],
    whyItMatters:
      "Without proper orchestration, AI systems become brittle — they work in demos but fail in production when edge cases arise. The orchestration layer is often the difference between an AI prototype and a reliable business system.",
    relatedTerms: [
      { term: "Agentic AI", slug: "agentic-ai" },
      { term: "AI Agent", slug: "ai-agent" },
      { term: "Function Calling", slug: "function-calling" },
      { term: "Retrieval-Augmented Generation (RAG)", slug: "rag" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
    relatedPosts: [
      { title: "The Business Leader's Guide to AI Automation", href: "/resources/ai-automation-guide-for-business" },
    ],
  },

  "rcm": {
    term: "Revenue Cycle Management (RCM)",
    slug: "rcm",
    category: "AI & Automation",
    shortDefinition:
      "The end-to-end financial process healthcare organisations use to track patient care from registration through to final payment — covering insurance verification, billing, claims, and collections.",
    definition: [
      "Revenue Cycle Management encompasses every administrative and clinical step involved in capturing, managing, and collecting patient service revenue. The cycle begins when a patient schedules an appointment and ends when the final payment is received. Key stages include patient registration, insurance eligibility verification, pre-authorisation, coding, claims submission, payment posting, denial management, and patient billing.",
      "RCM is notoriously manual-intensive. Insurance rules differ across hundreds of payers, prior authorisation requirements change frequently, and claim rejections require investigation and resubmission. In US healthcare billing, a significant portion of staff time — and therefore cost — is consumed by these repetitive verification and rework tasks.",
      "AI is increasingly being applied to automate the high-volume, rules-based portions of RCM: automated insurance eligibility checks via payer portals, AI-driven claim scrubbing (flagging likely rejections before submission), denial prediction models, and prior authorisation assistance. These automations can reduce the headcount required for RCM operations substantially while improving claim acceptance rates.",
    ],
    whyItMatters:
      "For healthcare organisations and medical billing companies, RCM efficiency directly impacts cash flow and profitability. AI-driven RCM automation offers a clear, measurable ROI — typically measured in FTEs replaced and denial rates reduced.",
    relatedTerms: [
      { term: "Agentic AI", slug: "agentic-ai" },
      { term: "AI Agent", slug: "ai-agent" },
      { term: "AI Orchestration", slug: "ai-orchestration" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
  },

  // ─── SEO & GEO ─────────────────────────────────────────────────────────────

  "geo": {
    term: "Generative Engine Optimisation (GEO)",
    slug: "geo",
    category: "SEO & GEO",
    shortDefinition:
      "The practice of optimising web content to be cited and surfaced in AI-generated answers from ChatGPT, Perplexity, and Google AI Overviews.",
    definition: [
      "Generative Engine Optimisation (GEO) is the discipline of making your website's content visible and citable in AI-generated search results. As users increasingly get answers from ChatGPT, Perplexity, Claude, and Google's AI Overviews rather than clicking through to websites, appearing in those generated answers becomes a critical form of organic reach.",
      "GEO works by making content authoritative, clearly structured, and machine-readable. This includes technical elements like JSON-LD structured data, llms.txt files for AI crawlers, and semantic HTML — as well as content elements like direct definitions, cite-ready formatting, and named entity recognition.",
      "GEO complements rather than replaces traditional SEO. A site with strong technical SEO foundations — fast load times, clean crawlability, structured data — is also well-positioned for GEO. The difference is in the content layer: GEO-optimised content is written to be extractable and citable by AI systems, not just ranked by traditional keyword signals.",
    ],
    whyItMatters:
      "Search behaviour is shifting. A growing percentage of queries are answered directly by AI systems without a click. GEO is how businesses maintain organic visibility in this new environment.",
    relatedTerms: [
      { term: "Structured Data / Schema Markup", slug: "structured-data" },
      { term: "Large Language Model (LLM)", slug: "large-language-model" },
      { term: "Core Web Vitals", slug: "core-web-vitals" },
      { term: "llms.txt", slug: "llms-txt" },
      { term: "AI Overviews", slug: "ai-overviews" },
      { term: "E-E-A-T", slug: "e-e-a-t" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
    relatedPosts: [
      { title: "GEO Optimisation: How to Appear in AI-Generated Answers", href: "/resources/geo-optimisation-guide" },
    ],
  },

  "core-web-vitals": {
    term: "Core Web Vitals",
    slug: "core-web-vitals",
    category: "SEO & GEO",
    shortDefinition:
      "Google's set of user experience metrics (LCP, CLS, INP) that measure page loading, visual stability, and interactivity — used as a ranking signal.",
    definition: [
      "Core Web Vitals are a set of three metrics defined by Google that measure real-world user experience on web pages. They are: Largest Contentful Paint (LCP), which measures how quickly the main content loads; Cumulative Layout Shift (CLS), which measures visual stability (how much the page jumps around as it loads); and Interaction to Next Paint (INP), which measures how quickly the page responds to user interactions.",
      "Google considers a page to have 'good' Core Web Vitals when LCP is under 2.5 seconds, CLS is below 0.1, and INP is under 200 milliseconds. Pages falling in the 'needs improvement' or 'poor' ranges may see ranking disadvantages, particularly in competitive SERPs where content quality is otherwise similar.",
      "Beyond rankings, Core Web Vitals directly correlate with business metrics. Amazon famously found that every 100ms of added latency cost 1% in sales. For SaaS products and e-commerce sites, even modest improvements in page speed measurably improve conversion rates, session depth, and revenue per visitor.",
    ],
    whyItMatters:
      "Improving Core Web Vitals can directly improve both search rankings and user experience — particularly important for e-commerce and SaaS sites where page speed directly impacts revenue.",
    relatedTerms: [
      { term: "Technical SEO", slug: "technical-seo" },
      { term: "Structured Data / Schema Markup", slug: "structured-data" },
      { term: "Generative Engine Optimisation (GEO)", slug: "geo" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
    relatedPosts: [
      { title: "Technical SEO Audit Checklist (2024)", href: "/resources/technical-seo-audit-checklist" },
    ],
  },

  "structured-data": {
    term: "Structured Data / Schema Markup",
    slug: "structured-data",
    category: "SEO & GEO",
    shortDefinition:
      "Machine-readable code added to web pages that helps search engines and AI systems understand page content and context.",
    definition: [
      "Structured data is code — typically in JSON-LD format — that you add to web pages to explicitly describe the content in machine-readable terms. Instead of leaving a search engine or AI system to infer what a page is about, structured data tells them directly: 'this is a product with a price of £X' or 'this is an FAQ with these specific questions and answers.'",
      "Schema.org is the shared vocabulary used for structured data. Common schema types include Article, FAQPage, Product, Review, Person, Organization, SoftwareApplication, and BreadcrumbList. Each type has defined properties that describe different aspects of the content.",
      "For GEO (Generative Engine Optimisation), structured data is particularly powerful. When AI systems like ChatGPT or Perplexity crawl and index web content, JSON-LD structured data provides directly extractable facts about your business — name, location, services, reviews — that are easy to cite accurately in generated answers.",
    ],
    whyItMatters:
      "Structured data is one of the most technically reliable ways to signal content relevance to both Google and AI search systems. It's a low-effort, high-impact technical SEO improvement for most sites.",
    relatedTerms: [
      { term: "Generative Engine Optimisation (GEO)", slug: "geo" },
      { term: "Core Web Vitals", slug: "core-web-vitals" },
      { term: "Technical SEO", slug: "technical-seo" },
      { term: "llms.txt", slug: "llms-txt" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
    relatedPosts: [
      { title: "Technical SEO Audit Checklist (2024)", href: "/resources/technical-seo-audit-checklist" },
    ],
  },

  "programmatic-seo": {
    term: "Programmatic SEO",
    slug: "programmatic-seo",
    category: "SEO & GEO",
    shortDefinition:
      "A strategy where large numbers of SEO-optimised pages are automatically generated from structured data — enabling search visibility at scale without writing each page manually.",
    definition: [
      "Programmatic SEO involves using a structured data source (a database, spreadsheet, or API) combined with page templates to automatically generate hundreds or thousands of unique, optimised pages. Rather than writing each page individually, you define the template once and the data populates it — creating pages like 'AI Consultant in [City]', '[Tool A] vs [Tool B]', or 'Best [Category] Software for [Industry]'.",
      "The key requirement that separates effective programmatic SEO from 'thin content' (which Google penalises) is genuine uniqueness and value per page. Simply swapping a city name in a template isn't enough — each page needs meaningful, accurate content that serves the user's intent for that specific query. This often involves enriching the data source with real information, statistics, or localised context.",
      "Programmatic SEO is particularly powerful for SaaS companies, marketplaces, and service businesses with a clear taxonomy — industries served, locations covered, tool comparisons, or use cases. A well-executed programmatic SEO strategy can generate significant organic traffic within months, without the editorial overhead of producing each page by hand.",
    ],
    whyItMatters:
      "For businesses with a broad keyword opportunity but limited content resources, programmatic SEO offers a route to search visibility at scale. When done well, it compounds over time — each new data point or location added to the source generates another indexed page.",
    relatedTerms: [
      { term: "Technical SEO", slug: "technical-seo" },
      { term: "Structured Data / Schema Markup", slug: "structured-data" },
      { term: "Semantic SEO", slug: "semantic-seo" },
      { term: "Search Intent", slug: "search-intent" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
    relatedPosts: [
      { title: "Technical SEO Audit Checklist (2024)", href: "/resources/technical-seo-audit-checklist" },
    ],
  },

  "e-e-a-t": {
    term: "E-E-A-T",
    slug: "e-e-a-t",
    category: "SEO & GEO",
    shortDefinition:
      "Google's quality evaluation framework — Experience, Expertise, Authoritativeness, and Trustworthiness — used to assess the credibility of content and its creators.",
    definition: [
      "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. It's the framework Google's quality raters use to evaluate whether content is credible, accurate, and genuinely helpful. The 'Experience' dimension was added in 2022, recognising that first-hand experience with a topic is a distinct form of credibility separate from formal expertise.",
      "Google assesses E-E-A-T through a combination of signals: author credentials and bylines, the reputation of the publishing site, external backlinks from authoritative sources, reviews and mentions across the web, and the consistency between what a site claims about itself and what third parties say. For professional service businesses, case studies, client testimonials, and professional credentials are all E-E-A-T signals.",
      "For GEO (Generative Engine Optimisation), E-E-A-T is equally important. AI systems like ChatGPT and Perplexity are more likely to cite sources that demonstrate clear expertise and authority on a topic. Building E-E-A-T through detailed service pages, published work, and verifiable credentials helps both traditional SEO rankings and AI citation rates.",
    ],
    whyItMatters:
      "For professional services, consultants, and B2B businesses, E-E-A-T signals directly influence whether Google (and AI systems) treat your content as a credible source worth surfacing. It's increasingly difficult to rank well in competitive niches without demonstrable expertise.",
    relatedTerms: [
      { term: "Generative Engine Optimisation (GEO)", slug: "geo" },
      { term: "Technical SEO", slug: "technical-seo" },
      { term: "Structured Data / Schema Markup", slug: "structured-data" },
      { term: "Semantic SEO", slug: "semantic-seo" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
    relatedPosts: [
      { title: "GEO Optimisation: How to Appear in AI-Generated Answers", href: "/resources/geo-optimisation-guide" },
    ],
  },

  "llms-txt": {
    term: "llms.txt",
    slug: "llms-txt",
    category: "SEO & GEO",
    shortDefinition:
      "A plain-text file placed at a website's root that provides structured, AI-readable information about the site — designed specifically for large language models and AI crawlers.",
    definition: [
      "llms.txt is a proposed web standard (defined at llmstxt.org) analogous to robots.txt, but designed for AI language models rather than traditional search crawlers. Where robots.txt tells bots which pages to crawl or avoid, llms.txt provides a structured, plain-text summary of what a site is, who created it, what it offers, and how AI systems should interpret and cite it.",
      "A well-formed llms.txt file typically includes: the entity name and description, the person or company behind the site, a list of key pages with their purposes, the services or products offered, and guidance for AI systems on how to attribute information from the site. It's written in Markdown-like plain text, optimised for tokenisation and direct inclusion in an LLM's context window.",
      "While llms.txt is not yet an official standard adopted by major AI labs, it represents a proactive GEO (Generative Engine Optimisation) signal. Sites that publish this file are more machine-legible — making it easier for AI systems to build an accurate, complete picture of the entity when generating answers about the business or its services.",
    ],
    whyItMatters:
      "As AI-driven search becomes a primary discovery channel, giving AI systems a clear, accurate summary of your business is the equivalent of a well-structured About page for the machine-readable web. It's a low-effort, high-signal GEO investment.",
    relatedTerms: [
      { term: "Generative Engine Optimisation (GEO)", slug: "geo" },
      { term: "Structured Data / Schema Markup", slug: "structured-data" },
      { term: "AI Overviews", slug: "ai-overviews" },
      { term: "Technical SEO", slug: "technical-seo" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
    relatedPosts: [
      { title: "GEO Optimisation: How to Appear in AI-Generated Answers", href: "/resources/geo-optimisation-guide" },
    ],
  },

  "ai-overviews": {
    term: "AI Overviews",
    slug: "ai-overviews",
    category: "SEO & GEO",
    shortDefinition:
      "Google's AI-generated answer summaries that appear above organic search results, synthesising information from multiple sources to directly respond to a query.",
    definition: [
      "AI Overviews (formerly called Search Generative Experience or SGE) are AI-generated summaries that Google displays at the top of search results for eligible queries. Instead of showing a list of links, Google synthesises information from multiple web sources into a direct answer, with citations linking to the original pages. They appear most commonly for informational queries, how-to questions, and comparisons.",
      "Being cited in an AI Overview is valuable — your content is surfaced to users who may not click through to the organic results at all. Google selects sources based on their relevance, authority, and structured accessibility. Pages with strong E-E-A-T signals, clear structured data, and well-formatted content that directly answers the query are more likely to be cited.",
      "AI Overviews have introduced complexity to SEO strategy. They can reduce click-through rates for queries where the generated summary fully answers the user's question. However, for more complex queries — professional services, technical explanations, nuanced comparisons — users still click through to learn more. The implication is that thin, generic content loses value, while deep, authoritative content gains it.",
    ],
    whyItMatters:
      "AI Overviews are changing which pages get organic visibility. Understanding how they work helps you optimise content not just for clicks, but for citation — ensuring your business appears as a credible source in the answers Google generates.",
    relatedTerms: [
      { term: "Generative Engine Optimisation (GEO)", slug: "geo" },
      { term: "E-E-A-T", slug: "e-e-a-t" },
      { term: "Structured Data / Schema Markup", slug: "structured-data" },
      { term: "llms.txt", slug: "llms-txt" },
      { term: "Search Intent", slug: "search-intent" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
    relatedPosts: [
      { title: "GEO Optimisation: How to Appear in AI-Generated Answers", href: "/resources/geo-optimisation-guide" },
    ],
  },

  "semantic-seo": {
    term: "Semantic SEO",
    slug: "semantic-seo",
    category: "SEO & GEO",
    shortDefinition:
      "An approach to SEO focused on topic relevance and meaning rather than exact keyword matching — aligning content with search intent and the relationships between concepts.",
    definition: [
      "Semantic SEO moves beyond placing target keywords in specific positions on a page. Instead, it focuses on covering a topic comprehensively, establishing clear topical authority, and building content that demonstrates a deep understanding of the subject and its related concepts. Google's understanding of language has advanced significantly — it evaluates meaning, not just keywords.",
      "A practical implementation of semantic SEO is the topic cluster model: a comprehensive 'pillar page' covers a broad topic in depth, while a series of related 'cluster pages' cover specific subtopics and link back to the pillar. This architecture signals topical authority to search engines and helps users navigate a subject systematically.",
      "Semantic SEO is closely connected to GEO (Generative Engine Optimisation). AI systems that generate answers draw on semantically rich, well-structured content that covers a topic thoroughly. A site that has built topical authority through semantic SEO — clear definitions, related concepts, consistent terminology — is also well-positioned to be cited in AI-generated answers.",
    ],
    whyItMatters:
      "As search engines and AI systems get better at understanding meaning, keyword-stuffed thin content loses value. Semantic SEO is the approach that builds durable, compounding organic visibility rather than chasing individual keyword positions.",
    relatedTerms: [
      { term: "Generative Engine Optimisation (GEO)", slug: "geo" },
      { term: "E-E-A-T", slug: "e-e-a-t" },
      { term: "Technical SEO", slug: "technical-seo" },
      { term: "Search Intent", slug: "search-intent" },
      { term: "Programmatic SEO", slug: "programmatic-seo" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
    relatedPosts: [
      { title: "GEO Optimisation: How to Appear in AI-Generated Answers", href: "/resources/geo-optimisation-guide" },
    ],
  },

  "technical-seo": {
    term: "Technical SEO",
    slug: "technical-seo",
    category: "SEO & GEO",
    shortDefinition:
      "The practice of optimising a website's technical infrastructure — crawlability, indexability, page speed, structured data, and site architecture — so search engines can find and rank it effectively.",
    definition: [
      "Technical SEO is the foundation of search visibility. Before content quality or backlinks matter, search engines need to be able to crawl your site, understand its structure, and index it correctly. Technical SEO covers everything in that crawl-to-index pipeline: ensuring robots.txt and sitemaps are configured correctly, pages are indexable, canonical tags prevent duplicate content issues, HTTPS is implemented, and internal linking distributes authority across the site.",
      "The major areas of technical SEO include: site speed and Core Web Vitals (Google uses real-world performance data as a ranking signal), structured data markup (JSON-LD that helps search engines and AI systems understand page content), mobile-friendliness (Google indexes the mobile version of sites first), crawl efficiency (managing how Googlebot spends its crawl budget on large sites), and URL architecture (clean, logical URL structures that help both users and crawlers navigate).",
      "Technical SEO intersects heavily with GEO (Generative Engine Optimisation). A technically sound site — fast, well-structured, with clean markup and comprehensive structured data — is also more machine-readable and therefore more likely to be cited accurately in AI-generated answers. The investment in technical SEO pays dividends in both traditional search rankings and AI visibility.",
    ],
    whyItMatters:
      "Technical SEO is the unglamorous foundation that makes everything else work. Great content on a technically broken site ranks poorly. Fixing technical issues is often the highest-ROI SEO activity, especially for sites that haven't been audited in years.",
    relatedTerms: [
      { term: "Core Web Vitals", slug: "core-web-vitals" },
      { term: "Structured Data / Schema Markup", slug: "structured-data" },
      { term: "Generative Engine Optimisation (GEO)", slug: "geo" },
      { term: "Programmatic SEO", slug: "programmatic-seo" },
      { term: "Semantic SEO", slug: "semantic-seo" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
    relatedPosts: [
      { title: "Technical SEO Audit Checklist (2024)", href: "/resources/technical-seo-audit-checklist" },
    ],
  },

  "search-intent": {
    term: "Search Intent",
    slug: "search-intent",
    category: "SEO & GEO",
    shortDefinition:
      "The underlying reason a user performs a search query — whether they want to learn something, find a website, research a purchase, or complete a transaction.",
    definition: [
      "Search intent (also called 'user intent' or 'query intent') describes what a user is actually trying to accomplish when they type a query into a search engine. There are four primary intent categories: informational (seeking knowledge — 'what is RAG'), navigational (trying to reach a specific site — 'Aryan Rawther website'), commercial (researching before a decision — 'best AI consultant India'), and transactional (ready to act — 'hire AI consultant Bengaluru').",
      "Google's algorithm is heavily optimised to match content to intent. If you write a commercial 'compare and buy' page targeting a query where users want a blog post explanation, it will underperform — not because the content is bad, but because the format doesn't match what Google knows users want for that query. Analysing the current top-ranking pages for a keyword reveals the intent Google has already verified works.",
      "For GEO, search intent has a direct parallel: AI systems also interpret the intent behind a query and select sources that best address it. Informational intent queries are where AI-generated answers are most common — meaning informational content well-aligned to its topic and intent is most likely to be cited in AI Overviews and ChatGPT responses.",
    ],
    whyItMatters:
      "Creating content that doesn't match search intent is one of the most common reasons good content fails to rank. Understanding intent before writing ensures every piece of content is built for the right audience at the right stage of their decision.",
    relatedTerms: [
      { term: "Semantic SEO", slug: "semantic-seo" },
      { term: "Technical SEO", slug: "technical-seo" },
      { term: "Programmatic SEO", slug: "programmatic-seo" },
      { term: "AI Overviews", slug: "ai-overviews" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
  },

  // ─── AI VOICE ──────────────────────────────────────────────────────────────

  "ivr": {
    term: "IVR (Interactive Voice Response)",
    slug: "ivr",
    category: "AI Voice",
    shortDefinition:
      "A telephony system that interacts with callers through voice prompts and key presses — increasingly replaced by AI voice agents.",
    definition: [
      "Interactive Voice Response (IVR) is a telephony technology that allows callers to interact with a computerised menu using their voice or keypad. Traditional IVR systems play pre-recorded prompts and route calls based on fixed decision trees — 'Press 1 for sales, Press 2 for support.'",
      "Modern AI-powered IVR replaces these rigid menus with conversational AI that can understand natural speech, ask clarifying questions, retrieve information from databases, and resolve queries without transferring to a human agent.",
      "The ROI case for upgrading from traditional IVR to AI voice agents is well-established: AI systems can handle significantly higher call deflection rates, resolve queries that would previously require a live agent, and operate 24/7 without staffing costs. For high-volume call centres, even a 20% improvement in deflection rate translates to meaningful cost savings.",
    ],
    whyItMatters:
      "If your business handles significant inbound call volume, the gap between traditional IVR and AI voice agents represents a real cost and customer experience opportunity.",
    relatedTerms: [
      { term: "AI Agent", slug: "ai-agent" },
      { term: "Speech-to-Text (STT)", slug: "speech-to-text" },
      { term: "Text-to-Speech (TTS)", slug: "text-to-speech" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
    relatedPosts: [
      { title: "AI Voice Agents: What They Are and When to Use Them", href: "/resources/ai-voice-agents-explainer" },
    ],
  },

  "speech-to-text": {
    term: "Speech-to-Text (STT)",
    slug: "speech-to-text",
    category: "AI Voice",
    shortDefinition:
      "Technology that converts spoken audio into written text in real time — the listening layer of AI voice agents, powered by models like Deepgram and OpenAI Whisper.",
    definition: [
      "Speech-to-Text (STT), also called Automatic Speech Recognition (ASR), is the technology that converts audio input into a text transcript. In AI voice agent pipelines, STT is the first stage: the caller speaks, the audio is streamed to the STT model, and the transcript is passed to the language model for understanding and response generation.",
      "The key providers used in production voice AI include Deepgram (optimised for streaming, low-latency transcription — ideal for real-time voice agents), OpenAI Whisper (highly accurate, open-source, but better suited to batch processing than live streaming), and AssemblyAI (offers additional features like speaker diarisation and topic detection). Provider choice significantly affects end-to-end call latency.",
      "Streaming transcription is critical for low-latency voice agents. Rather than waiting for the caller to finish speaking before transcribing, streaming STT returns partial transcripts as words are spoken — allowing the system to begin processing earlier and reducing the perceived delay in the agent's response. This is one of the key architectural decisions in building a natural-feeling voice AI system.",
    ],
    whyItMatters:
      "The quality and latency of STT directly determines how natural an AI voice agent feels to callers. Poor transcription accuracy leads to misunderstood queries; high latency leads to awkward pauses. Getting STT right is foundational to the entire voice AI system.",
    relatedTerms: [
      { term: "Text-to-Speech (TTS)", slug: "text-to-speech" },
      { term: "IVR (Interactive Voice Response)", slug: "ivr" },
      { term: "AI Agent", slug: "ai-agent" },
      { term: "Agentic AI", slug: "agentic-ai" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
    relatedPosts: [
      { title: "AI Voice Agents: What They Are and When to Use Them", href: "/resources/ai-voice-agents-explainer" },
    ],
  },

  "text-to-speech": {
    term: "Text-to-Speech (TTS)",
    slug: "text-to-speech",
    category: "AI Voice",
    shortDefinition:
      "Technology that converts written text into natural-sounding spoken audio — the speaking layer of AI voice agents, powered by models like ElevenLabs and OpenAI TTS.",
    definition: [
      "Text-to-Speech (TTS) is the final stage of an AI voice agent pipeline: after the language model generates a text response, TTS converts that text into audio that is streamed back to the caller. Modern neural TTS models produce speech that is remarkably natural — with appropriate pacing, intonation, and even emotional nuance — far beyond the robotic synthesisers of legacy IVR systems.",
      "Key TTS providers include ElevenLabs (best-in-class naturalness, supports voice cloning and custom voices, higher cost), OpenAI TTS (good quality, cost-effective, integrated with the OpenAI stack), Google Cloud TTS (reliable, extensive language support), and PlayHT (strong voice cloning capabilities). Voice selection significantly affects the perception of a brand's AI voice agent.",
      "For real-time voice agents, streaming TTS is essential. The system should begin speaking the first sentence of its response while the rest is still being generated — rather than waiting for the full response before starting audio output. This 'first-word latency' optimisation is often the most impactful change for making a voice agent feel natural in conversation.",
    ],
    whyItMatters:
      "The voice is the brand in a voice AI system. Poor TTS makes agents sound robotic and erodes caller trust, while natural, well-chosen TTS creates a professional experience that reflects well on the business.",
    relatedTerms: [
      { term: "Speech-to-Text (STT)", slug: "speech-to-text" },
      { term: "IVR (Interactive Voice Response)", slug: "ivr" },
      { term: "AI Agent", slug: "ai-agent" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
    relatedPosts: [
      { title: "AI Voice Agents: What They Are and When to Use Them", href: "/resources/ai-voice-agents-explainer" },
    ],
  },

  // ─── WEB & SAAS ────────────────────────────────────────────────────────────

  "multi-tenant-saas": {
    term: "Multi-tenant SaaS",
    slug: "multi-tenant-saas",
    category: "Web & SaaS",
    shortDefinition:
      "A SaaS architecture where a single software instance serves multiple customers, with each customer's data kept isolated from others.",
    definition: [
      "Multi-tenancy is an architecture pattern where a single instance of an application serves multiple customers (tenants). Each tenant's data is logically isolated — they can't see or access other tenants' data — but they share the same underlying infrastructure.",
      "This is the standard model for SaaS products. The alternative is single-tenancy, where each customer gets their own dedicated infrastructure. Single-tenancy is more expensive to operate but may be required for regulated industries or enterprise customers with strict data isolation requirements.",
      "There are three main approaches to implementing multi-tenancy: database-per-tenant (highest isolation, highest cost), schema-per-tenant (good balance of isolation and efficiency for moderate scale), and row-level isolation (all tenants in shared tables, distinguished by a tenant_id column — most cost-efficient, requires rigorous query-level filtering to prevent data leaks).",
    ],
    whyItMatters:
      "Choosing the right multi-tenancy model at the start of a SaaS build is an architectural decision that's expensive to change later. Getting it right early saves significant re-architecture costs.",
    relatedTerms: [
      { term: "API (Application Programming Interface)", slug: "api" },
      { term: "MVP (Minimum Viable Product)", slug: "mvp" },
      { term: "Webhook", slug: "webhook" },
    ],
    relatedService: { name: "SaaS Product Development", href: "/services/saas-development" },
    relatedPosts: [
      { title: "Next.js SaaS Architecture: A Practical Starting Point", href: "/resources/nextjs-saas-architecture" },
    ],
  },

  "api": {
    term: "API (Application Programming Interface)",
    slug: "api",
    category: "Web & SaaS",
    shortDefinition:
      "A defined contract that allows software systems to communicate with each other — enabling one application to request data or trigger actions in another.",
    definition: [
      "An API (Application Programming Interface) is a defined contract that allows one software system to request data or trigger actions in another. APIs enable software components to communicate without needing to know how each other works internally — only what requests they accept and what responses they return.",
      "REST APIs (using HTTP) are the most common type in web development. When your browser loads a product page and the price updates in real time, it's likely using an API call to fetch the latest data. When an AI agent searches the web or reads a file, it's using APIs to interact with those systems.",
      "API keys are credentials that authenticate requests — they should be kept secret (never committed to public code repositories) and rotated regularly. Rate limits restrict how many requests you can make in a given time period, which matters when designing AI workflows that might need to make many calls to external services.",
    ],
    whyItMatters:
      "APIs are the connective tissue of modern software. Understanding them helps business leaders evaluate integration possibilities and avoid vendor lock-in when building or buying software.",
    relatedTerms: [
      { term: "AI Agent", slug: "ai-agent" },
      { term: "Webhook", slug: "webhook" },
      { term: "Function Calling", slug: "function-calling" },
      { term: "Multi-tenant SaaS", slug: "multi-tenant-saas" },
    ],
    relatedService: { name: "Web Development", href: "/services/web-development" },
  },

  "mvp": {
    term: "MVP (Minimum Viable Product)",
    slug: "mvp",
    category: "Web & SaaS",
    shortDefinition:
      "The simplest version of a product that delivers genuine value to early users — built specifically to validate core assumptions before investing in full development.",
    definition: [
      "The MVP concept, popularised by Eric Ries in The Lean Startup, is a product development philosophy: rather than building a complete product based on assumptions about what users want, you build the smallest thing that can test your most critical hypothesis. If the hypothesis is wrong, you've learned quickly and cheaply. If it's right, you build on a validated foundation.",
      "A common misconception is that MVP means buggy or incomplete. It doesn't. It means focused. A well-scoped MVP has one core workflow that works reliably, serves a specific user type, and demonstrates the core value proposition. Everything that isn't necessary to test the central hypothesis is cut — not because quality doesn't matter, but because building the wrong thing perfectly is worse than building the right thing simply.",
      "For SaaS products, scoping an MVP well is one of the most valuable things a technical consultant can do. The question isn't 'what should we eventually build?' — it's 'what is the one workflow that, if it works and users pay for it, validates that this product is worth building fully?' That answer shapes everything from the database schema to the onboarding flow.",
    ],
    whyItMatters:
      "Most failed software products didn't fail because they were built poorly — they failed because the wrong thing was built. An MVP-first approach doesn't just save development cost; it reduces the risk of building something no one wants.",
    relatedTerms: [
      { term: "Multi-tenant SaaS", slug: "multi-tenant-saas" },
      { term: "Technical Co-founder", slug: "technical-co-founder" },
      { term: "API (Application Programming Interface)", slug: "api" },
    ],
    relatedService: { name: "SaaS Product Development", href: "/services/saas-development" },
    relatedPosts: [
      { title: "Next.js SaaS Architecture: A Practical Starting Point", href: "/resources/nextjs-saas-architecture" },
    ],
  },

  "webhook": {
    term: "Webhook",
    slug: "webhook",
    category: "Web & SaaS",
    shortDefinition:
      "An automated HTTP notification sent from one application to another when a specific event occurs — the 'push' alternative to polling an API for updates.",
    definition: [
      "A webhook is a mechanism where one system automatically notifies another when something happens. Rather than your application constantly asking a third-party service 'has anything changed?' (polling), the third-party service proactively sends your application an HTTP request the moment an event occurs. Webhooks are often described as 'reverse APIs' for this reason.",
      "Common webhook use cases: a payment processor notifying your app when a payment is confirmed, a form tool sending lead data to your CRM the moment someone submits a form, a CI/CD system triggering a deployment when code is pushed to a repository, or an AI pipeline receiving real-time data from an external system to trigger an automated workflow.",
      "Webhooks require careful security implementation. The receiving endpoint should validate a cryptographic signature (provided by the sender) to confirm the request is genuine and not a spoofed request from a malicious actor. They should also be idempotent — designed to handle the same event being delivered more than once without causing duplicate actions.",
    ],
    whyItMatters:
      "Webhooks are how modern business software talks to itself in real time. Understanding them is essential when evaluating software integrations, building automation workflows, or designing systems that need to react to events as they happen rather than on a schedule.",
    relatedTerms: [
      { term: "API (Application Programming Interface)", slug: "api" },
      { term: "Function Calling", slug: "function-calling" },
      { term: "AI Agent", slug: "ai-agent" },
    ],
    relatedService: { name: "Web Development", href: "/services/web-development" },
  },

  "headless-architecture": {
    term: "Headless Architecture",
    slug: "headless-architecture",
    category: "Web & SaaS",
    shortDefinition:
      "A design pattern that decouples the frontend (presentation layer) from the backend (content, commerce, or data layer) — allowing each to be built, deployed, and scaled independently.",
    definition: [
      "A headless architecture separates what users see (the 'head' — the frontend interface) from where content and data lives (the backend systems). The two communicate exclusively through APIs. This is the opposite of a monolithic system like a traditional WordPress site, where the template, content management, and serving layer are tightly coupled.",
      "Common headless setups pair a Next.js or React frontend with a headless CMS (like Contentful or Sanity) for content, a headless commerce platform (like Shopify or Medusa) for e-commerce, and a REST or GraphQL API for any custom business logic. The frontend team can build and deploy independently of the backend team, and the same backend can serve multiple frontends — web, mobile app, and kiosk.",
      "The trade-off is complexity. Headless architectures require more engineering discipline to maintain: API contracts need versioning, deployment pipelines need coordination, and error handling spans multiple systems. For large organisations with multiple teams and channels, this complexity is worth the flexibility. For smaller teams building a single-channel product, a coupled approach may be faster to ship.",
    ],
    whyItMatters:
      "Headless architecture unlocks performance, flexibility, and the ability to reuse content across platforms. It's the right choice for serious digital products but requires a clear technical strategy to avoid unnecessary complexity.",
    relatedTerms: [
      { term: "API (Application Programming Interface)", slug: "api" },
      { term: "Server-Side Rendering (SSR / SSG)", slug: "server-side-rendering" },
      { term: "Multi-tenant SaaS", slug: "multi-tenant-saas" },
    ],
    relatedService: { name: "Web Development", href: "/services/web-development" },
    relatedPosts: [
      { title: "Next.js SaaS Architecture: A Practical Starting Point", href: "/resources/nextjs-saas-architecture" },
    ],
  },

  "server-side-rendering": {
    term: "Server-Side Rendering (SSR / SSG)",
    slug: "server-side-rendering",
    category: "Web & SaaS",
    shortDefinition:
      "Rendering strategies that generate HTML on the server rather than in the browser — improving page load speed, SEO, and initial content visibility.",
    definition: [
      "Modern web frameworks like Next.js offer three rendering strategies. Client-Side Rendering (CSR) sends a minimal HTML shell to the browser and builds the page using JavaScript after it loads — flexible but slow for initial load and invisible to search crawlers until JavaScript executes. Server-Side Rendering (SSR) generates the full HTML on the server for each incoming request — the browser receives ready-to-display content immediately. Static Site Generation (SSG) generates HTML at build time and serves cached static files — the fastest approach, ideal for content that doesn't change per user.",
      "The choice of rendering strategy has direct SEO implications. Google can render JavaScript, but SSR and SSG pages are more reliably indexed and score better on Core Web Vitals because the browser receives usable content immediately rather than waiting for JavaScript execution. For most content pages, SSG is optimal; for pages with user-specific data, SSR or a hybrid approach is needed.",
      "Next.js makes this decision per-page rather than per-application. A marketing landing page can be SSG (fast, cacheable), a dashboard can use SSR or client-side rendering (user-specific), and a product listing can use Incremental Static Regeneration (ISR — SSG that revalidates periodically). This granularity is one of the primary reasons Next.js has become the default framework for serious web products.",
    ],
    whyItMatters:
      "Rendering strategy affects page speed, SEO, and infrastructure cost. Choosing the wrong strategy — especially defaulting to client-side rendering for content that should be static — is one of the most common and impactful performance mistakes in web development.",
    relatedTerms: [
      { term: "Core Web Vitals", slug: "core-web-vitals" },
      { term: "Headless Architecture", slug: "headless-architecture" },
      { term: "Technical SEO", slug: "technical-seo" },
    ],
    relatedService: { name: "Web Development", href: "/services/web-development" },
    relatedPosts: [
      { title: "Next.js SaaS Architecture: A Practical Starting Point", href: "/resources/nextjs-saas-architecture" },
    ],
  },

  "technical-co-founder": {
    term: "Technical Co-founder",
    slug: "technical-co-founder",
    category: "Web & SaaS",
    shortDefinition:
      "The founder responsible for technology strategy, product architecture, and engineering decisions in a startup — the person who owns how the product gets built.",
    definition: [
      "A technical co-founder is the founding team member who takes ownership of all technology decisions: what stack to build on, how the architecture scales, what to build internally versus buy, how to hire and manage engineers, and how to translate business requirements into technical execution. Beyond writing code, the role involves setting the technical direction that the entire business will depend on for years.",
      "Startups without a technical co-founder often outsource early development to agencies or freelancers — which can work, but creates a critical dependency: no one internal understands the codebase, can evaluate technical decisions, or can interview engineers effectively. When the product needs to scale or pivot, the lack of internal technical ownership becomes a significant liability.",
      "For non-technical founders who aren't ready to give equity for a full-time technical co-founder, a fractional technical consultant can fill much of the same role: scoping the MVP, choosing the architecture, managing early-stage development, and building the technical function until the business is ready to hire in-house. This is particularly valuable in the pre-seed to seed stage when technical decisions are most consequential.",
    ],
    whyItMatters:
      "The technical decisions made in the first 6–12 months of a startup are disproportionately hard to undo. Having someone accountable for those decisions — whether a full-time co-founder or a fractional technical lead — significantly improves the odds of building something that scales.",
    relatedTerms: [
      { term: "MVP (Minimum Viable Product)", slug: "mvp" },
      { term: "Multi-tenant SaaS", slug: "multi-tenant-saas" },
      { term: "API (Application Programming Interface)", slug: "api" },
    ],
    relatedService: { name: "SaaS Product Development", href: "/services/saas-development" },
  },

  // ─── NEW AI & AUTOMATION ───────────────────────────────────────────────────

  "chain-of-thought": {
    term: "Chain-of-Thought Prompting",
    slug: "chain-of-thought",
    category: "AI & Automation",
    shortDefinition: "A prompting technique where an LLM is guided to show its reasoning step-by-step before arriving at a final answer — dramatically improving accuracy on complex tasks.",
    definition: [
      "Chain-of-thought (CoT) prompting emerged from Google research showing that simply asking an LLM to 'think step by step' before answering significantly improves performance on reasoning, maths, and multi-step logic tasks. The model's intermediate steps act as working memory — reducing the chance of errors that come from jumping straight to a conclusion.",
      "In practice, CoT can be triggered with a simple suffix like 'Let's think through this step by step' or by providing a few worked examples that demonstrate the reasoning pattern you want. The model then produces a chain of intermediate steps before its final answer.",
      "CoT is especially valuable in production AI systems handling complex decisions — claims adjudication, contract analysis, technical troubleshooting — where getting the reasoning wrong is costly and the reasoning itself is worth auditing.",
    ],
    whyItMatters: "Understanding CoT helps you design more reliable AI applications. When stakes are high, a system that shows its reasoning is easier to validate, debug, and trust than one that produces answers without justification.",
    relatedTerms: [
      { term: "Prompt Engineering", slug: "prompt-engineering" },
      { term: "Large Language Model (LLM)", slug: "large-language-model" },
      { term: "Zero-Shot Prompting", slug: "zero-shot-prompting" },
      { term: "Agentic AI", slug: "agentic-ai" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
  },

  "embeddings": {
    term: "Embeddings",
    slug: "embeddings",
    category: "AI & Automation",
    shortDefinition: "Numerical representations of text or data that capture semantic meaning — the foundational technology behind semantic search, RAG, and AI similarity matching.",
    definition: [
      "An embedding is a list of numbers (a vector) that represents the meaning of a piece of text in a high-dimensional mathematical space. Text with similar meaning produces vectors that are close together — 'buy running shoes' and 'purchase athletic footwear' will have nearly identical embedding vectors, even though they share no words.",
      "Embeddings are generated by encoding models (OpenAI's text-embedding-3, Cohere's Embed, or open-source alternatives). Once generated, they're stored in a vector database where similarity searches can find the closest matches to any new query vector in milliseconds.",
      "In production AI applications, embeddings power three key capabilities: semantic search (find meaning, not keywords), RAG (retrieve relevant documents for an LLM to reason over), and recommendation systems (find items similar to what a user liked). Almost every serious AI application involves embeddings somewhere.",
    ],
    whyItMatters: "Embeddings are what make AI systems understand rather than just pattern-match. Without embeddings, AI search is still keyword search. With them, your system can find the right answer even when the user describes it differently than how you wrote it.",
    relatedTerms: [
      { term: "Retrieval-Augmented Generation (RAG)", slug: "rag" },
      { term: "Vector Database", slug: "vector-database" },
      { term: "Semantic SEO", slug: "semantic-seo" },
      { term: "Large Language Model (LLM)", slug: "large-language-model" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
    relatedPosts: [
      { title: "The Business Leader's Guide to AI Automation", href: "/resources/ai-automation-guide-for-business" },
    ],
  },

  "langgraph": {
    term: "LangGraph",
    slug: "langgraph",
    category: "AI & Automation",
    shortDefinition: "A Python framework for building stateful, multi-step AI agent workflows as directed graphs — enabling complex orchestration of LLM calls, tools, and human checkpoints.",
    definition: [
      "LangGraph extends LangChain to model AI workflows as directed graphs where nodes are functions (LLM calls, tool executions, logic checks) and edges define how control flows between them. Unlike linear chains, graphs can loop, branch, and maintain persistent state across steps.",
      "The key advantage over simple chain-based approaches is statefulness and cycles. An agent can loop to self-correct when its output doesn't pass validation, pause to await human review before taking an irreversible action, or branch into parallel sub-agents based on intermediate results — none of which is possible in a linear pipeline.",
      "LangGraph is used in production for research agents, autonomous email agents, document processing pipelines, and any workflow where the execution path isn't fully determined in advance. It ships with built-in support for checkpointing (resuming interrupted workflows) and LangSmith integration for observability.",
    ],
    whyItMatters: "LangGraph is one of the most production-ready frameworks for reliable AI agent workflows. If you're evaluating AI developers, LangGraph experience signals they're building agents that handle real-world complexity — not just demos.",
    relatedTerms: [
      { term: "Agentic AI", slug: "agentic-ai" },
      { term: "AI Orchestration", slug: "ai-orchestration" },
      { term: "AI Agent", slug: "ai-agent" },
      { term: "Function Calling", slug: "function-calling" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
  },

  "model-context-protocol": {
    term: "Model Context Protocol (MCP)",
    slug: "model-context-protocol",
    category: "AI & Automation",
    shortDefinition: "An open standard that defines how AI models connect to external tools, data sources, and services — the 'USB-C port' for AI integrations, developed by Anthropic.",
    definition: [
      "MCP (Model Context Protocol) standardises the interface between AI models and external resources — databases, APIs, file systems, cloud services, and custom internal tools. Before MCP, every integration required bespoke glue code. MCP defines a consistent protocol that any model and any tool can implement once and then connect to everything else.",
      "The architecture is client-server: a host application (like Claude Desktop or a custom AI app) connects to MCP servers via a standard protocol. Each MCP server exposes tools and data in a consistent format — read a database, search files, call an API — and the AI model can invoke any of them without custom integration code per tool.",
      "MCP servers exist for PostgreSQL, SQLite, Google Drive, GitHub, Slack, Brave Search, and dozens of other services. Building on MCP means your AI system can connect to new tools by adding a server, not rewriting your agent.",
    ],
    whyItMatters: "MCP is rapidly becoming the standard for enterprise AI integrations. Companies evaluating AI solutions should ask whether the system supports MCP — it significantly reduces future integration effort and vendor lock-in.",
    relatedTerms: [
      { term: "AI Agent", slug: "ai-agent" },
      { term: "Function Calling", slug: "function-calling" },
      { term: "Agentic AI", slug: "agentic-ai" },
      { term: "API (Application Programming Interface)", slug: "api" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
  },

  "natural-language-processing": {
    term: "Natural Language Processing (NLP)",
    slug: "natural-language-processing",
    category: "AI & Automation",
    shortDefinition: "The branch of AI focused on enabling machines to understand, interpret, and generate human language — the foundational discipline behind LLMs, chatbots, and text analytics.",
    definition: [
      "NLP encompasses a range of language tasks: text classification (is this email spam or legitimate?), named entity recognition (who and what is mentioned?), sentiment analysis (is this review positive?), translation, summarisation, and question answering. These tasks are the building blocks of most business AI features.",
      "Modern NLP is dominated by transformer-based models — BERT, GPT, Claude, Gemini — that learn language patterns from enormous training corpora rather than hand-coded linguistic rules. The shift to transformers around 2017 produced step-change improvements in nearly every NLP benchmark.",
      "In practical AI applications, NLP is what allows systems to understand what a user meant (intent), what a document contains (extraction), and what response to generate (generation). The line between 'NLP system' and 'LLM application' has blurred significantly — most modern NLP work is now LLM-based.",
    ],
    whyItMatters: "NLP is the technical foundation beneath most business AI features. Knowing what's possible — and what the realistic limitations are — helps non-technical leaders scope AI projects accurately and avoid both over-investment and under-investment.",
    relatedTerms: [
      { term: "Large Language Model (LLM)", slug: "large-language-model" },
      { term: "Embeddings", slug: "embeddings" },
      { term: "Prompt Engineering", slug: "prompt-engineering" },
      { term: "AI Agent", slug: "ai-agent" },
    ],
    relatedService: { name: "AI Automation Consulting", href: "/services/ai-automation-consulting" },
  },

  "zero-shot-prompting": {
    term: "Zero-Shot Prompting",
    slug: "zero-shot-prompting",
    category: "AI & Automation",
    shortDefinition: "Asking an AI model to perform a task without providing any examples — relying entirely on its pre-trained knowledge, in contrast to few-shot or fine-tuned approaches.",
    definition: [
      "In zero-shot prompting, you describe what you want the model to do without showing it any examples. The model uses its pre-trained knowledge to interpret the instruction and complete the task. For instance: 'Classify this customer email as Urgent, Routine, or Spam. Email: [text]' — no examples needed for a well-trained model.",
      "The alternative approaches: few-shot prompting provides 2–5 worked examples before the task, improving consistency on specialised or unusual formats. Chain-of-thought prompting asks the model to reason step-by-step before answering. Fine-tuning trains the model on a large domain-specific dataset. Each has different cost and quality trade-offs.",
      "Zero-shot works well for common, well-defined tasks where the model's training data is extensive. For highly specialised domains, unusual output formats, or tasks requiring specific brand voice, few-shot or fine-tuned approaches typically produce better results at lower per-call cost.",
    ],
    whyItMatters: "Choosing the right prompting strategy is a core prompt engineering skill that directly affects output quality and system cost. Zero-shot is cheapest and fastest to build — knowing when it's sufficient vs when you need examples or fine-tuning prevents over-engineering.",
    relatedTerms: [
      { term: "Prompt Engineering", slug: "prompt-engineering" },
      { term: "Chain-of-Thought Prompting", slug: "chain-of-thought" },
      { term: "Fine-tuning", slug: "fine-tuning" },
      { term: "Large Language Model (LLM)", slug: "large-language-model" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
  },

  // ─── NEW SEO & GEO ─────────────────────────────────────────────────────────

  "backlink": {
    term: "Backlink",
    slug: "backlink",
    category: "SEO & GEO",
    shortDefinition: "A link from one website to another — one of Google's most important ranking signals, acting as a vote of authority and trustworthiness from one site to another.",
    definition: [
      "When website A links to website B, that's a backlink for website B. Google treats backlinks as endorsements — a signal that another site found your content valuable enough to reference. The more authoritative the linking site, the more weight its endorsement carries.",
      "Not all backlinks are equal. A single link from a major publication or a highly relevant industry site can outweigh hundreds of links from low-quality directories. Factors that determine backlink quality: the linking domain's authority, topical relevance, whether the link is editorial (earned) vs paid/reciprocal, and link placement (in-content vs footer).",
      "Backlink acquisition strategies include creating linkable assets (original research, tools, comprehensive guides), digital PR (getting cited in news coverage), guest contributions to industry publications, and reclaiming unlinked brand mentions.",
    ],
    whyItMatters: "Backlinks remain one of the most reliable predictors of ranking ability. Building a strong, diverse backlink profile is a long-term investment that compounds — authority earned today continues to support rankings years later.",
    relatedTerms: [
      { term: "Domain Authority", slug: "domain-authority" },
      { term: "Technical SEO", slug: "technical-seo" },
      { term: "E-E-A-T", slug: "e-e-a-t" },
      { term: "Internal Linking", slug: "internal-linking" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
  },

  "canonical-tag": {
    term: "Canonical Tag",
    slug: "canonical-tag",
    category: "SEO & GEO",
    shortDefinition: "An HTML tag that tells search engines which URL is the authoritative version of a page — preventing duplicate content issues when the same content is accessible at multiple URLs.",
    definition: [
      "A canonical tag (`<link rel=\"canonical\" href=\"https://example.com/page/\" />`) signals to search engines: consolidate all ranking signals to this URL, not any of the duplicates. Without it, Google has to guess which version to index — and often guesses wrong, splitting your page authority across variants.",
      "Duplicate content arises naturally and constantly: HTTP vs HTTPS, www vs non-www, trailing slashes, UTM parameters creating unique URLs, pagination, printer-friendly versions, and syndicated content. Each variation is technically a unique URL that search engines may index separately.",
      "Best practice is to implement self-referencing canonicals on every page — each page points to itself as the canonical. This makes your intent unambiguous even if a duplicate version is created later, and signals clean architecture to search engines.",
    ],
    whyItMatters: "Incorrect or missing canonicals dilute your SEO equity. When authority is split across duplicate URLs, none of them rank as well as a single canonical would. This is one of the most common and most impactful technical SEO fixes on established sites.",
    relatedTerms: [
      { term: "Technical SEO", slug: "technical-seo" },
      { term: "Crawl Budget", slug: "crawl-budget" },
      { term: "Structured Data / Schema Markup", slug: "structured-data" },
      { term: "Programmatic SEO", slug: "programmatic-seo" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
    relatedPosts: [
      { title: "Technical SEO Audit Checklist", href: "/resources/technical-seo-audit-checklist" },
    ],
  },

  "crawl-budget": {
    term: "Crawl Budget",
    slug: "crawl-budget",
    category: "SEO & GEO",
    shortDefinition: "The number of pages search engine crawlers will visit on your site within a given period — a resource that must be managed carefully on large or programmatic sites.",
    definition: [
      "Googlebot has finite capacity to crawl the web. For large sites — e-commerce stores, news publishers, programmatic SEO sites with tens of thousands of pages — if that capacity is wasted on low-value or duplicate pages, important content may not get crawled or indexed promptly.",
      "Common crawl budget wasters: faceted navigation creating millions of URL combinations, paginated parameter URLs (`?page=2`, `?sort=price`), soft 404 pages that return 200 status codes, redirect chains that waste crawl hops, and orphaned pages with no internal links pointing to them.",
      "For sites under ~10,000 pages, crawl budget is rarely a limiting factor. It becomes critical for large e-commerce sites with filters and sorting, programmatic SEO implementations, and any site experiencing indexing delays where new pages take weeks to appear in search results.",
    ],
    whyItMatters: "If important pages aren't being crawled, they won't be indexed — and they won't rank. Crawl budget optimisation is a core technical SEO discipline for sites operating at scale, and one of the first things to audit when indexing is slow.",
    relatedTerms: [
      { term: "Technical SEO", slug: "technical-seo" },
      { term: "robots.txt", slug: "robots-txt" },
      { term: "Canonical Tag", slug: "canonical-tag" },
      { term: "Programmatic SEO", slug: "programmatic-seo" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
  },

  "domain-authority": {
    term: "Domain Authority",
    slug: "domain-authority",
    category: "SEO & GEO",
    shortDefinition: "A third-party metric (by Moz) that predicts how likely a site is to rank in search results, based primarily on the quality and quantity of its backlink profile.",
    definition: [
      "Domain Authority (DA) is a 1–100 score developed by Moz. New sites start near 0; well-established publications with thousands of quality backlinks score in the 80s–90s. Higher DA correlates with stronger ranking ability, but DA itself doesn't cause rankings — it's a proxy metric, not a ranking signal Google uses directly.",
      "Similar metrics exist from other SEO tools: Ahrefs Domain Rating (DR), Semrush Authority Score, and Majestic Trust Flow. Each uses different methodology and weights different signals, so scores aren't directly comparable across platforms.",
      "DA is most useful as a comparative benchmark — evaluating the quality of a potential backlink source, comparing your authority against competitors, or tracking your site's growth over a 12–24 month period as your backlink profile matures.",
    ],
    whyItMatters: "DA provides a useful shorthand for site authority in SEO conversations and reporting, but it should never be the primary goal. Chasing DA leads to gaming metrics rather than building genuine authority through quality content and real backlinks.",
    relatedTerms: [
      { term: "Backlink", slug: "backlink" },
      { term: "Technical SEO", slug: "technical-seo" },
      { term: "E-E-A-T", slug: "e-e-a-t" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
  },

  "entity-seo": {
    term: "Entity SEO",
    slug: "entity-seo",
    category: "SEO & GEO",
    shortDefinition: "An approach to SEO that optimises for entities — people, organisations, places, concepts — rather than just keywords, aligning with how Google's Knowledge Graph understands the web.",
    definition: [
      "Google doesn't just match keywords — it understands entities and their relationships. 'Apple' the fruit and 'Apple' the technology company are distinct entities. 'Aryan Rawther' as an entity is associated with AI consulting, Bengaluru, and Apex Mind LLP. Entity SEO is about making those associations explicit and consistent across the web.",
      "Entity signals include: consistent Name/Address/Contact details across your site and directories, structured data markup (Person, Organization, LocalBusiness schemas), Wikipedia or Wikidata presence, authoritative third-party mentions, and a well-linked author profile page with credentials and publication history.",
      "The connection to GEO (Generative Engine Optimisation) is direct: AI systems like ChatGPT and Perplexity reason about entities when generating answers. A brand or person recognised as a strong, well-defined entity is far more likely to be cited accurately in AI-generated responses than one that's just a collection of keyword-optimised pages.",
    ],
    whyItMatters: "Entity-optimised sites and personal brands are more resilient to algorithm updates and more likely to surface in AI-generated answers. In the GEO era, being a known entity is as important as having good content.",
    relatedTerms: [
      { term: "Knowledge Graph", slug: "knowledge-graph" },
      { term: "Generative Engine Optimisation (GEO)", slug: "geo" },
      { term: "Structured Data / Schema Markup", slug: "structured-data" },
      { term: "E-E-A-T", slug: "e-e-a-t" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
    relatedPosts: [
      { title: "GEO Optimisation Guide", href: "/resources/geo-optimisation-guide" },
    ],
  },

  "internal-linking": {
    term: "Internal Linking",
    slug: "internal-linking",
    category: "SEO & GEO",
    shortDefinition: "Links from one page on a website to another page on the same site — distributing page authority, improving crawlability, and guiding users through related content.",
    definition: [
      "Every internal link passes a fraction of the linking page's authority (PageRank) to the destination. Pages with many high-authority pages linking to them are treated as more important by Google — internal linking is how you signal which pages matter most within your own site.",
      "Anchor text in internal links also provides context. Linking to a service page using 'AI automation consulting' as anchor text tells Google that page is about AI automation consulting. Consistent, descriptive anchor text is more effective than generic 'click here' or 'read more' links.",
      "Internal link structures can be audited and optimised programmatically — identifying orphan pages (zero internal links pointing to them), over-concentrated hubs, pages buried too many clicks from the homepage, and opportunities to connect topically related content. This is exactly the kind of analysis that can be automated with an AI agent.",
    ],
    whyItMatters: "Internal linking is often the highest-ROI SEO fix available on an established site — it requires no new content, no outreach, and no budget. Redistributing internal link equity can move rankings within weeks of implementation.",
    relatedTerms: [
      { term: "Technical SEO", slug: "technical-seo" },
      { term: "Crawl Budget", slug: "crawl-budget" },
      { term: "Semantic SEO", slug: "semantic-seo" },
      { term: "Programmatic SEO", slug: "programmatic-seo" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
  },

  "knowledge-graph": {
    term: "Knowledge Graph",
    slug: "knowledge-graph",
    category: "SEO & GEO",
    shortDefinition: "Google's structured database of entities and their relationships — powering Knowledge Panels, AI Overviews, and featured snippets by understanding meaning rather than keywords.",
    definition: [
      "The Google Knowledge Graph is a massive database containing billions of entities — people, organisations, places, concepts, products — and the factual relationships between them. It powers Knowledge Panels (the info box that appears beside branded searches), featured snippets, and 'People Also Ask' boxes.",
      "When you search for a founder's name and see a panel showing their company, role, education, and social profiles — that's the Knowledge Graph. It enables Google to answer factual questions directly without serving a web page, and helps AI systems provide accurate information about real-world entities.",
      "Getting into the Knowledge Graph requires: consistent entity signals across the web (your own site, LinkedIn, Wikipedia/Wikidata, Crunchbase, social profiles), structured data markup (Person/Organization/LocalBusiness schema), and sufficient authoritative third-party mentions to establish trust.",
    ],
    whyItMatters: "Brands and individuals recognised as entities in the Knowledge Graph gain significant advantages — a Knowledge Panel in branded search, stronger citation rates in AI-generated answers, and resilience to algorithm changes since entity facts are more stable than keyword rankings.",
    relatedTerms: [
      { term: "Entity SEO", slug: "entity-seo" },
      { term: "Structured Data / Schema Markup", slug: "structured-data" },
      { term: "Generative Engine Optimisation (GEO)", slug: "geo" },
      { term: "AI Overviews", slug: "ai-overviews" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
    relatedPosts: [
      { title: "GEO Optimisation Guide", href: "/resources/geo-optimisation-guide" },
    ],
  },

  "robots-txt": {
    term: "robots.txt",
    slug: "robots-txt",
    category: "SEO & GEO",
    shortDefinition: "A plain-text file at the root of a website that instructs search engine crawlers which pages or directories they should not crawl — the first line of crawl management.",
    definition: [
      "robots.txt uses a simple directive format: `User-agent` specifies which bot the rule applies to, `Disallow` specifies paths to block, and `Allow` grants exceptions. `User-agent: *` applies to all crawlers; you can write specific rules for Googlebot, Bingbot, GPTBot (OpenAI's crawler), and others.",
      "Common uses: blocking admin pages and internal tools from crawling (`/admin/`, `/dashboard/`), preventing duplicate URL parameter pages from wasting crawl budget, keeping staging environments from being indexed, and — increasingly — blocking AI training crawlers from indexing your content.",
      "Critical distinction: robots.txt blocks crawling, not indexing. A page blocked in robots.txt can still appear in search results if other sites link to it — Google knows it exists, it just can't read it. To prevent indexing, use a `noindex` meta tag on the page itself (which means it must be crawlable).",
    ],
    whyItMatters: "A misconfigured robots.txt is one of the most severe (and surprisingly common) technical SEO mistakes — accidentally blocking your entire site from search engines can cause complete ranking loss. Every site should audit its robots.txt as part of a technical SEO review.",
    relatedTerms: [
      { term: "Technical SEO", slug: "technical-seo" },
      { term: "Crawl Budget", slug: "crawl-budget" },
      { term: "Canonical Tag", slug: "canonical-tag" },
      { term: "llms.txt", slug: "llms-txt" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
    relatedPosts: [
      { title: "Technical SEO Audit Checklist", href: "/resources/technical-seo-audit-checklist" },
    ],
  },

  // ─── NEW AI VOICE ──────────────────────────────────────────────────────────

  "latency": {
    term: "Latency",
    slug: "latency",
    category: "AI Voice",
    shortDefinition: "The delay between a user speaking and the AI voice agent responding — the single most critical performance metric in voice AI, where delays above ~1.5 seconds feel unnatural.",
    definition: [
      "Voice AI latency is the sum of three pipeline stages: speech-to-text (STT) transcription time, LLM inference time (processing the transcript and generating a response), and text-to-speech (TTS) synthesis time. Each stage adds delay. End-to-end latency is what the user experiences — and anything above 1.5 seconds starts to feel like the system is struggling.",
      "Streaming is the key optimisation at every stage. Streaming STT begins transcribing as the user speaks, sending partial transcripts before the sentence is finished. Streaming LLM responses start generating before the full context is processed. Streaming TTS begins playing audio as soon as the first sentence of the response is synthesised — before the full response is ready.",
      "Infrastructure choices also matter: LLM inference on GPUs with low-latency APIs, STT models optimised for real-time (Deepgram Nova over batch Whisper), TTS with streaming endpoints (ElevenLabs Turbo), and server regions geographically close to users. Achieving sub-700ms end-to-end latency requires optimisation at every layer simultaneously.",
    ],
    whyItMatters: "High latency breaks the illusion of natural conversation. Users interpret pauses as confusion, system failure, or incompetence. Latency optimisation is where the majority of production voice AI engineering effort goes — it's the difference between a demo and a deployable system.",
    relatedTerms: [
      { term: "Speech-to-Text (STT)", slug: "speech-to-text" },
      { term: "Text-to-Speech (TTS)", slug: "text-to-speech" },
      { term: "IVR (Interactive Voice Response)", slug: "ivr" },
      { term: "WebSocket", slug: "websocket" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
    relatedPosts: [
      { title: "AI Voice Agents Explainer", href: "/resources/ai-voice-agents-explainer" },
    ],
  },

  "voice-cloning": {
    term: "Voice Cloning",
    slug: "voice-cloning",
    category: "AI Voice",
    shortDefinition: "The process of creating a synthetic replica of a specific voice using AI — enabling consistent brand voices for AI agents and personalised voice experiences at scale.",
    definition: [
      "Modern voice cloning requires only minutes of training audio. Services like ElevenLabs, Resemble AI, and PlayHT can clone a voice from a short sample — capturing pitch, tone, cadence, pacing, and accent characteristics. The resulting voice model can then synthesise any text in that voice with natural-sounding quality.",
      "For AI voice agents, voice cloning serves two purposes: brand consistency (a distinctive, recognisable voice instead of a generic TTS voice) and continuity (the same voice across all customer interactions, regardless of which call or which region). A cloned brand voice is often indistinguishable from a recorded human voice to most callers.",
      "Ethical and legal considerations are significant: voice cloning requires explicit consent from the person whose voice is being replicated. Unauthorised voice cloning is both unethical and increasingly regulated. Most commercial platforms include consent verification and prohibit cloning public figures without authorisation.",
    ],
    whyItMatters: "Voice consistency is a meaningful differentiator in customer-facing AI deployments. A professional, distinctive voice clone builds trust and brand recognition in voice interactions — particularly important for healthcare, financial services, and any high-trust sector.",
    relatedTerms: [
      { term: "Text-to-Speech (TTS)", slug: "text-to-speech" },
      { term: "Speech-to-Text (STT)", slug: "speech-to-text" },
      { term: "Latency", slug: "latency" },
      { term: "IVR (Interactive Voice Response)", slug: "ivr" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
  },

  // ─── NEW WEB & SAAS ────────────────────────────────────────────────────────

  "ci-cd": {
    term: "CI/CD",
    slug: "ci-cd",
    category: "Web & SaaS",
    shortDefinition: "Continuous Integration / Continuous Deployment — the engineering practice of automatically testing and deploying code changes, enabling teams to ship updates safely and frequently.",
    definition: [
      "CI (Continuous Integration) means every code change is automatically tested when merged — unit tests, integration tests, type checks, and linting run without manual intervention. CD (Continuous Deployment or Delivery) means code that passes tests is automatically deployed to staging or production environments.",
      "A typical pipeline: developer pushes code → automated test suite runs (2–10 minutes) → if tests pass, code deploys to a preview/staging environment → smoke tests run → if approved, code deploys to production. Every step is logged, and failures send immediate alerts.",
      "Common tools: GitHub Actions and GitLab CI for pipeline orchestration; Vercel and Netlify for Next.js apps with native CI/CD and per-pull-request preview deployments; Docker for consistent build environments. Most modern cloud platforms have CI/CD built in.",
    ],
    whyItMatters: "CI/CD is table stakes for any serious SaaS product. It reduces deployment fear, catches bugs before they reach users, enables fast iteration, and makes rollbacks straightforward. Teams without CI/CD tend to batch changes into risky big-bang deployments.",
    relatedTerms: [
      { term: "Server-Side Rendering (SSR / SSG)", slug: "server-side-rendering" },
      { term: "Microservices", slug: "microservices" },
      { term: "API (Application Programming Interface)", slug: "api" },
      { term: "MVP (Minimum Viable Product)", slug: "mvp" },
    ],
    relatedService: { name: "Web Development", href: "/services/web-development" },
  },

  "microservices": {
    term: "Microservices",
    slug: "microservices",
    category: "Web & SaaS",
    shortDefinition: "An architectural pattern where an application is built as a collection of small, independent services — each handling a specific function and communicating via APIs.",
    definition: [
      "In a microservices architecture, an application is decomposed into discrete services: an authentication service, a billing service, a notifications service, an AI inference service. Each is independently deployable, independently scalable, and can use a different programming language or database if appropriate.",
      "Benefits: individual services can scale under load without scaling the entire application; one service crashing doesn't take down the whole system; different teams can work on different services without coordinating on a single codebase. These advantages become meaningful at scale.",
      "The trade-offs are real: distributed systems are operationally complex. You need service discovery, distributed tracing, inter-service authentication, and careful management of API contracts between services. For most early-stage SaaS products, a well-structured monolith is faster to build and easier to operate — extract services only when a specific bottleneck demands it.",
    ],
    whyItMatters: "Understanding when microservices add value (vs add complexity) is a key architectural judgement call. Most SaaS startups should start with a monolith and extract services when scale requires it — not on day one.",
    relatedTerms: [
      { term: "API (Application Programming Interface)", slug: "api" },
      { term: "Headless Architecture", slug: "headless-architecture" },
      { term: "CI/CD", slug: "ci-cd" },
      { term: "Multi-tenant SaaS", slug: "multi-tenant-saas" },
    ],
    relatedService: { name: "SaaS Product Development", href: "/services/saas-development" },
  },

  "saas-metrics": {
    term: "SaaS Metrics",
    slug: "saas-metrics",
    category: "Web & SaaS",
    shortDefinition: "The key performance indicators for SaaS businesses — including MRR, ARR, churn rate, LTV, and CAC — used to measure health, growth, and unit economics.",
    definition: [
      "Core SaaS metrics: MRR (Monthly Recurring Revenue) — predictable monthly subscription revenue; ARR (Annual Recurring Revenue) — MRR × 12; Churn Rate — percentage of customers or revenue lost per month; LTV (Lifetime Value) — average total revenue per customer; CAC (Customer Acquisition Cost) — total spend to acquire one new customer.",
      "The fundamental unit economics rule: LTV must be at least 3× CAC for a SaaS business to be viable at scale. If you're spending £300 to acquire a customer worth £250, you're losing money on every customer — no amount of growth will fix the underlying economics.",
      "Net Revenue Retention (NRR) is the most important metric for growth-stage SaaS: NRR above 100% means existing customers are expanding (upsells, seat growth) faster than they're churning. NRR above 120% means you can grow revenue even if you stop acquiring new customers entirely.",
    ],
    whyItMatters: "Every product and architecture decision has downstream effects on SaaS metrics. Features that reduce churn, increase seat count, or enable upsells are worth building. Features that don't touch any metric are worth questioning. Understanding the numbers makes for better product decisions.",
    relatedTerms: [
      { term: "MVP (Minimum Viable Product)", slug: "mvp" },
      { term: "Multi-tenant SaaS", slug: "multi-tenant-saas" },
      { term: "Technical Co-founder", slug: "technical-co-founder" },
    ],
    relatedService: { name: "SaaS Product Development", href: "/services/saas-development" },
  },

  "websocket": {
    term: "WebSocket",
    slug: "websocket",
    category: "Web & SaaS",
    shortDefinition: "A protocol enabling a persistent, bidirectional connection between client and server — essential for real-time features like live chat, AI voice pipelines, and streaming data.",
    definition: [
      "Standard HTTP is request-response: the client sends a request, the server responds, the connection closes. WebSocket upgrades that connection to stay open — allowing either side to send messages at any time without a new request. This bidirectional, persistent channel is what enables genuinely real-time applications.",
      "Common use cases: live chat and messaging, real-time notifications, collaborative editing (Google Docs-style), live data feeds (stock prices, sports scores), and — critically for AI voice — streaming audio pipelines where speech must flow continuously in both directions simultaneously.",
      "WebSocket connections start with an HTTP handshake (`Upgrade: websocket` header) and then switch protocols. Most modern frameworks support WebSocket natively — Next.js via custom server, FastAPI via Starlette, Node.js via ws or Socket.io. Cloud platforms like Vercel have edge-level WebSocket support.",
    ],
    whyItMatters: "Any real-time feature requires either WebSockets, Server-Sent Events (SSE), or long-polling. WebSocket is the right choice when data flows in both directions — chat, collaboration, and voice AI all require it. Choosing SSE or polling when WebSocket is needed creates artificial latency and scalability problems.",
    relatedTerms: [
      { term: "API (Application Programming Interface)", slug: "api" },
      { term: "Latency", slug: "latency" },
      { term: "Speech-to-Text (STT)", slug: "speech-to-text" },
      { term: "Webhook", slug: "webhook" },
    ],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
  },

  "open-graph-tags": {
    term: "Open Graph Tags",
    slug: "open-graph-tags",
    category: "SEO & GEO",
    shortDefinition:
      "HTML meta tags that control how your page appears when shared on social media platforms like LinkedIn, Twitter, and Facebook — including the preview image, title, and description.",
    definition: [
      "Open Graph (OG) tags are snippets of HTML in your page's head section that tell social media platforms how to display your link when someone shares it. Without them, platforms guess — often poorly — pulling a random image and truncated text.",
      "The essential OG tags are og:title (the headline shown in the preview), og:description (the summary text), og:image (the preview image — should be 1200x630 pixels), and og:type (usually 'website' or 'article'). For articles, you should also include article:published_time and article:modified_time.",
      "OG tags also matter for AI search. When AI crawlers process your page, OG tags provide clean, structured signals about what the page is and what it covers. A page with well-written OG tags is easier for both social platforms and AI systems to understand and represent accurately.",
    ],
    whyItMatters: "A missing or broken OG image means your links look blank when shared on LinkedIn or Twitter — killing click-through rates. Good OG tags turn every social share into a branded, clickable preview card.",
    relatedTerms: [
      { term: "Meta Tags", slug: "meta-tags" },
      { term: "Structured Data (Schema Markup)", slug: "structured-data" },
      { term: "Technical SEO", slug: "technical-seo" },
      { term: "Core Web Vitals", slug: "core-web-vitals" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
    relatedPosts: [
      { title: "How to Rank on Google and Get Cited by AI Search Engines", href: "/blog/rank-on-google-get-cited-by-ai-search-engines" },
    ],
  },

  "meta-tags": {
    term: "Meta Tags",
    slug: "meta-tags",
    category: "SEO & GEO",
    shortDefinition:
      "HTML tags in your page's head section that tell search engines and browsers what your page is about — including the title, description, and indexing instructions.",
    definition: [
      "Meta tags are invisible HTML elements that sit in the <head> of your page. They do not appear on the page itself, but search engines, social platforms, and AI crawlers read them to understand your content. The two most important for SEO are the title tag and the meta description.",
      "The title tag (under 60 characters) appears as the clickable headline in search results. The meta description (under 160 characters) appears as the summary text below it. Every page on your site should have a unique title and description — using the same generic one across all pages tells search engines you do not differentiate your content.",
      "Beyond title and description, other important meta tags include: canonical (tells search engines which version of a page is the official one), robots (controls whether a page should be indexed), and viewport (ensures mobile responsiveness). For AI search, well-written meta tags help crawlers quickly understand what each page covers.",
    ],
    whyItMatters: "Meta tags are the first thing search engines and AI crawlers see when they visit your page. Poor or missing meta tags mean your pages show up with generic or truncated text in search results, reducing click-through rates and AI citation likelihood.",
    relatedTerms: [
      { term: "Open Graph Tags", slug: "open-graph-tags" },
      { term: "Canonical Tag", slug: "canonical-tag" },
      { term: "Technical SEO", slug: "technical-seo" },
      { term: "Search Intent", slug: "search-intent" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
    relatedPosts: [
      { title: "How to Rank on Google and Get Cited by AI Search Engines", href: "/blog/rank-on-google-get-cited-by-ai-search-engines" },
    ],
  },

  "json-ld": {
    term: "JSON-LD (Structured Data Format)",
    slug: "json-ld",
    category: "SEO & GEO",
    shortDefinition:
      "JavaScript Object Notation for Linked Data — the recommended format for adding structured data to web pages so search engines and AI systems can understand your content in a machine-readable way.",
    definition: [
      "JSON-LD is a way of embedding structured data into your web pages using a script tag. It tells search engines and AI crawlers exactly what your content is — an Article, a Person, a Product, an FAQ — in a format they can parse programmatically. Unlike older formats like Microdata or RDFa, JSON-LD sits in its own script block and does not clutter your HTML.",
      "A typical JSON-LD block includes an @context (always schema.org), an @type (Article, Person, FAQPage, etc.), and properties specific to that type — headline, author, datePublished, description, and so on. Google, Bing, and AI search engines all support JSON-LD as their preferred structured data format.",
      "For AI search engines specifically, JSON-LD provides clean, unambiguous signals. When ChatGPT or Perplexity processes a page with Article schema, it knows exactly who wrote it, when it was published, and what it covers — making it far more likely to cite the page accurately.",
    ],
    whyItMatters: "Pages with JSON-LD structured data are eligible for rich results in Google (FAQ dropdowns, article cards, product ratings) and are more accurately cited by AI search engines. It is the single most direct way to communicate your content's meaning to machines.",
    relatedTerms: [
      { term: "Structured Data (Schema Markup)", slug: "structured-data" },
      { term: "E-E-A-T", slug: "e-e-a-t" },
      { term: "Technical SEO", slug: "technical-seo" },
      { term: "GEO (Generative Engine Optimisation)", slug: "geo" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
    relatedPosts: [
      { title: "How to Rank on Google and Get Cited by AI Search Engines", href: "/blog/rank-on-google-get-cited-by-ai-search-engines" },
    ],
  },

  "sitemap": {
    term: "Sitemap (XML Sitemap)",
    slug: "sitemap",
    category: "SEO & GEO",
    shortDefinition:
      "An XML file that lists all the important pages on your website, helping search engines and AI crawlers discover and index them efficiently.",
    definition: [
      "A sitemap is a file (usually at /sitemap.xml) that lists every important page on your website along with metadata like when it was last updated, how often it changes, and its relative priority. Search engines use it as a roadmap to find and crawl your content.",
      "Pages that should be in your sitemap: your homepage, key service pages, blog posts, product pages, and any page you want indexed. Pages that should NOT be in it: thank-you pages, login pages, API routes, test pages, staging URLs, and old campaign pages that return 404 errors.",
      "Submitting your sitemap to both Google Search Console and Bing Webmaster Tools is critical — especially for AI search. ChatGPT and Microsoft Copilot use Bing's index, so if you only submit to Google, you may be invisible to these AI platforms. Most modern frameworks (Next.js, WordPress, Webflow) can generate sitemaps automatically.",
    ],
    whyItMatters: "Without a sitemap, search engines rely on following links to discover your pages — which means orphan pages or new content may never get found. A well-maintained sitemap ensures every important page gets crawled and indexed.",
    relatedTerms: [
      { term: "robots.txt", slug: "robots-txt" },
      { term: "Crawl Budget", slug: "crawl-budget" },
      { term: "Technical SEO", slug: "technical-seo" },
      { term: "Internal Linking", slug: "internal-linking" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
    relatedPosts: [
      { title: "How to Rank on Google and Get Cited by AI Search Engines", href: "/blog/rank-on-google-get-cited-by-ai-search-engines" },
    ],
  },

  "page-speed": {
    term: "Page Speed",
    slug: "page-speed",
    category: "SEO & GEO",
    shortDefinition:
      "How fast your web page loads and becomes interactive — a direct Google ranking signal and a major factor in user experience and conversion rates.",
    definition: [
      "Page speed measures how quickly a web page loads its content and becomes usable. Google uses three Core Web Vitals metrics to evaluate this: Largest Contentful Paint (LCP) measures loading speed, Interaction to Next Paint (INP) measures responsiveness, and Cumulative Layout Shift (CLS) measures visual stability.",
      "Google's research shows that 53% of mobile visitors leave a page that takes longer than 3 seconds to load. Portent found that a site loading in 1 second converts at 2.5x the rate of one loading in 5 seconds. Page speed is not just a ranking signal — it directly affects your revenue.",
      "Common page speed killers: uncompressed images (use WebP), heavy JavaScript bundles, render-blocking CSS, synchronous third-party scripts, and missing width/height attributes on images (which cause layout shifts). Test your site at pagespeed.web.dev — aim for 90 or above on both mobile and desktop.",
    ],
    whyItMatters: "Google uses page speed as a ranking signal, and slow sites lose visitors before they even see your content. Since Google uses mobile-first indexing, your mobile page speed is what determines your ranking everywhere.",
    relatedTerms: [
      { term: "Core Web Vitals", slug: "core-web-vitals" },
      { term: "Technical SEO", slug: "technical-seo" },
      { term: "Server-Side Rendering (SSR)", slug: "server-side-rendering" },
      { term: "Headless Architecture", slug: "headless-architecture" },
    ],
    relatedService: { name: "Web Development", href: "/services/web-development" },
    relatedPosts: [
      { title: "How to Rank on Google and Get Cited by AI Search Engines", href: "/blog/rank-on-google-get-cited-by-ai-search-engines" },
    ],
  },

  "mobile-first-indexing": {
    term: "Mobile-First Indexing",
    slug: "mobile-first-indexing",
    category: "SEO & GEO",
    shortDefinition:
      "Google's approach of using the mobile version of your website as the primary version for crawling, indexing, and ranking — meaning your mobile experience determines your search rankings everywhere.",
    definition: [
      "Mobile-first indexing means Google predominantly uses the mobile version of your website's content for indexing and ranking. If your desktop site has content or links that your mobile site does not, Google may not see them at all. This has been the default for all websites since 2023.",
      "This matters because many websites are still designed desktop-first and then adapted for mobile — sometimes losing content, navigation, or structured data in the process. If your mobile site has fewer internal links, missing schema markup, or hidden content behind expandable sections, your rankings suffer across all devices.",
      "To check how Google sees your mobile site, use the URL Inspection tool in Google Search Console and select the mobile crawler. Test your site on actual mobile devices, not just by resizing your browser window — real mobile performance includes network speed, touch targets, and viewport rendering.",
    ],
    whyItMatters: "If your mobile experience is broken, slow, or missing content compared to desktop, your search rankings suffer everywhere — even on desktop searches. Mobile-first indexing means your mobile site IS your site as far as Google is concerned.",
    relatedTerms: [
      { term: "Core Web Vitals", slug: "core-web-vitals" },
      { term: "Page Speed", slug: "page-speed" },
      { term: "Technical SEO", slug: "technical-seo" },
      { term: "Search Intent", slug: "search-intent" },
    ],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
    relatedPosts: [
      { title: "How to Rank on Google and Get Cited by AI Search Engines", href: "/blog/rank-on-google-get-cited-by-ai-search-engines" },
    ],
  },

};

export async function generateStaticParams() {
  return Object.keys(termData).map((term) => ({ term }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { term: termSlug } = await params;
  const termEntry = termData[termSlug];
  if (!termEntry) return { title: "Term Not Found" };

  return {
    title: `What is ${termEntry.term}? — Aryan Rawther Glossary`,
    description: termEntry.shortDefinition,
    alternates: { canonical: `/glossary/${termSlug}` },
  };
}

export default async function GlossaryTermPage({ params }: { params: Promise<Params> }) {
  const { term: termSlug } = await params;
  const entry = termData[termSlug];
  if (!entry) notFound();

  return (
    <>
      {/* Hero */}
      <section className="aurora-bg pt-32 pb-12">
        <div className="container relative z-10 max-w-3xl">
          <Breadcrumb
            items={[
              { name: "Glossary", url: "/glossary" },
              { name: entry.term, url: `/glossary/${termSlug}` },
            ]}
          />
          <div className="mt-8">
            <p className="text-accent-primary font-mono text-sm mb-3 tracking-wide uppercase">
              {entry.category}
            </p>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
              What is {entry.term}?
            </h1>

            {/* Definition block — LLM-extractable */}
            <div className="rounded-card border border-accent-primary/30 bg-accent-primary/5 p-6">
              <p className="text-sm font-mono text-text-muted uppercase tracking-wider mb-2">
                Definition
              </p>
              <p className="text-text-primary text-lg leading-relaxed font-medium">
                {entry.shortDefinition}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          {/* AskAI */}
          <div className="mb-8">
            <AskAIButton
              pageUrl={`/glossary/${termSlug}`}
              pageType="resource"
              resourceTitle={`What is ${entry.term}?`}
            />
          </div>

          {/* Full explanation */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-text-primary mb-5">In more detail</h2>
            <div className="space-y-4">
              {entry.definition.map((paragraph, i) => (
                <p key={i} className="text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Why it matters */}
          <div className="mb-10 rounded-card border border-border bg-bg-surface p-6">
            <h2 className="text-lg font-bold text-text-primary mb-3">Why it matters</h2>
            <p className="text-text-secondary leading-relaxed">{entry.whyItMatters}</p>
          </div>

          {/* Related terms */}
          {entry.relatedTerms.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-bold text-text-primary mb-4">Related terms</h2>
              <div className="flex flex-wrap gap-2">
                {entry.relatedTerms.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/glossary/${related.slug}`}
                    className="px-4 py-2 rounded-btn border border-border bg-bg-surface text-text-secondary text-sm hover:border-accent-primary hover:text-accent-primary transition-colors"
                  >
                    {related.term} →
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related posts */}
          {entry.relatedPosts && entry.relatedPosts.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-bold text-text-primary mb-4">Further reading</h2>
              <div className="space-y-2">
                {entry.relatedPosts.map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="block text-accent-primary hover:underline text-sm"
                  >
                    {post.title} →
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related service */}
          {entry.relatedService && (
            <div className="mb-10 rounded-card border border-accent-primary/20 bg-accent-primary/5 p-6">
              <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-2">
                Related service
              </p>
              <h2 className="text-lg font-bold text-text-primary mb-3">
                Working with {entry.term.split(" ")[0]}?
              </h2>
              <p className="text-text-secondary text-sm mb-4">
                I offer {entry.relatedService.name} for businesses ready to move from understanding
                to implementation.
              </p>
              <Button href={entry.relatedService.href} variant="primary" size="md">
                Learn about {entry.relatedService.name} →
              </Button>
            </div>
          )}

          {/* Bottom AskAI */}
          <div className="mt-4">
            <AskAIButton
              pageUrl={`/glossary/${termSlug}`}
              pageType="resource"
              resourceTitle={`What is ${entry.term}?`}
            />
          </div>

          {/* Back */}
          <div className="mt-8 text-center">
            <Button href="/glossary" variant="ghost" size="sm">
              ← Back to Glossary
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
