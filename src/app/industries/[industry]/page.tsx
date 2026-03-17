import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { caseStudiesPreview } from "@/data/site-data";
import { serviceSchema } from "@/lib/schemas";

type Params = { industry: string };

const industryData: Record<string, {
  name: string;
  slug: string;
  headline: string;
  subheadline: string;
  painPoints: { title: string; description: string }[];
  howIHelp: { service: string; href: string; description: string; icon: string }[];
  relevantCaseStudySlugs: string[];
  faq: { question: string; answer: string }[];
}> = {
  "saas": {
    name: "SaaS",
    slug: "saas",
    headline: "Helping SaaS companies grow faster with AI and SEO.",
    subheadline:
      "From AI feature integration to organic acquisition — I work with SaaS teams that want to move fast without cutting corners.",
    painPoints: [
      {
        title: "AI feature pressure",
        description:
          "Every SaaS product is now expected to have AI features. Knowing which ones to build — and how to build them right — is harder than it looks.",
      },
      {
        title: "Slow organic growth",
        description:
          "Paid acquisition costs are rising. SaaS companies that haven't built a content and SEO engine are increasingly dependent on expensive channels.",
      },
      {
        title: "Technical debt slowing product",
        description:
          "Many SaaS products outgrow their initial architecture faster than expected, especially as AI features require new infrastructure patterns.",
      },
    ],
    howIHelp: [
      {
        service: "AI Automation Consulting",
        href: "/services/ai-automation-consulting",
        icon: "🤖",
        description:
          "Design and integrate AI features that users actually want — LLM-powered workflows, intelligent document processing, and agent systems built on production-grade architecture.",
      },
      {
        service: "SEO Services",
        href: "/services/seo-services",
        icon: "📈",
        description:
          "Technical SEO, content strategy, and GEO optimisation to build compounding organic acquisition for your SaaS.",
      },
      {
        service: "SaaS Development",
        href: "/services/saas-development",
        icon: "🚀",
        description:
          "MVP architecture, multi-tenant systems, and feature development for B2B SaaS products at any stage.",
      },
    ],
    relevantCaseStudySlugs: ["speclens-ai-procurement-saas"],
    faq: [
      {
        question: "Do you work with early-stage SaaS or only established products?",
        answer:
          "Both. I've worked from zero-to-MVP with founders and on established products with engineering teams. The engagement looks different but the outcome focus is the same.",
      },
      {
        question: "Can you help us add AI features to an existing SaaS product?",
        answer:
          "Yes — this is one of my most common engagements. I help product teams figure out which AI features make sense, architect the integration, and build it.",
      },
    ],
  },
  "edtech": {
    name: "EdTech",
    slug: "edtech",
    headline: "AI and web technology for EdTech platforms.",
    subheadline:
      "EdTech products have unique requirements around content delivery, personalisation, and scale. I help EdTech teams build smarter learning systems.",
    painPoints: [
      {
        title: "Personalisation at scale",
        description:
          "Learners have different starting points, paces, and goals. Building personalisation that actually works — without massive manual effort — requires AI.",
      },
      {
        title: "Content discoverability",
        description:
          "EdTech platforms often have large content libraries that are poorly indexed by search engines and hard for learners to navigate.",
      },
      {
        title: "Engagement and retention",
        description:
          "Getting learners to complete courses and return to the platform is one of the hardest problems in EdTech.",
      },
    ],
    howIHelp: [
      {
        service: "AI Automation Consulting",
        href: "/services/ai-automation-consulting",
        icon: "🤖",
        description:
          "AI-powered personalisation, adaptive learning pathways, intelligent content recommendation, and automated assessment systems.",
      },
      {
        service: "SEO Services",
        href: "/services/seo-services",
        icon: "📈",
        description:
          "Programmatic SEO for large course catalogues, structured data for rich results, and content strategy to capture learner intent.",
      },
      {
        service: "Web Development",
        href: "/services/web-development",
        icon: "💻",
        description:
          "Fast, accessible learning interfaces built with Next.js — optimised for performance and learner engagement.",
      },
    ],
    relevantCaseStudySlugs: [],
    faq: [
      {
        question: "Do you have experience with learning management systems (LMS)?",
        answer:
          "Yes — I've worked with both custom-built LMS platforms and integrations with third-party systems. The right approach depends on your existing stack and learner volume.",
      },
    ],
  },
  "healthcare": {
    name: "Healthcare",
    slug: "healthcare",
    headline: "AI and automation for healthcare operations.",
    subheadline:
      "I help healthcare organisations reduce administrative burden through AI, improve patient communication systems, and build compliant web properties.",
    painPoints: [
      {
        title: "Administrative overload",
        description:
          "Healthcare staff spend a disproportionate amount of time on scheduling, documentation, and coordination tasks that don't require clinical expertise.",
      },
      {
        title: "Patient communication gaps",
        description:
          "Missed appointments, poor follow-up, and fragmented communication cost healthcare providers revenue and harm patient outcomes.",
      },
      {
        title: "Digital presence not matching quality of care",
        description:
          "Many excellent healthcare providers are difficult to find online, have outdated websites, and miss patients who could benefit from their services.",
      },
    ],
    howIHelp: [
      {
        service: "AI Integration & Agentic Workflows",
        href: "/services/ai-integration-agentic-workflows",
        icon: "🎙️",
        description:
          "Appointment scheduling, patient reminders, and inbound call handling — reducing administrative load without reducing care quality.",
      },
      {
        service: "AI Automation Consulting",
        href: "/services/ai-automation-consulting",
        icon: "🤖",
        description:
          "Document processing, referral coordination, and workflow automation for administrative healthcare operations.",
      },
      {
        service: "SEO Services",
        href: "/services/seo-services",
        icon: "📈",
        description:
          "Local SEO, structured data, and content strategy for healthcare providers who want to reach more patients organically.",
      },
    ],
    relevantCaseStudySlugs: ["healthcare-rcm-automation"],
    faq: [
      {
        question: "Do you build clinical software or handle medical data?",
        answer:
          "I focus on administrative and operational systems — not clinical software or systems that handle regulated medical data. I work alongside clinical teams, not on the clinical side.",
      },
    ],
  },
  "ecommerce": {
    name: "E-commerce",
    slug: "ecommerce",
    headline: "AI and SEO for e-commerce businesses that want to grow.",
    subheadline:
      "From AI-powered product discovery to technical SEO that captures search intent — I help e-commerce businesses build scalable, organic acquisition engines.",
    painPoints: [
      {
        title: "Paid acquisition dependency",
        description:
          "Most e-commerce businesses are over-reliant on paid social and Google Ads. Building an organic channel changes the unit economics significantly.",
      },
      {
        title: "Product discoverability",
        description:
          "Large catalogues often have poor SEO coverage, missing structured data, and no programmatic strategy for capturing long-tail search intent.",
      },
      {
        title: "Customer service volume",
        description:
          "E-commerce generates high volumes of repetitive support queries — order status, returns, product questions — that are well-suited for AI automation.",
      },
    ],
    howIHelp: [
      {
        service: "SEO Services",
        href: "/services/seo-services",
        icon: "📈",
        description:
          "Programmatic SEO for large product catalogues, structured data for rich results, Core Web Vitals optimisation, and content strategy.",
      },
      {
        service: "AI Automation Consulting",
        href: "/services/ai-automation-consulting",
        icon: "🤖",
        description:
          "AI-powered customer service, product recommendation systems, and catalogue processing automation.",
      },
      {
        service: "Web Development",
        href: "/services/web-development",
        icon: "💻",
        description:
          "Performance-optimised storefront development and headless e-commerce architecture for high-volume stores.",
      },
    ],
    relevantCaseStudySlugs: [],
    faq: [
      {
        question: "Do you work with Shopify or custom storefronts?",
        answer:
          "Both. I can work within Shopify's constraints for SEO and theme development, or build custom storefronts with Next.js for teams that need more flexibility.",
      },
    ],
  },
  "startups": {
    name: "Startups",
    slug: "startups",
    headline: "Execution partner for startups that need to move fast.",
    subheadline:
      "Early-stage startups need to build the right things quickly. I help founders move from idea to working product, and from working product to first users.",
    painPoints: [
      {
        title: "Building before validating",
        description:
          "Many early-stage startups spend months building features before getting real user feedback. The right MVP scope changes everything.",
      },
      {
        title: "No technical co-founder",
        description:
          "Solo or business-focused founders often struggle to evaluate technical options, brief developers, or oversee build quality without a technical partner.",
      },
      {
        title: "Early SEO neglect",
        description:
          "Startups that don't invest in SEO from day one miss the compounding advantage. Organic channels that take 12 months to build can't be rushed later.",
      },
    ],
    howIHelp: [
      {
        service: "SaaS Development",
        href: "/services/saas-development",
        icon: "🚀",
        description:
          "MVP architecture and full-stack development for B2B SaaS ideas — from spec to deployed product.",
      },
      {
        service: "AI Automation Consulting",
        href: "/services/ai-automation-consulting",
        icon: "🤖",
        description:
          "Build AI-powered features and workflows from day one — so your product isn't scrambling to add AI after launch.",
      },
      {
        service: "SEO Services",
        href: "/services/seo-services",
        icon: "📈",
        description:
          "Early-stage SEO foundation that compounds over time — content strategy, technical setup, and GEO readiness.",
      },
    ],
    relevantCaseStudySlugs: ["speclens-ai-procurement-saas"],
    faq: [
      {
        question: "Do you take equity? Do you work for startups at pre-revenue stage?",
        answer:
          "I work on a fee basis, not equity. I've worked with pre-revenue startups — the engagement is milestone-based, which manages cash flow risk for both sides.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(industryData).map((industry) => ({ industry }));
}

const industrySEO: Record<string, { title: string; description: string; keywords: string[] }> = {
  saas: {
    title: "AI Automation & SEO for SaaS Companies India",
    description:
      "AI automation consulting and technical SEO for SaaS companies in India. Aryan Rawther (Apex Mind LLP) helps SaaS teams integrate AI features, build organic acquisition channels, and scale their product architecture.",
    keywords: [
      "AI consultant for SaaS companies India",
      "SaaS SEO consultant India",
      "AI features for SaaS India",
      "SaaS growth consultant India",
      "LLM integration for SaaS",
      "AI automation SaaS India",
    ],
  },
  edtech: {
    title: "AI & Web Development for EdTech Companies India",
    description:
      "AI automation and web development for EdTech platforms in India. Build personalised learning systems, improve content discoverability with SEO, and create performant learning interfaces with Next.js.",
    keywords: [
      "EdTech AI developer India",
      "AI for EdTech India",
      "EdTech web development India",
      "EdTech SEO consultant India",
      "learning platform developer India",
      "EdTech consultant India",
    ],
  },
  healthcare: {
    title: "Healthcare AI Automation India — Voice Agents, Scheduling & Web",
    description:
      "AI automation and voice agent solutions for healthcare organisations in India. Aryan Rawther (Apex Mind LLP) reduces administrative burden through AI-powered scheduling, call handling, and process automation.",
    keywords: [
      "healthcare AI automation India",
      "AI voice agent for healthcare India",
      "healthcare technology consultant India",
      "medical AI automation India",
      "healthcare SEO India",
      "AI scheduling system healthcare India",
    ],
  },
  ecommerce: {
    title: "E-commerce SEO & AI Automation India",
    description:
      "SEO and AI automation for e-commerce businesses in India. Technical SEO for large product catalogues, programmatic landing pages, Core Web Vitals optimisation, and AI-powered customer service automation.",
    keywords: [
      "ecommerce SEO consultant India",
      "ecommerce AI automation India",
      "programmatic SEO for ecommerce India",
      "ecommerce web development India",
      "Shopify SEO consultant India",
      "ecommerce technical SEO India",
    ],
  },
  startups: {
    title: "Technical Consulting for Startups India — AI, SaaS MVP & Web Development",
    description:
      "Technical co-founder alternative for Indian startups. Aryan Rawther (Apex Mind LLP) builds SaaS MVPs, integrates AI features, and sets up SEO foundations for early-stage companies in Bengaluru and across India.",
    keywords: [
      "startup technical consultant India",
      "technical co-founder consultant India",
      "startup AI developer India",
      "SaaS MVP development for startups India",
      "startup CTO India",
      "early stage startup developer India",
      "startup SEO consultant India",
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { industry } = await params;
  const data = industryData[industry];
  if (!data) return { title: "Not Found" };

  const seo = industrySEO[industry];
  return {
    title: seo?.title ?? `${data.name} — AI, SEO & Web Development`,
    description: seo?.description ?? data.subheadline,
    keywords: seo?.keywords,
    alternates: { canonical: `/industries/${industry}` },
  };
}

export default async function IndustryPage({ params }: { params: Promise<Params> }) {
  const { industry } = await params;
  const data = industryData[industry];
  if (!data) notFound();

  const relatedCaseStudies = caseStudiesPreview.filter((cs) =>
    data.relevantCaseStudySlugs.includes(cs.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              `AI & Web Consulting for ${data.name}`,
              data.subheadline,
              `/industries/${industry}`
            )
          ),
        }}
      />
      {/* Hero */}
      <section className="aurora-bg pt-32 pb-16">
        <div className="container relative z-10 max-w-3xl">
          <Breadcrumb
            items={[
              { name: "Industries", url: "/services" },
              { name: data.name, url: `/industries/${industry}` },
            ]}
          />
          <div className="mt-8">
            <Badge variant="industry" className="mb-4">
              {data.name}
            </Badge>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              {data.headline}
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed mb-8">
              {data.subheadline}
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Work with me →
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          {/* Pain points */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-text-primary mb-2">
              Common {data.name} challenges I solve
            </h2>
            <p className="text-text-secondary mb-8">
              These are the problems I hear most from {data.name} companies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {data.painPoints.map((pain, i) => (
                <div key={i} className="rounded-card border border-border bg-bg-surface p-5">
                  <div className="text-accent-primary font-mono text-sm mb-2">0{i + 1}</div>
                  <h3 className="font-semibold text-text-primary mb-2">{pain.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{pain.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How I help */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-text-primary mb-8">How I help {data.name} companies</h2>
            <div className="space-y-4">
              {data.howIHelp.map((item) => (
                <Link
                  key={item.service}
                  href={item.href}
                  className="block rounded-card border border-border bg-bg-surface p-5 card-hover group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors mb-1.5">
                        {item.service}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                    </div>
                    <span className="text-accent-primary text-sm flex-shrink-0 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Related case studies */}
          {relatedCaseStudies.length > 0 && (
            <div className="mb-14">
              <h2 className="text-2xl font-bold text-text-primary mb-6">Related case studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedCaseStudies.map((cs) => (
                  <Link
                    key={cs.slug}
                    href={`/case-studies/${cs.slug}`}
                    className="rounded-card border border-border bg-bg-surface p-5 card-hover block group"
                  >
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="industry">{cs.industry}</Badge>
                      <Badge variant="service">{cs.service}</Badge>
                    </div>
                    <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors mb-2">
                      {cs.title}
                    </h3>
                    <p className="text-accent-secondary text-sm font-mono">{cs.result}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          {data.faq.length > 0 && (
            <div className="mb-14">
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Questions from {data.name} companies
              </h2>
              <div className="space-y-4">
                {data.faq.map((item, i) => (
                  <div key={i} className="rounded-card border border-border bg-bg-surface p-5">
                    <h3 className="font-semibold text-text-primary mb-2">{item.question}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="rounded-card border border-accent-primary/20 bg-accent-primary/5 p-8 text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-3">
              Working in {data.name}?
            </h2>
            <p className="text-text-secondary mb-6 max-w-md mx-auto text-sm">
              Let&apos;s talk about what you&apos;re trying to build or fix. No obligation, no sales pitch.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/contact" variant="primary" size="lg">
                Get in touch →
              </Button>
              <Button href="/case-studies" variant="secondary" size="lg">
                View case studies →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
