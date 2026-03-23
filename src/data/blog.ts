export const blogPosts: Record<
  string,
  {
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    updatedAt: string;
    readTime: number;
    category: string;
    keywords: string[];
  }
> = {
  "how-to-build-ai-agents-with-langchain": {
    title: "How to Build AI Agents with LangChain: A Practical Guide",
    slug: "how-to-build-ai-agents-with-langchain",
    excerpt: "A step-by-step walkthrough of building production-ready AI agents using LangChain, FastAPI, and OpenAI.",
    date: "2024-12-15",
    updatedAt: "2026-03-20",
    readTime: 12,
    category: "AI Automation",
    keywords: ["LangChain", "AI agents", "LLM", "FastAPI", "OpenAI", "AI automation", "Python", "agent executor"],
  },
  "technical-seo-for-saas-startups": {
    title: "Technical SEO for SaaS Startups: The Complete Checklist",
    slug: "technical-seo-for-saas-startups",
    excerpt: "Everything you need to know about technical SEO for SaaS — Core Web Vitals, crawlability, and product-led SEO.",
    date: "2024-12-08",
    updatedAt: "2026-03-20",
    readTime: 15,
    category: "SEO",
    keywords: ["technical SEO", "SaaS SEO", "Core Web Vitals", "crawlability", "schema markup", "sitemap", "robots.txt"],
  },
  "building-ai-ivr-twilio-deepgram": {
    title: "Building an AI IVR System with Twilio and Deepgram",
    slug: "building-ai-ivr-twilio-deepgram",
    excerpt: "How I built a production AI voice agent system for an insurance company — architecture decisions and lessons learned.",
    date: "2024-11-28",
    updatedAt: "2026-03-20",
    readTime: 18,
    category: "AI Voice Agents",
    keywords: ["AI IVR", "Twilio", "Deepgram", "voice agent", "speech-to-text", "AI automation", "healthcare RCM", "GPT-4o"],
  },
  "what-is-geo-generative-engine-optimisation": {
    title: "What is GEO? Generative Engine Optimisation Explained",
    slug: "what-is-geo-generative-engine-optimisation",
    excerpt: "GEO is the practice of making your content citable by AI systems. Here's everything you need to know.",
    date: "2024-11-15",
    updatedAt: "2026-03-20",
    readTime: 10,
    category: "SEO",
    keywords: ["GEO", "generative engine optimisation", "AI search", "ChatGPT SEO", "Perplexity SEO", "llms.txt", "schema markup", "AI citations"],
  },
  "nextjs-15-app-router-performance": {
    title: "Next.js 15 App Router: Performance Patterns for Production",
    slug: "nextjs-15-app-router-performance",
    excerpt: "Practical Next.js 15 performance patterns — server components, streaming, and caching strategies.",
    date: "2024-11-05",
    updatedAt: "2026-03-20",
    readTime: 14,
    category: "Web Development",
    keywords: ["Next.js 15", "App Router", "server components", "React streaming", "Next.js performance", "Core Web Vitals", "caching"],
  },
};
