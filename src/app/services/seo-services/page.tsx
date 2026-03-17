import { Metadata } from "next";
import { ServicePageTemplate, ServicePageData } from "@/components/sections/ServicePageTemplate";
import { caseStudiesPreview } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Technical SEO & GEO Consultant India — Programmatic SEO, Core Web Vitals & AI Search",
  description:
    "Hire a technical SEO consultant in India. Aryan Rawther (Apex Mind LLP) offers technical SEO audits, programmatic SEO, Core Web Vitals optimisation, schema markup, and GEO (Generative Engine Optimisation) for AI search visibility. Specialising in SaaS and tech companies.",
  alternates: { canonical: "/services/seo-services" },
  keywords: [
    "technical SEO consultant India",
    "hire SEO consultant India",
    "SEO specialist India",
    "programmatic SEO consultant India",
    "GEO optimisation consultant",
    "generative engine optimisation",
    "AI search optimisation consultant",
    "Core Web Vitals consultant India",
    "schema markup consultant India",
    "SaaS SEO consultant India",
    "B2B SEO consultant India",
    "SEO for tech startups India",
    "structured data consultant",
    "AI SEO consultant India",
    "SEO consultant Bengaluru",
    "technical SEO audit India",
    "ChatGPT Perplexity optimisation",
  ],
};

const data: ServicePageData = {
  name: "SEO Services",
  slug: "seo-services",
  href: "/services/seo-services",
  h1: "SEO Services",
  tagline: "Technical SEO · Content strategy · GEO optimisation",
  description:
    "I help businesses grow organic traffic through technical SEO, strategic content architecture, and GEO (Generative Engine Optimisation) — the practice of making your content citable by AI systems like ChatGPT, Perplexity, and Google AI Overviews. Not just rankings — genuine organic authority.",
  deliverables: [
    "Technical SEO audit and remediation (Core Web Vitals, crawlability, indexing)",
    "On-page SEO — keyword research, content structure, internal linking architecture",
    "Content strategy and editorial planning for organic growth",
    "AI SEO / GEO — structured data, llms.txt, entity consistency",
    "Programmatic SEO — scaled landing page strategies for high keyword coverage",
    "Link building strategy and outreach planning",
    "SEO for SaaS and tech products — product-led SEO, tool pages, comparison pages",
    "LinkedIn and platform content strategy for brand-driven SEO",
  ],
  whoFor: [
    "SaaS startups that want organic as a growth channel",
    "Businesses getting organic traffic but not converting it into leads",
    "Companies that have published content but never structured it for SEO",
    "Tech businesses that want to appear in Google AI Overviews and Perplexity",
    "Teams that have tried SEO tools but need a clear strategy, not more dashboards",
    "Businesses that want to understand what GEO means for their visibility",
  ],
  process: [
    {
      title: "Technical audit",
      description:
        "Full crawl of your site — Core Web Vitals, indexability, duplicate content, internal links, schema markup. Prioritised by impact, not by what&apos;s easiest to fix.",
    },
    {
      title: "Keyword and content strategy",
      description:
        "Research your target keywords, competitive landscape, and content gaps. I build an editorial strategy that targets the right queries at the right stages of intent.",
    },
    {
      title: "Implementation",
      description:
        "Either I implement directly (if Next.js / technical SEO) or I provide a clear implementation spec for your team. Content, schema, internal links — in the right order.",
    },
    {
      title: "Monitoring and iteration",
      description:
        "GSC and GA4 tracking setup, monthly reporting, and iterative improvements based on what&apos;s working. SEO compounds — the earlier you start, the better.",
    },
  ],
  tools: [
    { name: "Ahrefs" },
    { name: "Semrush" },
    { name: "Screaming Frog" },
    { name: "Google Search Console" },
    { name: "Google Analytics 4" },
    { name: "Next.js" },
    { name: "JSON-LD Schema" },
    { name: "Surfer SEO" },
    { name: "Clearscope" },
  ],
  faqs: [
    {
      question: "What is GEO (Generative Engine Optimisation)?",
      answer:
        "GEO is the practice of structuring your content so that AI systems — ChatGPT, Perplexity, Google AI Overviews, Claude — extract, understand, and cite it accurately. It involves answer-first writing, structured data, entity consistency, and an llms.txt file. It&apos;s the emerging counterpart to traditional SEO.",
    },
    {
      question: "How long does SEO take to show results?",
      answer:
        "Technical SEO fixes and indexing improvements can show results in 4–8 weeks. Content and keyword strategies typically show meaningful organic growth in 3–6 months. GEO results — appearing in AI answers — can happen faster, as AI systems crawl and cite frequently.",
    },
    {
      question: "Do you write the content or just the strategy?",
      answer:
        "Both options are available. For strategy-only engagements, I produce a detailed content brief for each target page that your team executes. For full-service engagements, I write or edit the content directly, ensuring it meets both SEO and GEO requirements.",
    },
    {
      question: "What is an AI SEO consultant?",
      answer:
        "An AI SEO consultant combines traditional technical SEO expertise with knowledge of how AI systems discover and cite content. This includes GEO strategy, structured data implementation, llms.txt files, entity consistency, and content formatting that both Google and AI systems reward.",
    },
    {
      question: "Can you help with SEO for SaaS products?",
      answer:
        "Yes — SaaS SEO is a specific discipline I focus on. This includes product-led SEO (ranking your product features as search terms), comparison pages, tool pages, integration pages, and programmatic landing pages that scale keyword coverage without manual writing.",
    },
    {
      question: "Do you offer ongoing SEO retainers?",
      answer:
        "Yes. Many clients start with an audit and strategy engagement, then move to a monthly retainer for ongoing content, monitoring, and technical maintenance. Retainer scope is customised to your publishing cadence and growth targets.",
    },
  ],
  relatedCaseStudies: caseStudiesPreview.filter(cs => cs.service.includes("SEO Services")),
};

export default function SEOServicesPage() {
  return <ServicePageTemplate data={data} />;
}
