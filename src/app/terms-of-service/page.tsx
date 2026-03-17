import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for aryanrawther.com and Apex Mind LLP.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="aurora-bg pt-32 pb-12">
        <div className="container relative z-10 max-w-3xl">
          <h1 className="font-display text-5xl font-bold text-text-primary mb-4">Terms of Service</h1>
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
              <h2 className="text-2xl font-bold text-text-primary mb-4">About this document</h2>
              <p className="text-text-secondary leading-relaxed">
                These Terms of Service govern your use of aryanrawther.com (the &quot;Site&quot;), operated
                by Apex Mind LLP. By using this Site, you agree to these terms.
              </p>
              <p className="text-text-secondary leading-relaxed mt-3">
                These terms apply to the website only. Consulting and development engagements are
                governed by separate Statements of Work and service agreements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Use of this site</h2>
              <p className="text-text-secondary leading-relaxed">
                You may use this Site for lawful purposes only. You may not use it to transmit
                unsolicited communications, attempt to gain unauthorised access to any part of the
                Site or its infrastructure, or engage in any activity that could damage, disable,
                or impair the Site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Intellectual property</h2>
              <p className="text-text-secondary leading-relaxed">
                All content on this Site — including text, design, code, and graphics — is owned
                by Apex Mind LLP or its contributors and is protected by applicable copyright
                law. You may not reproduce, distribute, or create derivative works without written
                permission.
              </p>
              <p className="text-text-secondary leading-relaxed mt-3">
                Blog posts, resources, and glossary content may be cited with attribution and a
                link back to the original URL.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">No professional advice</h2>
              <p className="text-text-secondary leading-relaxed">
                Content on this Site is provided for general informational purposes only. Nothing
                on this Site constitutes legal, financial, or other professional advice. Consult a
                qualified professional before making decisions based on information found here.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Disclaimer of warranties</h2>
              <p className="text-text-secondary leading-relaxed">
                This Site is provided &quot;as is&quot; without any warranties, express or implied. Aether
                Minds LLP makes no representations about the accuracy, completeness, or
                availability of content on this Site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Limitation of liability</h2>
              <p className="text-text-secondary leading-relaxed">
                To the maximum extent permitted by applicable law, Apex Mind LLP shall not be
                liable for any indirect, incidental, or consequential damages arising from your use
                of this Site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Governing law</h2>
              <p className="text-text-secondary leading-relaxed">
                These terms are governed by the laws of India. Any disputes shall be subject to
                the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Changes to these terms</h2>
              <p className="text-text-secondary leading-relaxed">
                We may update these terms from time to time. Continued use of the Site after
                changes constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Contact</h2>
              <p className="text-text-secondary leading-relaxed">
                For questions about these terms, contact us at hello@aetherminds.in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
