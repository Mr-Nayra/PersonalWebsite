import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge, StatusBadge } from "@/components/ui/Badge";
import { AskAIButton } from "@/components/ui/AskAIButton";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { softwareApplicationSchema } from "@/lib/schemas";
import { productsPreview } from "@/data/site-data";

type Params = { slug: string };

const productData: Record<string, {
  name: string;
  slug: string;
  tagline: string;
  type: "saas" | "open-source" | "extension" | "other";
  status: "live" | "beta" | "coming-soon";
  description: string[];
  features: { icon: string; name: string; description: string }[];
  whoFor: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  applicationCategory: string;
  publishedAt: string;
}> = {
  "speclens-ai": {
    name: "SpecLens AI",
    slug: "speclens-ai",
    tagline: "AI-powered procurement specification comparison for B2B buying decisions.",
    type: "saas",
    status: "live",
    description: [
      "[TODO: 2-3 paragraphs written for the target user — not a developer audience. What problem does SpecLens solve? Who is it for? What does it do?]",
      "[TODO: Second paragraph — what outcome does the user get from using SpecLens?]",
    ],
    features: [
      { icon: "🔍", name: "Specification comparison", description: "[TODO: Describe this feature and what it does for the user]" },
      { icon: "📋", name: "RFP workflow", description: "[TODO: Describe the RFP workflow feature]" },
      { icon: "🤖", name: "AI-powered analysis", description: "[TODO: Describe the AI analysis capabilities]" },
    ],
    whoFor: [
      "Procurement teams comparing vendor specifications",
      "B2B buyers evaluating products against requirements",
      "Operations managers handling RFP processes",
    ],
    techStack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://speclens.ai",
    applicationCategory: "BusinessApplication",
    publishedAt: "2024-09-01",
  },
  "mediamitra": {
    name: "MediaMitra",
    slug: "mediamitra",
    tagline: "AI-assisted media monitoring and content intelligence platform.",
    type: "saas",
    status: "beta",
    description: [
      "[TODO: Describe MediaMitra — what does it do, who is it for?]",
    ],
    features: [
      { icon: "📰", name: "Media monitoring", description: "[TODO: Describe]" },
      { icon: "🤖", name: "AI content intelligence", description: "[TODO: Describe]" },
      { icon: "📊", name: "Analytics dashboard", description: "[TODO: Describe]" },
    ],
    whoFor: [
      "PR teams and communications departments",
      "Content teams tracking brand mentions",
      "Businesses monitoring competitive landscape",
    ],
    techStack: ["React", "FastAPI", "OpenAI", "PostgreSQL"],
    applicationCategory: "BusinessApplication",
    publishedAt: "2024-11-01",
  },
  "geo-checker": {
    name: "GEO Checker",
    slug: "geo-checker",
    tagline: "Check how well your website is optimised for AI search engines.",
    type: "open-source",
    status: "coming-soon",
    description: [
      "[TODO: Describe GEO Checker — what it checks, what it reports, who benefits from it.]",
    ],
    features: [
      { icon: "✦", name: "GEO score", description: "[TODO: Describe the GEO scoring system]" },
      { icon: "🔍", name: "Content analysis", description: "[TODO: Describe content analysis]" },
      { icon: "📋", name: "Recommendations", description: "[TODO: Describe the recommendations engine]" },
    ],
    whoFor: [
      "SEO professionals wanting to audit GEO readiness",
      "Content marketers optimising for AI visibility",
      "Web developers building AI-optimised sites",
    ],
    techStack: ["Next.js", "TypeScript"],
    githubUrl: "https://github.com/aryanrawther/geo-checker",
    applicationCategory: "WebApplication",
    publishedAt: "2024-12-01",
  },
};

