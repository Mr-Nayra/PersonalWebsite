"use client";

import Link from "next/link";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { caseStudiesPreview } from "@/data/site-data";
import { motion } from "framer-motion";
import { TechBackground } from "@/components/ui/TechBackground";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export function CaseStudiesSection() {
  return (
    <section className="relative section-padding bg-bg-surface border-y border-border overflow-hidden">
      <TechBackground />

      <div className="container relative z-10">
        <motion.div 
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {caseStudiesPreview.map((cs) => (
            <motion.div key={cs.slug} variants={itemVariants} className="h-full">
              <CaseStudyCard {...cs} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
