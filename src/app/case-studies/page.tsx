import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { caseStudiesPreview } from "@/data/site-data";
import { CaseStudiesGrid } from "@/components/sections/case-studies/CaseStudiesGrid";
import { TechBackground } from "@/components/ui/TechBackground";
import { AtomBackground } from "@/components/ui/AtomBackground";
import { itemListSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Case Studies — AI Automation, SEO & SaaS Results | Apex Mind LLP",
  description:
    "Client case studies from Aryan Rawther (Apex Mind LLP) — AI IVR systems, SaaS MVPs, and organic SEO growth. Real results with specific metrics: 70% call handling reduction, 8-week MVP delivery.",
  alternates: { canonical: "/case-studies" },
  keywords: [
    "AI automation case studies India",
    "SaaS development case study India",
    "SEO results case study India",
    "AI voice agent case study",
    "LLM integration case study",
    "Apex Mind LLP case studies",
    "AI consultant portfolio India",
  ],
};

export default function CaseStudiesPage() {
  return (
    <>
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
      {/* Hero */}
      <section className="aurora-bg pt-32 pb-16 overflow-hidden relative">
        <div className="container relative z-10 max-w-3xl">
          <Breadcrumb items={[{ name: "Case Studies", url: "/case-studies" }]} />
          <div className="mt-8">
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-4">
              Case Studies
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed">
              Real projects, specific problems, measurable results. Not theoretical — what actually happened.
            </p>
          </div>
        </div>
      </section>

      {/* Case studies grid and filter */}
      <section className="relative section-padding overflow-hidden">
        <TechBackground />
        {/* Placed on the left side as requested */}
        <AtomBackground className="left-0 -translate-x-[30%] opacity-20" />
        
        <div className="container relative z-10">
          <CaseStudiesGrid caseStudies={caseStudiesPreview} />

          <div className="mt-16 text-center pt-8 border-t border-border/50">
            <p className="text-text-muted text-sm mb-4">
              More case studies are published regularly. Some client work is under NDA.
            </p>
            <Button href="/contact" variant="primary">
              Start a project →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
