import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { AskAIButton } from "@/components/ui/AskAIButton";
import { faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "How I Work — Aryan Rawther's Consulting Process",
  description:
    "Exactly what it's like to work with Aryan Rawther — from first message to final handoff. Milestone-based delivery, async communication, and full documentation every time.",
  alternates: { canonical: "/process" },
  keywords: [
    "how to hire an AI consultant",
    "consulting engagement process",
    "what to expect working with a freelance developer",
    "how does AI automation consulting work",
    "milestone-based development process",
  ],
};

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Timeline depends on scope. A focused automation system or MVP feature typically takes 4–8 weeks. Larger engagements (full SaaS products, multi-agent systems) take 8–16 weeks. I give a realistic timeline in the proposal — not an optimistic one that slips.",
  },
  {
    question: "What if my requirements change mid-project?",
    answer:
      "Scope changes are handled in writing, every time. I draft a brief amendment describing the change, the timeline impact, and any cost implications. You approve it before I start. This protects both of us — no surprise invoices, no scope creep.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. I work with clients in India, the US, the UK, and other international markets. All project communication is async-first and works across time zones. I use Slack or email based on your preference, and invoicing handles international payments.",
  },
  {
    question: "What's your current availability?",
    answer:
      "I take on a limited number of client projects at a time to ensure quality. Reach out via the contact form and I'll tell you honestly about current availability and earliest start dates.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes, before any detailed project discussion. Standard NDA — protects your business information and project details. I take client confidentiality seriously.",
  },
  {
    question: "Can I see examples of your previous work?",
    answer:
      "Yes — see the Case Studies section for detailed project breakdowns with specific results. Some client work is confidential; in those cases, I describe the type of system built and results achieved without identifying the client.",
  },
];

const differentiators = [
  "I flag problems early — not after they've become expensive.",
  "Documentation is part of the deliverable, not an afterthought.",
  "I don't disappear after handoff.",
  "Scope changes are handled in writing, every time.",
];

