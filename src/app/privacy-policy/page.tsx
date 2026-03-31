import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for aryanrawther.com and Apex Mind LLP.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="aurora-bg pt-32 pb-12">
        <div className="container relative z-10 max-w-3xl">
          <h1 className="font-display text-5xl font-bold text-text-primary mb-4">Privacy Policy</h1>
          <p className="text-text-muted text-sm font-mono">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Who we are</h2>
              <p className="text-text-secondary leading-relaxed">
                This website is operated by Apex Mind LLP (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), a limited
                liability partnership registered in India. Our principal place of business is
                Bengaluru, India. You can contact us at contact.aryanrawther@gmail.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">What data we collect</h2>
              <p className="text-text-secondary leading-relaxed mb-3">
                We collect only the data necessary to respond to enquiries and improve the site:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-accent-primary mt-1 flex-shrink-0">→</span>
                  <span>
                    <strong className="text-text-primary">Contact form data:</strong> Name, email
                    address, and any message content you submit through our contact form.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-primary mt-1 flex-shrink-0">→</span>
                  <span>
                    <strong className="text-text-primary">Analytics data:</strong> Anonymised
                    usage data via Google Analytics 4 (page views, session duration, traffic
                    sources). No personally identifiable information is collected through
                    analytics.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-primary mt-1 flex-shrink-0">→</span>
                  <span>
                    <strong className="text-text-primary">Technical data:</strong> IP addresses
                    and browser information that may be collected automatically by our hosting
                    provider (Vercel).
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">How we use your data</h2>
              <p className="text-text-secondary leading-relaxed">
                We use contact form data solely to respond to your enquiry. We do not sell, rent,
                or share your personal data with third parties for marketing purposes. Analytics
                data is used to understand how the site is being used and to improve it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Data retention</h2>
              <p className="text-text-secondary leading-relaxed">
                Contact form submissions are retained for as long as necessary to respond to your
                enquiry, and no longer than 24 months. You may request deletion at any time by
                contacting contact.aryanrawther@gmail.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Cookies</h2>
              <p className="text-text-secondary leading-relaxed">
                This website uses Google Analytics cookies for anonymous usage tracking. You can
                opt out of Google Analytics by installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-primary hover:underline"
                >
                  Google Analytics opt-out browser add-on
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Your rights</h2>
              <p className="text-text-secondary leading-relaxed">
                You have the right to request access to, correction of, or deletion of your
                personal data. To exercise any of these rights, contact us at
                contact.aryanrawther@gmail.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Changes to this policy</h2>
              <p className="text-text-secondary leading-relaxed">
                We may update this policy from time to time. The &quot;last updated&quot; date at the top
                of this page reflects when the policy was last revised. Continued use of the site
                constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Contact</h2>
              <p className="text-text-secondary leading-relaxed">
                For any privacy-related questions, contact us at contact.aryanrawther@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container max-w-3xl pb-16 text-center">
        <Link href="/terms-of-service" className="text-accent-primary text-sm hover:underline">
          Terms of Service →
        </Link>
        <span className="text-text-muted mx-3">·</span>
        <Link href="/" className="text-accent-primary text-sm hover:underline">
          Back to Home →
        </Link>
      </div>
    </>
  );
}
