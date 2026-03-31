import { Metadata } from "next";
import { ServicePageTemplate, ServicePageData } from "@/components/sections/ServicePageTemplate";
import { caseStudiesPreview } from "@/data/site-data";
import { webPageSchema } from "@/lib/schemas";

// Update this date whenever meaningful content changes are made to this page
const PAGE_LAST_MODIFIED = "2026-03-19";

export const metadata: Metadata = {
  title: "Next.js & React Web Developer India — Full-Stack, FastAPI & TypeScript Consultant",
  description:
    "Hire a full-stack web developer in India. Aryan Rawther (Apex Mind LLP) builds modern web applications using Next.js, React, TypeScript, FastAPI, and Node.js. Specialising in performance-optimised, SEO-friendly web apps for SaaS companies and startups.",
  alternates: { canonical: "/services/web-development" },
  keywords: [
    "hire Next.js developer India",
    "Next.js developer consultant India",
    "React developer India",
    "full stack developer India",
    "web developer India",
    "TypeScript developer India",
    "FastAPI backend developer India",
    "Node.js developer India",
    "MERN stack developer India",
    "web app development consultant India",
    "freelance web developer India",
    "hire full stack developer India",
    "API development consultant India",
    "web application developer Bengaluru",
    "Next.js consultant Bengaluru",
  ],
};

const data: ServicePageData = {
  name: "Web Development",
  slug: "web-development",
  href: "/services/web-development",
  h1: "Web Development",
  ctaText: "Discuss your web project →",
  tagline: "Next.js · FastAPI · Full-stack MERN",
  description:
    "I build modern, production-grade web applications — from performant frontends with Next.js and React to robust Python backends with FastAPI. Every project is built with SEO, performance, and maintainability as first-class requirements, not afterthoughts.",
  deliverables: [
    "Frontend development — React, Next.js, Tailwind CSS, responsive design",
    "Backend development — Python (FastAPI, Flask), Node.js, REST API design",
    "Full-stack MERN applications (MongoDB, Express, React, Node)",
    "API architecture and design — RESTful, webhook integrations",
    "Third-party API integrations — payment gateways, Google APIs, enterprise tools",
    "Authentication systems — API key management, OAuth, JWT",
    "Database design — PostgreSQL, MongoDB, Redis",
    "Deployment and DevOps — Vercel, Railway, Docker basics",
  ],
  whoFor: [
    "Founders who need a technical partner, not just a code vendor",
    "Businesses that need a backend API built and documented properly",
    "Teams that need to integrate multiple third-party services into one coherent system",
    "Companies migrating from legacy systems to modern stacks",
    "SaaS products that need a well-structured frontend with good SEO",
    "Startups that need to move fast without creating unmaintainable technical debt",
  ],
  process: [
    {
      title: "Requirements and architecture",
      description:
        "I document the full technical requirements, propose the architecture, and get your approval before writing a line of code. No surprises mid-project.",
    },
    {
      title: "Milestone-based build",
      description:
        "I build in milestones — frontend, backend, integrations — delivering each for your review. You test and approve each milestone before the next begins.",
    },
    {
      title: "Testing and QA",
      description:
        "Manual testing across browsers and devices, API testing, and edge case coverage. I don&apos;t ship code I haven&apos;t personally tested.",
    },
    {
      title: "Deployment and handoff",
      description:
        "Deployment to your chosen platform, environment variable setup, full documentation, and a recorded walkthrough. Your team can pick it up and run.",
    },
  ],
  tools: [
    { name: "Next.js" },
    { name: "React" },
    { name: "Tailwind CSS" },
    { name: "TypeScript" },
    { name: "Python" },
    { name: "FastAPI" },
    { name: "Flask" },
    { name: "Node.js" },
    { name: "Express" },
    { name: "MongoDB" },
    { name: "PostgreSQL" },
    { name: "Redis" },
    { name: "REST APIs" },
    { name: "Webhooks" },
    { name: "WebSockets" },
    { name: "Vercel" },
    { name: "Railway" },
    { name: "Docker" },
    { name: "Git" },
  ],
  faqs: [
    {
      question: "What tech stack do you specialise in?",
      answer:
        "My primary stack is Next.js + TypeScript for frontend, Python (FastAPI) for backend, and PostgreSQL or MongoDB for data. I also work with Node.js / Express for JavaScript-first backends and full MERN stack applications. I recommend the stack that fits your project, not the one I use for everything.",
    },
    {
      question: "Do you do design as well as development?",
      answer:
        "I handle design decisions that are part of the engineering process — responsive layouts, component architecture, accessibility. For brand identity and visual design (logos, illustrations, full UI design), I work with specialist designers when the project requires it.",
    },
    {
      question: "Can you work with an existing codebase?",
      answer:
        "Yes — I regularly join projects mid-stream. I start with a codebase review to understand the existing architecture before proposing changes. I don&apos;t rewrite things that work — I add to them carefully.",
    },
    {
      question: "Do you handle deployment and hosting?",
      answer:
        "Yes. My default deployment targets are Vercel (for Next.js frontend) and Railway (for Python backend). I can also deploy to AWS, GCP, or DigitalOcean if you have existing infrastructure. DNS, environment variables, and CI/CD pipelines are all part of the handoff.",
    },
    {
      question: "What does documentation look like at handoff?",
      answer:
        "Every project ships with: an architecture overview doc, API endpoint documentation, a setup guide for a new developer, environment variable reference, and a recorded walkthrough of the codebase. I write code and docs as if someone else will maintain them — because they will.",
    },
    {
      question: "How do you handle scope changes during a project?",
      answer:
        "Scope changes are handled in writing, every time — even small ones. I draft a brief amendment to the SOW describing the change, the impact on timeline, and any cost implications. You approve it before I start. No surprise invoices.",
    },
  ],
  relatedCaseStudies: caseStudiesPreview.filter(cs => cs.service.includes("Web Development")),
  relatedServices: [
    { name: "SaaS Product Development", href: "/services/saas-development", description: "MVP architecture, multi-tenant SaaS, and B2B product design." },
    { name: "SEO Services", href: "/services/seo-services", description: "Technical SEO, content strategy, and GEO optimisation for organic growth." },
  ],
  relatedResources: [
    { title: "Next.js SaaS Architecture", href: "/resources/nextjs-saas-architecture", type: "guide" },
  ],
  relatedGlossaryTerms: [
    { name: "API", slug: "api" },
    { name: "Server-Side Rendering", slug: "server-side-rendering" },
    { name: "Headless Architecture", slug: "headless-architecture" },
    { name: "WebSocket", slug: "websocket" },
    { name: "Webhook", slug: "webhook" },
    { name: "Microservices", slug: "microservices" },
    { name: "CI/CD", slug: "ci-cd" },
    { name: "Core Web Vitals", slug: "core-web-vitals" },
    { name: "Technical SEO", slug: "technical-seo" },
  ],
};

export default function WebDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({
              title: "Next.js & React Web Developer India — Full-Stack, FastAPI & TypeScript Consultant",
              description:
                "Hire a full-stack web developer in India. Aryan Rawther (Apex Mind LLP) builds modern web applications using Next.js, React, TypeScript, FastAPI, and Node.js. Specialising in performance-optimised, SEO-friendly web apps for SaaS companies and startups.",
              url: "/services/web-development",
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
