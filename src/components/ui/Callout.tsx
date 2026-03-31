const variants = {
  info: {
    icon: "ℹ️",
    border: "border-accent-primary/30",
    bg: "bg-accent-primary/5",
    label: "Note",
  },
  tip: {
    icon: "💡",
    border: "border-accent-secondary/30",
    bg: "bg-accent-secondary/5",
    label: "Tip",
  },
  warning: {
    icon: "⚠️",
    border: "border-yellow-500/30",
    bg: "bg-yellow-500/5",
    label: "Warning",
  },
} as const;

export function Callout({
  children,
  variant = "info",
  label,
}: {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  label?: string;
}) {
  const v = variants[variant];

  return (
    <div
      className={`${v.bg} ${v.border} border rounded-lg p-4 my-6 not-italic`}
      style={{ fontStyle: "normal" }}
    >
      <p className="text-text-primary text-sm font-semibold mb-2">
        {v.icon} {label || v.label}
      </p>
      <div className="text-text-secondary text-sm leading-relaxed [&>p]:mb-2 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
