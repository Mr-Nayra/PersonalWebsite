"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const prose = document.querySelector(".prose");
    if (!prose) return;

    const headings = prose.querySelectorAll("h2, h3");
    const tocItems: TocItem[] = [];

    headings.forEach((heading) => {
      const text = heading.textContent || "";
      const id =
        heading.id ||
        text
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
          .trim();
      heading.id = id;
      tocItems.push({ id, text, level: heading.tagName === "H2" ? 2 : 3 });
    });

    setItems(tocItems);
  }, []);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className="rounded-card border border-border bg-bg-surface p-4">
      <p className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-3">
        Table of Contents
      </p>
      <nav className="space-y-1 max-h-[60vh] overflow-y-auto">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
              setActiveId(item.id);
            }}
            className={`block text-xs leading-relaxed transition-colors ${
              item.level === 3 ? "pl-3" : ""
            } ${
              activeId === item.id
                ? "text-accent-primary font-medium"
                : "text-text-muted hover:text-text-primary"
            }`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
