import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AskAIButton } from "@/components/ui/AskAIButton";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import Link from "next/link";
import { caseStudiesPreview } from "@/data/site-data";
import { articleSchema } from "@/lib/schemas";

const serviceLinks: Record<string, string> = {
  "AI Automation Consulting": "/services/ai-automation-consulting",
  "AI Integration & Agentic Workflows": "/services/ai-integration",
  "SEO Services": "/services/seo-services",
  "Web Development": "/services/web-development",
  "SaaS Development": "/services/saas-development",
  "SaaS Product Development": "/services/saas-development",
  "AI Voice Agents": "/services/ai-integration",
};

const industryLinks: Record<string, string> = {
  "HealthTech": "/industries/healthcare",
  "Healthcare / RCM": "/industries/healthcare",
  "HealthTech / SaaS": "/industries/healthcare",
  "Insurance": "/industries/healthcare",
  "B2B / Procurement": "/industries/saas",
  "Consumer / AI SaaS": "/industries/saas",
  "Internal Tool / SEO": "/industries/saas",
};

const productLinks: Record<string, { name: string; href: string; cta: string }> = {
  "speclens-ai-procurement-saas": {
    name: "SpecLens AI",
    href: "/products/speclens-ai",
    cta: "Try SpecLens AI →",
  },
  "photoshoprequest-ai-editor": {
    name: "PhotoshopRequest",
    href: "/products/photoshoprequest",
    cta: "Try PhotoshopRequest →",
  },
};

// Static case study content — replace with real content
const caseStudyContent: Record<
  string,
  {
    title: string;
    slug: string;
    industry: string;
    service: string[];
    result: string;
    date: string;
    client: string;
    timeline: string;
    problem: string[];
    approach: { title: string; description: string; image?: { src: string; alt: string } }[];
    results: { metric: string; label: string }[];
    takeaways: string[];
    excerpt: string;
    heroImage?: { src: string; alt: string };
    resultsImage?: { src: string; alt: string };
  }
