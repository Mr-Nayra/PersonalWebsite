import Link from "next/link";

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

export function BlogSection() {
  return (
    <section className="section-padding bg-bg-surface border-y border-border">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogPostsPreview.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-card border border-border bg-bg-base p-5 card-hover"
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
          ))}
        </div>
      </div>
    </section>
  );
}
