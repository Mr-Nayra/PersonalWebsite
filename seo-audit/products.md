# SEO/GEO Audit — Products Page (/products)

**URL:** https://aryanrawther.com/products
**Audit date:** 2026-03-17

---

## Current State

| Signal | Value | Status |
|--------|-------|--------|
| Title | "Products — SaaS Tools & Open Source Projects Built by Aryan Rawther \| Apex Mind LLP" | ✅ 80 chars (acceptable) |
| Meta description | Lists all 3 products by name | ✅ |
| H1 | "Products I've Built." | ✅ Conversational, fine |
| Schema | BreadcrumbList only | ❌ Critical gap |
| Word count | ~450-500 | ❌ Thin content |
| Products shown | 2 (SpecLens AI, PhotoshopRequest) | ⚠️ llms.txt lists 3 |

---

## Issues & Actions

### P0 — Content mismatch: llms.txt says 3 products, page shows 2
**Problem:** `public/llms.txt` lists MediaMitra as a beta product. The products page shows SpecLens AI and PhotoshopRequest only.

**Action:** Either:
a) Add MediaMitra card to the products page (even as "Coming Soon / Beta")
b) Remove MediaMitra from llms.txt if it's not ready

Also: GEO Checker is listed in llms.txt as "coming soon" but not on the products page. Add it or remove it from llms.txt.

**File:** `src/app/products/page.tsx` or `public/llms.txt`

---

### P1 — No SoftwareApplication schema per product
Each product should have a `SoftwareApplication` schema. This is what Perplexity and Google SGE use to surface product information in AI answers.

**For SpecLens AI:**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SpecLens AI",
  "description": "AI-powered procurement specification comparison for B2B buying decisions.",
  "url": "https://speclens.ai",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "author": {
    "@type": "Person",
    "name": "Aryan Rawther",
    "url": "https://aryanrawther.com"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  }
}
```

Repeat per product.

---

### P1 — Page is thin (~450-500 words)
Google's Helpful Content guidelines and AI engines both penalise thin content. Service pages need 800-1,200 words minimum for competitive queries.

**Action:** Expand each product section with:
- Problem it solves (2-3 sentences)
- Who it's for (target user)
- Key features (3-4 bullet points)
- Tech stack (already partially there)
- Status (live, beta, coming soon)
- Call to action

---

### P1 — Product individual pages missing
Products should have their own pages (`/products/speclens-ai`, `/products/mediamitra`, etc.) with:
- Full description
- SoftwareApplication schema with full details
- Screenshots
- Case study link

This creates internal linking depth and topical authority.

---

### P2 — No FAQPage schema
Add 3-4 FAQs:
1. "What products has Aryan Rawther built?"
2. "Is SpecLens AI open source?"
3. "How do I access MediaMitra?"

---

### P2 — PhotoshopRequest App missing from llms.txt
The product page shows PhotoshopRequest but llms.txt doesn't mention it.
**Fix:** Add to `public/llms.txt` under Products section.

---

## GEO Score (Current)

| Signal | Status |
|--------|--------|
| SoftwareApplication schema | ❌ Missing entirely |
| FAQPage | ❌ Missing |
| Content depth | ❌ Thin |
| Product entity consistency | ⚠️ Mismatch across files |
| Statistics/pricing | ❌ No pricing info visible |