export async function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const product = productData[slug];
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} — by Aryan Rawther`,
    description: product.tagline,
    alternates: { canonical: `/products/${slug}` },
  };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = productData[slug];
  if (!product) notFound();

  const typeLabels: Record<string, string> = {
    saas: "SaaS",
    "open-source": "Open Source",
    extension: "Extension",
    other: "Product",
  };

  const relatedProducts = productsPreview
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationSchema({
              name: product.name,
              description: product.tagline,
              url: `/products/${slug}`,
              applicationCategory: product.applicationCategory,
              datePublished: product.publishedAt,
            })
          ),
        }}
      />

      {/* Hero */}
      <section className="aurora-bg pt-32 pb-16">
        <div className="container relative z-10 max-w-3xl">
          <Breadcrumb
            items={[
              { name: "Products", url: "/products" },
              { name: product.name, url: `/products/${slug}` },
            ]}
          />
          <div className="mt-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant={`type-${product.type}` as "type-saas" | "type-open-source" | "type-extension"}>
                {typeLabels[product.type]}
              </Badge>
              <StatusBadge status={product.status} />
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-4">
              {product.name}
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed mb-8">{product.tagline}</p>

            {/* Primary CTA */}
            <div className="flex flex-wrap gap-3">
              {product.status === "live" && product.liveUrl && (
                <Button href={product.liveUrl} external variant="primary" size="lg">
                  Try it →
                </Button>
              )}
              {product.status === "beta" && (
                <Button href="/contact" variant="primary" size="lg">
                  Request beta access →
                </Button>
              )}
              {product.status === "coming-soon" && (
                <Button href={`#waitlist`} variant="primary" size="lg">
                  Join waitlist →
                </Button>
              )}
              {product.githubUrl && (
                <Button href={product.githubUrl} external variant="secondary" size="lg">
                  View on GitHub →
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          {/* AskAI */}
          <div className="mb-8">
            <AskAIButton
              pageUrl={`/products/${slug}`}
              pageType="product"
              productName={product.name}
              productCategory={product.applicationCategory}
            />
          </div>

          {/* Description */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-text-primary mb-6">What it does</h2>
            <div className="space-y-4">
              {product.description.map((para, i) => (
                <p key={i} className="text-text-secondary leading-relaxed">{para}</p>
              ))}
            </div>
          </div>

          {/* Screenshots placeholder */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2].map((n) => (
                <div
                  key={n}
                  className="aspect-video rounded-card bg-bg-elevated border border-border flex items-center justify-center"
                >
                  <p className="text-text-muted text-sm">[Screenshot {n} — to be added]</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Key features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.features.map((feature) => (
                <div
                  key={feature.name}
                  className="rounded-card border border-border bg-bg-surface p-5"
                >
                  <div className="text-2xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-text-primary mb-1.5">{feature.name}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who it's for */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Who it&apos;s for</h2>
            <ul className="space-y-2">
              {product.whoFor.map((who, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent-primary mt-0.5 flex-shrink-0">→</span>
                  <span className="text-text-secondary">{who}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Tech stack</h2>
            <div className="flex flex-wrap gap-2">
              {product.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-sm bg-bg-elevated border border-border text-text-secondary px-3 py-1.5 rounded-btn"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub section (open source only) */}
          {product.type === "open-source" && product.githubUrl && (
            <div className="mb-10 rounded-card border border-border bg-bg-surface p-6">
              <h2 className="text-xl font-bold text-text-primary mb-3">Open Source</h2>
              <p className="text-text-secondary text-sm mb-4">
                This project is open source. Contributions welcome.
              </p>
              <div className="flex gap-3">
                <Button href={product.githubUrl} external variant="secondary" size="sm">
                  View on GitHub →
                </Button>
                <a
                  href={`${product.githubUrl}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted text-sm hover:text-accent-primary transition-colors self-center"
                >
                  Report an issue →
                </a>
              </div>
            </div>
          )}

          {/* Status-based CTA block */}
          <div id="waitlist" className="rounded-card border border-accent-primary/20 bg-accent-primary/5 p-8 text-center mb-10">
            {product.status === "live" && product.liveUrl && (
              <>
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  Ready to try {product.name}?
                </h2>
                <Button href={product.liveUrl} external variant="primary" size="lg">
                  Get started free →
                </Button>
              </>
            )}
            {product.status === "beta" && (
              <>
                <h2 className="text-2xl font-bold text-text-primary mb-2">Join the beta.</h2>
                <p className="text-text-secondary mb-4 text-sm">
                  Limited access — apply to try {product.name} early.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Request beta access →
                </Button>
              </>
            )}
            {product.status === "coming-soon" && (
              <>
                <h2 className="text-2xl font-bold text-text-primary mb-2">
                  Be the first to know when {product.name} launches.
                </h2>
                <p className="text-text-secondary mb-4 text-sm">Join the waitlist.</p>
                <div className="flex gap-2 max-w-sm mx-auto">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-2.5 rounded-btn border border-border bg-bg-surface text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors text-sm"
                  />
                  <button className="px-4 py-2.5 bg-accent-primary text-white font-medium rounded-btn text-sm hover:bg-opacity-90 transition-all whitespace-nowrap">
                    Notify me →
                  </button>
                </div>
                <p className="text-text-muted text-xs mt-2">[TODO: Connect to newsletter provider]</p>
              </>
            )}
          </div>

          {/* Related products */}
          {relatedProducts.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-text-primary mb-6">Related products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedProducts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="rounded-card border border-border bg-bg-surface p-4 card-hover block"
                  >
                    <p className="font-semibold text-text-primary hover:text-accent-primary transition-colors">{p.name}</p>
                    <p className="text-text-muted text-sm mt-1">{p.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Bottom AskAI */}
          <div className="mt-4">
            <AskAIButton
              pageUrl={`/products/${slug}`}
              pageType="product"
              productName={product.name}
              productCategory={product.applicationCategory}
            />
          </div>
        </div>
      </section>
    </>
  );
}
