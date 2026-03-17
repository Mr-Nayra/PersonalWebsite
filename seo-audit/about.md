# SEO/GEO Audit — About Page (/about)

**URL:** https://aryanrawther.com/about
**Audit date:** 2026-03-17

---

## Current State

| Signal | Value | Status |
|--------|-------|--------|
| Title | "About Aryan Rawther — AI Consultant & Founder of Apex Mind LLP, Bengaluru" | ✅ (fixed) |
| Meta description | 155 chars, mentions Apex Mind LLP | ✅ (fixed) |
| H1 | "Aryan Rawther" | ⚠️ Weak |
| Schema | Person, Organization, BreadcrumbList | ⚠️ Missing FAQPage |
| Company name | Apex Mind LLP (consistent now) | ✅ (fixed) |
| E-E-A-T signals | Strong — detailed work history, credentials | ✅ |
| Word count | ~2,100 | ✅ |

---

## Issues & Actions

### P1 — H1 is just "Aryan Rawther" — too weak for SEO
**Problem:** The H1 is the most important on-page SEO signal and it's only the name. Google and AI engines can't determine page intent from a name alone.

**Fix:** Change H1 to include job title or value proposition.
**Suggested:** `"Aryan Rawther — AI Automation Consultant & Founder, Bengaluru"`
**File:** `src/app/about/page.tsx` (line ~67)

---

### P1 — No FAQPage schema on About page
The about page is a prime candidate for FAQ schema — AI engines frequently answer "Who is Aryan Rawther?" and similar queries. A FAQPage schema directly answers those questions.

**Action:** Add 4-5 Q&A pairs as JSON-LD:

Suggested questions:
1. "Who is Aryan Rawther?"
2. "What is Apex Mind LLP?"
3. "Where is Aryan Rawther based?"
4. "What is Aryan Rawther's background?"
5. "What companies has Aryan Rawther worked with?"

**File:** `src/app/about/page.tsx` — add to the `generateMetadata` or as a `<script type="application/ld+json">` in the JSX

---

### P1 — Person schema missing `sameAs` links
The Person schema (from `personSchema` in `src/lib/schemas.ts`) should include `sameAs` pointing to LinkedIn, GitHub, and Twitter. This ties the entity to known social profiles — critical for Google Knowledge Panel and AI entity recognition.

**Check/fix in:** `src/lib/schemas.ts` → `personSchema` function
**Add:**
```json
"sameAs": [
  "https://www.linkedin.com/in/aryanrawther",
  "https://github.com/aryanrawther",
  "https://twitter.com/aryanrawther"
]
```

---

### P2 — Organization schema missing `sameAs` and `logo`
The Organization schema for Apex Mind LLP should have:
- `logo` → URL to logo image
- `sameAs` → LinkedIn company page if it exists
- `foundingDate`
- `numberOfEmployees` (even if just "1")

---

### P2 — Add SpeakableSpecification to Person schema
Voice search queries like "Who is Aryan Rawther?" need extractable content.

```json
"speakable": {
  "@type": "SpeakableSpecification",
  "cssSelector": ["h1", ".hero-bio", ".stat-counter"]
}
```

---

### P2 — "By the Numbers" section needs real data
The `<StatCounter>` component shows statistics. These are high-value GEO signals (+37% citation boost). Make sure these numbers are:
- Accurate and real
- Kept updated (content freshness = 3.2x more citations if updated within 30 days)

---

### P2 — No external citations in the story text
The narrative is strong but entirely self-referential. Adding 1-2 links to authoritative sources (e.g., a PES University link, a UpTrain/YC link) increases E-E-A-T and citation credibility.

---

## GEO Score (Current)

| Method | Present | Status |
|--------|---------|--------|
| E-E-A-T signals | ✅ Strong work history | ✅ |
| FAQPage schema | ❌ | P1 |
| Statistics (By the Numbers) | ✅ if filled in | Verify real data |
| Citations | ❌ No external references | P2 |
| Entity consistency (company name) | ✅ Fixed | ✅ |
| sameAs links in schema | ❌ Not confirmed | P1 |
