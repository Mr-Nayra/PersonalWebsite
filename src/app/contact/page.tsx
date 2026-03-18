import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteData } from "@/data/site-data";
import { contactPageSchema } from "@/lib/schemas";
import { ContactForm } from "@/components/sections/contact/ContactForm";

export const metadata: Metadata = {
  title: "Hire Aryan Rawther — AI Automation, SEO & Web Development | Contact Apex Mind LLP",
  description:
    "Hire an AI automation consultant or technical SEO specialist in India. Contact Aryan Rawther (Apex Mind LLP) to discuss your AI, SEO, or SaaS development project. Based in Bengaluru, responding within 24 hours.",
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
  keywords: [
    "hire AI consultant India",
    "hire AI developer India",
    "contact Aryan Rawther",
    "Apex Mind LLP contact",
    "hire SEO consultant India",
    "hire SaaS developer India",
    "AI consulting India",
  ],
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteData.person.whatsapp}?text=${encodeURIComponent(
    "Hi Aryan, I found your website and would like to discuss a project."
  )}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema()) }}
      />
      {/* Hero */}
      <section className="aurora-bg pt-32 pb-16">
        <div className="container relative z-10 max-w-2xl">
          <Breadcrumb items={[{ name: "Contact", url: "/contact" }]} />
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 text-sm font-medium">
                Currently taking on new projects
              </span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-4">
              Get in Touch
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed">
              Whether you&apos;re exploring options or ready to start — reach out. No commitment, no sales pitch. I respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right sidebar */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="rounded-card border border-green-500/20 bg-green-500/5 p-6">
                <h3 className="font-semibold text-text-primary mb-2">
                  Prefer to chat directly?
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Message me on WhatsApp for a faster response. I check it regularly throughout the day.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-btn border border-green-500/40 text-green-400 hover:bg-green-500/10 transition-colors text-sm font-medium"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Response time */}
              <div className="rounded-card border border-border bg-bg-surface p-5">
                <h3 className="font-semibold text-text-primary text-sm mb-3">What to expect</h3>
                <div className="space-y-3">
                  {[
                    { icon: "⏱️", text: "Response within 24 hours" },
                    { icon: "📋", text: "Written proposal within 3–5 business days" },
                    { icon: "🤝", text: "No obligation — free discovery call included" },
                    { icon: "🔒", text: "NDA available before project discussions" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3">
                      <span className="text-base">{item.icon}</span>
                      <span className="text-text-secondary text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ link */}
              <div className="rounded-card border border-border bg-bg-surface p-5">
                <p className="text-text-secondary text-sm mb-3">
                  Have questions before reaching out?
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/faq"
                    className="text-accent-primary text-sm hover:underline"
                  >
                    See the FAQ →
                  </Link>
                  <Link
                    href="/process"
                    className="text-accent-primary text-sm hover:underline"
                  >
                    See how I work →
                  </Link>
                  <Link
                    href="/case-studies"
                    className="text-accent-primary text-sm hover:underline"
                  >
                    See past work →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