> = {
  "seo-internal-linking-ai-agent": {
    title: "AI SEO Agent: Internal Linking & Backlink Graph",
    slug: "seo-internal-linking-ai-agent",
    industry: "Internal Tool / SEO",
    service: ["AI Integration & Agentic Workflows", "SEO Services"],
    result: "Automated 400-page audits (20 hrs/week saved)",
    date: "2024-10-01",
    client: "Internal Tool",
    timeline: "4 weeks",
    heroImage: {
      src: "/images/case-studies/seo-agent-hero.png",
      alt: "AI-powered network graph visualization of website internal linking structure",
    },
    resultsImage: {
      src: "/images/case-studies/seo-agent-results.png",
      alt: "Before and after comparison showing 20 hours per week of manual audit time reduced to near zero with AI automation",
    },
    excerpt:
      "Built a dual-agent LangGraph system using Firecrawl and Python to autonomously map, graph, and optimize internal linking structures and backlink quality for a 400+ page website.",
    problem: [
      "The SEO team was managing a growing website with over 400 pages.",
      "Manually keeping track of context to create optimal internal links for new content became impossible.",
      "Orphan pages were accumulating, and outdated, irrelevant pages (like a legacy conference game) were mistakenly being indexed, dragging down domain authority.",
      "Evaluating backlinks from Google Search Console for relevance against specific site content was a slow, 20-hour-per-week manual process.",
    ],
    approach: [
      {
        title: "Site Ingestion & Graphing",
        description: "Used Firecrawl to scrape all 400 site pages in under 20 minutes. A custom Python script mapped all inbound and outbound links, visually graphing the site architecture to instantly expose orphan pages.",
        image: {
          src: "/images/case-studies/seo-agent-site-graph.png",
          alt: "Force-directed node graph showing website architecture with healthy pages in cyan and orphan pages highlighted in orange",
        },
      },
      {
        title: "Internal Linking Agent",
        description: "Engineered a LangGraph agent that reads the summaries of all pages. When a new page is published, the agent instantly recommends the most contextually relevant existing pages to link to, providing exact priority and rationale. It also flags anomalies, successfully identifying legacy pages that needed to be de-indexed.",
        image: {
          src: "/images/case-studies/seo-agent-workflow.png",
          alt: "Dual-agent workflow diagram showing Firecrawl to Python processing to LangGraph agents to web dashboard",
        },
      },
      {
        title: "Backlink Evaluation Agent",
        description: "Built a secondary agent that cross-references the site's page summaries with Google Search Console backlink exports. It evaluates the contextual relevance of referring domains, grading backlinks as 'good' or 'bad' to protect domain authority.",
      },
      {
        title: "Web Dashboard",
        description: "Wrapped the python logic in a clean web dashboard for the SEO team to run audits and view link graphs effortlessly.",
        image: {
          src: "/images/case-studies/seo-agent-dashboard.png",
          alt: "Dark-themed SEO dashboard showing internal linking node graph and link recommendations panel",
        },
      },
    ],
    results: [
      { metric: "20 hrs", label: "Manual Audit Time Saved / Week" },
      { metric: "20 mins", label: "To Crawl & Graph 400 Pages" },
      { metric: "Increased", label: "Domain Authority via Clean Architecture" },
    ],
    takeaways: [
      "Humans cannot hold the contextual map of a 400-page site in their heads; AI agents armed with RAG and graph logic excel at systemic semantic linking.",
      "Crawling an entire site is only heavy once. An intelligent agent architecture allows for instant, delta-based updates whenever a new page drops.",
    ],
  },
  "autonomous-inbound-email-agent": {
    title: "Autonomous Inbound Sales & Scheduling Agent",
    slug: "autonomous-inbound-email-agent",
    industry: "HealthTech",
    service: ["AI Integration & Agentic Workflows"],
    result: "Automated 15+ daily inquiries & scheduling",
    date: "2024-12-01",
    client: "HealthTech Company (Confidential)",
    timeline: "3 weeks",
    excerpt:
      "Engineered an autonomous email agent using Gmail AI/PubSub, Perplexity, and OpenAI to research inbound leads, check calendars, and draft personalized replies instantly, eliminating manual work for the C-suite.",
    problem: [
      "The client received ~15 inbound sales inquiries daily from their website's contact form.",
      "The CEO and COO manually researched each prospect's company and cross-referenced their own calendars to draft a personalized reply with available meeting times.",
      "Significant timezone differences (US clients vs. local timezone) caused delays in response times, slowing down the sales pipeline and taking a heavy toll on executive time.",
    ],
    approach: [
      {
        title: "Instant Ingestion",
        description: "Integrated the Gmail API with Google Cloud Pub/Sub to instantly push incoming contact form emails to a custom Python backend via webhooks.",
      },
      {
        title: "Agentic Research",
        description: "Built an AI agent using Perplexity to autonomously search the web for the inquiring company's details, including revenue, industry focus, and the specific person who filled out the form.",
      },
      {
        title: "Contextual Generation",
        description: "Leveraged OpenAI to synthesize the Perplexity research and the context of the inquiry into a highly personalized, context-aware email draft.",
      },
      {
        title: "Scheduling & Human-in-the-Loop",
        description: "Integrated the system to check CEO/COO calendar availability and append available time slots to the email. The system routed the draft to a Slack channel for a quick 'Human-in-the-Loop' approval before sending, ensuring quality while maintaining speed.",
      },
    ],
    results: [
      { metric: "15+", label: "Inquiries Handled Daily" },
      { metric: "Instant", label: "Response Draft Turnaround" },
      { metric: "Eliminated", label: "Executive Manual Research Time" },
    ],
    takeaways: [
      "Combining real-time web search (Perplexity) with LLM generation transforms generic auto-replies into high-converting, personalized sales outreach.",
      "Human-in-the-loop via Slack is the perfect transitional step for companies adopting autonomous agents, building trust in the system's decisions before going fully autopilot.",
    ],
  },
  "ai-ivr-insurance-agent": {
    title: "AI IVR Insurance Agent System",
    slug: "ai-ivr-insurance-agent",
    industry: "Insurance",
    service: ["AI Voice Agents"],
    result: "↓ 70% call handling time",
    date: "2024-10-01",
    client: "Insurance Company (confidential)",
    timeline: "10 weeks",
    excerpt:
      "Built a production-grade AI voice agent system for an insurance company — handling inbound calls, claims intake, and customer routing using Twilio + Deepgram + OpenAI.",
    problem: [
      "[TODO: Describe the client's situation — what was their call centre handling? What was the volume? What was the manual cost?]",
      "[TODO: What specific pain points did they have — wait times, handling time, agent burnout, after-hours coverage?]",
      "[TODO: Why did they approach Aryan? What had they tried before?]",
    ],
    approach: [
      {
        title: "Call flow audit",
        description:
          "[TODO: Describe what you found when you mapped their current call flows. What were the most common call types? What data did agents need?]",
      },
      {
        title: "Architecture design",
        description:
          "[TODO: Describe the technical architecture — Twilio for call handling, Deepgram for STT, OpenAI for reasoning, TTS for responses. How was session state managed?]",
      },
      {
        title: "Build and test",
        description:
          "[TODO: How did the build proceed? What were the hardest technical challenges — latency, accent handling, edge cases?]",
      },
      {
        title: "Production deployment",
        description:
          "[TODO: How was it deployed? What does the monitoring setup look like? What happened in the first week of live calls?]",
      },
    ],
    results: [
      { metric: "↓ 70%", label: "Average call handling time" },
      { metric: "24/7", label: "Coverage (was 8 hours)" },
      { metric: "↑ 85%", label: "First-call resolution rate" },
      { metric: "↓ 40%", label: "Cost per handled call" },
    ],
    takeaways: [
      "[TODO: Key insight 1 — e.g., 'Real-time audio streaming latency is the hardest engineering problem in voice AI — every design decision flows from it.']",
      "[TODO: Key insight 2]",
      "[TODO: Key insight 3]",
      "[TODO: Key insight 4]",
    ],
  },
  "speclens-ai-procurement-saas": {
    title: "SpecLens AI — Procurement SaaS Platform",
    slug: "speclens-ai-procurement-saas",
    industry: "B2B / Procurement",
    service: ["SaaS Development"],
    result: "MVP live in 8 weeks",
    date: "2024-08-01",
    client: "SpecLens AI (own product)",
    timeline: "8 weeks to MVP",
    excerpt:
      "Architected and built a full-stack procurement SaaS platform with AI-powered specification comparison, RFP workflows, and vendor evaluation.",
    problem: [
      "[TODO: Describe the problem in procurement that SpecLens solves — specification comparison, RFP workflows, etc.]",
      "[TODO: What was the market gap? Who was the target user?]",
    ],
    approach: [
      {
        title: "Product scoping",
        description: "[TODO: How did you define the MVP scope? What did you cut?]",
      },
      {
        title: "Architecture",
        description: "[TODO: What tech stack? Why? How was multi-tenancy handled?]",
      },
      {
        title: "Build",
        description: "[TODO: Key milestones in the build — frontend, backend, AI features]",
      },
    ],
    results: [
      { metric: "8 weeks", label: "Idea to working MVP" },
      { metric: "Multi-tenant", label: "SaaS architecture" },
      { metric: "AI-powered", label: "Specification comparison" },
    ],
    takeaways: [
      "[TODO: Key insight from building SpecLens]",
      "[TODO: What you'd do differently]",
      "[TODO: Domain expertise gained]",
    ],
  },

  "photoshoprequest-ai-editor": {
    title: "AI-Powered Photo Editor Pipeline",
    slug: "photoshoprequest-ai-editor",
    industry: "Consumer / AI SaaS",
    service: ["SaaS Development", "AI Integration & Agentic Workflows"],
    result: "Automated editor & validator loop",
    date: "2024-11-01",
    client: "PhotoshopRequest (own product)",
    timeline: "Beta Live",
    excerpt:
      "Built an AI-powered photo editing platform inspired by r/photoshoprequest, featuring an automated editor-validator pipeline using Gemini, Next.js, and PayPal integrations.",
    problem: [
      "Noticed high demand on r/photoshoprequest for simple edits that could be mostly automated by AI.",
      "Users wanted high-quality edits without losing image resolution, which many basic AI tools fail to provide.",
      "The process of explaining an edit to an AI and getting a good output is still highly manual and trial-and-error for the average user.",
    ],
    approach: [
      {
        title: "Agentic Architecture",
        description: "Built a dual-agent system. An 'editor' agent looks at the image and user description, generating a detailed prompt for the underlying image generation model. A 'validator' agent checks the output against the original request and sends it back to the editor if it fails, creating an automated refinement loop.",
      },
      {
        title: "Quality Preservation",
        description: "Implemented a pipeline that ensures the core image quality and resolution are maintained through the edit process.",
      },
      {
        title: "Monetization & Fallback",
        description: "Integrated PayPal for seamless checkout when users are satisfied with the AI result. Added a fallback option where users can request human editors if the AI fails to meet their expectations.",
      },
      {
        title: "SEO Optimization",
        description: "Performed targeted SEO to capture search traffic for 'Photoshop request' and related keywords, creating a dashboard to track visibility.",
      },
    ],
    results: [
      { metric: "Automated", label: "Editor-Validator AI Loop" },
      { metric: "Next.js", label: "Full-Stack Frontend" },
      { metric: "PayPal", label: "Integrated Payments" },
    ],
    takeaways: [
      "Agentic validation loops significantly increase the success rate of generative AI tasks compared to zero-shot prompting.",
      "A hybrid approach (AI first, human fallback) builds trust and guarantees the user ultimately gets what they need.",
    ],
  },
  "healthcare-rcm-automation": {
    title: "Healthcare Insurance Verification & RCM Automation",
    slug: "healthcare-rcm-automation",
    industry: "Healthcare / RCM",
    service: ["AI Integration & Agentic Workflows"],
    result: "Automated 300 patients/day, replaced 7 FTEs",
    date: "2024-11-01",
    client: "Healthcare Billing & RCM Company (US/India)",
    timeline: "4 weeks",
    excerpt:
      "Architected a custom AI-driven pipeline to automate US healthcare insurance verification, integrating with eClinicalWorks and various payer portals to replace 50% of the manual workforce.",
    problem: [
      "In the US healthcare system, clinics and doctors claim insurance, which requires a heavy, manual verification setup.",
      "The client, an Indian company handling RCM (Revenue Cycle Management) and billing for US patients, had a large manual team solely dedicated to verifying insurance data.",
      "Verification requires logging into various disparate payer portals to check if a patient's insurance is active, and extracting complex data like copay, coinsurance, and deductibles, making it a highly labor-intensive and error-prone process.",
    ],
    approach: [
      {
        title: "EHR Integration",
        description: "Built the foundational integration with eClinicalWorks (eCW) to automatically extract daily appointment schedules and patient data for specific dates, eliminating the need for manual reports.",
      },
      {
        title: "Multi-modal Extraction Engine",
        description: "Developed a dynamic extraction pipeline that adapts to the specific payer portal. Given the variance in portal designs, the system intelligently uses a combination of direct APIs, HTML parsing, Selenium-based web automation, and Chrome extensions to access the data.",
      },
      {
        title: "AI Agentic Parsing",
        description: "Implemented an AI agent layer using LLMs with JSON structured outputs to parse the highly irregular portal data (whether from HTML DOMs or API payloads) and reliably extract the exact copay, deductible, coinsurance, and active status.",
      },
      {
        title: "Closed-loop Automation",
        description: "Orchestrated the final step of the pipeline to take the structured verification results and automatically write them back into the patient records within eClinicalWorks via UiPath and APIs.",
      },
    ],
    results: [
      { metric: "7 FTEs", label: "Reassigned to new clients (>50% of team)" },
      { metric: "300+", label: "Patients verified automatically per day" },
      { metric: "4 Weeks", label: "From idea to production pipeline" },
    ],
    takeaways: [
      "Healthcare automation often requires a 'by-any-means-necessary' approach to integration. Relying purely on APIs will fail when portals lack them; you must fallback to DOM parsing or RPA orchestration gracefully.",
      "Agentic AI transforms web scraping. Instead of maintaining brittle regex patterns for 50 different insurance portals, an LLM can understand the implicit structure of the portal data and extract the necessary JSON schema.",
    ],
  },
  "combinehealth-seo-redesign": {
    title: "CombineHealth: Frontend Rebuild & 1M Impressions/Day",
    slug: "combinehealth-seo-redesign",
    industry: "HealthTech / SaaS",
    service: ["Web Development", "SEO Services"],
    result: "1M+ daily impressions & 100% PageSpeed",
    date: "2024-12-01",
    client: "CombineHealth",
    timeline: "1 week MVP + ongoing scaling",
    excerpt:
      "Rebuilt incomplete marketing pages from Figma, integrated animations, and applied rigorous technical/GEO SEO to hit 1M daily impressions in collaboration with the marketing team.",
    problem: [
      "The old website was incomplete, lacking product sections and crucial pages requested by the design and marketing teams.",
      "PageSpeed Insights scores were languishing around 20-30%, severely restricting organic visibility.",
      "Animations were broken, client images were outdated, and there was a total absence of JSON-LD Schema required for traditional search and AI search engines.",
    ],
    approach: [
      {
        title: "Frontend Architecture & Build",
        description: "Rebuilt the missing sections from Figma using Next.js, React, Tailwind, and custom CSS. Repaired broken animations using Tailwind and Framer Motion, and updated the site with fresh client images.",
      },
      {
        title: "Aggressive Performance Optimization",
        description: "Refactored the codebase to eliminate render-blocking resources and optimize assets, driving Google PageSpeed Insights scores from ~25% up to 100% across all pages.",
      },
      {
        title: "Technical SEO & GEO (AI-SEO)",
        description: "Added comprehensive JSON-LD Schema to all pages. Configured robots.txt, dynamic sitemaps, and added an llm.txt file to ensure the site was fully optimized for Generative Engine Optimization (Perplexity, ChatGPT, etc.).",
      },
      {
        title: "Marketing Collaboration",
        description: "Set up Google Search Console and Bing Webmaster Tools. Supported the marketing team's Webflow blogging efforts based on their programmatic keyword research by conducting regular SEO audits and implementing technical fixes.",
      },
    ],
    results: [
      { metric: "1M+", label: "Daily Search Impressions" },
      { metric: "100%", label: "PageSpeed Insights Score" },
      { metric: "100%", label: "AI-SEO Ready (llm.txt/Schema)" },
    ],
    takeaways: [
      "Technical SEO blockers (like 25% PageSpeed or missing Schema) act as a massive drag on a marketing team's content efforts. Fixing them acts as a force multiplier.",
      "Anticipating AI-Search (GEO) with tools like llm.txt is no longer optional for modern SaaS marketing sites.",
    ],
  },
};

