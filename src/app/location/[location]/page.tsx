import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteData } from "@/data/site-data";

type Params = { location: string };

const locationData: Record<string, {
  name: string;
  slug: string;
  headline: string;
  subheadline: string;
  context: string[];
  whyItWorks: { title: string; description: string }[];
  services: typeof siteData.services;
}> = {
  "bangalore": {
    name: "Bangalore",
    slug: "bangalore",
    headline: "AI and web development consulting in Bangalore.",
    subheadline:
      "Based in Bengaluru — working with Bangalore startups, SaaS companies, and enterprises on AI automation, SEO, and modern web development.",
    context: [
      "I'm based in Bengaluru, which means I work in the same timezone, understand the local startup ecosystem, and can meet in person when the project calls for it.",
      "Bangalore is home to some of India's most ambitious SaaS companies, AI startups, and enterprise tech teams. I work with all of them — from early-stage founders in Koramangala to engineering teams at established companies.",
    ],
    whyItWorks: [
      {
        title: "Same timezone, same city",
        description:
          "No lag, no scheduling gymnastics. When you need a quick call or want to review work together, I'm available in IST.",
      },
      {
        title: "Understands the Bangalore ecosystem",
        description:
          "I know the investor landscape, the hiring market, and the product culture. Context matters when giving advice.",
      },
      {
        title: "In-person when it helps",
        description:
          "For workshop-style engagements, discovery sessions, or team presentations — I can be there.",
      },
    ],
    services: siteData.services,
  },
  "india": {
    name: "India",
    slug: "india",
    headline: "AI automation and SEO consulting across India.",
    subheadline:
      "Working remotely with companies across India — Mumbai, Delhi, Hyderabad, Chennai, Pune — on AI automation, technical SEO, and web development projects.",
    context: [
      "While I'm based in Bengaluru, I work with companies across India remotely. Timezone-aligned, culturally fluent, and familiar with the Indian B2B and SaaS market.",
      "India's SaaS market is growing faster than almost anywhere in the world, and the demand for AI expertise is outpacing supply. I help bridge that gap for companies that want to move quickly without relying on expensive overseas consultants.",
    ],
    whyItWorks: [
      {
        title: "India-fluent pricing",
        description:
          "I understand the Indian market's commercial realities. My pricing is structured for Indian companies — not dollar-based international rates passed through unchanged.",
      },
      {
        title: "Understands Indian B2B context",
        description:
          "Indian enterprises, startups, and SMBs have specific procurement patterns, decision-making processes, and technical constraints. I know them.",
      },
      {
        title: "Available in IST",
        description:
          "All meetings, standups, and communication happen in your timezone — no async delays, no timezone friction.",
      },
    ],
    services: siteData.services,
  },
  "remote": {
    name: "Remote",
    slug: "remote",
    headline: "Remote AI and web development consulting — anywhere in the world.",
    subheadline:
      "I work with clients globally on a fully async or hybrid basis. Time zones are managed, communication is clear, and delivery is milestone-based.",
    context: [
      "All of my work is deliverable remotely. I've worked with clients in the UK, US, Middle East, and Southeast Asia — and the model works well when the process is designed for it.",
      "Remote work isn't just a constraint — for knowledge work like AI consulting, SEO strategy, and software development, it often produces better outcomes. The work is documented, the communication is intentional, and there's no time wasted on commutes or office politics.",
    ],
    whyItWorks: [
      {
        title: "Milestone-based delivery",
        description:
          "Everything is tied to defined deliverables. You pay for outcomes, not seat time — which works particularly well for remote engagements.",
      },
      {
        title: "Async-first communication",
        description:
          "Written updates, Loom videos, and clear documentation mean you're never in the dark — even across time zones.",
      },
      {
        title: "Overlap hours available",
        description:
          "I can schedule calls during UK/EU mornings or US evenings for real-time collaboration where it's needed.",
      },
    ],
    services: siteData.services,
  },
};

export async function generateStaticParams() {
  return Object.keys(locationData).map((location) => ({ location }));
}

