import { cn } from "@/lib/utils";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

export function ProcessStep({ number, title, description, className }: ProcessStepProps) {
  return (
    <div className={cn("flex gap-5", className)}>
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center font-mono text-accent-primary font-bold text-sm">
          {String(number).padStart(2, "0")}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-text-primary mb-1">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
