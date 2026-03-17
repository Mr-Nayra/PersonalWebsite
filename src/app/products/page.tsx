import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { productsPreview } from "@/data/site-data";
import { itemListSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Products — SaaS Tools & Open Source Projects | Apex Mind LLP",
  description:
    "SaaS products, open-source tools, and AI applications built by Aryan Rawther (Apex Mind LLP). Includes SpecLens AI (procurement SaaS), MediaMitra (AI media monitoring), and GEO Checker (AI search visibility audit tool).",
  alternates: { canonical: "/products" },
  keywords: [
    "AI products India",
    "SaaS tools built by Aryan Rawther",
    "SpecLens AI",
    "MediaMitra",
    "GEO Checker tool",
    "open source AI tools India",
    "procurement SaaS India",
    "AI media monitoring tool",
    "Apex Mind LLP products",
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListSchema(
              productsPreview.map((p) => ({
                name: p.name,
                description: p.tagline,
                url: `/products/${p.slug}`,
              }))
            )
          ),
        }}
      />
      {/* Hero */}
      <section className="aurora-bg pt-32 pb-16">
        <div className="container relative z-10 max-w-3xl">
          <Breadcrumb items={[{ name: "Products", url: "/products" }]} />
          <div className="mt-8">
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-4">
              Products I&apos;ve Built.
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed">
              Alongside client work, I build products that solve problems I care about. Here&apos;s what I&apos;ve shipped and what&apos;s in progress.
            </p>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {productsPreview.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>

          {/* GitHub strip */}
          <div className="mt-12 rounded-card border border-border bg-bg-surface p-6 flex items-center justify-between gap-4">
            <div>
              <p className="font-medium text-text-primary">All my open source work lives on GitHub</p>
              <p className="text-text-muted text-sm mt-0.5">Contributions welcome on all open source projects.</p>
            </div>
            <a
              href="https://github.com/Mr-Nayra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-btn border border-border text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-all text-sm font-medium whitespace-nowrap"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding aurora-bg relative border-t border-border">
        <div className="container relative z-10 text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Have an idea? Let&apos;s build it.
          </h2>
          <p className="text-text-secondary mb-8">
            If you need a product built — whether it&apos;s an MVP, a SaaS platform, or an internal tool — I&apos;m the person to call.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/services/saas-development" variant="primary">
              SaaS Development service →
            </Button>
            <Button href="/contact" variant="secondary">
              Get in touch →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
