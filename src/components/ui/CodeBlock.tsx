export function CodeBlock({
  children,
  filename,
}: {
  children: string;
  filename?: string;
}) {
  return (
    <div className="my-6 rounded-lg border border-border overflow-hidden max-w-full">
      {filename && (
        <div className="bg-bg-elevated border-b border-border px-4 py-2 flex items-center gap-2">
          <span className="text-text-muted text-xs font-mono">{filename}</span>
        </div>
      )}
      <pre className="!my-0 !rounded-none !border-0">
        <code>{children}</code>
      </pre>
    </div>
  );
}
