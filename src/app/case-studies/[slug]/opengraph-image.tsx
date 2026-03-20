import { OgImage } from "@/components/og/OgImage";
import { caseStudiesPreview } from "@/data/site-data";


export { contentType, size } from "@/components/og/OgImage";

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const cs = caseStudiesPreview.find(c => c.slug === slug);

  if (!cs) {
    return OgImage({
      title: "Case Study",
      badge: "Apex Mind LLP",
    });
  }

  return OgImage({
    title: cs.title,
    badge: "Case Study",
    description: cs.excerpt,
  });
}
