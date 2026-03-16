import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { formatDate } from "@/lib/utils";

interface BlogPostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  category: string;
  coverImage?: string;
  className?: string;
  featured?: boolean;
}

export function BlogPostCard({
  slug,
  title,
  excerpt,
  date,
  readTime,
  category,
  coverImage,
  className,
  featured = false,
}: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group block rounded-card border border-border bg-bg-surface overflow-hidden card-hover",
        featured && "md:flex",
        className
      )}
    >
      {/* Cover image */}
      <div
        className={cn(
          "relative bg-bg-elevated overflow-hidden",
          featured ? "md:w-2/5 h-48 md:h-auto" : "h-48"
        )}
      >
        {coverImage ? (
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center">
            <div className="text-4xl opacity-30">✦</div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={cn("p-5 flex flex-col gap-3", featured && "md:flex-1")}>
        <div className="flex items-center gap-2">
          <Badge variant="category">{category}</Badge>
          <span className="text-text-muted text-xs">{readTime} min read</span>
        </div>
        <h3
          className={cn(
            "font-semibold text-text-primary group-hover:text-accent-primary transition-colors",
            featured ? "text-xl" : "text-base"
          )}
        >
          {title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed line-clamp-2">{excerpt}</p>
        <div className="mt-auto pt-3 border-t border-border flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary text-xs font-bold">
            A
          </div>
          <span className="text-text-muted text-xs">Aryan Rawther</span>
          <span className="text-text-muted text-xs ml-auto">
            {formatDate(date)}
          </span>
        </div>
      </div>
    </Link>
  );
}
