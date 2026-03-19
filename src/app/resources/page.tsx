import { Metadata } from "next";
import Link from "next/link";
import { AskAIButton } from "@/components/ui/AskAIButton";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { itemListSchema, webPageSchema } from "@/lib/schemas";

// Update this date whenever meaningful content changes are made to this page
const PAGE_LAST_MODIFIED = "2026-03-19";

export const metadata: Metadata = {
  title: "Resources — AI, SEO & Web Development Guides",
  description:
    "In-depth guides and resources on AI automation, technical SEO, GEO, voice agents, and modern web development. Free, practical, and written for decision-makers.",
  alternates: { canonical: "/resources" },
};

const resources = [
  {
    slug: "ai-automation-guide-for-business",
    title: "The Business Leader's Guide to AI Automation",
    category: "AI Automation",
    description:
      "A practical, jargon-free guide to understanding what AI automation actually is, what it can do for your business, and how to evaluate whether it's worth investing in.",
    readTime: "12 min read",
    tags: ["AI Agents", "LLMs", "Process Automation", "ROI"],
    featured: true,
  },
  {
    slug: "geo-optimisation-guide",
    title: "GEO Optimisation: How to Appear in AI-Generated Answers",
    category: "SEO & GEO",
    description:
      "Generative Engine Optimisation (GEO) is the practice of making your content visible in ChatGPT, Perplexity, and Google AI Overviews. This guide covers everything you need to know.",
    readTime: "15 min read",
    tags: ["GEO", "AI Search", "ChatGPT", "Perplexity", "Content Strategy"],
    featured: true,
  },
  {
    slug: "technical-seo-audit-checklist",
    title: "Technical SEO Audit Checklist (2024)",
    category: "SEO & GEO",
    description:
      "A comprehensive, step-by-step checklist for auditing the technical health of your website. Covers crawlability, Core Web Vitals, structured data, and more.",
    readTime: "10 min read",
    tags: ["Technical SEO", "Site Audit", "Core Web Vitals", "Schema"],
    featured: false,
  },
  {
    slug: "ai-voice-agents-explainer",
    title: "AI Voice Agents: What They Are and When to Use Them",
    category: "AI Voice Agents",
    description:
      "A clear explanation of what AI voice agents are, how they differ from traditional IVR, and the specific use cases where they deliver real ROI — especially in insurance, healthcare, and e-commerce.",
    readTime: "8 min read",
    tags: ["AI Voice", "IVR", "Twilio", "Conversational AI"],
    featured: false,
  },
  {
    slug: "nextjs-saas-architecture",
    title: "Next.js SaaS Architecture: A Practical Starting Point",
    category: "Web & SaaS Development",
    description:
      "The patterns and decisions I use when starting a new SaaS product with Next.js — from folder structure to auth to multi-tenancy to deployment.",
    readTime: "18 min read",
    tags: ["Next.js", "SaaS", "Architecture", "TypeScript"],
    featured: false,
  },
];

export default function ResourcesPage() {
  const featured = resources.filter((r) => r.featured);
  const rest = resources.filter((r) => !r.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({
              title: "Resources — AI, SEO & Web Development Guides",
              description:
                "In-depth guides and resources on AI automation, technical SEO, GEO, voice agents, and modern web development. Free, practical, and written for decision-makers.",
              url: "/resources",
              datePublished: "2026-01-01",
              dateModified: PAGE_LAST_MODIFIED,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListSchema(
              resources.map((r) => ({
                name: r.title,
                description: r.description,
                url: `/resources/${r.slug}`,
              }))
            )
          ),
        }}
      />
      {/* Hero */}
      <section className="aurora-bg pt-32 pb-16">
        <div className="container relative z-10 max-w-3xl">
          <p className="text-accent-primary font-mono text-sm mb-3 tracking-wide uppercase">
            Free Resources
          </p>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Practical guides for building with AI.
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed">
            Long-form guides on AI automation, GEO, technical SEO, voice agents, and modern web
            development. Written for business owners and technical leads who want real depth —
            not surface-level takes.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <AskAIButton pageUrl="/resources" pageType="resource" />

          {/* Featured */}
          {featured.length > 0 && (
            <div className="mt-10 mb-12">
              <h2 className="text-sm font-mono uppercase tracking-widest text-text-muted mb-6">
                Featured guides
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featured.map((resource) => (
                  <Link
                    key={resource.slug}
                    href={`/resources/${resource.slug}`}
                    className="rounded-card border border-border bg-bg-surface p-6 card-hover block group"
                  >
                    <Badge variant="service" className="mb-4">
                      {resource.category}
                    </Badge>
                    <h3 className="font-display text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors mb-3 leading-snug">
                      {resource.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-text-muted text-xs font-mono">{resource.readTime}</span>
                      <span className="text-accent-primary text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                        Read →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All resources */}
          <div>
            <h2 className="text-sm font-mono uppercase tracking-widest text-text-muted mb-6">
              All resources
            </h2>
            <div className="space-y-4">
              {rest.map((resource) => (
                <Link
                  key={resource.slug}
                  href={`/resources/${resource.slug}`}
                  className="rounded-card border border-border bg-bg-surface p-5 card-hover block group flex items-start gap-5"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="service">{resource.category}</Badge>
                      <span className="text-text-muted text-xs font-mono">{resource.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors mb-1 leading-snug">
                      {resource.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                      {resource.description}
                    </p>
                  </div>
                  <span className="text-accent-primary text-sm font-medium group-hover:translate-x-1 transition-transform inline-block flex-shrink-0 mt-1 hidden sm:block">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-card border border-accent-primary/20 bg-accent-primary/5 p-8 text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-3">
              Want resources tailored to your industry?
            </h2>
            <p className="text-text-secondary mb-6 text-sm max-w-md mx-auto">
              I publish new guides regularly. Or reach out if there&apos;s a specific topic you&apos;d
              like me to cover.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get in touch →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
