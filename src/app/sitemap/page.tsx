import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "HTML sitemap for all pages on aryanrawther.com.",
  alternates: { canonical: "/sitemap" },
};

const sitemapSections = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Beyond the Work", href: "/about/beyond-work" },
      { label: "Contact", href: "/contact" },
      { label: "How I Work", href: "/process" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Services Overview", href: "/services" },
      { label: "AI Automation Consulting", href: "/services/ai-automation-consulting" },
      { label: "AI Integration & Agentic Workflows", href: "/services/ai-integration" },
      { label: "SEO Services", href: "/services/seo-services" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "SaaS Development", href: "/services/saas-development" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Products", href: "/products" },
      { label: "SpecLens AI", href: "/products/speclens-ai" },
      { label: "MediaMitra", href: "/products/mediamitra" },
      { label: "GEO Checker", href: "/products/geo-checker" },
    ],
  },
  {
    title: "Case Studies",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "AI IVR Insurance Agent System", href: "/case-studies/ai-ivr-insurance-agent" },
      { label: "SpecLens AI — Procurement SaaS", href: "/case-studies/speclens-ai-procurement-saas" },
      { label: "Healthcare Insurance Verification & RCM Automation", href: "/case-studies/healthcare-rcm-automation" },

    ],
  },
  {
    title: "Blog",
    links: [
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resources", href: "/resources" },
      { label: "The Business Leader's Guide to AI Automation", href: "/resources/ai-automation-guide-for-business" },
      { label: "GEO Optimisation Guide", href: "/resources/geo-optimisation-guide" },
      { label: "Technical SEO Audit Checklist", href: "/resources/technical-seo-audit-checklist" },
      { label: "AI Voice Agents Explainer", href: "/resources/ai-voice-agents-explainer" },
      { label: "Next.js SaaS Architecture", href: "/resources/nextjs-saas-architecture" },
    ],
  },
  {
    title: "Glossary",
    links: [
      { label: "Glossary", href: "/glossary" },
      { label: "AI Agent", href: "/glossary/ai-agent" },
      { label: "Large Language Model (LLM)", href: "/glossary/large-language-model" },
      { label: "GEO (Generative Engine Optimisation)", href: "/glossary/geo" },
      { label: "RAG (Retrieval-Augmented Generation)", href: "/glossary/rag" },
      { label: "IVR", href: "/glossary/ivr" },
      { label: "Core Web Vitals", href: "/glossary/core-web-vitals" },
      { label: "Structured Data / Schema Markup", href: "/glossary/structured-data" },
      { label: "Multi-tenant SaaS", href: "/glossary/multi-tenant-saas" },
      { label: "API", href: "/glossary/api" },
      { label: "Prompt Engineering", href: "/glossary/prompt-engineering" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "SaaS", href: "/industries/saas" },
      { label: "EdTech", href: "/industries/edtech" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "E-commerce", href: "/industries/ecommerce" },
      { label: "Startups", href: "/industries/startups" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Bangalore", href: "/location/bangalore" },
      { label: "India", href: "/location/india" },
      { label: "Remote", href: "/location/remote" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <section className="aurora-bg pt-32 pb-12">
        <div className="container relative z-10 max-w-4xl">
          <h1 className="font-display text-5xl font-bold text-text-primary mb-4">Sitemap</h1>
          <p className="text-text-secondary text-lg">All pages on aryanrawther.com</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section) => (
              <div key={section.title}>
                <h2 className="font-semibold text-text-primary mb-3 text-sm uppercase tracking-wider font-mono">
                  {section.title}
                </h2>
                <ul className="space-y-1.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-text-secondary text-sm hover:text-accent-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
