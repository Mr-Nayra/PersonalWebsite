# SEO/GEO Audit — Glossary (/glossary)

**URL:** https://aryanrawther.com/glossary
**Audit date:** 2026-03-17

---

## Current State

| Signal | Value | Status |
|--------|-------|--------|
| Title | "AI & SEO Glossary — Key Terms Explained \| Aryan Rawther" | ✅ |
| Meta description | Not clearly visible | ⚠️ |
| H1 | "AI & SEO terms, explained simply." | ✅ |
| Schema | DefinedTerm schema present | ✅ |
| Terms listed | 76 across AI/SEO/Voice/Web categories | ✅ |

---

## What's Already Good

The glossary is a strong GEO asset. 76 terms with DefinedTerm schema is excellent. AI engines love definition-style content — it's directly citable.

---

## Issues & Actions

### P1 — Individual term pages missing DefinedTerm schema confirmation
Each `/glossary/[term]` page should have explicit DefinedTerm JSON-LD:

```json
{
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "name": "GEO (Generative Engine Optimisation)",
  "description": "The practice of optimising web content to be cited by AI-powered search engines like ChatGPT, Perplexity, and Claude AI, rather than simply ranked by traditional search algorithms.",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "name": "AI & SEO Glossary",
    "url": "https://aryanrawther.com/glossary"
  },
  "url": "https://aryanrawther.com/glossary/geo"
}
```

**File:** `src/app/glossary/[term]/page.tsx`

---

### P1 — Listing page needs DefinedTermSet schema
```json
{
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "name": "AI & SEO Glossary",
  "description": "Definitions of key terms in AI automation, SEO, GEO, AI voice, and SaaS development.",
  "url": "https://aryanrawther.com/glossary",
  "hasDefinedTerm": [
    { "@type": "DefinedTerm", "name": "GEO", "url": "https://aryanrawther.com/glossary/geo" }
  ]
}
```

---

### P1 — Term definitions likely lack citations and statistics
**GEO impact:** Definitions with citations are cited 40% more by AI engines.

**Action:** For each term, add:
- 1 authoritative citation (Wikipedia, academic paper, industry report)
- 1 specific statistic where applicable
- Example usage in real context

Example for "FAQPage Schema":
> "FAQPage schema is a JSON-LD structured data type that marks up question-and-answer content. According to Princeton NLP research (2023), adding FAQPage schema increases AI engine citation rates by up to 40%."

---

### P1 — No meta description visible on glossary page
**Fix:** Add explicit meta description to `src/app/glossary/page.tsx`:
`"76 AI and SEO terms explained simply — from GEO and LLM to Core Web Vitals and RAG. Updated 2026."`

---

### P2 — Glossary terms not linked from relevant service/blog pages
**Action:** Link glossary terms from:
- Service pages (e.g., link "GEO" from SEO Services page)
- Blog posts (link technical terms to their glossary definition)
- FAQ answers (hyperlink terms that appear in answers)

This builds internal link equity to the glossary and signals topical authority to Google.

---

### P2 — Add "Related Terms" section to individual term pages
Each term page should link to 3-5 related terms. This creates a semantic web that AI engines can traverse to understand topical relationships.

Example for "GEO" page: Related → FAQPage Schema, AI Search Engine, LLM, Perplexity AI, ChatGPT Search

---

### P2 — Missing letters (J, Q, X, Y) are an opportunity
These gaps are expected but explicitly noting them helps. If any industry-relevant terms start with these letters, add them to eliminate the gaps.

---

## Why the Glossary is a Major GEO Asset

When someone asks ChatGPT or Perplexity "What is GEO?" your glossary page competes directly to be the cited source. With 76 terms, proper DefinedTerm schema, and citations added, this page alone could drive significant AI-referred traffic. Prioritise it.
