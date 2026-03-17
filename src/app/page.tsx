import { Metadata } from "next";
import { websiteSchema, personSchema, organizationSchema, faqSchema } from "@/lib/schemas";

import { HeroSection } from "@/components/sections/home/HeroSection";
import { SocialProofSection } from "@/components/sections/home/SocialProofSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { ProductsSection } from "@/components/sections/home/ProductsSection";
import { CaseStudiesSection } from "@/components/sections/home/CaseStudiesSection";
import { AboutSection } from "@/components/sections/home/AboutSection";
import { BlogSection } from "@/components/sections/home/BlogSection";
import { CtaSection } from "@/components/sections/home/CtaSection";

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
                  "AI automation consulting involves analysing your business processes and designing AI-powered systems that replace or augment manual work. This includes selecting the right AI models, designing agent workflows, integrating with your existing tools, and ensuring the system is maintainable.",
              },
              {
                question: "What is GEO (Generative Engine Optimisation)?",
                answer:
                  "GEO is the practice of structuring your content so that AI systems — ChatGPT, Perplexity, Google AI Overviews, Claude — extract, understand, and cite it accurately. It involves answer-first writing, structured data, entity consistency, and an llms.txt file.",
              },
              {
                question: "How long does SEO take to show results?",
                answer:
                  "Technical SEO fixes can show results in 4–8 weeks. Content and keyword strategies typically show meaningful organic growth in 3–6 months. GEO results — appearing in AI answers — can happen faster, as AI systems crawl and cite frequently.",
              },
              {
                question: "What tech stack does Aryan Rawther specialise in?",
                answer:
                  "The primary stack is Next.js + TypeScript for frontend and Python (FastAPI) for backend. Also works with the full MERN stack. The right stack is recommended based on the project, not a one-size-fits-all approach.",
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
