import { Metadata } from "next";
import { notFound } from "next/navigation";
import { AskAIButton } from "@/components/ui/AskAIButton";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";
import { articleSchema } from "@/lib/schemas";

type Params = { slug: string };

const resourceData: Record<string, {
  title: string;
  slug: string;
  category: string;
  description: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  content: string[];
  relatedService: { name: string; href: string };
  relatedResources?: { title: string; slug: string }[];
  relatedGlossaryTerms?: { name: string; slug: string }[];
}> = {
  "ai-automation-guide-for-business": {
    title: "The Business Leader's Guide to AI Automation",
    slug: "ai-automation-guide-for-business",
    category: "AI Automation",
    description:
      "A practical, jargon-free guide to understanding what AI automation actually is, what it can do for your business, and how to evaluate whether it's worth investing in.",
    readTime: "12 min read",
    publishedAt: "2024-10-01",
    updatedAt: "2024-12-01",
    tags: ["AI Agents", "LLMs", "Process Automation", "ROI"],
    relatedService: { name: "AI Automation Consulting", href: "/services/ai-automation-consulting" },
    relatedResources: [
      { title: "AI Voice Agents: What They Are and When to Use Them", slug: "ai-voice-agents-explainer" },
    ],
    relatedGlossaryTerms: [
      { name: "AI Agent", slug: "ai-agent" },
      { name: "Large Language Model", slug: "large-language-model" },
      { name: "Agentic AI", slug: "agentic-ai" },
      { name: "AI Orchestration", slug: "ai-orchestration" },
      { name: "RAG", slug: "rag" },
    ],
    content: [
      "[TODO: Introduction — What is AI automation, really? Cut through the hype and define it clearly for a business audience.]",
      "[TODO: Section 1 — The three levels of AI automation: simple task automation (RPA-style), AI-assisted workflows, and fully autonomous agents.]",
      "[TODO: Section 2 — What types of business processes are actually good candidates for AI automation? Data processing, document handling, customer-facing workflows, etc.]",
      "[TODO: Section 3 — What to expect from AI automation: realistic ROI, timelines, and what 'success' actually looks like.]",
      "[TODO: Section 4 — How to evaluate an AI automation vendor or consultant. Questions to ask, red flags to watch for.]",
      "[TODO: Conclusion — Next steps for businesses considering AI automation.]",
    ],
  },
  "geo-optimisation-guide": {
    title: "GEO Optimisation: How to Appear in AI-Generated Answers",
    slug: "geo-optimisation-guide",
    category: "SEO & GEO",
    description:
      "Generative Engine Optimisation (GEO) is the practice of making your content visible in ChatGPT, Perplexity, and Google AI Overviews. This guide covers everything you need to know.",
    readTime: "15 min read",
    publishedAt: "2024-11-01",
    updatedAt: "2024-12-01",
    tags: ["GEO", "AI Search", "ChatGPT", "Perplexity", "Content Strategy"],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
    relatedResources: [
      { title: "Technical SEO Audit Checklist (2024)", slug: "technical-seo-audit-checklist" },
    ],
    relatedGlossaryTerms: [
      { name: "GEO", slug: "geo" },
      { name: "AI Overviews", slug: "ai-overviews" },
      { name: "Structured Data", slug: "structured-data" },
      { name: "llms.txt", slug: "llms-txt" },
      { name: "E-E-A-T", slug: "e-e-a-t" },
      { name: "Entity SEO", slug: "entity-seo" },
    ],
    content: [
      "[TODO: Introduction — What is GEO? How is it different from traditional SEO? Why does it matter now?]",
      "[TODO: Section 1 — How AI search engines (ChatGPT, Perplexity, Google AI Overviews) choose what to cite.]",
      "[TODO: Section 2 — The 6 GEO signals: authoritative entity definition, citation-ready formatting, structured data, llms.txt, content freshness, brand mentions.]",
      "[TODO: Section 3 — How to write content that AI systems extract and cite. Practical formatting and structure tips.]",
      "[TODO: Section 4 — Technical GEO: JSON-LD schemas, llms.txt, robots.txt configuration for AI crawlers.]",
      "[TODO: Section 5 — Measuring GEO performance. What metrics to track and how to audit your AI visibility.]",
      "[TODO: Conclusion — GEO as a long-term strategy. How it complements traditional SEO.]",
    ],
  },
  "technical-seo-audit-checklist": {
    title: "Technical SEO Audit Checklist (2024)",
    slug: "technical-seo-audit-checklist",
    category: "SEO & GEO",
    description:
      "A comprehensive, step-by-step checklist for auditing the technical health of your website. Covers crawlability, Core Web Vitals, structured data, and more.",
    readTime: "10 min read",
    publishedAt: "2024-09-01",
    updatedAt: "2024-12-01",
    tags: ["Technical SEO", "Site Audit", "Core Web Vitals", "Schema"],
    relatedService: { name: "SEO Services", href: "/services/seo-services" },
    relatedResources: [
      { title: "GEO Optimisation: How to Appear in AI-Generated Answers", slug: "geo-optimisation-guide" },
    ],
    relatedGlossaryTerms: [
      { name: "Technical SEO", slug: "technical-seo" },
      { name: "Core Web Vitals", slug: "core-web-vitals" },
      { name: "Crawl Budget", slug: "crawl-budget" },
      { name: "Canonical Tag", slug: "canonical-tag" },
      { name: "Structured Data", slug: "structured-data" },
      { name: "Internal Linking", slug: "internal-linking" },
      { name: "robots.txt", slug: "robots-txt" },
    ],
    content: [
      "[TODO: Introduction — Why technical SEO is the foundation of any organic growth strategy.]",
      "[TODO: Section 1 — Crawlability checklist: robots.txt, XML sitemap, crawl budget, internal linking.]",
      "[TODO: Section 2 — Core Web Vitals: LCP, CLS, INP. What each metric means and how to improve it.]",
      "[TODO: Section 3 — Indexability: canonical tags, noindex, pagination handling, duplicate content.]",
      "[TODO: Section 4 — Structured data: which schemas to implement, how to validate them.]",
      "[TODO: Section 5 — Mobile usability, HTTPS, redirects, and other technical factors.]",
      "[TODO: Conclusion — Prioritising your audit findings and creating an action plan.]",
    ],
  },
  "ai-voice-agents-explainer": {
    title: "AI Voice Agents: What They Are and When to Use Them",
    slug: "ai-voice-agents-explainer",
    category: "AI Voice Agents",
    description:
      "A clear explanation of what AI voice agents are, how they differ from traditional IVR, and the specific use cases where they deliver real ROI.",
    readTime: "8 min read",
    publishedAt: "2024-10-15",
    updatedAt: "2024-12-01",
    tags: ["AI Voice", "IVR", "Twilio", "Conversational AI"],
    relatedService: { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
    relatedResources: [
      { title: "The Business Leader's Guide to AI Automation", slug: "ai-automation-guide-for-business" },
    ],
    relatedGlossaryTerms: [
      { name: "IVR", slug: "ivr" },
      { name: "Speech-to-Text", slug: "speech-to-text" },
      { name: "Text-to-Speech", slug: "text-to-speech" },
      { name: "Latency", slug: "latency" },
      { name: "Voice Cloning", slug: "voice-cloning" },
    ],
    content: [
      "[TODO: Introduction — The difference between traditional phone trees and modern AI voice agents.]",
      "[TODO: Section 1 — How AI voice agents work: STT (Deepgram), LLM reasoning, TTS (ElevenLabs), telephony (Twilio).]",
      "[TODO: Section 2 — Use cases with real ROI: inbound call handling, claims intake, appointment booking, customer support.]",
      "[TODO: Section 3 — When AI voice agents are a good fit vs. when they're not.]",
      "[TODO: Section 4 — What a realistic implementation looks like: timeline, costs, what you need to provide.]",
      "[TODO: Conclusion — Questions to ask if you're evaluating AI voice agent vendors.]",
    ],
  },
  "nextjs-saas-architecture": {
    title: "Next.js SaaS Architecture: A Practical Starting Point",
    slug: "nextjs-saas-architecture",
    category: "Web & SaaS Development",
    description:
      "The patterns and decisions I use when starting a new SaaS product with Next.js — from folder structure to auth to multi-tenancy to deployment.",
    readTime: "18 min read",
    publishedAt: "2024-11-15",
    updatedAt: "2024-12-01",
    tags: ["Next.js", "SaaS", "Architecture", "TypeScript"],
    relatedService: { name: "SaaS Development", href: "/services/saas-development" },
    relatedResources: [
      { title: "The Business Leader's Guide to AI Automation", slug: "ai-automation-guide-for-business" },
    ],
    relatedGlossaryTerms: [
      { name: "Multi-Tenant SaaS", slug: "multi-tenant-saas" },
      { name: "MVP", slug: "mvp" },
      { name: "API", slug: "api" },
      { name: "Server-Side Rendering", slug: "server-side-rendering" },
      { name: "CI/CD", slug: "ci-cd" },
    ],
    content: [
      "[TODO: Introduction — Why Next.js is a strong choice for SaaS MVPs in 2024.]",
      "[TODO: Section 1 — Project structure: the folder conventions I use and why.]",
      "[TODO: Section 2 — Authentication: NextAuth vs Clerk vs custom JWT. Trade-offs for SaaS.]",
      "[TODO: Section 3 — Multi-tenancy patterns: subdomain routing, row-level security, tenant isolation.]",
      "[TODO: Section 4 — Database: Postgres with Prisma, row-level security, and connection pooling with PgBouncer.]",
      "[TODO: Section 5 — Deployment: Vercel, environment variables, CI/CD basics.]",
      "[TODO: Conclusion — When to deviate from this stack and what I'd choose instead.]",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(resourceData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const resource = resourceData[slug];
  if (!resource) return { title: "Resource Not Found" };

  return {
    title: resource.title,
    description: resource.description,
    alternates: { canonical: `/resources/${slug}` },
  };
}

export default async function ResourcePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const resource = resourceData[slug];
  if (!resource) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: resource.title,
              description: resource.description,
              url: `/resources/${slug}`,
              datePublished: resource.publishedAt,
              dateModified: resource.updatedAt,
            })
          ),
        }}
      />

      {/* Hero */}
      <section className="aurora-bg pt-32 pb-12">
        <div className="container relative z-10 max-w-3xl">
          <Breadcrumb
            items={[
              { name: "Resources", url: "/resources" },
              { name: resource.title, url: `/resources/${slug}` },
            ]}
          />
          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Badge variant="service">{resource.category}</Badge>
              <span className="text-text-muted text-sm font-mono">{resource.readTime}</span>
              <span className="text-text-muted text-sm">
                Last updated{" "}
                {new Date(resource.updatedAt).toLocaleDateString("en-GB", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-5 leading-tight">
              {resource.title}
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed">{resource.description}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          {/* AskAI */}
          <div className="mb-8">
            <AskAIButton
              pageUrl={`/resources/${slug}`}
              pageType="resource"
              resourceTitle={resource.title}
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {resource.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs bg-bg-elevated border border-border text-text-muted px-2.5 py-1 rounded-btn"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Article body */}
          <div className="prose prose-lg max-w-none">
            {resource.content.map((paragraph, i) => (
              <p key={i} className="text-text-secondary leading-relaxed mb-5">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related service CTA */}
          <div className="mt-12 rounded-card border border-accent-primary/20 bg-accent-primary/5 p-8">
            <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-2">
              Related service
            </p>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              Need help implementing this?
            </h2>
            <p className="text-text-secondary text-sm mb-5">
              I offer {resource.relatedService.name} for businesses that want expert execution, not
              just reading material.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href={resource.relatedService.href} variant="primary" size="md">
                Learn about {resource.relatedService.name} →
              </Button>
              <Button href="/contact" variant="secondary" size="md">
                Get in touch →
              </Button>
            </div>
          </div>

          {/* Related Glossary Terms */}
          {resource.relatedGlossaryTerms && resource.relatedGlossaryTerms.length > 0 && (
            <div className="mt-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-text-primary">Key concepts</h3>
                <Link href="/glossary" className="text-accent-primary text-sm hover:underline">
                  Full glossary →
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {resource.relatedGlossaryTerms.map((term) => (
                  <Link
                    key={term.slug}
                    href={`/glossary/${term.slug}`}
                    className="px-3 py-1.5 rounded-btn border border-border bg-bg-base text-text-secondary text-sm hover:border-accent-primary hover:text-accent-primary hover:bg-accent-primary/5 transition-all duration-150"
                  >
                    {term.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Resources */}
          {resource.relatedResources && resource.relatedResources.length > 0 && (
            <div className="mt-10">
              <h3 className="text-lg font-bold text-text-primary mb-4">Related resources</h3>
              <div className="space-y-2">
                {resource.relatedResources.map((res) => (
                  <Link
                    key={res.slug}
                    href={`/resources/${res.slug}`}
                    className="block rounded-card border border-border bg-bg-surface p-4 hover:border-accent-primary/40 transition-colors"
                  >
                    <span className="text-text-primary font-medium text-sm hover:text-accent-primary transition-colors">
                      {res.title} →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Bottom AskAI */}
          <div className="mt-8">
            <AskAIButton
              pageUrl={`/resources/${slug}`}
              pageType="resource"
              resourceTitle={resource.title}
            />
          </div>

          {/* Back */}
          <div className="mt-8 text-center">
            <Button href="/resources" variant="ghost" size="sm">
              ← Back to Resources
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
