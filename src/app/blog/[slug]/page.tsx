import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AskAIButton } from "@/components/ui/AskAIButton";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { articleSchema } from "@/lib/schemas";
import { formatDate } from "@/lib/utils";

type Params = { slug: string };

import { blogPosts } from "@/data/blog";
import { blogContent } from "@/data/blog-content";

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedAt,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) notFound();

  const ContentComponent = blogContent[slug];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: post.title,
              description: post.excerpt,
              url: `/blog/${slug}`,
              datePublished: post.date,
              dateModified: post.updatedAt,
              keywords: post.keywords,
            })
          ),
        }}
      />

      {/* Hero */}
      <section className="aurora-bg pt-32 pb-12">
        <div className="container relative z-10 max-w-3xl">
          <Breadcrumb
            items={[
              { name: "Blog", url: "/blog" },
              { name: post.title, url: `/blog/${slug}` },
            ]}
          />
          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs bg-accent-primary/10 text-accent-primary px-2.5 py-1 rounded-full border border-accent-primary/20 font-medium">
                {post.category}
              </span>
              <span className="text-text-muted text-sm">{post.readTime} min read</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-text-muted text-sm">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary text-xs font-bold">
                  A
                </div>
                <span>Aryan Rawther</span>
              </div>
              <span>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>·</span>
              <span>Updated: <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time></span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container">
          <div className="lg:flex gap-12">
            {/* Sidebar — AskAI + ToC */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                <AskAIButton
                  pageUrl={`/blog/${slug}`}
                  pageType="blog"
                  category={post.category}
                />
                <div className="rounded-card border border-border bg-bg-surface p-4">
                  <p className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-3">
                    Table of Contents
                  </p>
                  <div className="space-y-2">
                    <p className="text-text-muted text-xs italic">[Auto-generated from H2/H3 headings]</p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 max-w-2xl">
              {/* Mobile AskAI */}
              <div className="lg:hidden mb-6">
                <AskAIButton
                  pageUrl={`/blog/${slug}`}
                  pageType="blog"
                  category={post.category}
                />
              </div>

              {/* Cover image */}
              <div className="aspect-video rounded-card bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center mb-8 border border-border">
                <p className="text-text-muted text-sm">[Cover image — to be added]</p>
              </div>

              {/* Prose content */}
              <div className="prose">
                {ContentComponent ? <ContentComponent /> : null}
              </div>

              {/* Bottom AskAI */}
              <div className="mt-10 pt-6 border-t border-border">
                <AskAIButton
                  pageUrl={`/blog/${slug}`}
                  pageType="blog"
                  category={post.category}
                />
              </div>

              {/* Author box */}
              <div className="mt-8 rounded-card border border-border bg-bg-surface p-5 flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary font-bold text-lg flex-shrink-0">
                  A
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Aryan Rawther</p>
                  <p className="text-text-muted text-sm mb-2">
                    Founder of Apex Mind LLP — AI automation consultant, SEO specialist, and full-stack developer based in Bengaluru, India.
                  </p>
                  <div className="flex gap-3">
                    <Link href="/about" className="text-accent-primary text-xs hover:underline">
                      About →
                    </Link>
                    <a
                      href="https://www.linkedin.com/in/aryanrawther"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-primary text-xs hover:underline"
                    >
                      LinkedIn →
                    </a>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="mt-6 flex items-center gap-3">
                <span className="text-text-muted text-sm">Share:</span>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://aryanrawther.com/blog/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted text-sm hover:text-accent-primary transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://aryanrawther.com/blog/${slug}`)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted text-sm hover:text-accent-primary transition-colors"
                >
                  Twitter/X
                </a>
              </div>

              {/* CTA */}
              <div className="mt-10 rounded-card border border-accent-primary/20 bg-accent-primary/5 p-6 text-center">
                <h3 className="font-bold text-text-primary mb-2">
                  Working on something similar?
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Let&apos;s talk about how I can help.
                </p>
                <Button href="/contact" variant="primary">
                  Get in touch →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
