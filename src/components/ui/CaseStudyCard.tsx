import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface CaseStudyCardProps {
  slug: string;
  title: string;
  industry: string;
  service: string | string[];
  result: string;
  excerpt?: string;
  className?: string;
}

export function CaseStudyCard({
  slug,
  title,
  industry,
  service,
  result,
  excerpt,
  className,
}: CaseStudyCardProps) {
  const serviceArray = Array.isArray(service) ? service : [service];

  return (
    <Link
      href={`/case-studies/${slug}`}
      className={cn(
        "group h-full rounded-card border border-border bg-bg-surface p-6 card-hover flex flex-col gap-4",
        className
      )}
    >
      <div className="flex flex-wrap gap-2">
        <Badge variant="industry">{industry}</Badge>
        {serviceArray.length > 0 && (
          <Badge variant="service">{serviceArray[0]}</Badge>
        )}
        {serviceArray.length > 1 && (
          <Badge variant="service">+{serviceArray.length - 1} more</Badge>
        )}
      </div>

      <h3 className="font-semibold text-text-primary text-lg group-hover:text-accent-primary transition-colors">
        {title}
      </h3>

      {excerpt && (
        <p className="text-text-muted text-sm leading-relaxed line-clamp-2">{excerpt}</p>
      )}

      <div className="mt-auto pt-4 border-t border-border">
        <div className="flex items-baseline gap-2">
          <span className="font-mono font-bold text-accent-secondary text-xl gradient-text">
            {result}
          </span>
        </div>
      </div>

      <div className="text-accent-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
        Read case study <span>→</span>
      </div>
    </Link>
  );
}
