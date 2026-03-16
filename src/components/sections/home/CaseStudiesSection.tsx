import Link from "next/link";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { caseStudiesPreview } from "@/data/site-data";

export function CaseStudiesSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-3">
              Real results.
            </h2>
            <p className="text-text-secondary max-w-xl">
              Case studies from client projects — specific problems, specific approaches, measurable outcomes.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="text-accent-primary text-sm font-medium hover:underline whitespace-nowrap"
          >
            View all case studies →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {caseStudiesPreview.map((cs) => (
            <CaseStudyCard key={cs.slug} {...cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
