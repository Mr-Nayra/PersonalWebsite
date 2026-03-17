# SEO/GEO Audit — Resources (/resources)

**URL:** https://aryanrawther.com/resources
**Audit date:** 2026-03-17

---

## Current State

| Signal | Value | Status |
|--------|-------|--------|
| Title | "Resources — AI, SEO & Web Development Guides \| Aryan Rawther \| Aryan Rawther" | ❌ Duplicate "Aryan Rawther" |
| Meta description | Good | ✅ |
| H1 | "Practical guides for building with AI." | ✅ Good |
| Schema | Unclear — likely BreadcrumbList only | ⚠️ |
| Resources listed | 5 guides | ⚠️ Thin |

---

## Issues & Actions

### P0 — Title tag has duplicate "Aryan Rawther | Aryan Rawther"
**Current:** `"Resources — AI, SEO & Web Development Guides | Aryan Rawther | Aryan Rawther"`
**Fix:** `"AI, SEO & Web Development Guides | Aryan Rawther"`
**File:** `src/app/resources/page.tsx` → `metadata.title`

This is likely a template issue where the site-wide title suffix is being appended to a title that already includes the name.

---

### P1 — Individual resource pages need Article or HowTo schema
Each resource guide should have:
- `HowTo` schema if it's a how-to guide (e.g., "Technical SEO Audit Checklist")
- `Article` schema with `datePublished`, `dateModified`, `author`

**Priority:** Technical SEO Audit Checklist → add `HowTo` with steps
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Technical SEO Audit Checklist (2024)",
  "description": "Step-by-step technical SEO audit process",
  "totalTime": "PT10M",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Check robots.txt",
      "text": "Verify that robots.txt allows all important pages..."
    }
  ]
}
```

---

### P1 — Resources listing page needs ItemList schema
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Resources by Aryan Rawther",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Article",
        "name": "The Business Leader's Guide to AI Automation",
        "url": "https://aryanrawther.com/resources/ai-automation-guide"
      }
    }
  ]
}
```

---

### P1 — Resources pages are a top GEO opportunity — add citations and statistics
The GEO Optimisation guide (`/resources/geo-optimisation`) is especially valuable. It should:
- Cite Princeton NLP research by name
- Include specific statistics (e.g., "+40% AI visibility from FAQPage schema")
- Reference the opc.dev SEO-GEO skill or similar tools

This creates an authoritative, citable resource that AI engines will prefer over generic content.

---

### P2 — No PDF versions of guides
Perplexity AI **prioritises publicly hosted PDF documents** for citations. Consider offering PDF download versions of the major guides. This is a relatively easy win.

**Action:** Add a "Download PDF" button to each resource page that links to a static PDF version.

---

### P2 — Resource pages should have FAQPage schema at bottom
Each resource should end with 3-4 FAQs related to the topic:
- "What is a technical SEO audit?" → Technical SEO guide
- "How long does a GEO optimisation take?" → GEO guide

---

### P2 — No author attribution on resource pages
Add visible author card with credentials on each resource page (same as blog posts). Critical for E-E-A-T.
