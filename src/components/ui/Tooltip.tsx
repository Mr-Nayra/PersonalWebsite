import Link from "next/link";

export function Tooltip({
  children,
  content,
  href,
}: {
  children: React.ReactNode;
  content: string;
  href?: string;
}) {
  const trigger = (
    <span className="border-b border-dotted border-accent-primary/50 text-accent-primary">
      {children}
    </span>
  );

  return (
    <span className="relative inline group/tooltip">
      {href ? (
        <Link href={href} className="cursor-help">
          {trigger}
        </Link>
      ) : (
        <span className="cursor-help">{trigger}</span>
      )}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-bg-elevated border border-border rounded-lg text-sm text-text-primary max-w-[280px] w-max shadow-lg z-50 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible focus-within:opacity-100 focus-within:visible transition-all duration-200 pointer-events-none">
        {content}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-border" />
      </span>
    </span>
  );
}
