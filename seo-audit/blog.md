# SEO/GEO Audit — Blog (/blog)

**URL:** https://aryanrawther.com/blog
**Audit date:** 2026-03-17

---

## Current State

| Signal | Value | Status |
|--------|-------|--------|
| Title | "Blog — AI Automation, Technical SEO, GEO & SaaS Development \| Aryan Rawther" | ✅ |
| Meta description | Good, mentions GEO | ✅ |
| H1 | "Blog" | ❌ Generic |
| Schema | BreadcrumbList only | ❌ No Article/Blog schema |
| Blog posts listed | 5 | ⚠️ Very thin |
| Article schema on individual posts | Not confirmed | ❌ Critical |

---

## Issues & Actions

### P0 — Individual blog posts almost certainly missing Article schema
This is the most critical gap on the blog. Every single blog post needs an `Article` JSON-LD schema with:
- `headline`
- `datePublished` (ISO 8601)
- `dateModified` (ISO 8601)
- `author` with credentials
- `publisher` with logo
- `image` (1200x630 OG image)
- `wordCount`
- `keywords`

Without this, blog posts will not appear in Google News, will not be cited by ChatGPT (which gives 3.2x more citations to recently-dated content), and will not be eligible for Google Rich Results.

**File:** `src/app/blog/[slug]/page.tsx`

Template:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Post Title — max 110 chars]",
  "description": "[Meta description]",
  "image": "https://aryanrawther.com/blog/[slug]/og-image.png",
  "datePublished": "2026-03-01T00:00:00+05:30",
  "dateModified": "2026-03-17T00:00:00+05:30",
  "author": {
    "@type": "Person",
    "name": "Aryan Rawther",
    "url": "https://aryanrawther.com/about",
    "jobTitle": "AI Automation Consultant"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Apex Mind LLP",
    "logo": {
      "@type": "ImageObject",
      "url": "https://aryanrawther.com/logo.png",
      "width": 600,
      "height": 60
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://aryanrawther.com/blog/[slug]"
  }
}
```

---

### P1 — H1 "Blog" is too generic
**Fix:** `"AI, SEO & SaaS Development — Aryan Rawther's Blog"`
**File:** `src/app/blog/page.tsx`

---

### P1 — Listing page needs Blog/ItemList schema
```json
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Aryan Rawther — AI, SEO & SaaS Blog",
  "description": "Practical articles on AI automation, LLM integration, technical SEO, GEO, and SaaS development.",
  "url": "https://aryanrawther.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Apex Mind LLP"
  }
}
```

---

### P1 — Blog posts need FAQPage schema at bottom
Each post should end with a 3-5 question FAQ section (visible to users) + FAQPage JSON-LD. This is the #1 GEO improvement for blog content.

---

### P1 — Content volume is too low (5 posts)
AI engines use domain trust signals. A site with 5 blog posts will be cited far less than one with 20-50. This is a long-term content strategy issue.

**Priority content to publish next:**
1. "What is GEO (Generative Engine Optimisation)? A Complete Guide" — targets high-intent AI search queries
2. "AI Automation ROI: How to Calculate the Business Case" — statistics-rich, highly citable
3. "How AI Agents Handle Healthcare Eligibility Verification" — specific vertical authority

---

### P2 — No author bio section at bottom of posts
Each post should end with an author card showing:
- Photo
- Name + title
- 2-3 sentence bio
- Links to About page and LinkedIn

This is a critical E-E-A-T signal for Google and a citation credibility signal for AI engines.

---

### P2 — Internal links from blog → services are critical for topical authority
Each blog post should link to at least one relevant service page. Example:
- "How to Build AI Agents with LangChain" → `/services/ai-automation-consulting`
- GEO post → `/services/seo-services`

---

### P2 — No reading progress or estimated reading time in schema
Add `timeRequired` to Article schema:
```json
"timeRequired": "PT12M"
```

---

## Content Freshness Note

ChatGPT gives **3.2x more citations** to content updated within 30 days. After publishing new posts, add `dateModified` timestamps. Update the `dateModified` any time you significantly edit an existing post.
