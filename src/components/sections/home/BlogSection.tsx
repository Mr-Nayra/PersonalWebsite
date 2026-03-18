"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Placeholder blog posts for preview
const blogPostsPreview = [
  {
    slug: "how-to-build-ai-agents-with-langchain",
    title: "How to Build AI Agents with LangChain: A Practical Guide",
    excerpt:
      "A step-by-step walkthrough of building production-ready AI agents using LangChain, FastAPI, and OpenAI. Covers agent design, tool integration, and deployment.",
    date: "2024-12-15",
    readTime: 12,
    category: "AI Automation",
  },
  {
    slug: "technical-seo-for-saas-startups",
    title: "Technical SEO for SaaS Startups: The Complete Checklist",
    excerpt:
      "Everything you need to know about technical SEO for SaaS — Core Web Vitals, crawlability, programmatic pages, and product-led SEO strategies.",
    date: "2024-12-08",
    readTime: 15,
    category: "SEO",
  },
  {
    slug: "building-ai-ivr-twilio-deepgram",
    title: "Building an AI IVR System with Twilio and Deepgram",
    excerpt:
      "How I built a production AI voice agent system for an insurance company — architecture decisions, challenges, and lessons learned.",
    date: "2024-11-28",
    readTime: 18,
    category: "AI Voice Agents",
  },
];

const inkDrops = [
  { cx: "15%", cy: "25%", r: 60, delay: 0, duration: 8 },
  { cx: "75%", cy: "70%", r: 45, delay: 2, duration: 10 },
  { cx: "50%", cy: "15%", r: 35, delay: 4, duration: 9 },
  { cx: "85%", cy: "30%", r: 50, delay: 1, duration: 11 },
  { cx: "25%", cy: "80%", r: 40, delay: 3, duration: 7 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export function BlogSection() {
  return (
    <section className="relative section-padding bg-bg-surface border-y border-border overflow-hidden">
      {/* Ink Splatter Background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        {inkDrops.map((drop, i) => (
          <motion.circle
            key={i}
            cx={drop.cx}
            cy={drop.cy}
            r={drop.r}
            fill="var(--accent-primary)"
            opacity={0}
            animate={{
              opacity: [0, 0.12, 0.08, 0.12, 0],
              scale: [0.8, 1.1, 1, 1.1, 0.8],
            }}
            transition={{
              duration: drop.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: drop.delay,
            }}
          />
        ))}
      </svg>

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
              From the blog.
            </h2>
            <p className="text-text-secondary max-w-xl">
              Practical guides on AI automation, SEO, and web development — from real project experience.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-accent-primary text-sm font-medium hover:underline whitespace-nowrap"
          >
            Read the blog →
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogPostsPreview.map((post) => (
            <motion.div key={post.slug} variants={itemVariants}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-card border border-border bg-bg-base p-5 card-hover h-full"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-0.5 rounded-full border border-accent-primary/20">
                    {post.category}
                  </span>
                  <span className="text-text-muted text-xs">{post.readTime} min read</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
