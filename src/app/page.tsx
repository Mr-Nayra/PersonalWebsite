import { Metadata } from "next";
import { websiteSchema, personSchema, organizationSchema, faqSchema, webPageSchema, itemListSchema } from "@/lib/schemas";
import { caseStudiesPreview } from "@/data/site-data";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { SocialProofSection } from "@/components/sections/home/SocialProofSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { ProductsSection } from "@/components/sections/home/ProductsSection";
import { CaseStudiesSection } from "@/components/sections/home/CaseStudiesSection";
import { AboutSection } from "@/components/sections/home/AboutSection";
import { BlogSection } from "@/components/sections/home/BlogSection";
import { CtaSection } from "@/components/sections/home/CtaSection";

// Update this date whenever meaningful content changes are made to this page
const HOME_PAGE_DATE_MODIFIED = "2026-03-19";

export const metadata: Metadata = {
  title: {
    absolute:
      "Aryan Rawther — AI Automation Consultant, Technical SEO & SaaS Developer | Bengaluru",
  },
  description:
    "Aryan Rawther — AI automation consultant, technical SEO specialist, and full-stack SaaS developer. Founder of Apex Mind LLP, Bengaluru. Builds LLM integrations, AI agents, programmatic SEO, and B2B SaaS products for clients across India and globally.",
  alternates: { canonical: "/" },
  keywords: [
    "Aryan Rawther",
    "Apex Mind LLP",
    "AI automation consultant India",
    "AI consultant Bengaluru",
    "hire AI developer India",
    "technical SEO consultant India",
    "SaaS developer India",
    "LLM integration consultant India",
  ],
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({
              title: "Aryan Rawther — AI Automation Consultant, Technical SEO & SaaS Developer | Bengaluru",
              description:
                "Aryan Rawther — AI automation consultant, technical SEO specialist, and full-stack SaaS developer. Founder of Apex Mind LLP, Bengaluru. Builds LLM integrations, AI agents, programmatic SEO, and B2B SaaS products for clients across India and globally.",
              url: "/",
              datePublished: "2026-01-01",
              dateModified: HOME_PAGE_DATE_MODIFIED,
              speakableSelectors: [
                "#hero-title",
                "#hero-description",
                "#social-proof-heading",
                "#social-proof-description",
                "#services-heading",
                "#services-description",
                "#about-heading",
                "#about-description-1",
                "#about-description-2",
              ],
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqSchema([
              {
                question: "What is AI automation consulting?",
                answer:
                  "AI automation consulting involves analysing your business processes and designing AI-powered systems that replace or augment manual work. This includes selecting the right AI models, designing agent workflows, integrating with your existing tools, and ensuring the system is maintainable. According to Federal Reserve data, workers using generative AI save an average of 5.4% of their working hours weekly — with daily users saving 9+ hours per week. In high-volume functions like customer support, AI automation delivers a median 3.7x ROI with payback in under 6 months (Athenic AI study of 156 companies, 2025).",
              },
              {
                question: "What is GEO (Generative Engine Optimisation)?",
                answer:
                  "GEO is the practice of structuring your content so that AI systems — ChatGPT, Perplexity, Google AI Overviews, Claude — extract, understand, and cite it accurately. It involves answer-first writing, structured data, entity consistency, and an llms.txt file. AI search traffic has grown 527% in one year and converts at 14.2% compared to 2.8% for traditional organic search — making AI-referred visitors roughly 5x more valuable (Semrush AI Search SEO Traffic Study, 2025). Google AI Overviews now appear in 25% of all searches, and 60% of Google searches already end without a click (SE Ranking, 2025).",
              },
              {
                question: "How long does SEO take to show results?",
                answer:
                  "Technical SEO fixes can show results in 4–8 weeks. Content and keyword strategies typically show meaningful organic growth in 3–6 months. GEO results — appearing in AI answers — can happen faster, as AI systems crawl and cite frequently. According to Ahrefs' study of millions of pages, only 1.74% of newly published pages reach Google's top 10 within a year, and the average #1 ranking page is 5 years old. Pages that do reach the top 10 typically do so between 2–6 months of publication (Ahrefs Ranking Study, 2024).",
              },
              {
                question: "What tech stack does Aryan Rawther specialise in?",
                answer:
                  "The primary stack is Next.js + TypeScript for frontend and Python (FastAPI) for backend. Also works with the full MERN stack. The right stack is recommended based on the project, not a one-size-fits-all approach. Next.js is used by 20% of the top 1,000 websites globally as of March 2026 — including Netflix, Spotify, PayPal, and The New York Times — making it the framework of choice for high-performance, production-grade web applications (W3Techs, March 2026).",
              },
              {
                question: "Where is Aryan Rawther based and does he work with international clients?",
                answer:
                  "Aryan Rawther is based in Bengaluru, India and works with clients across India and globally. He offers milestone-based delivery, async-first communication, and overlap hours for UK, EU, and US clients.",
              },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListSchema(
              caseStudiesPreview.map((cs) => ({
                name: cs.title,
                description: cs.result,
                url: `/case-studies/${cs.slug}`,
              }))
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListSchema([
              {
                name: "How to Build AI Agents with LangChain: A Practical Guide",
                description: "A step-by-step walkthrough of building production-ready AI agents using LangChain, FastAPI, and OpenAI. Covers agent design, tool integration, and deployment.",
                url: "/blog/how-to-build-ai-agents-with-langchain",
              },
              {
                name: "Technical SEO for SaaS Startups: The Complete Checklist",
                description: "Everything you need to know about technical SEO for SaaS — Core Web Vitals, crawlability, programmatic pages, and product-led SEO strategies.",
                url: "/blog/technical-seo-for-saas-startups",
              },
              {
                name: "Building an AI IVR System with Twilio and Deepgram",
                description: "How I built a production AI voice agent system for an insurance company — architecture decisions, challenges, and lessons learned.",
                url: "/blog/building-ai-ivr-twilio-deepgram",
              },
            ])
          ),
        }}
      />

      <HeroSection />
      <SocialProofSection />
      <ServicesSection />
      <CaseStudiesSection />
      <ProductsSection />
      <AboutSection />
      {/* <TestimonialsSection /> */}
      <BlogSection />
      <CtaSection />
    </>
  );
}
