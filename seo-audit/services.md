# SEO/GEO Audit — Services Pages

**URLs audited:**
- https://aryanrawther.com/services (listing page)
- https://aryanrawther.com/services/ai-automation-consulting
- https://aryanrawther.com/services/seo-services
- (ai-voice-agents, web-development, saas-development — same template, same issues)

**Audit date:** 2026-03-17

---

## Services Listing Page (/services)

### Current State

| Signal | Value | Status |
|--------|-------|--------|
| Title | "Services — AI Automation, Technical SEO, Web & SaaS Development \| Apex Mind LLP \| Aryan Rawther" | ⚠️ 85 chars (too long) |
| H1 | "Services" | ❌ Too generic |
| Schema | BreadcrumbList only | ❌ Missing Service, FAQPage |
| Word count | ~1,150 | ⚠️ Borderline thin |

### Issues

#### P1 — H1 "Services" is the weakest possible heading
**Fix:** Replace with keyword-rich H1
**Suggested:** `"AI Automation, SEO & Web Development Services — Apex Mind LLP"`
**File:** `src/app/services/page.tsx`

#### P1 — Title tag too long (85 chars)
**Fix:** `"AI Automation, SEO & SaaS Services | Aryan Rawther, Bengaluru"`

#### P1 — No Service or ItemList schema on the listing page
The listing page should use an `ItemList` or multiple `Service` schemas to tell AI engines what services are available.

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Services by Aryan Rawther",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "AI Automation Consulting",
        "url": "https://aryanrawther.com/services/ai-automation-consulting"
      }
    }
  ]
}
```

#### P2 — Add a brief FAQPage schema with 2-3 general questions
e.g., "How do I choose the right service?", "Do you offer retainers?", "What is your process?"

---

## Individual Service Pages (Template Assessment)

The service pages (`/services/ai-automation-consulting`, `/services/seo-services`) are well-structured. They share the `ServicePageTemplate.tsx` template.

### What's already good ✅
- Service schema present
- FAQPage schema with 6 Q&As per page ✅ (+40% AI visibility)
- BreadcrumbList ✅
- Statistics/data points in case study callouts ✅
- H1 is keyword-rich ✅
- Meta description is specific ✅
- Person + Organization schema ✅

### Remaining gaps (apply to ALL service pages)

#### P1 — No `dateModified` in Service schema
ChatGPT gives 3.2x more citations to content updated within 30 days.
**Fix:** Add `dateModified` to each Service schema in `src/components/sections/ServicePageTemplate.tsx`

```json
"dateModified": "2026-03-17"
```

#### P1 — No `SpeakableSpecification`
Add to each service page's WebPage/Service schema:
```json
"speakable": {
  "@type": "SpeakableSpecification",
  "cssSelector": ["h1", ".service-summary", ".faq-answer"]
}
```

#### P1 — FAQPage schema answers lack citations and statistics
Current FAQ answers are descriptive but have no external citations. Adding stats increases AI citation probability by 37-40%.

**Action:** For each FAQ answer, add at least one:
- Specific number ("businesses that automate save 7+ hours/week")
- Named source ("According to McKinsey's 2024 AI report...")

#### P2 — H1s are generic ("AI Automation Consulting", "SEO Services")
These work but aren't differentiated for long-tail search.
**Suggested variation:** "AI Automation Consulting India — LLM Integrations & Agent Workflows" (for the H1 visible text, the `<title>` already does this well)

#### P2 — No `Offer` schema for pricing
Service pages mention pricing approach but lack an `Offer` schema. This helps Perplexity and Google SGE extract pricing context.

#### P2 — Internal linking to related blog posts/resources is missing or minimal
Each service page should link to 1-2 relevant blog posts or resources. This builds topical authority clusters — the key Google SGE ranking signal.

---

## Service Page Schema Template (Recommended)

Add this to `src/components/sections/ServicePageTemplate.tsx` or individual service pages:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "[Service Name]",
      "description": "[Service description]",
      "provider": {
        "@type": "Person",
        "name": "Aryan Rawther",
        "url": "https://aryanrawther.com"
      },
      "areaServed": ["IN", "Global"],
      "dateModified": "2026-03-17"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [ ... existing FAQ items ... ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [ ... ]
    }
  ]
}
```
