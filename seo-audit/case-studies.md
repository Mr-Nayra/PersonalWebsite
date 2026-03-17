# SEO/GEO Audit — Case Studies (/case-studies)

**URL:** https://aryanrawther.com/case-studies
**Audit date:** 2026-03-17

---

## Current State

| Signal | Value | Status |
|--------|-------|--------|
| Title | "Case Studies — AI Automation, SEO & SaaS Results \| Aryan Rawther, Apex Mind LLP" | ✅ |
| Meta description | Includes specific metrics (70% call reduction, 8-week MVP) | ✅ Strong |
| H1 | "Case Studies" | ❌ Generic |
| H2s | None — uses H3s for case titles | ⚠️ |
| Schema | BreadcrumbList only | ❌ Critical gap |
| Case studies listed | 6 | ✅ |
| Word count | ~1,200-1,400 | ⚠️ Borderline |

---

## Issues & Actions

### P1 — H1 "Case Studies" is too generic
**Fix:** `"Client Results — AI Automation, SEO & SaaS Case Studies | Apex Mind LLP"`
**File:** `src/app/case-studies/page.tsx`

---

### P1 — No Article or CaseStudy schema
Each case study should have an `Article` (or `CreativeWork`) schema. This is required for Google News, Rich Results, and AI citation.

**For the listing page**, use `ItemList`:
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Case Studies — Aryan Rawther",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Article",
        "name": "Healthcare Insurance Verification & RCM Automation",
        "url": "https://aryanrawther.com/case-studies/healthcare-rcm"
      }
    }
  ]
}
```

**For individual case study pages** (`/case-studies/[slug]`), add full Article schema with:
- `headline`
- `description`
- `datePublished`
- `dateModified`
- `author` → Aryan Rawther
- `publisher` → Apex Mind LLP
- Key result metrics in `keywords`

---

### P1 — Individual case study pages need Article schema + Statistics
The case study detail pages are the highest-value GEO assets on the site. They have specific metrics (70% call reduction, 300 patients/day, 1M impressions) that AI engines love to cite.

**Action on individual pages:**
1. Add `Article` schema with `datePublished`/`dateModified`
2. Put the key metric in the H1 or first paragraph (answer-first format)
3. Add `SpeakableSpecification` pointing to `.result-summary`

Example H1 rewrite for healthcare case study:
- Current: likely "Healthcare Insurance Verification & RCM Automation"
- Better: "70% Reduction in Manual Claims Processing — AI RCM Automation Case Study"

---

### P1 — No datePublished on any case studies
Content freshness is a 3.2x citation multiplier for ChatGPT. Add publish dates to all case study pages.

---

### P2 — H2 structure missing — all case study titles are H3
The listing page should use H2 for case study names, not H3. H2 signals section-level importance to search engines.

---

### P2 — No FAQPage schema on listing page
Add 3-4 questions:
1. "What case studies does Aryan Rawther have?"
2. "What results has Apex Mind LLP achieved for clients?"
3. "Can I see examples of AI automation projects?"

---

### P2 — Meta description metrics are great — replicate in content
The meta description mentions "70% call handling reduction, 8-week MVP delivery" — these specific stats should appear in the page body too (not just meta). AI engines scan body content, not just meta tags.

---

## Individual Case Study Page Template (To Implement)

Each `/case-studies/[slug]` page should follow this structure:
```
H1: [Metric/Result] — [Brief Description] Case Study
H2: The Challenge
H2: The Solution
H2: Results (with specific numbers in bold or table)
H2: Technologies Used
H2: About the Client
```

This "answer-first" structure matches both Google SGE and ChatGPT's preferred citation format.
