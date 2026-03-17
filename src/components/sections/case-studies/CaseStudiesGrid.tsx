"use client";

import { useState } from "react";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export function CaseStudiesGrid({ caseStudies }: { caseStudies: CaseStudyItem[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredStudies =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((cs) => {
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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeFilter}
        >
          {filteredStudies.map((cs) => (
            <motion.div key={cs.slug} variants={itemVariants} className="h-full">
              <CaseStudyCard {...cs} />
            </motion.div>
          ))}
        </motion.div>
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
