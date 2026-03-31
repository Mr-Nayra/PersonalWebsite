import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { itemListSchema, webPageSchema } from "@/lib/schemas";
import { blogPosts } from "@/data/blog";

const PAGE_LAST_MODIFIED = "2026-03-29";

export const metadata: Metadata = {
  title: "Blog — Technical SEO, AI SEO, GEO & Startup Development",
  description:
    "Practical, in-depth articles on technical SEO, AI search optimisation, GEO (Generative Engine Optimisation), and startup development from Aryan Rawther. Written from real project experience.",
  alternates: { canonical: "/blog" },
  keywords: [
    "technical SEO blog",
    "AI SEO guide",
    "GEO optimisation guide",
    "SEO for founders",
    "SEO for startups",
    "generative engine optimisation blog",
    "Aryan Rawther blog",
  ],
};

const posts = Object.values(blogPosts);

export default function BlogPage() {
  const featured = posts[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({
              title: "Blog — Technical SEO, AI SEO, GEO & Startup Development",
              description:
                "Practical, in-depth articles on technical SEO, AI search optimisation, GEO (Generative Engine Optimisation), and startup development from Aryan Rawther. Written from real project experience.",
              url: "/blog",
              datePublished: "2026-01-01",
              dateModified: PAGE_LAST_MODIFIED,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListSchema(
              posts.map((p) => ({
                name: p.title,
                description: p.excerpt,
                url: `/blog/${p.slug}`,
              }))
            )
          ),
        }}
      />
      {/* Hero */}
      <section className="aurora-bg pt-32 pb-16">
        <div className="container relative z-10 max-w-3xl">
          <Breadcrumb items={[{ name: "Blog", url: "/blog" }]} />
          <div className="mt-8">
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-4">
              Blog
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed">
              Practical guides on technical SEO, AI search optimisation, and web development — written from real project experience.
            </p>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-lg font-semibold text-text-muted mb-6">Featured post</h2>
          <Link
            href={`/blog/${featured.slug}`}
            className="group block md:flex rounded-card border border-border bg-bg-surface overflow-hidden card-hover"
          >
            <div className="md:w-2/5 h-48 md:h-auto relative bg-bg-elevated overflow-hidden">
              {featured.coverImage ? (
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center">
                  <div className="text-6xl opacity-30">✦</div>
                </div>
              )}
            </div>
            <div className="p-6 md:flex-1 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-0.5 rounded-full border border-accent-primary/20">
                  {featured.category}
                </span>
                <span className="text-text-muted text-xs">{featured.readTime} min read</span>
              </div>
              <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                {featured.title}
              </h3>
              <p className="text-text-muted leading-relaxed">{featured.excerpt}</p>
              <span className="mt-auto text-accent-primary text-sm font-medium">Read post →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* More posts coming soon */}
      <section className="section-padding bg-bg-surface border-y border-border">
        <div className="container text-center py-8">
          <p className="text-text-secondary text-lg">
            More posts coming soon. Subscribe below to get notified.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="container max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-3">
            Get new posts in your inbox
          </h2>
          <p className="text-text-secondary mb-6">
            New posts on technical SEO, AI automation, and web development.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-btn border border-border bg-bg-surface text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors text-sm"
            />
            <button className="px-5 py-3 bg-accent-primary text-white font-medium rounded-btn hover:bg-opacity-90 transition-all text-sm whitespace-nowrap">
              Subscribe →
            </button>
          </div>
          <p className="text-text-muted text-xs mt-2">[TODO: Connect to email provider]</p>
        </div>
      </section>
    </>
  );
}
