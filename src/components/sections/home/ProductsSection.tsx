import Link from "next/link";
import { ProductCard } from "@/components/ui/ProductCard";
import { productsPreview } from "@/data/site-data";

export function ProductsSection() {
  return (
    <section className="section-padding bg-bg-surface border-y border-border">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-3">
              Things I&apos;ve built.
            </h2>
            <p className="text-text-secondary max-w-xl">
              Alongside client work, I build products that solve real problems. Here&apos;s what&apos;s live and what&apos;s in progress.
            </p>
          </div>
          <Link
            href="/products"
            className="text-accent-primary text-sm font-medium hover:underline whitespace-nowrap"
          >
            See all products →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {productsPreview.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