const locationSEO: Record<string, { title: string; description: string; keywords: string[] }> = {
  bangalore: {
    title: "AI Automation Consultant Bangalore — SEO, Voice AI & SaaS Developer",
    description:
      "AI automation consultant based in Bengaluru (Bangalore). Aryan Rawther (Apex Mind LLP) works with Bangalore startups, SaaS companies, and enterprises on AI agents, technical SEO, and full-stack web development. Same timezone, in-person available.",
    keywords: [
      "AI consultant Bengaluru",
      "AI consultant Bangalore",
      "SEO consultant Bangalore",
      "SEO consultant Bengaluru",
      "web developer Bengaluru",
      "Next.js developer Bengaluru",
      "SaaS developer Bengaluru",
      "AI automation Bangalore",
      "freelance developer Bengaluru",
      "startup consultant Bangalore",
      "technical consultant Bengaluru",
    ],
  },
  india: {
    title: "AI Automation & SEO Consultant India — Apex Mind LLP",
    description:
      "India-based AI automation consultant and technical SEO specialist. Aryan Rawther (Apex Mind LLP) works with companies across India — Mumbai, Delhi, Hyderabad, Chennai, Pune — on AI integration, voice agents, programmatic SEO, and SaaS development.",
    keywords: [
      "AI automation consultant India",
      "best AI developer India",
      "top AI consultant India",
      "AI consulting company India",
      "technical SEO consultant India",
      "SaaS developer India",
      "hire AI expert India",
      "AI agency India",
      "Apex Mind LLP",
    ],
  },
  remote: {
    title: "Remote AI Development & SEO Consulting — Worldwide",
    description:
      "Remote AI automation consulting, technical SEO, and web development from Aryan Rawther (Apex Mind LLP). Milestone-based delivery, async-first communication, and overlap hours for UK, EU, and US clients.",
    keywords: [
      "remote AI consultant India",
      "hire remote AI developer India",
      "remote technical SEO consultant",
      "remote SaaS developer India",
      "remote LLM developer",
      "remote full stack developer India",
      "offshore AI consultant India",
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { location } = await params;
  const data = locationData[location];
  if (!data) return { title: "Not Found" };

  const seo = locationSEO[location];
  return {
    title: seo?.title ?? `${data.name} — AI & Web Development Consulting`,
    description: seo?.description ?? data.subheadline,
    keywords: seo?.keywords,
    alternates: { canonical: `/location/${location}` },
  };
}

export default async function LocationPage({ params }: { params: Promise<Params> }) {
  const { location } = await params;
  const data = locationData[location];
  if (!data) notFound();

  return (
    <>
      {/* Hero */}
      <section className="aurora-bg pt-32 pb-16">
        <div className="container relative z-10 max-w-3xl">
          <Breadcrumb
            items={[
              { name: "Services", url: "/services" },
              { name: data.name, url: `/location/${location}` },
            ]}
          />
          <div className="mt-8">
            <p className="text-accent-primary font-mono text-sm mb-3 tracking-wide uppercase">
              {data.name}
            </p>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              {data.headline}
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed mb-8">
              {data.subheadline}
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get in touch →
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          {/* Context */}
          <div className="mb-14">
            <div className="space-y-4 max-w-3xl">
              {data.context.map((paragraph, i) => (
                <p key={i} className="text-text-secondary leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Why it works */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-text-primary mb-8">Why it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {data.whyItWorks.map((item, i) => (
                <div key={i} className="rounded-card border border-border bg-bg-surface p-5">
                  <div className="text-accent-primary font-mono text-sm mb-2">0{i + 1}</div>
                  <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-text-primary mb-8">Services available</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="rounded-card border border-border bg-bg-surface p-5 card-hover block group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{service.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors mb-1">
                        {service.name}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-card border border-accent-primary/20 bg-accent-primary/5 p-8 text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-3">
              Ready to work together?
            </h2>
            <p className="text-text-secondary mb-6 max-w-md mx-auto text-sm">
              Get in touch and let&apos;s talk about your project. I typically respond within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/contact" variant="primary" size="lg">
                Start a conversation →
              </Button>
              <Button href="/process" variant="secondary" size="lg">
                How I work →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
