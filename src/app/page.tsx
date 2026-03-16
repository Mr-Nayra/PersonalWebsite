import { Metadata } from "next";
import { websiteSchema, personSchema, organizationSchema } from "@/lib/schemas";

import { HeroSection } from "@/components/sections/home/HeroSection";
import { SocialProofSection } from "@/components/sections/home/SocialProofSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { ProductsSection } from "@/components/sections/home/ProductsSection";
import { CaseStudiesSection } from "@/components/sections/home/CaseStudiesSection";
import { AboutSection } from "@/components/sections/home/AboutSection";
import { BlogSection } from "@/components/sections/home/BlogSection";
import { CtaSection } from "@/components/sections/home/CtaSection";

export const metadata: Metadata = {
  title: "Aryan Rawther — AI Automation Consultant, Technical SEO & SaaS Developer | Bengaluru",
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
