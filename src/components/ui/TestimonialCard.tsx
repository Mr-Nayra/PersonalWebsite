import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company?: string;
  service?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  role,
  company,
  service,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-border bg-bg-surface p-6 flex flex-col gap-4",
        className
      )}
    >
      {/* Quote mark */}
      <div className="text-accent-primary text-4xl font-serif leading-none opacity-60">
        &ldquo;
      </div>

      <p className="text-text-secondary leading-relaxed flex-1">{quote}</p>

      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <div className="w-9 h-9 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary text-sm font-bold">
          {name[0]}
        </div>
        <div>
          <div className="text-text-primary font-medium text-sm">{name}</div>
          <div className="text-text-muted text-xs">
            {role}
            {company ? `, ${company}` : ""}
          </div>
        </div>
        {service && (
          <div className="ml-auto">
            <span className="text-xs text-accent-primary bg-accent-primary/10 px-2 py-0.5 rounded-full border border-accent-primary/20">
              {service}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
