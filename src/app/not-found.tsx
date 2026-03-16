import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <section className="aurora-bg min-h-[80vh] flex items-center">
      <div className="container relative z-10 max-w-2xl text-center py-20">
        <p className="font-mono text-accent-primary text-sm tracking-widest uppercase mb-6">
          404 — Page not found
        </p>
        <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-6">
          This page doesn&apos;t exist.
        </h1>
        <p className="text-text-secondary text-xl leading-relaxed mb-10">
          You may have followed an old link, made a typo in the URL, or stumbled onto a page
          that&apos;s been moved. Here are some places to go instead.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button href="/" variant="primary" size="lg">
            Go home →
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact me →
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-muted text-sm hover:text-accent-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
