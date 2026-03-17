# SEO/GEO Audit — aryanrawther.com

**Audit date:** 2026-03-17
**Tool used:** SEO-GEO skill (opc.dev/seo-geo) + manual page analysis
**Pages audited:** 61 static pages across all routes

---

## What Was Fixed (Already Applied to Code)

| Fix | File | Status |
|-----|------|--------|
| robots.txt — Added AI bot directives (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Bingbot, anthropic-ai, msnbot, ChatGPT-User) | `src/app/robots.ts` | ✅ Done |
| About page — "Aether Minds LLP" → "Apex Mind LLP" (8 occurrences: title, meta, OG, keywords, body ×4) | `src/app/about/page.tsx` | ✅ Done |

**Deploy these changes to see effects. After deploy, verify:** https://aryanrawther.com/robots.txt

---

## What's Blocking AI Search Engines

| Engine | Blocking Issue | Severity | Fix |
|--------|---------------|----------|-----|
| **ChatGPT** (OpenAI) | No explicit GPTBot rule in robots.txt | 🔴 Fixed | ✅ Applied |
| **Claude AI** | No ClaudeBot/anthropic-ai rule in robots.txt | 🔴 Fixed | ✅ Applied |
| **Perplexity** | No PerplexityBot rule in robots.txt | 🔴 Fixed | ✅ Applied |
| **Microsoft Copilot** | No Bingbot/msnbot rule; Bing Webmaster Tools not submitted | 🔴 Partial | Submit site to Bing |
| **Claude AI (citations)** | Brave Search indexing not verified | 🟡 Unknown | Check site:aryanrawther.com on Brave |
| **Google SGE** | Most pages lack FAQPage schema (+40% visibility) | 🔴 High | See page files below |
| **All AI engines** | No statistics/citations on key pages (-37-40% citation rate) | 🔴 High | Content updates needed |
| **All AI engines** | Company name inconsistency (Aether/Apex) | 🔴 Fixed | ✅ Applied |

---

## Overall SEO/GEO Score by Page

| Page | Schema | GEO Signals | Content Depth | Priority |
|------|--------|-------------|---------------|----------|
| `/` Home | ⚠️ Missing FAQPage, WebPage | ❌ No stats, no citations | ✅ 2,800 words | 🔴 High |
| `/about` | ⚠️ Missing FAQPage, sameAs | ⚠️ No citations | ✅ 2,100 words | 🟡 Medium |
| `/services` (listing) | ❌ Only BreadcrumbList | ❌ None | ⚠️ 1,150 words | 🔴 High |
| `/services/ai-automation-consulting` | ✅ Service+FAQ+BreadcrumbList | ✅ Has stats | ✅ 1,200 words | ✅ Good |
| `/services/seo-services` | ✅ Service+FAQ+BreadcrumbList | ✅ Has stats | ✅ 1,200 words | ✅ Good |
| `/services/*` (other 3) | ✅ Same template | ⚠️ Need stats in FAQ | ✅ | 🟡 Medium |
| `/products` | ❌ Only BreadcrumbList | ❌ None | ❌ 450 words | 🔴 High |
| `/case-studies` | ❌ Only BreadcrumbList | ⚠️ Metrics in meta only | ⚠️ 1,200 words | 🔴 High |
| `/blog` (listing) | ❌ No Blog/Article schema | ❌ None | ⚠️ 5 posts | 🔴 High |
| `/blog/[slug]` (individual) | ❌ No Article schema | ❌ None | ✅ per post | 🔴 Critical |
| `/faq` | ✅ FAQPage (18 Q&As) | ⚠️ No stats in answers | ✅ 2,100 words | 🟡 Medium |
| `/glossary` | ✅ DefinedTerm | ⚠️ No citations | ✅ 76 terms | 🟡 Medium |
| `/resources` (listing) | ❌ Schema unclear | ❌ None | ⚠️ 5 guides | 🔴 High |
| `/resources/[slug]` | ❌ No HowTo/Article | ❌ None | ✅ per guide | 🔴 High |
| `/contact` | ❌ No ContactPoint | ❌ None | ⚠️ | 🟡 Medium |
| `/industries/[industry]` | ❌ No Service/FAQ | ❌ No industry stats | ✅ 1,200 words | 🟡 Medium |
| `/location/bangalore` | ❌ No LocalBusiness | ❌ None | ❌ 680 words | 🔴 High |
| `/location/india`, `/location/remote` | ❌ No LocalBusiness | ❌ None | ⚠️ | 🟡 Medium |
| `public/llms.txt` | N/A | ✅ Good entity definition | ⚠️ Mismatch | 🟡 Medium |

