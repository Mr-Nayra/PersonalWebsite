import Link from "next/link";

const footerLinks = {
  services: [
    { name: "AI Automation Consulting", href: "/services/ai-automation-consulting" },
    { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration-agentic-workflows" },
    { name: "SEO Services", href: "/services/seo-services" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "SaaS Product Development", href: "/services/saas-development" },
  ],
  build: [
    { name: "Products", href: "/products" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Testimonials", href: "/testimonials" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "How I Work", href: "/process" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
    { name: "Resources", href: "/resources" },
    { name: "Glossary", href: "/glossary" },
  ],
};

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-text-muted text-sm hover:text-text-primary transition-colors"
    >
      {children}
    </Link>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-btn border border-border flex items-center justify-center text-text-muted hover:text-accent-primary hover:border-accent-primary transition-all duration-150"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-surface mt-auto">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-signature font-bold text-text-primary">Aryan Rawther</span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                Helping businesses grow with AI automation, technical SEO, and modern web development. Founder of Apex Mind LLP.
              </p>
            </div>
            <div className="flex gap-2">
              <SocialLink href="https://www.linkedin.com/in/aryanrawther" label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://github.com/aryanrawther" label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </SocialLink>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm mb-4">Services</h3>
            <div className="flex flex-col gap-2">
              {footerLinks.services.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Col 3: Build */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm mb-4">Build</h3>
            <div className="flex flex-col gap-2">
              {footerLinks.build.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Col 4: Company */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm mb-4">Company</h3>
            <div className="flex flex-col gap-2">
              {footerLinks.company.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            © {year} Apex Mind LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
            <FooterLink href="/sitemap">Sitemap</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
