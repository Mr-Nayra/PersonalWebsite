import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteData } from "@/data/site-data";
import { itemListSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Services — AI Automation, Technical SEO, Web & SaaS Development | Apex Mind LLP",
  description:
    "Aryan Rawther (Apex Mind LLP) offers AI automation consulting, AI voice agents, technical SEO & GEO, web development, and SaaS product development. Based in Bengaluru, serving clients in India and globally.",
  alternates: { canonical: "/services" },
  keywords: [
    "AI consulting services India",
    "AI automation services India",
    "technical SEO services India",
    "web development services India",
    "SaaS development services India",
    "AI voice agent services India",
    "Apex Mind LLP services",
    "AI consultant Bengaluru",
  ],
};

const industries = [
  { name: "SaaS Companies", href: "/industries/saas" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Edtech", href: "/industries/edtech" },
  { name: "E-commerce", href: "/industries/ecommerce" },
  { name: "Startups", href: "/industries/startups" },
];

const processOverview = [
  {
    step: "01",
    title: "Discovery",
    description: "We start with a free 30-minute call. I listen more than I talk — understanding your business, your pain points, and what success looks like.",
  },
  {
    step: "02",
    title: "Proposal",
    description: "I send a written SOW with clear scope, milestone breakdown, and timeline. You only pay when milestones are delivered and approved.",
  },
  {
    step: "03",
    title: "Execution",
    description: "Weekly updates, async-first communication, shared documentation. No surprises — you always know where the project stands.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Working deliverable + full documentation + handoff session. Post-launch support included. Built to be maintained.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListSchema(
              siteData.services.map((s) => ({
                name: s.name,
                description: s.description,
                url: s.href,
              }))
            )
          ),
        }}
      />
      {/* Hero */}
      <section className="aurora-bg pt-32 pb-20">
        <div className="container relative z-10 max-w-3xl">
          <Breadcrumb items={[{ name: "Services", url: "/services" }]} />
          <div className="mt-8">
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Services
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed">
              Outcome-driven, not tool-driven. Every engagement starts with understanding your business goals — not pitching a predetermined solution. I work as a technical founder who consults, not a generalist freelancer.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Service Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteData.services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group block rounded-card border border-border bg-bg-surface p-7 card-hover flex flex-col gap-4"
              >
                <div className="text-4xl">{service.icon}</div>
                <div>
                  <h2 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto text-accent-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding bg-bg-surface border-y border-border">
        <div className="container">
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Industries I work with
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="px-5 py-2.5 rounded-btn border border-border bg-bg-base text-text-secondary hover:border-accent-primary hover:text-accent-primary hover:bg-accent-primary/5 transition-all duration-150 text-sm font-medium"
              >
                {industry.name}
              </Link>
            ))}
          </div>
          <p className="text-center text-text-muted text-sm mt-6">
            Not in this list? If you have a business that needs AI, SEO, or web development work —{" "}
            <Link href="/contact" className="text-accent-primary hover:underline">
              let&apos;s talk
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-text-primary">How engagements work</h2>
            <Link href="/process" className="text-accent-primary text-sm hover:underline">
              See full process →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {processOverview.map((step) => (
              <div key={step.step} className="rounded-card border border-border bg-bg-surface p-5">
                <div className="font-mono text-accent-primary text-sm mb-3">{step.step}</div>
                <h3 className="font-semibold text-text-primary mb-2">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding aurora-bg relative">
        <div className="container relative z-10 text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-text-secondary mb-8">
            Tell me about your business and your goals. I&apos;ll tell you honestly what will and won&apos;t work — and recommend the right starting point.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Let&apos;s talk →
          </Button>
        </div>
      </section>
    </>
  );
}
