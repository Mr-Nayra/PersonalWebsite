import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schemas";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ name: "Home", url: "/" }, ...items];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(allItems)),
        }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        {allItems.map((item, index) => (
          <span key={item.url} className="flex items-center gap-2">
            {index > 0 && <span className="text-gray-500 dark:text-gray-500">›</span>}
            {index === allItems.length - 1 ? (
              <span className="text-gray-800 dark:text-gray-300">{item.name}</span>
            ) : (
              <Link
                href={item.url}
                className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                {item.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
