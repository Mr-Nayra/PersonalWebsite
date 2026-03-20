import { OgImage } from "@/components/og/OgImage";


export { contentType, size } from "@/components/og/OgImage";

export default async function Image() {
  return OgImage({
    title: "Aryan Rawther — Full Stack AI & SEO Developer",
    description:
      "Building production-grade AI agents, SaaS products, and SEO-optimized pipelines for businesses globally.",
  });
}
