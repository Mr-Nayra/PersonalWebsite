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
    coverImage?: string;
    coverCaption?: string;
    faq?: { question: string; answer: string }[];
  }
> = {
  "rank-on-google-get-cited-by-ai-search-engines": {
    title: "How to Rank on Google and Get Cited by AI Search Engines",
    slug: "rank-on-google-get-cited-by-ai-search-engines",
    excerpt:
      "AI SEO is technical SEO — plus a few extra steps most people miss. The exact mistakes to avoid and the checklist I run on every site I work on.",
    date: "2026-03-29",
    updatedAt: "2026-03-29",
    readTime: 18,
    category: "SEO",
    coverImage: "/images/blog/ai-seo-referrers.webp",
    coverCaption: "ChatGPT, Perplexity, and Claude started citing one of my websites within 7 days of optimising it — this is the referrer data.",
    keywords: [
      "technical SEO",
      "AI SEO",
      "SEO for founders",
      "SEO for startups",
      "robots.txt",
      "llms.txt",
      "schema markup",
      "JSON-LD",
      "structured data",
      "AI search optimisation",
      "ChatGPT SEO",
      "Perplexity SEO",
      "GEO",
      "generative engine optimisation",
      "Core Web Vitals",
      "backlinks",
      "sitemap optimisation",
      "page speed",
      "Open Graph tags",
      "meta tags",
      "internal linking",
      "Bing Webmaster Tools",
      "Google Search Console",
      "Ahrefs",
      "Semrush",
    ],
    faq: [
      {
        question: "I am not technical — can I still do this?",
        answer:
          "Most of this can be done without writing code. Robots.txt and llms.txt are plain text files. Submitting to search consoles is point-and-click. For schema markup and meta tags, you will need either a developer or a CMS plugin like Yoast for WordPress.",
      },
      {
        question: "My site is brand new — should I focus on SEO or just content first?",
        answer:
          "Both, but technical SEO comes first. It takes 15 minutes to set up the foundation (robots.txt, sitemap, search console submissions), and then everything you publish after that gets indexed properly from day one.",
      },
      {
        question: "How do I know if my SEO changes are actually working?",
        answer:
          "Three signals: check Google Search Console for increasing indexed pages count (weekly for 90 days), check your analytics for AI referrers like chatgpt.com and perplexity.ai, and search for yourself on AI platforms to see if you get cited.",
      },
    ],
  },
};
