import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Blog — AI Automation, Technical SEO, GEO & SaaS Development",
  description:
    "Practical, in-depth articles on AI automation, LLM integration, technical SEO, GEO (Generative Engine Optimisation), and SaaS development from Aryan Rawther. Written from real client project experience.",
  alternates: { canonical: "/blog" },
  keywords: [
    "AI automation blog India",
    "technical SEO blog",
    "GEO optimisation guide",
    "LLM integration tutorial",
    "SaaS development articles",
    "AI agent development guide",
    "generative engine optimisation blog",
    "Aryan Rawther blog",
  ],
};

const placeholderPosts = [
  {
    slug: "how-to-build-ai-agents-with-langchain",
    title: "How to Build AI Agents with LangChain: A Practical Guide",
    excerpt: "A step-by-step walkthrough of building production-ready AI agents using LangChain, FastAPI, and OpenAI. Covers agent design, tool integration, and deployment.",
    date: "2024-12-15",
    readTime: 12,
    category: "AI Automation",
    featured: true,
  },
  {
    slug: "technical-seo-for-saas-startups",
    title: "Technical SEO for SaaS Startups: The Complete Checklist",
    excerpt: "Everything you need to know about technical SEO for SaaS — Core Web Vitals, crawlability, programmatic pages, and product-led SEO strategies.",
    date: "2024-12-08",
    readTime: 15,
    category: "SEO",
    featured: false,
  },
  {
    slug: "building-ai-ivr-twilio-deepgram",
    title: "Building an AI IVR System with Twilio and Deepgram",
    excerpt: "How I built a production AI voice agent system for an insurance company — architecture decisions, challenges, and lessons learned.",
    date: "2024-11-28",
    readTime: 18,
    category: "AI Voice Agents",
    featured: false,
  },
  {
    slug: "what-is-geo-generative-engine-optimisation",
    title: "What is GEO? Generative Engine Optimisation Explained",
    excerpt: "GEO is the practice of making your content citable by AI systems like ChatGPT, Perplexity, and Google AI Overviews. Here's everything you need to know.",
    date: "2024-11-15",
    readTime: 10,
    category: "SEO",
    featured: false,
  },
  {
    slug: "nextjs-15-app-router-performance",
    title: "Next.js 15 App Router: Performance Patterns for Production",
    excerpt: "Practical Next.js 15 performance patterns — server components, streaming, caching strategies, and measuring what actually matters.",
    date: "2024-11-05",
    readTime: 14,
    category: "Web Development",
    featured: false,
  },
];

export default function BlogPage() {
  const [featured, ...rest] = placeholderPosts;

  return (
    <>
      {/* Hero */}
      <section className="aurora-bg pt-32 pb-16">
        <div className="container relative z-10 max-w-3xl">
          <Breadcrumb items={[{ name: "Blog", url: "/blog" }]} />
          <div className="mt-8">
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-4">
              Blog
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed">
              Practical guides on AI automation, SEO, and web development — written from real project experience.
            </p>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-lg font-semibold text-text-muted mb-6">Featured post</h2>
          <Link
            href={`/blog/${featured.slug}`}
            className="group block md:flex rounded-card border border-border bg-bg-surface overflow-hidden card-hover"
          >
            <div className="md:w-2/5 h-48 md:h-auto bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center">
              <div className="text-6xl opacity-30">✦</div>
            </div>
            <div className="p-6 md:flex-1 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-0.5 rounded-full border border-accent-primary/20">
                  {featured.category}
                </span>
                <span className="text-text-muted text-xs">{featured.readTime} min read</span>
              </div>
              <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                {featured.title}
              </h3>
              <p className="text-text-muted leading-relaxed">{featured.excerpt}</p>
              <span className="mt-auto text-accent-primary text-sm font-medium">Read post →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* All posts */}
      <section className="section-padding bg-bg-surface border-y border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-card border border-border bg-bg-base p-5 card-hover flex flex-col gap-3"
              >
                <div className="h-32 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-btn flex items-center justify-center">
                  <div className="text-3xl opacity-20">✦</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-bg-elevated text-text-muted px-2 py-0.5 rounded-full border border-border">
                    {post.category}
                  </span>
                  <span className="text-text-muted text-xs">{post.readTime} min read</span>
                </div>
                <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="container max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-3">
            Get new posts in your inbox
          </h2>
          <p className="text-text-secondary mb-6">
            New posts every week on AI automation, SEO, and web development.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-btn border border-border bg-bg-surface text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors text-sm"
            />
            <button className="px-5 py-3 bg-accent-primary text-white font-medium rounded-btn hover:bg-opacity-90 transition-all text-sm whitespace-nowrap">
              Subscribe →
            </button>
          </div>
          <p className="text-text-muted text-xs mt-2">[TODO: Connect to email provider]</p>
        </div>
      </section>
    </>
  );
}
