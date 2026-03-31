import { Metadata } from "next";
import { ServicePageTemplate, ServicePageData } from "@/components/sections/ServicePageTemplate";
import { caseStudiesPreview } from "@/data/site-data";
import { webPageSchema } from "@/lib/schemas";

// Update this date whenever meaningful content changes are made to this page
const PAGE_LAST_MODIFIED = "2026-03-19";

export const metadata: Metadata = {
  title: "SaaS Development India — MVP Architect, B2B SaaS & Technical Co-Founder Consultant",
  description:
    "Hire a SaaS developer in India. Aryan Rawther (Apex Mind LLP) builds B2B SaaS MVPs, multi-tenant architectures, and full-stack products from idea to launch. Technical co-founder alternative for founders without a CTO. Based in Bengaluru, working globally.",
  alternates: { canonical: "/services/saas-development" },
  keywords: [
    "SaaS developer India",
    "hire SaaS developer India",
    "SaaS MVP development India",
    "MVP development consultant India",
    "B2B SaaS architect India",
    "B2B SaaS development company India",
    "technical co-founder India",
    "technical co-founder consultant",
    "CTO as a service India",
    "startup CTO consultant India",
    "SaaS product development service India",
    "multi-tenant SaaS development",
    "SaaS startup developer India",
    "SaaS technical consultant India",
    "product development consultant India",
    "SaaS development Bengaluru",
  ],
};

const data: ServicePageData = {
  name: "SaaS Product Development",
  slug: "saas-development",
  href: "/services/saas-development",
  h1: "SaaS Product Development",
  ctaText: "Discuss your SaaS idea →",
  tagline: "MVP architecture · Multi-tenant SaaS · B2B product design",
  description:
    "I help founders and businesses build SaaS products — from the first line of architecture to a working, deployable product. This is a fundamentally different engagement from standard web development. You need someone who thinks about your product as a business, not just a codebase.",
  deliverables: [
    "MVP architecture and rapid prototyping — from idea to working product",
    "Multi-tenant SaaS architecture design — data isolation, tenant management, scalable infrastructure",
    "B2B product design — feature prioritisation, user flows, monetisation strategy",
    "API-first product architecture — usage tracking, rate limiting, API key systems",
    "Platform and marketplace architecture — vendor/buyer flows, listing systems",
    "SaaS pricing and monetisation strategy consulting",
    "Technical product roadmap development",
    "Procurement technology systems — RFP/RFI workflows, specification comparison, vendor evaluation",
  ],
  whoFor: [
    "Founders with a validated idea who need a technical partner to architect and build the MVP",
    "Businesses wanting to productise an internal tool or workflow into a SaaS",
    "Non-technical founders who need a technical co-founder equivalent for the build phase",
    "Companies in procurement, B2B commerce, or marketplace spaces needing specialised domain knowledge",
    "Teams that have started building but need architectural guidance to scale",
    "Businesses evaluating build vs. buy for a SaaS product",
  ],
  process: [
    {
      title: "Product scoping",
      description:
        "We define the MVP scope rigorously — what&apos;s in, what&apos;s out, and why. I push back on scope creep before it happens. A focused MVP beats a sprawling one every time.",
    },
    {
      title: "Architecture design",
      description:
        "I design the technical architecture: data model, multi-tenancy approach, API design, authentication, billing integration. This is the most important phase — decisions here compound.",
    },
    {
      title: "Milestone build",
      description:
        "Backend first, then frontend, then integrations. Each milestone delivered, tested, and approved before the next begins. You see real progress, not promises.",
    },
    {
      title: "Launch and roadmap",
      description:
        "Deployment, monitoring setup, documentation, and a post-launch support period. I also help define the post-MVP roadmap — what to build next and in what order.",
    },
  ],
  tools: [
    { name: "Python" },
    { name: "FastAPI" },
    { name: "Node.js" },
    { name: "React" },
    { name: "Next.js" },
    { name: "PostgreSQL" },
    { name: "MongoDB" },
    { name: "Stripe" },
    { name: "Redis" },
    { name: "Docker" },
    { name: "Railway" },
    { name: "Vercel" },
  ],
  faqs: [
    {
      question: "What is multi-tenant SaaS architecture?",
      answer:
        "Multi-tenant SaaS means one instance of the software serves multiple customers (tenants), with their data kept isolated and their experience potentially customised. The architecture decisions — shared database vs. separate databases, row-level security, tenant identification — are made upfront and affect everything downstream.",
    },
    {
      question: "Can you act as a technical co-founder?",
      answer:
        "For scoped engagements, yes — I take full ownership of the technical architecture and build decisions, advising on technology choices, infrastructure costs, and product direction. This is different from a full-time co-founder role — I work on a project basis and hand off cleanly.",
    },
    {
      question: "How do you approach MVP scoping?",
      answer:
        "I start by identifying the one core problem the MVP must solve and strip everything else. A focused MVP that does one thing excellently is more valuable than a broad one that does many things poorly. I document scope explicitly and include an out-of-scope section in the SOW.",
    },
    {
      question: "Do you have experience with procurement technology?",
      answer:
        "Yes. I built SpecLens AI — a procurement SaaS platform with RFP workflows, specification comparison engines, and vendor evaluation logic. If you&apos;re building in the procurement, B2B commerce, or marketplace space, I bring both engineering and domain expertise.",
    },
    {
      question: "Do you handle Stripe integration and SaaS billing?",
      answer:
        "Yes. Stripe billing — subscriptions, usage-based pricing, trial periods, and billing portal — is part of my standard SaaS development scope. I also design the pricing model logic (seats, usage tiers, flat rate) as part of the product architecture phase.",
    },
    {
      question: "What happens after the MVP launches?",
      answer:
        "I provide post-launch support (duration defined in the SOW), help you interpret early user feedback, and can assist with the next phase of development. Many clients continue with me on a retainer or milestone basis after MVP launch.",
    },
  ],
  relatedCaseStudies: caseStudiesPreview.filter(cs => cs.service.includes("SaaS Product Development")),
  relatedServices: [
    { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration", description: "Prompt engineering, SaaS AI-ification, and custom AI voice agents." },
    { name: "Web Development", href: "/services/web-development", description: "Modern frontend and backend development — Next.js, React, FastAPI, and full-stack." },
  ],
  relatedResources: [
    { title: "Next.js SaaS Architecture", href: "/resources/nextjs-saas-architecture", type: "guide" },
    { title: "The Business Leader's Guide to AI Automation", href: "/resources/ai-automation-guide-for-business", type: "guide" },
  ],
  relatedGlossaryTerms: [
    { name: "Multi-Tenant SaaS", slug: "multi-tenant-saas" },
    { name: "MVP", slug: "mvp" },
    { name: "SaaS Metrics", slug: "saas-metrics" },
    { name: "Technical Co-Founder", slug: "technical-co-founder" },
    { name: "API", slug: "api" },
    { name: "Webhook", slug: "webhook" },
    { name: "Microservices", slug: "microservices" },
    { name: "CI/CD", slug: "ci-cd" },
    { name: "Headless Architecture", slug: "headless-architecture" },
  ],
};

export default function SaaSDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({
              title: "SaaS Development India — MVP Architect, B2B SaaS & Technical Co-Founder Consultant",
              description:
                "Hire a SaaS developer in India. Aryan Rawther (Apex Mind LLP) builds B2B SaaS MVPs, multi-tenant architectures, and full-stack products from idea to launch. Technical co-founder alternative for founders without a CTO.",
              url: "/services/saas-development",
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
