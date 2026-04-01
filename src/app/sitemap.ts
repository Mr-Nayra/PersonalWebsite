import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aryanrawther.com";

type Route = {
  url: string;
  lastModified: string;
  changeFrequency: "monthly" | "yearly" | "weekly";
  priority: number;
};

const corePages: Route[] = [
  { url: "/",                                          lastModified: "2026-03-20", changeFrequency: "weekly",  priority: 1.0 },
  { url: "/about",                                     lastModified: "2026-03-20", changeFrequency: "monthly", priority: 0.9 },
  { url: "/about/beyond-work",                         lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/services",                                  lastModified: "2026-03-20", changeFrequency: "monthly", priority: 0.9 },
  { url: "/services/ai-automation-consulting",         lastModified: "2026-03-20", changeFrequency: "monthly", priority: 0.9 },
  { url: "/services/ai-integration",                   lastModified: "2026-03-20", changeFrequency: "monthly", priority: 0.9 },
  /* /services/ai-integration-agentic-workflows removed — redirects to /services/ai-integration (listed above) */
  { url: "/services/seo-services",                     lastModified: "2026-03-20", changeFrequency: "monthly", priority: 0.9 },
  { url: "/services/web-development",                  lastModified: "2026-03-20", changeFrequency: "monthly", priority: 0.9 },
  { url: "/services/saas-development",                 lastModified: "2026-03-20", changeFrequency: "monthly", priority: 0.9 },
  { url: "/contact",                                   lastModified: "2026-03-20", changeFrequency: "monthly", priority: 0.8 },
  { url: "/faq",                                       lastModified: "2026-03-20", changeFrequency: "monthly", priority: 0.7 },
  { url: "/process",                                   lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.7 },
];

const productAndCaseStudyPages: Route[] = [
  { url: "/products",                                        lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.8 },
  { url: "/products/speclens-ai",                            lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.8 },
  { url: "/products/mediamitra",                             lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.7 },
  { url: "/products/geo-checker",                            lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.7 },
  { url: "/case-studies",                                    lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.8 },
  { url: "/case-studies/seo-internal-linking-ai-agent",      lastModified: "2026-03-01", changeFrequency: "yearly",  priority: 0.7 },
  { url: "/case-studies/autonomous-inbound-email-agent",     lastModified: "2026-03-01", changeFrequency: "yearly",  priority: 0.7 },
  { url: "/case-studies/speclens-ai-procurement-saas",       lastModified: "2026-03-01", changeFrequency: "yearly",  priority: 0.7 },
  { url: "/case-studies/photoshoprequest-ai-editor",         lastModified: "2026-03-01", changeFrequency: "yearly",  priority: 0.7 },
  { url: "/case-studies/healthcare-rcm-automation",          lastModified: "2026-03-01", changeFrequency: "yearly",  priority: 0.7 },
  { url: "/case-studies/combinehealth-seo-redesign",         lastModified: "2026-03-01", changeFrequency: "yearly",  priority: 0.7 },
  { url: "/case-studies/ai-ivr-insurance-agent",             lastModified: "2026-03-01", changeFrequency: "yearly",  priority: 0.7 },
];

const resourcePages: Route[] = [
  { url: "/resources",                                  lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.7 },
  { url: "/resources/ai-automation-guide-for-business", lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.7 },
  { url: "/resources/geo-optimisation-guide",           lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.7 },
  { url: "/resources/technical-seo-audit-checklist",    lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/resources/ai-voice-agents-explainer",        lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/resources/nextjs-saas-architecture",         lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
];

const glossaryPages: Route[] = [
  { url: "/glossary", lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.7 },
  // AI & Automation
  { url: "/glossary/agentic-ai",              lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/ai-agent",                lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/ai-orchestration",        lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/chain-of-thought",        lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/context-window",          lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/embeddings",              lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/fine-tuning",             lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/function-calling",        lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/hallucination",           lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/langgraph",               lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/large-language-model",    lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/model-context-protocol",  lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/natural-language-processing", lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/prompt-engineering",      lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/rag",                     lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/rcm",                     lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/vector-database",         lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/zero-shot-prompting",     lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  // SEO & GEO
  { url: "/glossary/ai-overviews",            lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/backlink",                lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/canonical-tag",           lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/core-web-vitals",         lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/crawl-budget",            lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/domain-authority",        lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/e-e-a-t",                lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/entity-seo",             lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/geo",                     lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/internal-linking",        lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/knowledge-graph",         lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/llms-txt",               lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/programmatic-seo",        lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/robots-txt",              lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/search-intent",           lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/semantic-seo",            lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/structured-data",         lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/technical-seo",           lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/ai-citation",            lastModified: "2026-04-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/ai-crawlers",            lastModified: "2026-04-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/ai-search-engine",       lastModified: "2026-04-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/answer-first-content",   lastModified: "2026-04-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/content-freshness",      lastModified: "2026-04-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/entity-disambiguation",  lastModified: "2026-04-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/faqpage-schema",         lastModified: "2026-04-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/google-search-console",  lastModified: "2026-04-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/json-ld",                lastModified: "2026-04-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/meta-tags",              lastModified: "2026-04-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/mobile-first-indexing",  lastModified: "2026-04-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/open-graph-tags",        lastModified: "2026-04-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/page-speed",             lastModified: "2026-04-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/sameas",                 lastModified: "2026-04-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/sitemap",                lastModified: "2026-04-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/topical-authority",      lastModified: "2026-04-01", changeFrequency: "monthly", priority: 0.6 },
  // AI Voice
  { url: "/glossary/ivr",                     lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/latency",                 lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/speech-to-text",          lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/text-to-speech",          lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/voice-cloning",           lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  // Web & SaaS
  { url: "/glossary/api",                     lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/ci-cd",                   lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/headless-architecture",   lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/microservices",           lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/multi-tenant-saas",       lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/mvp",                     lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/saas-metrics",            lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/server-side-rendering",   lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/technical-co-founder",    lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/webhook",                 lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/glossary/websocket",               lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
];

const otherPages: Route[] = [
  { url: "/testimonials",    lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.6 },
  { url: "/industries/saas",       lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/industries/edtech",     lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/industries/healthcare", lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/industries/ecommerce",  lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/industries/startups",   lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/location/bangalore",    lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/location/india",        lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/location/remote",       lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.6 },
  { url: "/privacy-policy",        lastModified: "2026-01-01", changeFrequency: "yearly",  priority: 0.2 },
  { url: "/terms-of-service",      lastModified: "2026-01-01", changeFrequency: "yearly",  priority: 0.2 },
  { url: "/thank-you",             lastModified: "2026-01-01", changeFrequency: "yearly",  priority: 0.2 },
  { url: "/sitemap",               lastModified: "2026-03-20", changeFrequency: "monthly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Blog pages — use actual updatedAt from post data
  const blogIndex: Route = {
    url: "/blog",
    lastModified: "2026-03-20",
    changeFrequency: "weekly",
    priority: 0.8,
  };

  const blogPostPages: Route[] = Object.values(blogPosts).map((post) => ({
    url: `/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const allRoutes = [
    ...corePages,
    ...productAndCaseStudyPages,
    blogIndex,
    ...blogPostPages,
    ...resourcePages,
    ...glossaryPages,
    ...otherPages,
  ];

  return allRoutes.map((route) => ({
    url: `${siteUrl}${route.url}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
