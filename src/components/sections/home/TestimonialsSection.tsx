import Link from "next/link";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { siteData } from "@/data/site-data";

export function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-3">
              What clients say.
            </h2>
            <p className="text-text-secondary">
              Real feedback from real engagements.
            </p>
          </div>
          <Link
            href="/testimonials"
            className="text-accent-primary text-sm font-medium hover:underline whitespace-nowrap"
          >
            Read all testimonials →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {siteData.testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
