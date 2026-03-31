// Central data store for site content
// Replace placeholder content with real data

export const siteData = {
  person: {
    name: "Aryan Rawther",
    company: "Apex Mind LLP",
    role: "Founder & Principal Consultant",
    location: "Bengaluru, India",
    tagline: "I help businesses grow using AI, SEO, and modern web technology.",
    bio: "Founder of Apex Mind LLP. I work at the intersection of AI automation, technical SEO, and software engineering — helping businesses build systems that scale. Based in Bengaluru, working with clients across India and globally.",
    email: "contact.aryanrawther@gmail.com",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917905206587",
    linkedin: "https://www.linkedin.com/in/aryanrawther",
    github: "https://github.com/Mr-Nayra",
  },

  stats: [
    { value: 20, suffix: "+", label: "Client projects delivered" },
    { value: 5, suffix: "", label: "Years of hands-on experience" },
    { value: 100, suffix: "%", label: "Milestone-based delivery" },
    { value: 3, suffix: "+", label: "Countries served" },
  ],

  services: [
    {
      name: "AI Automation Consulting",
      href: "/services/ai-automation-consulting",
      description: "Design and deploy AI agent workflows, LLM integrations, and process automation for your business.",
      icon: "🤖",
    },
    {
      name: "AI Integration & Agentic Workflows",
      href: "/services/ai-integration",
      description: "Prompt Engineering & Architecture, SaaS 'AI-ification' for existing products, and Custom AI Voice Agents.",
      icon: "🧠",
    },
    {
      name: "SEO Services",
      href: "/services/seo-services",
      description: "Technical SEO, content strategy, and GEO optimisation for organic growth and AI visibility.",
      icon: "📈",
    },
    {
      name: "Web Development",
      href: "/services/web-development",
      description: "Modern frontend and backend development — Next.js, React, FastAPI, and full-stack MERN.",
      icon: "💻",
    },
    {
      name: "SaaS Product Development",
      href: "/services/saas-development",
      description: "MVP architecture, multi-tenant SaaS, and B2B product design — from idea to working product.",
      icon: "🚀",
    },
  ],

  testimonials: [
    {
      quote:
        "[TODO: Replace with real testimonial] Working with Aryan transformed our approach to AI automation. The system he built reduced our manual data processing time by 80%.",
      name: "Client Name",
      role: "CTO",
      company: "Tech Startup",
      service: "AI Automation",
    },

    {
      quote:
        "[TODO: Replace with real testimonial] The voice AI system Aryan built handles thousands of calls daily with remarkable accuracy. Genuinely impressive work.",
      name: "Client Name",
      role: "Operations Director",
      company: "Insurance Company",
      service: "AI Voice Agents",
    },
  ],

  values: [
    {
      title: "Outcomes over output",
      description:
        "I measure success by the results you get, not by lines of code or pages written.",
    },
    {
      title: "Clarity at every step",
      description:
        "No surprises. You always know where the project stands, what's next, and why.",
    },
    {
      title: "Built to last",
      description:
        "Everything I build is documented, tested, and maintainable by whoever comes after me.",
    },
    {
      title: "Honest about fit",
      description:
        "If your project isn't right for me, I'll tell you — and point you in a better direction.",
    },
  ],
};

export const caseStudiesPreview = [
  {
    slug: "seo-internal-linking-ai-agent",
    title: "AI SEO Agent: Internal Linking & Backlink Graph",
    industry: "Internal Tool / SEO",
    service: ["AI Integration & Agentic Workflows", "SEO Services"],
    result: "Automated 400-page audits (20 hrs/week saved)",
    excerpt:
      "Built a dual-agent LangGraph system using Firecrawl and Python to autonomously map, graph, and optimize internal linking structures and backlink quality for a 400+ page website.",
  },
  {
    slug: "autonomous-inbound-email-agent",
    title: "Autonomous Inbound Sales & Scheduling Agent",
    industry: "HealthTech",
    service: ["AI Integration & Agentic Workflows", "AI Automation Consulting"],
    result: "Automated 15+ daily inquiries & scheduling",
    excerpt:
      "Engineered an autonomous email agent using Gmail AI/PubSub, Perplexity, and OpenAI to research inbound leads, check calendars, and draft personalized replies instantly, eliminating manual work for the C-suite.",
  },
  {
    slug: "healthcare-rcm-automation",
    title: "Healthcare Insurance Verification & RCM Automation",
    industry: "Healthcare / RCM",
    service: ["AI Integration & Agentic Workflows", "AI Automation Consulting"],
    result: "Automated 300 patients/day, replaced 7 FTEs",
    excerpt:
      "Built a custom AI-driven pipeline integrating with eClinicalWorks to automate insurance verification for a US billing company, removing the need for 7 FTEs.",
  },
  {
    slug: "speclens-ai-procurement-saas",
    title: "SpecLens AI — Procurement SaaS",
    industry: "B2B / Procurement",
    service: ["SaaS Product Development"],
    result: "MVP → live in 8 weeks",
    excerpt:
      "Architected and built a full-stack procurement SaaS platform with AI-powered specification comparison, RFP workflows, and vendor evaluation.",
  },
  {
    slug: "photoshoprequest-ai-editor",
    title: "AI-Powered Photo Editor Pipeline",
    industry: "Consumer / AI SaaS",
    service: ["SaaS Product Development", "AI Integration & Agentic Workflows"],
    result: "Automated editor & validator loop",
    excerpt:
      "Built an AI-powered photo editing platform inspired by r/photoshoprequest, featuring an automated editor-validator pipeline using Gemini, Next.js, and PayPal integrations.",
  },
  
  {
    slug: "combinehealth-seo-redesign",
    title: "1M Daily Impressions via Tech & AI SEO",
    industry: "HealthTech / SaaS",
    service: ["Web Development", "SEO Services"],
    result: "1M+ daily impressions",
    excerpt:
      "Rebuilt the CombineHealth frontend from Figma designs, implementing comprehensive technical and AI-SEO strategies (JSON Schema, llm.txt, 100% PageSpeed) to scale organic marketing.",
  },
];

export const productsPreview = [
  {
    slug: "speclens-ai",
    name: "SpecLens AI",
    tagline: "AI-powered procurement specification comparison for B2B buying decisions.",
    type: "saas" as const,
    status: "live" as const,
    techStack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "LangGraph", "Gemini AI"],
    liveUrl: "https://speclens.ai",
    featured: true,
  },
  {
    slug: "photoshoprequest",
    name: "PhotoshopRequest App",
    tagline: "AI-powered photo editing platform with an automated editor-validator pipeline.",
    type: "saas" as const,
    status: "beta" as const,
    techStack: ["Next.js", "TailwindCSS", "Gemini AI", "PayPal", "LangGraph"],
    liveUrl: "https://www.photoshoprequest.app/",
    featured: true,
  },
];
