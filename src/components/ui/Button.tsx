import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-primary text-white dark:text-bg-base hover:bg-[#6C63FF] hover:text-white hover:scale-[1.02] shadow-glow-primary hover:shadow-glow-primary",
  secondary:
    "border border-accent-primary text-accent-primary hover:bg-[#6C63FF] hover:border-[#6C63FF] hover:text-white hover:scale-[1.02]",
  ghost:
    "text-text-secondary hover:text-text-primary hover:bg-bg-elevated",
  danger:
    "bg-red-500 text-white hover:bg-red-600 hover:scale-[1.02]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center gap-2 font-medium rounded-btn transition-all duration-150 cursor-pointer",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
