import { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Message received",
  description: "Thanks for reaching out. I'll be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="aurora-bg min-h-[80vh] flex items-center">
      <div className="container relative z-10 max-w-xl text-center py-20">
        <div className="text-4xl mb-6">✓</div>
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-5">
          Message received.
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-4">
          Thanks for reaching out. I typically respond within 24 hours — often sooner during
          business days in IST.
        </p>
        <p className="text-text-secondary text-sm mb-10">
          While you wait, you might find the{" "}
          <a href="/faq" className="text-accent-primary hover:underline">
            FAQ
          </a>{" "}
          or{" "}
          <a href="/process" className="text-accent-primary hover:underline">
            How I Work
          </a>{" "}
          pages useful.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/" variant="primary" size="md">
            Back to home →
          </Button>
          <Button href="/case-studies" variant="secondary" size="md">
            Read case studies →
          </Button>
        </div>
      </div>
    </section>
  );
}
