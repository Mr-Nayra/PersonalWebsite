import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { faqSchema, serviceSchema } from "@/lib/schemas";

export interface ServicePageData {
  name: string;
  slug: string;
  href: string;
  h1: string;
  ctaText?: string;
  tagline: string;
  description: string;
  deliverables: string[];
  whoFor: string[];
  process: { title: string; description: string }[];
  tools: { name: string; logo?: string }[];
  faqs: { question: string; answer: string }[];
  relatedCaseStudies?: {
    slug: string;
    title: string;
    industry: string;
    service: string | string[];
    result: string;
    excerpt?: string;
  }[];
  relatedTestimonials?: {
    quote: string;
    name: string;
    role: string;
    company?: string;
    service?: string;
  }[];
  relatedServices?: {
    name: string;
    href: string;
    description: string;
  }[];
  relatedGlossaryTerms?: {
    name: string;
    slug: string;
  }[];
  relatedResources?: {
    title: string;
    href: string;
    type: "guide" | "blog";
  }[];
}

interface ServicePageTemplateProps {
  data: ServicePageData;
}

export function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(data.name, data.description, data.href)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(data.faqs)),
        }}
      />

      {/* Hero */}
      <section className="aurora-bg pt-32 pb-20">
        <div className="container relative z-10 max-w-3xl">
          <Breadcrumb
            items={[
              { name: "Services", url: "/services" },
              { name: data.name, url: data.href },
            ]}
          />
          <div className="mt-8">
            <p className="text-accent-secondary text-sm font-mono tracking-wider uppercase mb-3">
              {data.tagline}
            </p>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              {data.h1}
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed mb-8">
              {data.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                {data.ctaText || "Get a free consultation →"}
              </Button>
              <Button href="/process" variant="secondary" size="lg">
                See how I work →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What This Service Includes */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                What this service includes
              </h2>
              <ul className="space-y-3">
                {data.deliverables.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Who this is for
              </h2>
              <ul className="space-y-3">
                {data.whoFor.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent-primary mt-0.5 flex-shrink-0">→</span>
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* My Process */}
      <section className="section-padding bg-bg-surface border-y border-border">
        <div className="container max-w-3xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-text-primary">My process</h2>
            <Link href="/process" className="text-accent-primary text-sm hover:underline">
              See full process →
            </Link>
          </div>
          <div className="space-y-6">
            {data.process.map((step, i) => (
              <ProcessStep
                key={i}
                number={i + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {data.relatedCaseStudies && data.relatedCaseStudies.length > 0 && (
        <section className="section-padding">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-text-primary">Related work</h2>
              <Link href="/case-studies" className="text-accent-primary text-sm hover:underline">
                See all case studies →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.relatedCaseStudies.map((cs) => (
                <CaseStudyCard key={cs.slug} {...cs} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tools & Technologies */}
      <section className="section-padding bg-bg-surface border-y border-border">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            Tools & technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.tools.map((tool) => (
              <span
                key={tool.name}
                className="font-mono text-sm bg-bg-elevated border border-border text-text-secondary px-3 py-1.5 rounded-btn"
              >
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Testimonials */}
      {data.relatedTestimonials && data.relatedTestimonials.length > 0 && (
        <section className="section-padding">
          <div className="container max-w-4xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-text-primary">What clients say</h2>
              <Link href="/testimonials" className="text-accent-primary text-sm hover:underline">
                Read all testimonials →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.relatedTestimonials.map((t, i) => (
                <TestimonialCard key={i} {...t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <section className="section-padding">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Related services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.relatedServices.map((rs) => (
                <Link
                  key={rs.href}
                  href={rs.href}
                  className="group rounded-card border border-border bg-bg-surface p-5 card-hover flex flex-col gap-2"
                >
                  <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                    {rs.name}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">{rs.description}</p>
                  <span className="mt-auto text-accent-primary text-sm font-medium">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Glossary Terms */}
      {data.relatedGlossaryTerms && data.relatedGlossaryTerms.length > 0 && (
        <section className="section-padding bg-bg-surface border-y border-border">
          <div className="container max-w-4xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text-primary">Key concepts</h2>
              <Link href="/glossary" className="text-accent-primary text-sm hover:underline">
                Full glossary →
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.relatedGlossaryTerms.map((term) => (
                <Link
                  key={term.slug}
                  href={`/glossary/${term.slug}`}
                  className="px-3 py-1.5 rounded-btn border border-border bg-bg-base text-text-secondary text-sm hover:border-accent-primary hover:text-accent-primary hover:bg-accent-primary/5 transition-all duration-150"
                >
                  {term.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Resources */}
      {data.relatedResources && data.relatedResources.length > 0 && (
        <section className="section-padding">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Resources & guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.relatedResources.map((res) => (
                <Link
                  key={res.href}
                  href={res.href}
                  className="group rounded-card border border-border bg-bg-surface p-5 card-hover flex flex-col gap-2"
                >
                  <span className="text-text-muted text-xs font-mono uppercase tracking-wider">
                    {res.type === "blog" ? "Blog post" : "Guide"}
                  </span>
                  <h3 className="font-semibold text-text-primary text-sm group-hover:text-accent-primary transition-colors leading-snug">
                    {res.title}
                  </h3>
                  <span className="mt-auto text-accent-primary text-sm font-medium">
                    Read →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding bg-bg-surface border-y border-border">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            Frequently asked questions
          </h2>
          <FAQAccordion items={data.faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding aurora-bg relative">
        <div className="container relative z-10 text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Ready to get started?
          </h2>
          <p className="text-text-secondary mb-8">
            No pricing on this page — every engagement is scoped to fit your specific needs. Let&apos;s start with a conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              {data.ctaText || "Get a free consultation →"}
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              About Aryan →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
