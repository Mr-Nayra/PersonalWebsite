import { cn } from "@/lib/utils";

type BadgeVariant =
  | "service"
  | "industry"
  | "category"
  | "status-live"
  | "status-beta"
  | "status-coming-soon"
  | "type-saas"
  | "type-open-source"
  | "type-extension"
  | "default";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  service: "bg-accent-primary/10 text-accent-primary border-accent-primary/20",
  industry: "bg-accent-secondary/10 text-accent-secondary border-accent-secondary/20",
  category: "bg-bg-elevated text-text-secondary border-border",
  "status-live":
    "bg-green-500/10 text-green-500 border-green-500/20",
  "status-beta":
    "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  "status-coming-soon":
    "bg-text-muted/10 text-text-muted border-text-muted/20",
  "type-saas": "bg-accent-primary/10 text-accent-primary border-accent-primary/20",
  "type-open-source": "bg-green-500/10 text-green-500 border-green-500/20",
  "type-extension": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  default: "bg-bg-elevated text-text-muted border-border",
};

export function Badge({ variant = "default", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

// Convenience helpers
export function ServiceBadge({ children }: { children: React.ReactNode }) {
  return <Badge variant="service">{children}</Badge>;
}

export function IndustryBadge({ children }: { children: React.ReactNode }) {
  return <Badge variant="industry">{children}</Badge>;
}

export function StatusBadge({ status }: { status: "live" | "beta" | "coming-soon" }) {
  const map = {
    live: { variant: "status-live" as const, label: "Live" },
    beta: { variant: "status-beta" as const, label: "Beta" },
    "coming-soon": { variant: "status-coming-soon" as const, label: "Coming Soon" },
  };
  const { variant, label } = map[status];
  return <Badge variant={variant}>{label}</Badge>;
}
