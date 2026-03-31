import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AskAIButton } from "@/components/ui/AskAIButton";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { articleSchema, faqSchema } from "@/lib/schemas";
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
      ...(post.coverImage && {
        images: [{ url: post.coverImage, width: 800, height: 600 }],
      }),
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

      {post.faq && post.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema(post.faq)),
          }}
        />
      )}

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
                <Image
                  src="/images/aryan/profile.png"
                  alt="Aryan Rawther"
                  width={28}
                  height={28}
                  className="w-7 h-7 rounded-full object-cover"
                />
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
                <TableOfContents />
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 max-w-2xl min-w-0">
              {/* Mobile AskAI */}
              <div className="lg:hidden mb-6">
                <AskAIButton
                  pageUrl={`/blog/${slug}`}
                  pageType="blog"
                  category={post.category}
                />
              </div>

              {/* Cover image */}
              {post.coverImage ? (
                <figure className="mb-8">
                  <div className="rounded-card overflow-hidden border border-border">
                    <Image
                      src={post.coverImage}
                      alt={post.coverCaption || post.title}
                      width={800}
                      height={450}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                  {post.coverCaption && (
                    <figcaption className="text-text-muted text-sm mt-2 text-center italic">
                      {post.coverCaption}
                    </figcaption>
                  )}
                </figure>
              ) : null}

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
                <Image
                  src="/images/aryan/profile.png"
                  alt="Aryan Rawther — AI automation consultant and SEO specialist"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
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
                  Need help with your website&apos;s SEO or AI search visibility?
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Send me your URL and I&apos;ll tell you exactly what to fix.
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