---

## Priority Action List

### 🔴 Do First (P0/P1 — Highest Impact)

1. **Deploy the current code** — robots.txt AI bot fix + About company name fix
2. **Submit to Bing Webmaster Tools** — https://www.bing.com/webmasters (required for Copilot)
3. **Check Brave Search indexing** — Search `site:aryanrawther.com` on https://search.brave.com (required for Claude AI)
4. **Add Article schema to all blog posts** — `src/app/blog/[slug]/page.tsx`
5. **Add FAQPage schema to Homepage** — `src/app/page.tsx`
6. **Add SoftwareApplication schema to Products page** — `src/app/products/page.tsx`
7. **Add LocalBusiness schema to /location/bangalore** — `src/app/location/[location]/page.tsx`
8. **Fix resources title duplicate** — `src/app/resources/page.tsx` (removes "Aryan Rawther | Aryan Rawther")
9. **Add Article/CaseStudy schema to case study pages** — `src/app/case-studies/[slug]/page.tsx`
10. **Fix llms.txt email domain** — `public/llms.txt` (aetherminds.in)

### 🟡 Do Next (P2 — Medium Impact)

11. Add statistics/citations to FAQ answers (`/faq` page body text)
12. Add `sameAs` to Person and Organization schemas in `src/lib/schemas.ts`
13. Add `SpeakableSpecification` to all major pages
14. Add `dateModified` to all Service schemas
15. Expand `/products` page content (currently only 450 words)
16. Expand `/location/bangalore` to 800+ words
17. Add author bio cards to bottom of blog posts and resource pages
18. Add internal links: blog → services, glossary terms → service pages
19. Sync products across `llms.txt` and products page (MediaMitra, GEO Checker, PhotoshopRequest)

### 🟢 Long-term (P3 — Strategic)

20. Publish 15+ blog posts to build topical authority
21. Create PDF versions of resource guides (Perplexity prioritises PDFs)
22. Get Google Knowledge Panel via consistent entity signals
23. Build backlinks from authoritative Indian tech/business sites
24. Create a `/tools/geo-checker` page for GEO Checker (free tool = backlinks + citations)

---

## Audit Files Index

| File | Covers |
|------|--------|
| `00-critical-fixes.md` | Already-applied code fixes |
| `home.md` | Homepage audit |
| `about.md` | About page audit |
| `services.md` | Services listing + all service detail pages |
| `products.md` | Products page |
| `case-studies.md` | Case studies listing + individual pages |
| `blog.md` | Blog listing + individual post requirements |
| `resources.md` | Resources listing + individual guides |
| `glossary.md` | Glossary listing + term pages |
| `faq.md` | FAQ page |
| `contact.md` | Contact page |
| `industries-locations.md` | All industry and location pages |
| `llms-txt-and-geo.md` | llms.txt, entity signals, Brave + Bing indexing |

---

## GEO Method Coverage (Princeton 9 Methods)

| Method | Current | Target | Gap |
|--------|---------|--------|-----|
| Cite Sources | ❌ None | Every content page | 🔴 |
| Statistics Addition | ⚠️ Only on service pages | All major pages | 🔴 |
| Quotation Addition | ❌ None | Blog + resource pages | 🟡 |
| Authoritative Tone | ✅ Present | Maintain | ✅ |
| Easy-to-understand | ✅ Good | Maintain | ✅ |
| Technical Terms | ✅ Good | Maintain | ✅ |
| Unique Words | ✅ Good | Maintain | ✅ |
| Fluency Optimization | ✅ Good | Maintain | ✅ |
| FAQPage Schema | ⚠️ Only on FAQ + service pages | Every page | 🔴 |

**Estimated current GEO score: 4/9 methods active**
**Estimated potential uplift from full implementation: +70-120% AI citation rate**
