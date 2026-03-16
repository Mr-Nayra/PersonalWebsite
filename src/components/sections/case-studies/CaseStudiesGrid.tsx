"use client";

import { useState } from "react";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { cn } from "@/lib/utils";

// Define the available filter categories
const FILTER_CATEGORIES = [
  "All",
  "AI Integration & Agentic Workflows",
  "SaaS Development",
  "Web Development",
  "SEO Services",
];

interface CaseStudyItem {
  slug: string;
  title: string;
  industry: string;
  service: string | string[];
  result: string;
  excerpt?: string;
}

export function CaseStudiesGrid({ caseStudies }: { caseStudies: CaseStudyItem[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredStudies =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((cs) => {
          // Check if the case study has the active filter in its array of services
          const services = Array.isArray(cs.service) ? cs.service : [cs.service];
          return services.includes(activeFilter);
        });

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {FILTER_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
              activeFilter === category
                ? "bg-accent-primary border-accent-primary text-bg-base"
                : "bg-transparent border-border text-text-secondary hover:text-text-primary hover:border-text-muted"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredStudies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((cs) => (
            <CaseStudyCard
              key={cs.slug}
              {...cs}
              className="animate-fade-in"
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 rounded-card border border-border border-dashed">
          <p className="text-text-muted">No case studies found for this category.</p>
          <button 
            onClick={() => setActiveFilter("All")}
            className="text-accent-primary hover:underline mt-2 text-sm"
          >
            Clear filter
          </button>
        </div>
      )}
    </>
  );
}
