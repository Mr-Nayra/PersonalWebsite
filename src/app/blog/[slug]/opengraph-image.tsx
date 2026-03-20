import { OgImage } from "@/components/og/OgImage";
import { blogPosts } from "@/data/blog";


export { contentType, size } from "@/components/og/OgImage";

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = blogPosts[slug];

  if (!post) {
    return OgImage({
      title: "Blog Post",
      badge: "Article",
    });
  }

  return OgImage({
    title: post.title,
    badge: "Article",
    description: post.excerpt,
  });
}
