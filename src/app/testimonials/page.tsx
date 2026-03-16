import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteData } from "@/data/site-data";
import { reviewSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Client Testimonials — Aryan Rawther",
  description:
    "Client testimonials for Aryan Rawther (Apex Mind LLP) — AI automation, SEO, and web development projects. Read what clients say about working with Aryan.",
  alternates: { canonical: "/testimonials" },
};

// Expanded testimonials for the dedicated page
const allTestimonials = [
  ...siteData.testimonials,
  {
    quote:
      "[TODO: Add real testimonial] The SaaS MVP Aryan built went from concept to live product in under 8 weeks. The architecture he chose has scaled without issues and the documentation made onboarding the next developer painless.",
    name: "Client Name",
    role: "Founder",
    company: "SaaS Startup",
    service: "SaaS Development",
  },
  {
    quote:
      "[TODO: Add real testimonial] What I appreciated most was the proactive communication. I never had to chase for updates — the weekly Monday report always told me exactly where things were.",
    name: "Client Name",
    role: "Head of Product",
    company: "Tech Company",
    service: "Web Development",
  },
  {
    quote:
      "[TODO: Add real testimonial] Aryan's GEO optimisation work helped us appear in Google AI Overviews for our target keywords within weeks. It's a genuinely different approach to content strategy.",
    name: "Client Name",
    role: "Founder",
    company: "SaaS Platform",
    service: "SEO Services",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            reviewSchema(
              allTestimonials.map((t) => ({
                author: t.name,
                review: t.quote,
                rating: 5,
              }))
            )
          ),
        }}
      />

      {/* Hero */}
      <section className="aurora-bg pt-32 pb-16">
        <div className="container relative z-10 max-w-2xl">
          <Breadcrumb items={[{ name: "Testimonials", url: "/testimonials" }]} />
          <div className="mt-8">
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-4">
              Client Testimonials
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed">
              Real feedback from real engagements. What clients say about the work, the process, and working with Aryan Rawther.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allTestimonials.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="section-padding bg-bg-surface border-y border-border">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { metric: "6+", label: "Total client testimonials" },
              { metric: "5/5", label: "Average satisfaction" },
              { metric: "100%", label: "Would recommend" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-4xl font-bold gradient-text mb-1">
                  {stat.metric}
                </div>
                <p className="text-text-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding aurora-bg relative">
        <div className="container relative z-10 text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Work with Aryan
          </h2>
          <p className="text-text-secondary mb-8">
            Ready to add your name to this list? Let&apos;s start with a conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Get in touch →
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg">
              Read the full case studies →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
