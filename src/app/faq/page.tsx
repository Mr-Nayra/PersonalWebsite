import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "FAQ — AI Automation, SEO & SaaS Development Questions | Aryan Rawther",
  description:
    "Answers to common questions about working with Aryan Rawther (Apex Mind LLP) — AI automation consulting fees, SEO timelines, SaaS development process, AI voice agents, and how consulting engagements are structured.",
  alternates: { canonical: "/faq" },
  keywords: [
    "AI automation consultant FAQ",
    "SEO consultant questions India",
    "SaaS developer FAQ India",
    "AI consulting pricing India",
    "how to hire AI consultant India",
    "Apex Mind LLP FAQ",
  ],
};

const faqCategories = [
  {
    category: "AI Automation",
    questions: [
      {
        question: "What is AI automation consulting?",
        answer:
          "AI automation consulting involves analysing your business processes and designing AI-powered systems that replace or augment manual work. This includes selecting the right AI models, designing agent workflows, integrating with your existing tools, and ensuring the system is maintainable. See the <a href='/services/ai-automation-consulting'>AI Automation Consulting</a> page for full details.",
      },
      {
        question: "Which AI models do you work with?",
        answer:
          "I work with OpenAI (GPT-4, GPT-4o), Anthropic (Claude), and Google Gemini — selecting based on your use case, cost requirements, and data privacy needs. I'm model-agnostic and recommend what fits your problem.",
      },
      {
        question: "Can you integrate AI into our existing software?",
        answer:
          "Yes. Most engagements involve integrating AI into existing tools rather than building from scratch. I work with any system that has an API — Google Drive, Egnyte, CRMs, ERPs, and custom platforms.",
      },
    ],
  },
  {
    category: "AI Voice Agents",
    questions: [
      {
        question: "What is an AI voice agent?",
        answer:
          "An AI voice agent handles phone calls autonomously using AI — understanding what callers say (speech-to-text), reasoning about the right response (LLM), and responding in natural speech (text-to-speech). Unlike traditional IVR with rigid menus, AI voice agents handle open-ended conversation.",
      },
      {
        question: "What happens when the AI can't handle a call?",
        answer:
          "Every system I build has explicit escalation logic. When confidence is low or a caller asks for a human, the call routes to a human agent with full context and a transcript of the AI conversation. Seamless handoff is a core requirement, not an afterthought.",
      },
    ],
  },
  {
    category: "SEO Services",
    questions: [
      {
        question: "What is GEO (Generative Engine Optimisation)?",
        answer:
          "GEO is the practice of structuring your content so that AI systems — ChatGPT, Perplexity, Google AI Overviews, Claude — extract, understand, and cite it accurately. It involves answer-first writing, structured data, entity consistency, and an llms.txt file. It's the emerging counterpart to traditional SEO.",
      },
      {
        question: "How long does SEO take to show results?",
        answer:
          "Technical SEO fixes can show results in 4–8 weeks. Content and keyword strategies typically show meaningful organic growth in 3–6 months. GEO results — appearing in AI answers — can happen faster, as AI systems crawl and cite frequently.",
      },
      {
        question: "Do you offer ongoing SEO retainers?",
        answer:
          "Yes. Many clients start with an audit and strategy engagement, then move to a monthly retainer for ongoing content, monitoring, and technical maintenance.",
      },
    ],
  },
  {
    category: "Web Development",
    questions: [
      {
        question: "What tech stack do you specialise in?",
        answer:
          "My primary stack is Next.js + TypeScript for frontend and Python (FastAPI) for backend. I also work with the full MERN stack (MongoDB, Express, React, Node.js). I recommend the stack that fits the project, not the one I use for everything.",
      },
      {
        question: "Do you handle deployment and hosting?",
        answer:
          "Yes. My default targets are Vercel (for Next.js frontend) and Railway (for Python backend). I can also deploy to AWS, GCP, or DigitalOcean if you have existing infrastructure.",
      },
      {
        question: "Can you work with an existing codebase?",
        answer:
          "Yes — I regularly join projects mid-stream. I start with a codebase review before proposing changes, and I don't rewrite things that work.",
      },
    ],
  },
  {
    category: "SaaS Development",
    questions: [
      {
        question: "What is multi-tenant SaaS architecture?",
        answer:
          "Multi-tenant SaaS means one software instance serves multiple customers with their data kept isolated. The architecture decisions — shared vs. separate databases, row-level security, tenant identification — are critical and made upfront.",
      },
      {
        question: "Can you act as a technical co-founder?",
        answer:
          "For scoped engagements, yes — I take full ownership of technical architecture and build decisions, advising on technology choices, infrastructure costs, and product direction. This is different from a full-time co-founder role — I work on a project basis with a clean handoff.",
      },
    ],
  },
  {
    category: "Working with Aryan",
    questions: [
      {
        question: "How much do your services cost?",
        answer:
          "I don't publish rates on this website because scope matters more than a number. Every engagement is milestone-based — you only pay when deliverables are approved. Reach out and I'll give you an honest estimate after understanding your project.",
      },
      {
        question: "Do you sign NDAs?",
        answer:
          "Yes, before any detailed project discussion. Standard NDA — protects your business information and project details. I take client confidentiality seriously.",
      },
      {
        question: "What's the first step to working together?",
        answer:
          "Reach out via the <a href='/contact'>contact form</a> or WhatsApp. I'll respond within 24 hours. If there's a potential fit, we schedule a 30-minute discovery call — free, no obligation. From there, I send a written proposal.",
      },
    ],
  },
  {
    category: "Apex Mind LLP",
    questions: [
      {
        question: "What is Apex Mind LLP?",
        answer:
          "Apex Mind LLP is the registered entity through which Aryan Rawther delivers consulting and development services. It is a Limited Liability Partnership registered in India. All client engagements, invoicing, and contracts are conducted through Apex Mind LLP.",
      },
      {
        question: "Is Aryan Rawther a solo consultant or a team?",
        answer:
          "Aryan is the principal consultant — he is involved in every project. For larger engagements, he works with a small trusted team of specialists (AI engineers, copywriters, designers) to deliver end-to-end results.",
      },
      {
        question: "Where is Apex Mind LLP based?",
        answer:
          "Bengaluru, India. Aryan works with clients across India and globally — India, the US, the UK, and other markets. All project work is conducted remotely.",
      },
    ],
  },
];

const allFaqs = faqCategories.flatMap((c) => c.questions);

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(allFaqs)) }}
      />

      {/* Hero */}
      <section className="aurora-bg pt-32 pb-16">
        <div className="container relative z-10 max-w-2xl">
          <Breadcrumb items={[{ name: "FAQ", url: "/faq" }]} />
          <div className="mt-8">
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed">
              Direct answers to the questions people ask most before reaching out. No fluff.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <div className="space-y-12">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-xl font-bold text-text-primary mb-5 pb-3 border-b border-border">
                  {cat.category}
                </h2>
                <FAQAccordion items={cat.questions} />
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-card border border-border bg-bg-surface p-6 text-center">
            <p className="text-text-secondary mb-4">
              Didn&apos;t find what you were looking for?
            </p>
            <Button href="/contact" variant="primary">
              Ask me directly →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
