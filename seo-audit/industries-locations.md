# SEO/GEO Audit — Industry & Location Pages

**URLs:**
- https://aryanrawther.com/industries/saas (+ edtech, healthcare, ecommerce, startups)
- https://aryanrawther.com/location/bangalore (+ india, remote)

**Audit date:** 2026-03-17

---

## Industry Pages (/industries/[industry])

### Current State (SaaS page as sample)

| Signal | Value | Status |
|--------|-------|--------|
| Title | "AI Automation & SEO for SaaS Companies India — Aryan Rawther" | ✅ |
| Meta description | Good, industry-specific | ✅ |
| H1 | "Helping SaaS companies grow faster with AI and SEO." | ✅ |
| Schema | BreadcrumbList only | ❌ Missing Service schema |
| Word count | ~1,200-1,400 | ✅ |

### Issues & Actions

#### P1 — No Service schema targeting industry vertical
Each industry page should have a `Service` schema indicating the industry served:
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Automation & SEO for SaaS Companies",
  "provider": {
    "@type": "Person",
    "name": "Aryan Rawther"
  },
  "serviceType": "AI Automation Consulting",
  "audience": {
    "@type": "Audience",
    "audienceType": "SaaS Companies"
  },
  "areaServed": "India"
}
```

#### P1 — No FAQPage schema on industry pages
Each industry page has an FAQ section ("Questions from SaaS companies") but no FAQPage JSON-LD. This is a direct revenue-driving improvement — someone asking ChatGPT "who does AI automation for SaaS companies in India?" should see this page cited.

**File:** Likely a shared template — check `src/app/industries/[industry]/page.tsx`

#### P2 — Statistics are generic, not industry-specific
Industry pages should include vertical-specific data:
- **SaaS:** "SaaS companies using AI automation reduce churn by X%" (cite Bessemer or similar)
- **Healthcare:** "AI reduces healthcare admin time by 60%" (cite McKinsey)
- **EdTech:** Add specific stat

#### P2 — No internal links from industry pages to relevant case studies
The SaaS page mentions related case studies but should link directly to them. "Related case studies" section exists — verify the links work and case study detail pages exist.

---

## Location Pages (/location/[location])

### Current State (Bangalore page as sample)

| Signal | Value | Status |
|--------|-------|--------|
| Title | "AI Automation Consultant Bangalore — SEO, Voice AI & SaaS Developer \| Aryan Rawther" | ✅ |
| Meta description | Good — mentions in-person available | ✅ |
| H1 | "AI and web development consulting in Bangalore." | ✅ |
| Schema | BreadcrumbList only | ❌ No LocalBusiness |
| Word count | ~680 | ❌ Thin |

### Issues & Actions

#### P1 — No LocalBusiness schema — critical for local SEO
Location pages without LocalBusiness schema are nearly invisible for local intent queries ("AI consultant in Bangalore").

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Apex Mind LLP",
  "description": "AI automation consulting, technical SEO, and SaaS development in Bangalore.",
  "url": "https://aryanrawther.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.9716,
    "longitude": 77.5946
  },
  "areaServed": ["Bengaluru", "Karnataka", "India"],
  "priceRange": "₹₹₹",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946
    }
  }
}
```

**File:** `src/app/location/[location]/page.tsx`

#### P1 — Location pages are thin (~680 words)
Google's local page guidelines recommend 800+ words for local service pages.

**Action:** Expand with:
- Bangalore-specific client types (IT corridor, Koramangala startups, etc.)
- In-person vs remote options
- Local industry context
- Testimonial from a Bangalore client (even placeholder)
- Map embed (Google Maps iframe)

#### P2 — /location/india and /location/remote need similar treatment
- India page: Add geographic schema covering India-wide service area
- Remote page: Add `ServiceArea: Global` schema

#### P2 — No FAQPage on location pages
"Can Aryan Rawther come on-site in Bangalore?" is a question AI engines will answer. Add 3 location-specific FAQs.
