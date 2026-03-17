import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge, StatusBadge } from "./Badge";
import { Button } from "./Button";

interface ProductCardProps {
  slug: string;
  name: string;
  tagline: string;
  type: "saas" | "open-source" | "extension" | "other";
  status: "live" | "beta" | "coming-soon";
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

const typeLabels: Record<string, string> = {
  saas: "SaaS",
  "open-source": "Open Source",
  extension: "Extension",
  other: "Product",
};

export function ProductCard({
  slug,
  name,
  tagline,
  type,
  status,
  techStack,
  liveUrl,
  githubUrl,
  className,
}: ProductCardProps) {
  const ctaHref =
    liveUrl
      ? liveUrl
      : type === "open-source" && githubUrl
      ? githubUrl
      : `/products/${slug}`;

  const ctaLabel =
    liveUrl
      ? "Try it →"
      : type === "open-source"
      ? "View on GitHub →"
      : "Join waitlist →";

  const isExternal = !!liveUrl || type === "open-source";

  return (
    <div
      className={cn(
        "rounded-card racing-border card-hover",
        status === "coming-soon" && "opacity-80",
        className
      )}
    >
      <div className="racing-border-content p-6 flex flex-col gap-4 h-full border border-border">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 items-center">
          <Badge variant={`type-${type}` as "type-saas" | "type-open-source" | "type-extension"}>
            {typeLabels[type]}
          </Badge>
          <StatusBadge status={status} />
        </div>

        {/* Name + tagline */}
        <div>
          <Link href={`/products/${slug}`}>
            <h3 className="font-semibold text-text-primary text-lg hover:text-accent-primary transition-colors">
              {name}
            </h3>
          </Link>
          <p className="text-text-muted text-sm mt-1 leading-relaxed">{tagline}</p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono bg-bg-elevated text-text-muted px-2 py-0.5 rounded border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-4 border-t border-border">
          <Button
            variant="secondary"
            size="sm"
            href={ctaHref}
            external={isExternal}
            className="w-full justify-center"
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