type Params = { slug: string };

export async function generateStaticParams() {
  return Object.keys(caseStudyContent).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudyContent[slug];
  if (!cs) return { title: "Case Study Not Found" };

  return {
    title: `${cs.title} — Case Study`,
    description: cs.excerpt,
    alternates: { canonical: `/case-studies/${slug}` },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const cs = caseStudyContent[slug];
  if (!cs) notFound();

  const relatedCaseStudies = caseStudiesPreview
    .filter((c) => c.slug !== slug)
    .slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: cs.title,
              description: cs.excerpt,
              url: `/case-studies/${slug}`,
              datePublished: cs.date,
            })
          ),
        }}
      />

      {/* Hero */}
      <section className="aurora-bg pt-32 pb-16">
        <div className="container relative z-10 max-w-3xl">
          <Breadcrumb
            items={[
              { name: "Case Studies", url: "/case-studies" },
              { name: cs.title, url: `/case-studies/${slug}` },
            ]}
          />
          <div className="mt-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {industryLinks[cs.industry] ? (
                <Link href={industryLinks[cs.industry]}>
                  <Badge variant="industry">{cs.industry}</Badge>
                </Link>
              ) : (
                <Badge variant="industry">{cs.industry}</Badge>
              )}
              {cs.service.map((s, i) =>
                serviceLinks[s] ? (
                  <Link key={i} href={serviceLinks[s]}>
                    <Badge variant="service">{s}</Badge>
                  </Link>
                ) : (
                  <Badge key={i} variant="service">{s}</Badge>
                )
              )}
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              {cs.title}
            </h1>
            <p className="font-mono text-accent-secondary text-2xl font-bold">{cs.result}</p>
          </div>

          {/* Hero image */}
          {cs.heroImage && (
            <div className="mt-10 rounded-card overflow-hidden border border-border">
              <Image
                src={cs.heroImage.src}
                alt={cs.heroImage.alt}
                width={1200}
                height={630}
                className="w-full h-auto"
                priority
              />
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          {/* AskAI */}
          <div className="mb-8">
            <AskAIButton
              pageUrl={`/case-studies/${slug}`}
              pageType="case-study"
              serviceType={cs.service[0]}
            />
          </div>

          {/* Overview table */}
          <div className="rounded-card border border-border bg-bg-surface overflow-hidden mb-12">
            <div className="grid grid-cols-2">
              {[
                { label: "Industry", value: cs.industry },
                { label: "Service", value: cs.service.join(", ") },
                { label: "Client", value: cs.client },
                { label: "Timeline", value: cs.timeline },
              ].map((row) => (
                <div
                  key={row.label}
                  className="p-4 border-b border-r border-border last:border-r-0"
                >
                  <p className="text-text-muted text-xs mb-0.5">{row.label}</p>
                  <p className="text-text-primary text-sm font-medium">{row.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The Problem */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-6">The Problem</h2>
            <div className="space-y-4">
              {cs.problem.map((p, i) => (
                <p key={i} className="text-text-secondary leading-relaxed">{p}</p>
              ))}
            </div>
          </div>

          {/* The Approach */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-6">The Approach</h2>
            <div className="space-y-8">
              {cs.approach.map((step, i) => (
                <div key={i}>
                  <div className="flex gap-5">
                    <div className="w-8 h-8 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary text-sm font-mono font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-2">{step.title}</h3>
                      <p className="text-text-secondary leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  {step.image && (
                    <div className="mt-4 ml-0 sm:ml-[52px] rounded-card overflow-hidden border border-border">
                      <Image
                        src={step.image.src}
                        alt={step.image.alt}
                        width={1000}
                        height={560}
                        className="w-full h-auto"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* The Results */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-6">The Results</h2>

            {/* Results image */}
            {cs.resultsImage && (
              <div className="mb-6 rounded-card overflow-hidden border border-border">
                <Image
                  src={cs.resultsImage.src}
                  alt={cs.resultsImage.alt}
                  width={1000}
                  height={560}
                  className="w-full h-auto"
                />
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {cs.results.map((result) => (
                <div
                  key={result.label}
                  className="rounded-card border border-border bg-bg-surface p-4 text-center"
                >
                  <div className="font-mono text-2xl font-bold gradient-text mb-1">
                    {result.metric}
                  </div>
                  <p className="text-text-muted text-xs">{result.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Product CTA (only for case studies with a matching product) */}
          {productLinks[slug] && (
            <div className="mb-12 rounded-card border border-accent-secondary/20 bg-accent-secondary/5 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-text-muted text-xs uppercase tracking-wider font-mono mb-1">Built as a product</p>
                <p className="text-text-primary font-semibold">
                  {productLinks[slug].name} is live — see how it works.
                </p>
              </div>
              <Button href={productLinks[slug].href} variant="secondary" size="md">
                {productLinks[slug].cta}
              </Button>
            </div>
          )}

          {/* Key Takeaways */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Key Takeaways</h2>
            <ul className="space-y-3">
              {cs.takeaways.map((takeaway, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent-primary mt-0.5 flex-shrink-0">→</span>
                  <span className="text-text-secondary">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related case studies */}
          {relatedCaseStudies.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-6">Related case studies</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedCaseStudies.map((cs) => (
                  <CaseStudyCard key={cs.slug} {...cs} />
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="rounded-card border border-accent-primary/20 bg-accent-primary/5 p-8 text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-3">
              Want results like this?
            </h2>
            <p className="text-text-secondary mb-6">
              Let&apos;s talk about what&apos;s possible for your business.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Let&apos;s talk →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