export default function ProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* Hero */}
      <section className="aurora-bg pt-32 pb-20">
        <div className="container relative z-10 max-w-3xl">
          <Breadcrumb items={[{ name: "How I Work", url: "/process" }]} />
          <div className="mt-8">
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              How I Work
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed">
              Every project is different — but the way I run them isn&apos;t. Here&apos;s exactly what working with me looks like, from first message to final handoff.
            </p>
            <div className="mt-6">
              <AskAIButton
                pageUrl="/process"
                pageType="process"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Before We Start */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="font-mono text-accent-primary text-sm bg-accent-primary/10 border border-accent-primary/20 px-3 py-1 rounded-full">
              01
            </div>
            <h2 className="text-2xl font-bold text-text-primary">Before We Start</h2>
          </div>

          <div className="space-y-4 mb-8">
            {[
              { num: "1", text: "You reach out via contact form or WhatsApp." },
              { num: "2", text: "I review your message and respond within 24 hours." },
              { num: "3", text: "We schedule a 30-minute discovery call — free, no obligation. I listen more than I talk." },
              { num: "4", text: "If there's a fit, I send a written proposal and SOW within 3–5 business days." },
            ].map((step) => (
              <div key={step.num} className="flex gap-4">
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center font-mono text-text-muted text-sm flex-shrink-0 mt-0.5">
                  {step.num}
                </div>
                <p className="text-text-secondary leading-relaxed pt-1">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="rounded-card border border-accent-secondary/20 bg-accent-secondary/5 p-4">
            <p className="text-text-secondary text-sm italic">
              &ldquo;I&apos;m honest about fit. If your project isn&apos;t right for me, I&apos;ll tell you — and where possible, point you in a better direction.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Proposal & SOW */}
      <section className="section-padding bg-bg-surface border-y border-border">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="font-mono text-accent-primary text-sm bg-accent-primary/10 border border-accent-primary/20 px-3 py-1 rounded-full">
              02
            </div>
            <h2 className="text-2xl font-bold text-text-primary">The Proposal & SOW</h2>
          </div>

          <p className="text-text-secondary leading-relaxed mb-6">
            A typical Statement of Work contains: scope definition, milestone breakdown, deliverable list, payment schedule tied to milestones, timeline estimate, and out-of-scope items explicitly listed.
          </p>

          <div className="rounded-card border border-accent-primary/20 bg-accent-primary/5 p-5 mb-6">
            <p className="text-text-primary font-medium text-sm">
              You only pay when a milestone is delivered and approved — never upfront for work that hasn&apos;t happened.
            </p>
          </div>

          <p className="text-text-secondary leading-relaxed">
            Milestone-based billing is better for both parties. You get predictable costs and real deliverables at each stage. I get clear targets and no ambiguity about what &ldquo;done&rdquo; means. If a milestone needs revision, we agree on what changes before I start — not after.
          </p>
        </div>
      </section>

      {/* Section 3: Communication */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="font-mono text-accent-primary text-sm bg-accent-primary/10 border border-accent-primary/20 px-3 py-1 rounded-full">
              03
            </div>
            <h2 className="text-2xl font-bold text-text-primary">How We Communicate</h2>
          </div>

          <p className="text-text-secondary leading-relaxed mb-6">
            Async-first, never silent. You won&apos;t wonder where the project is.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Primary channel", value: "Slack or email — your preference" },
              { label: "Status updates", value: "Weekly written update every Monday" },
              { label: "Documentation", value: "Shared Notion workspace — always up to date" },
              { label: "Scope changes", value: "Written amendment before work starts — always" },
            ].map((item) => (
              <div key={item.label} className="rounded-card border border-border bg-bg-surface p-4">
                <p className="text-text-muted text-xs mb-1">{item.label}</p>
                <p className="text-text-primary text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-text-secondary text-sm italic">
            &ldquo;You&apos;ll always know where we are. No chasing required.&rdquo;
          </p>
        </div>
      </section>

      {/* Section 4: Milestone Delivery */}
      <section className="section-padding bg-bg-surface border-y border-border">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="font-mono text-accent-primary text-sm bg-accent-primary/10 border border-accent-primary/20 px-3 py-1 rounded-full">
              04
            </div>
            <h2 className="text-2xl font-bold text-text-primary">Milestone Delivery</h2>
          </div>

          <div className="space-y-4 mb-6">
            {[
              "I complete the milestone deliverable",
              "I share it with you for review",
              "You have agreed business days to request revisions or approve",
              "On approval, the milestone payment is triggered and the next milestone begins",
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-1 rounded-full bg-accent-primary/30 self-stretch flex-shrink-0" />
                <p className="text-text-secondary leading-relaxed">{step}</p>
              </div>
            ))}
          </div>

          <p className="text-text-muted text-sm">
            Revision policy: typically 2 rounds of revisions per milestone, defined in the SOW.
          </p>
        </div>
      </section>

      {/* Section 5: Handoff */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="font-mono text-accent-primary text-sm bg-accent-primary/10 border border-accent-primary/20 px-3 py-1 rounded-full">
              05
            </div>
            <h2 className="text-2xl font-bold text-text-primary">Handoff & Documentation</h2>
          </div>

          <p className="text-text-secondary leading-relaxed mb-6">
            At the end of every engagement, you receive:
          </p>

          <ul className="space-y-3 mb-6">
            {[
              "Working, tested deliverable",
              "Full technical documentation written for the next developer",
              "A recorded walkthrough session",
              "Clean codebase with comments",
              "Post-launch support period (duration specified in SOW)",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-accent-secondary flex-shrink-0 mt-0.5">✓</span>
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-card border border-border bg-bg-surface p-4">
            <p className="text-text-secondary text-sm italic">
              &ldquo;I write code and documentation as if someone else will maintain it — because they will.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: What Makes This Different */}
      <section className="section-padding bg-bg-surface border-y border-border">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="font-mono text-accent-primary text-sm bg-accent-primary/10 border border-accent-primary/20 px-3 py-1 rounded-full">
              06
            </div>
            <h2 className="text-2xl font-bold text-text-primary">What Makes This Different</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentiators.map((text, i) => (
              <div
                key={i}
                className="rounded-card border border-border bg-bg-base p-5 flex gap-3"
              >
                <span className="text-accent-primary font-bold mt-0.5 flex-shrink-0">—</span>
                <p className="text-text-primary font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-text-primary mb-8">FAQ</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding aurora-bg relative">
        <div className="container relative z-10 text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Ready to start a conversation?
          </h2>
          <p className="text-text-secondary mb-8">
            The first step is a message. The second is a 30-minute call. We go from there.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Get in touch →
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg">
              See my work →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
