export function TLDR({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border-2 border-accent-primary/20 bg-accent-primary/5 p-5">
      <p className="text-accent-primary text-xs font-semibold uppercase tracking-wider mb-3">
        TL;DR — Quick Checklist
      </p>
      <div className="text-text-secondary text-sm leading-relaxed [&>ol]:my-0 [&>ol]:pl-5 [&>ul]:my-0 [&>ul]:pl-5 [&_li]:mb-1.5 [&_li]:text-text-secondary [&>p]:mb-2 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
