# SEO/GEO Audit — Contact Page (/contact)

**URL:** https://aryanrawther.com/contact
**Audit date:** 2026-03-17

---

## Current State

| Signal | Value | Status |
|--------|-------|--------|
| Title | "Hire Aryan Rawther — AI Automation, SEO & Web Development \| Contact Apex Mind LLP" | ✅ |
| Meta description | Good — mentions Bengaluru, 24hr response | ✅ |
| H1 | "Get in Touch" | ⚠️ Generic |
| Schema | BreadcrumbList only | ❌ |
| ContactPoint schema | Missing | ❌ |
| LocalBusiness schema | Missing | ❌ |

---

## Issues & Actions

### P1 — No ContactPoint or LocalBusiness schema
This is a direct missed opportunity for local SEO and AI entity enrichment. Google and AI engines use ContactPoint and LocalBusiness to understand how to contact a business.

**Add to `/contact` page:**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "name": "Contact Aryan Rawther — Apex Mind LLP",
      "url": "https://aryanrawther.com/contact",
      "description": "Contact Aryan Rawther for AI automation consulting, technical SEO, and SaaS development projects."
    },
    {
      "@type": "Person",
      "name": "Aryan Rawther",
      "url": "https://aryanrawther.com",
      "jobTitle": "AI Automation Consultant",
      "worksFor": {
        "@type": "Organization",
        "name": "Apex Mind LLP"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": ["IN", "US", "GB", "AU", "SG"]
      }
    }
  ]
}
```

**File:** `src/app/contact/page.tsx`

---

### P1 — H1 "Get in Touch" is generic
**Fix:** `"Hire Aryan Rawther — AI Automation & SEO Consulting"`
**File:** `src/app/contact/page.tsx`

---

### P2 — WhatsApp link should have semantic markup
The WhatsApp link (`https://wa.me/917905206587`) is valuable for local/Indian users but the phone number should also appear in the Organization schema `telephone` field.

**Note:** Only add phone number to schema if you're comfortable with it being publicly indexed. It's already in the page.

---

### P2 — Response time claim ("within 24 hours") should be in schema
```json
"contactPoint": {
  "@type": "ContactPoint",
  "contactType": "sales",
  "hoursAvailable": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  }
}
```

---

### P2 — No `<address>` HTML5 element
The contact page should wrap the address/contact info in an HTML5 `<address>` element. This is a semantic signal that browsers and search engines use to identify contact information.

---

### P2 — Form fields not marked with proper `autocomplete` attributes
This is a UX issue that also affects Google's form detection. Add `autocomplete="name"`, `autocomplete="email"`, `autocomplete="organization"` to the relevant form fields.
