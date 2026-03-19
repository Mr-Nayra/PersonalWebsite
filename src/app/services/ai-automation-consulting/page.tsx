import { Metadata } from "next";
import { ServicePageTemplate, ServicePageData } from "@/components/sections/ServicePageTemplate";
import { caseStudiesPreview } from "@/data/site-data";
import { webPageSchema } from "@/lib/schemas";

// Update this date whenever meaningful content changes are made to this page
const PAGE_LAST_MODIFIED = "2026-03-19";

export const metadata: Metadata = {
  title: "AI Automation Consulting India — LLM Integration, AI Agents & ChatGPT Developer",
  description:
    "Hire an AI automation consultant in India. Aryan Rawther (Apex Mind LLP) builds LLM integrations, AI agent workflows, and business process automation using OpenAI, LangChain, and CrewAI. Serving SaaS companies and startups globally.",
  alternates: { canonical: "/services/ai-automation-consulting" },
  keywords: [
    "AI automation consultant India",
    "automate my business with AI",
    "business process automation consultant",
    "AI automation for small business",
    "workflow automation consultant India",
    "automate repetitive tasks AI",
  ],
};

const data: ServicePageData = {
  name: "AI Automation Consulting",
  slug: "ai-automation-consulting",
  href: "/services/ai-automation-consulting",
  h1: "AI Automation Consulting",
  tagline: "LLM integrations · AI agents · Process automation",
  description:
    "You don't need to understand how AI works. You need to understand what it can do for your business. I audit your operations, identify where your team is spending time on work that shouldn't require a human, and build the automations that free them up. No jargon. Just results.",
  deliverables: [
    "Operations audit — mapping existing workflows to identify automation opportunities",
    "Automation strategy and roadmap — prioritised by time saved and implementation cost",
    "Document and email processing automation — invoices, forms, reports, inbound emails",
    "Customer communication automation — AI-assisted responses, routing, triage, follow-ups",
    "Data entry and extraction automation — pulling structured data from unstructured sources",
    "Internal reporting and summarisation — automated dashboards, weekly summaries, data digests",
    "Tool connection automation — linking CRMs, spreadsheets, email, calendars, and forms via AI",
    "No-code and low-code AI automation — n8n, Make (Integromat), Zapier + AI for fast deployment",
    "Ongoing monitoring and optimisation of deployed automations",
  ],
  whoFor: [
    "SMBs and local businesses spending hours on manual data entry, reporting, or communication",
    "Operations teams drowning in repetitive coordination, routing, and follow-up work",
    "Healthcare and clinic operations — patient communication, appointment workflows, record processing",
    "E-commerce businesses automating order management, customer service, and inventory alerts",
    "Professional services firms — legal, accounting, consulting — automating document-heavy workflows",
    "Any business where staff regularly say 'I spend half my day doing the same thing every day'",
  ],
  process: [
    {
      title: "Process audit",
      description:
        "I map your current workflows — documenting where time is lost, what data moves between systems, and where AI can intervene with the highest ROI.",
    },
    {
      title: "Architecture design",
      description:
        "I design the AI system architecture — agent structure, tool integrations, decision logic, and data flow. You approve the blueprint before any code is written.",
    },
    {
      title: "Build and integrate",
      description:
        "I build the system in milestones — connecting AI to your existing tools, testing edge cases, and handling the failure modes that generic demos ignore.",
    },
    {
      title: "Testing and handoff",
      description:
        "Full testing with real data, documentation, and a recorded walkthrough. Your team knows exactly how the system works and how to maintain it.",
    },
  ],
  tools: [
    { name: "LangChain" },
    { name: "CrewAI" },
    { name: "n8n" },
    { name: "OpenAI API" },
    { name: "Anthropic API" },
    { name: "Gemini API" },
    { name: "Python" },
    { name: "FastAPI" },
    { name: "Webhooks" },
    { name: "Google Drive API" },
    { name: "Egnyte" },
  ],
  faqs: [
    {
      question: "What is AI automation consulting?",
      answer:
        "AI automation consulting involves analysing your business processes and designing AI-powered systems that replace or augment manual work. This includes selecting the right AI models, designing agent workflows, integrating with your existing tools, and ensuring the system is maintainable by your team.",
    },
    {
      question: "How long does an AI automation project typically take?",
      answer:
        "A focused automation system for a single process typically takes 4–8 weeks from discovery to handoff. More complex multi-agent systems with extensive integrations take 8–16 weeks. Timeline depends on scope, integrations required, and how quickly we can access your data and existing systems.",
    },
    {
      question: "Do I need technical staff to work with you?",
      answer:
        "No. I work with non-technical founders and operations managers regularly. I translate business requirements into technical decisions, and I document everything so your team can understand and maintain what&apos;s been built — no AI background required.",
    },
    {
      question: "Which AI models do you work with?",
      answer:
        "I work with OpenAI (GPT-4, GPT-4o), Anthropic (Claude), and Google Gemini — selecting the right model based on your use case, cost requirements, and data privacy needs. I&apos;m model-agnostic and recommend based on what fits your problem, not what&apos;s most popular.",
    },
    {
      question: "How much does AI automation consulting cost?",
      answer:
        "Pricing is scope-dependent and milestone-based — you only pay when each milestone is delivered and approved. I don&apos;t publish rates on this page because the right scope matters more than a number. Reach out and I&apos;ll give you an honest assessment.",
    },
    {
      question: "Can you integrate AI into our existing software?",
      answer:
        "Yes — most engagements involve integrating AI into existing tools rather than building from scratch. I work with Google Drive, Egnyte, CRMs, ERPs, and any system with an API. If your tool has a webhook or API, I can connect AI to it.",
    },
  ],
  relatedCaseStudies: caseStudiesPreview.filter(cs => cs.service.includes("AI Automation Consulting")),
};

export default function AIAutomationConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({
              title: "AI Automation Consulting India — LLM Integration, AI Agents & ChatGPT Developer",
              description:
                "Hire an AI automation consultant in India. Aryan Rawther (Apex Mind LLP) builds LLM integrations, AI agent workflows, and business process automation using OpenAI, LangChain, and CrewAI. Serving SaaS companies and startups globally.",
              url: "/services/ai-automation-consulting",
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
