"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { siteData } from "@/data/site-data";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export function ServicesSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div 
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 id="services-heading" className="text-3xl lg:text-4xl font-bold text-text-primary mb-3">
              What I do.
            </h2>
            <p id="services-description" className="text-text-secondary max-w-xl">
              Five specialised services, one integrated approach. Every engagement starts with understanding your business, not pitching a solution.
            </p>
          </div>
          <Link
            href="/services"
            className="text-accent-primary text-sm font-medium hover:underline whitespace-nowrap"
          >
            See all services →
          </Link>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {siteData.services.map((service) => (
            <motion.div key={service.href} variants={itemVariants}>
              <Link
                href={service.href}
                className="group h-full block rounded-card border border-border bg-bg-surface p-6 card-hover"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-accent-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <span>→</span>
                </span>
              </Link>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div variants={itemVariants}>
            <div className="h-full rounded-card border border-dashed border-border bg-transparent p-6 flex flex-col items-center justify-center text-center gap-3">
              <p className="text-text-muted text-sm">Not sure which service fits?</p>
              <Button href="/contact" variant="secondary" size="sm">
                Let&apos;s talk →
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
