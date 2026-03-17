# SEO/GEO Audit — FAQ Page (/faq)

**URL:** https://aryanrawther.com/faq
**Audit date:** 2026-03-17

---

## Current State

| Signal | Value | Status |
|--------|-------|--------|
| Title | "FAQ — AI Automation, SEO & SaaS Development Questions \| Aryan Rawther" | ✅ |
| Meta description | Good — covers all service categories | ✅ |
| H1 | "Frequently Asked Questions" | ⚠️ Generic |
| Schema | FAQPage + Question/Answer (18 Q&As) + BreadcrumbList | ✅ |
| Word count | ~2,100 | ✅ |
| FAQPage JSON-LD | Present with 18 questions | ✅ |

---

## What's Already Good

This is one of the better-structured pages on the site. FAQPage schema with 18 questions is excellent for AI visibility (+40% citation rate). Good word count. Well-organised by category.

---

## Issues & Actions

### P1 — H1 "Frequently Asked Questions" is not keyword-rich
**Fix:** `"AI Automation, SEO & SaaS — Frequently Asked Questions"`
**File:** `src/app/faq/page.tsx`

---

### P1 — FAQ answers need statistics and citations
Current answers are descriptive but lack data points. Per Princeton GEO research:
- Statistics in answers = +37% citation rate
- Citations = +40% citation rate

**Action for each FAQ answer:**
- Add at least one specific number or percentage
- Where possible, cite an external source inline

Example upgrade:
- **Before:** "AI automation can help reduce manual work in your business."
- **After:** "AI automation reduces manual processing time by 60-80% in most workflows. According to McKinsey (2024), 70% of business functions could be partially automated with current AI technology."

---

### P1 — Missing questions that AI engines are asked about you
Check what queries appear in Google Search Console for the site. Common AI engine queries about consultants include:
- "How much does AI automation consulting cost in India?"
- "Is Aryan Rawther available for freelance work?"
- "What is GEO optimisation?"

If these aren't in the FAQ, add them.

---

### P2 — No `dateModified` on FAQ page
Add to the page metadata so search engines know the FAQ was recently updated. Freshness matters for ChatGPT citations.
**File:** `src/app/faq/page.tsx` → metadata

---

### P2 — FAQ categories don't have anchor IDs
Each FAQ section (AI Automation, AI Voice Agents, etc.) should have an HTML anchor (`id` attribute) so users and search engines can link directly to specific sections.

Example: `#ai-automation`, `#seo-services`, `#pricing`

---

### P2 — Missing SpeakableSpecification
```json
{
  "@type": "SpeakableSpecification",
  "cssSelector": [".faq-answer", "h1", ".faq-category-title"]
}
```
This helps voice search (Google Assistant, Siri) and AI engines extract specific answers.

---

## FAQ is One of Your Best GEO Assets

The FAQ page with 18 structured Q&As is already working hard for you. The main improvements are:
1. Adding statistics to answers (+37%)
2. Keeping it updated with new questions monthly
3. Adding H1 keyword richness

Consider also: create service-specific FAQ pages (already partially done on service pages). The standalone `/faq` should cover general and commercial questions, while service FAQs handle technical/process questions.
