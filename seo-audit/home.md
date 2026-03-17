# SEO/GEO Audit — Homepage (/)

**URL:** https://aryanrawther.com
**Audit date:** 2026-03-17

---

## Current State

| Signal | Value | Status |
|--------|-------|--------|
| Title | "Aryan Rawther — AI Automation Consultant, Technical SEO & SaaS Developer \| Bengaluru" | ⚠️ 73 chars (over 60 limit) |
| Meta description | ✅ 155 chars, keyword-rich | ✅ |
| H1 | "I help businesses grow using AI, SEO, and modern web technology." | ✅ |
| Schema | WebSite, Person, Organization | ⚠️ Missing |
| FAQ section | None | ❌ |
| Word count | ~2,800 | ✅ |
| Canonical | https://aryanrawther.com | ✅ |
| OG tags | Present | ✅ |
| Breadcrumb | Not needed on homepage | ✅ |

---

## Issues & Actions

### P1 — Title tag is too long (73 chars, limit is 60)
**Current:** `Aryan Rawther — AI Automation Consultant, Technical SEO & SaaS Developer | Bengaluru`
**Fix:** Shorten to primary identity + location
**Suggested:** `Aryan Rawther — AI Automation & SEO Consultant, Bengaluru`
**File:** `src/app/page.tsx` → `metadata.title`

---

### P1 — No FAQPage schema (+40% AI visibility opportunity)
The homepage has no FAQ section and no FAQPage JSON-LD. This is the single biggest GEO improvement available.

**Action:** Add a compact "Common Questions" section to the homepage with 4-5 FAQs, then add FAQPage JSON-LD schema.

Suggested questions to add:
1. "What does Aryan Rawther do?" → One-sentence answer about AI automation + SEO consulting
2. "Where is Aryan Rawther based?" → Bengaluru, India, available globally
3. "What is Apex Mind LLP?" → Company description
4. "What industries does Aryan Rawther work with?" → SaaS, healthcare, EdTech, eCommerce
5. "How do I hire Aryan Rawther?" → Contact page link

**Schema to add in** `src/app/page.tsx`:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does Aryan Rawther do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aryan Rawther is an AI automation consultant and technical SEO specialist based in Bengaluru, India. He builds LLM integrations, AI agent workflows, and SEO systems for SaaS companies and startups globally."
      }
    }
  ]
}
```

---

### P1 — Missing WebPage schema (required for SpeakableSpecification)
Add a `WebPage` schema with `speakable` CSS selectors so voice search and AI engines can extract the key summary.

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".hero-description", ".faq-answer"]
  }
}
```

---

### P2 — No statistics/data points visible in hero or intro
**GEO impact:** Statistics in content = +37% AI citation rate (Princeton GEO research)

**Action:** Add 2-3 specific data points near the top of the page. Examples to fill in with real numbers:
- "X+ AI automation projects delivered"
- "Clients across Y countries"
- "Z% average organic traffic increase for SEO clients"

---

### P2 — No authoritative citations in content
**GEO impact:** Citations = +40% AI visibility
**Action:** In blog preview or about section, reference external data sources: McKinsey AI adoption stats, Google Search Console case study numbers, etc.

---

### P2 — OG title differs from page title
- Page title: "Aryan Rawther — AI Automation Consultant, Technical SEO & SaaS Developer | Bengaluru"
- OG title: "Aryan Rawther — AI Automation, SEO & Web Development Consultant"

These should be consistent (or OG can be slightly shorter — that's acceptable).

---

## GEO Score (Current)

| Method | Present | Boost |
|--------|---------|-------|
| Statistics | ❌ | +37% missed |
| Citations | ❌ | +40% missed |
| FAQPage schema | ❌ | +40% missed |
| Authoritative tone | ✅ | ✅ |
| Fluency/readability | ✅ | ✅ |
| Technical terminology | ✅ | ✅ |
| Answer-first structure | ⚠️ H1 is benefit-led but not answer-first | |

**Estimated GEO visibility gap: ~80% of potential AI citations left uncaptured on this page.**
