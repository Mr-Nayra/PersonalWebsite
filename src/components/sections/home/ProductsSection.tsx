"use client";

import Link from "next/link";
import { ProductCard } from "@/components/ui/ProductCard";
import { productsPreview } from "@/data/site-data";
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

export function ProductsSection() {
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
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-3">
              Things I&apos;ve built.
            </h2>
            <p className="text-text-secondary max-w-xl">
              Alongside client work, I build products that solve real problems. Here&apos;s what&apos;s live and what&apos;s in progress.
            </p>
          </div>
          <Link
            href="/products"
            className="text-accent-primary text-sm font-medium hover:underline whitespace-nowrap"
          >
            See all products →
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {productsPreview.map((product) => (
            <motion.div key={product.slug} variants={itemVariants} className="h-full">
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
