import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  featured?: boolean;
  as?: "div" | "article" | "section";
}

export function Card({
  children,
  className,
  hover = true,
  featured = false,
  as: Component = "div",
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-card border bg-bg-surface p-6",
        "border-border",
        hover && "card-hover cursor-pointer",
        featured && "border-accent-primary/40 shadow-glow-primary",
        className
      )}
    >
      {children}
    </Component>
  );
}
