# Internal Linking Audit Report

**Site:** aryanrawther.com (Personal Website)
**Date:** 2026-03-31
**Pages Audited:** 61 static pages across 30 page.tsx files + shared components

---

## Step 1: Link Inventory (Source > Target > Anchor Text > Location)

### Global Components (appear on EVERY page)

#### Navbar (`src/components/layout/Navbar.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/` | "Aryan Rawther" (logo) | Navbar - Brand |
| `/` | "Home" | Navbar - Primary Nav |
| `/about` | "About" | Navbar - Primary Nav |
| `/services` | "Services" | Navbar - Primary Nav (dropdown trigger) |
| `/services/ai-automation-consulting` | "AI Automation Consulting" | Navbar - Dropdown |
| `/services/ai-integration-agentic-workflows` | "AI Integration & Agentic Workflows" | Navbar - Dropdown |
| `/services/seo-services` | "SEO Services" | Navbar - Dropdown |
| `/services/web-development` | "Web Development" | Navbar - Dropdown |
| `/services/saas-development` | "SaaS Product Development" | Navbar - Dropdown |
| `/products` | "Products" | Navbar - Primary Nav |
| `/case-studies` | "Case Studies" | Navbar - Primary Nav |
| `/blog` | "Blog" | Navbar - Primary Nav |
| `/contact` | "Contact" | Navbar - CTA Button |

#### Footer (`src/components/layout/Footer.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/services/ai-automation-consulting` | "AI Automation Consulting" | Footer - Services |
| `/services/ai-integration-agentic-workflows` | "AI Integration & Agentic Workflows" | Footer - Services |
| `/services/seo-services` | "SEO Services" | Footer - Services |
| `/services/web-development` | "Web Development" | Footer - Services |
| `/services/saas-development` | "SaaS Product Development" | Footer - Services |
| `/products` | "Products" | Footer - Build |
| `/case-studies` | "Case Studies" | Footer - Build |
| `/testimonials` | "Testimonials" | Footer - Build |
| `/about` | "About" | Footer - Company |
| `/process` | "How I Work" | Footer - Company |
| `/faq` | "FAQ" | Footer - Company |
| `/blog` | "Blog" | Footer - Company |
| `/resources` | "Resources" | Footer - Company |
| `/glossary` | "Glossary" | Footer - Company |
| `/privacy-policy` | "Privacy Policy" | Footer - Legal |
| `/terms-of-service` | "Terms of Service" | Footer - Legal |
| `/sitemap` | "Sitemap" | Footer - Legal |

---

### Per-Page Body Content Links

#### Homepage (`src/app/page.tsx` + section components)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/contact` | "Work with me >" | HeroSection CTA |
| `/case-studies` | "See my work >" | HeroSection CTA |
| `/services` | "See all services >" | ServicesSection heading |
| `/services/ai-automation-consulting` | "AI Automation Consulting" | ServicesSection card |
| `/services/ai-integration-agentic-workflows` | "AI Integration & Agentic Workflows" | ServicesSection card |
| `/services/seo-services` | "SEO Services" | ServicesSection card |
| `/services/web-development` | "Web Development" | ServicesSection card |
| `/services/saas-development` | "SaaS Product Development" | ServicesSection card |
| `/contact` | "Let's talk >" | ServicesSection CTA card |
| `/products` | "See all products >" | ProductsSection heading |
| `/products/speclens-ai` | "SpecLens AI" | ProductsSection card |
| `/products/photoshoprequest` | "PhotoshopRequest App" | ProductsSection card |
| `/case-studies` | "View all case studies >" | CaseStudiesSection heading |
| `/case-studies/seo-internal-linking-ai-agent` | case study title | CaseStudiesSection card |
| `/case-studies/autonomous-inbound-email-agent` | case study title | CaseStudiesSection card |
| `/case-studies/healthcare-rcm-automation` | case study title | CaseStudiesSection card |
| `/case-studies/speclens-ai-procurement-saas` | case study title | CaseStudiesSection card |
| `/case-studies/photoshoprequest-ai-editor` | case study title | CaseStudiesSection card |
| `/case-studies/combinehealth-seo-redesign` | case study title | CaseStudiesSection card |
| `/blog` | "Read the blog >" | BlogSection heading |
| `/blog/rank-on-google-get-cited-by-ai-search-engines` | blog post title | BlogSection card |
| `/contact` | "Get in touch >" | CtaSection |

#### About (`src/app/about/page.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/contact` | "Let's build something together >" | Hero CTA |
| `/case-studies` | "See my work >" | Hero CTA |
| `/services/ai-automation-consulting` | "AI Automation Consulting" | What I Do card |
| `/services/seo-services` | "SEO Services" | What I Do card |
| `/services/web-development` | "Web Development" | What I Do card |
| `/services` | "See all services >" | What I Do link |
| `/process` | "See exactly how I work >" | How I Work link |
| `/about/beyond-work` | "Read more about who I am outside of work >" | Beyond Work teaser |
| `/contact` | "Get in touch >" | Bottom CTA |
| `/testimonials` | "Read what clients say >" | Bottom CTA |

#### About/Beyond-Work (`src/app/about/beyond-work/page.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/about` | "About" | Breadcrumb |
| `/contact` | "Want to work with someone like this? >" | Bottom CTA |

#### Services Hub (`src/app/services/page.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| 5x service pages | service name + "Explore >" | Service card grid (via siteData.services) |
| `/industries/saas` | "SaaS Companies" | Industry tags |
| `/industries/healthcare` | "Healthcare" | Industry tags |
| `/industries/edtech` | "Edtech" | Industry tags |
| `/industries/ecommerce` | "E-commerce" | Industry tags |
| `/industries/startups` | "Startups" | Industry tags |
| `/contact` | "let's talk" | Inline text link |
| `/process` | "See full process >" | Process section heading |
| `/contact` | "Let's talk >" | Bottom CTA |

#### All 6 Service Detail Pages (via `ServicePageTemplate.tsx`)
Each service detail page includes:
| Target Page | Anchor Text | Location |
|---|---|---|
| `/services` | "Services" | Breadcrumb |
| `/contact` | "Get a free consultation >" | Hero CTA |
| `/process` | "See how I work >" | Hero CTA |
| `/process` | "See full process >" | Process section heading |
| `/case-studies` | "See all case studies >" | Related work heading |
| `/case-studies/{slug}` | case study title | Related case study cards (dynamic) |
| `/testimonials` | "Read all testimonials >" | Testimonials heading |
| `/contact` | "Get a free consultation >" | Bottom CTA |
| `/about` | "About Aryan >" | Bottom CTA |

#### Products Hub (`src/app/products/page.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/products/speclens-ai` | "SpecLens AI" | Product card |
| `/products/photoshoprequest` | "PhotoshopRequest App" | Product card |
| `/services/saas-development` | "SaaS Development service >" | CTA |
| `/contact` | "Get in touch >" | CTA |

#### Product Detail Pages (`src/app/products/[slug]/page.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/products` | "Products" | Breadcrumb |
| `/products/{other-product}` | other product name | Related products |

#### Case Studies Hub (`src/app/case-studies/page.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| 6x case study detail links | case study title | Grid cards |
| `/contact` | "Start a project >" | Bottom CTA |

#### Case Study Detail Pages (`src/app/case-studies/[slug]/page.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/case-studies` | "Case Studies" | Breadcrumb |
| `/case-studies/{related}` | case study title | Related case studies |
| `/contact` | "Let's talk >" | Bottom CTA |

#### Blog Hub (`src/app/blog/page.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/blog/rank-on-google-get-cited-by-ai-search-engines` | blog post title | Featured post card |

#### Blog Post Detail (`src/app/blog/[slug]/page.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/about` | "About >" | Author bio |
| `/contact` | "Get in touch >" | Bottom CTA |

#### Blog Content (rank-on-google post)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/glossary/technical-seo` | "SEO" | Tooltip in body |
| `/glossary/robots-txt` | "robots.txt" | Tooltip in body |
| `/glossary/crawl-budget` | "crawlers" | Tooltip in body |
| `/glossary/ai-overviews` | "AI Overviews" | Tooltip in body |
| `/glossary/structured-data` | "schema markup" / "structured data" | Tooltip in body |
| `/glossary/core-web-vitals` | "Core Web Vitals" | Tooltip in body |
| `/glossary/internal-linking` | "internal linking" | Tooltip in body |
| `/glossary/backlink` | "backlinks" | Tooltip in body |
| `/glossary/canonical-tag` | "canonical tag" | Tooltip in body |
| `/glossary/geo` | "GEO" | Tooltip in body |
| `/glossary/llms-txt` | "glossary page on llms.txt" | Inline link |
| `/glossary` | "glossary" | Inline link |
| `/resources` | "resources" | Inline link |
| `/resources/technical-seo-audit-checklist` | "Technical SEO Audit Checklist" | Related resource |
| `/resources/geo-optimisation-guide` | "GEO Optimisation..." | Related resource |
| `/contact` | "Send me your URL" | CTA |

#### Resources Hub (`src/app/resources/page.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| 5x resource detail pages | resource title | Resource cards |
| `/contact` | "Get in touch >" | Bottom CTA |

#### Resource Detail Pages (`src/app/resources/[slug]/page.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/resources` | "Resources" / "< Back to Resources" | Breadcrumb / Back link |
| `/services/{related-service}` | related service name | Related service CTA |
| `/contact` | "Get in touch >" | Bottom CTA |

#### Glossary Hub (`src/app/glossary/page.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| 52+ glossary term detail pages | term name | Term card grid |

#### Glossary Term Detail (`src/app/glossary/[term]/page.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/glossary` | "Glossary" / "< Back to Glossary" | Breadcrumb / Back link |
| `/glossary/{related-term}` | related term name | Related terms section |
| `/resources/{related-resource}` | resource title | Related posts section |
| `/services/{related-service}` | service name | Related service CTA |

#### Industry Pages (`src/app/industries/[industry]/page.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/contact` | "Work with me >" | Hero CTA |
| `/services/{relevant}` | service name | Service cards |
| `/case-studies/{relevant}` | case study title | Related case studies |
| `/contact` | "Get in touch >" | Bottom CTA |
| `/case-studies` | "View case studies >" | Bottom CTA |

#### Location Pages (`src/app/location/[location]/page.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/contact` | "Get in touch >" | Hero CTA |
| 5x service pages | service name | Service cards (via siteData.services) |
| `/contact` | "Start a conversation >" | Bottom CTA |
| `/process` | "How I work >" | Bottom CTA |

#### FAQ (`src/app/faq/page.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/services/ai-automation-consulting` | "AI Automation Consulting" | Inline in FAQ answer |
| `/contact` | "Ask me directly >" | Bottom CTA |

#### Process (`src/app/process/page.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/case-studies` | "See my work >" | Bottom CTA |
| `/contact` | "Get in touch >" | Bottom CTA |

#### Testimonials (`src/app/testimonials/page.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/contact` | "Get in touch >" | Bottom CTA |
| `/case-studies` | "Read the full case studies >" | Bottom CTA |

#### Contact (`src/app/contact/page.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/faq` | "See the FAQ >" | Sidebar |
| `/process` | "See how I work >" | Sidebar |
| `/case-studies` | "See past work >" | Sidebar |

#### Privacy Policy (`src/app/privacy-policy/page.tsx`)
No internal links in body content.

#### Terms of Service (`src/app/terms-of-service/page.tsx`)
No internal links in body content.

#### Thank You (`src/app/thank-you/page.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/` | "Back to home >" | CTA |
| `/case-studies` | "Read case studies >" | CTA |
| `/faq` | "FAQ" | Inline link |
| `/process` | "How I Work" | Inline link |

#### Not Found (`src/app/not-found.tsx`)
| Target Page | Anchor Text | Location |
|---|---|---|
| `/` | "Go home >" | CTA |
| `/contact` | "Contact me >" | CTA |
| `/` | "Home" | Footer link |
| `/services` | "Services" | Footer link |
| `/blog` | "Blog" | Footer link |
| `/contact` | "Contact" | Footer link |
| `/faq` | "FAQ" | Footer link |

#### Sitemap (`src/app/sitemap/page.tsx`)
Links to 40+ pages across all sections (complete HTML sitemap).

---

## Step 2: Link Matrix & Structural Issues

### Inbound Link Counts (EXCLUDING global nav/footer)

| Page | Body-Content Inbound Links | Sources |
|---|---|---|
| `/contact` | **18+** | Nearly every page CTA |
| `/case-studies` | **8** | Homepage, services, about, process, testimonials, contact, thank-you |
| `/services` | **4** | Homepage, about, not-found |
| `/process` | **5** | Services, about, contact, thank-you, location pages |
| `/case-studies/{6 slugs}` | **3-4 each** | Homepage, case studies hub, related case studies, service pages |
| `/services/{5 slugs}` | **3-4 each** | Homepage, services hub, about (partial), glossary terms, resources |
| `/products` | **1** | Homepage |
| `/products/speclens-ai` | **2** | Homepage, products hub, related product |
| `/products/photoshoprequest` | **2** | Homepage, products hub, related product |
| `/blog` | **1** | Homepage |
| `/blog/rank-on-google...` | **2** | Homepage, blog hub |
| `/about` | **2** | Service template, blog post |
| `/about/beyond-work` | **1** | About page |
| `/testimonials` | **2** | About, service template |
| `/faq` | **3** | Contact, thank-you, not-found |
| `/glossary` | **2** | Blog post |
| `/glossary/{52 terms}` | **1-3** | Glossary hub + related terms + blog tooltips (only ~12 terms linked from blog) |
| `/resources` | **1** | Blog post |
| `/resources/{5 slugs}` | **1-2** | Resources hub + glossary related posts + blog cross-links |
| `/industries/{5 slugs}` | **1** | Services hub only |
| `/location/{3 slugs}` | **0** | **ORPHAN (body content)** |
| `/privacy-policy` | **0** | **ORPHAN (body content)** |
| `/terms-of-service` | **0** | **ORPHAN (body content)** |
| `/sitemap` | **0** | **ORPHAN (body content)** |
| `/thank-you` | **0** | Only reachable via form submission redirect |

### ORPHAN PAGES (zero body-content inbound links, only reachable via nav/footer)
1. **`/location/bangalore`** - Only in footer? NO - not even in footer! Only in sitemap page.
2. **`/location/india`** - Same as above.
3. **`/location/remote`** - Same as above.
4. **`/privacy-policy`** - Footer only.
5. **`/terms-of-service`** - Footer only.
6. **`/sitemap`** - Footer only.
7. **`/thank-you`** - Only via form redirect (by design, but still orphaned for crawlers).

### DEAD-END PAGES (zero outbound body links to other pages)
1. **`/privacy-policy`** - No internal links in body.
2. **`/terms-of-service`** - No internal links in body.
3. **`/about/beyond-work`** - Only links to `/contact`. Nearly dead-end.

### SINK PAGES (many inbound, few outbound)
1. **`/contact`** - 18+ inbound links, only 3 outbound body links (`/faq`, `/process`, `/case-studies`). This is acceptable for a conversion page.

### ISLAND CLUSTERS
- **Location pages** (`/location/bangalore`, `/location/india`, `/location/remote`): These pages link to services and `/contact`/`/process`, but NO pages in the body content link TO them (except the HTML sitemap page). They are effectively isolated.

---

## Step 3: Link Depth Analysis

### Depth 0 (Homepage)
- `/`

### Depth 1 (Directly linked from homepage body)
- `/contact`, `/case-studies`, `/services`, `/products`, `/blog`
- `/services/ai-automation-consulting`, `/services/ai-integration-agentic-workflows`, `/services/seo-services`, `/services/web-development`, `/services/saas-development`
- `/products/speclens-ai`, `/products/photoshoprequest`
- `/case-studies/seo-internal-linking-ai-agent`, `/case-studies/autonomous-inbound-email-agent`, `/case-studies/healthcare-rcm-automation`, `/case-studies/speclens-ai-procurement-saas`, `/case-studies/photoshoprequest-ai-editor`, `/case-studies/combinehealth-seo-redesign`
- `/blog/rank-on-google-get-cited-by-ai-search-engines`

### Depth 2 (Reachable via depth-1 pages)
- `/about` (from service template CTA "About Aryan")
- `/about/beyond-work` (from `/about`)
- `/process` (from `/services`, service detail pages)
- `/testimonials` (from `/about`, service detail pages)
- `/faq` (from `/contact`)
- `/industries/saas`, `/industries/healthcare`, `/industries/edtech`, `/industries/ecommerce`, `/industries/startups` (from `/services`)
- `/glossary` (from blog post)
- `/resources` (from blog post)
- `/resources/{5 slugs}` (from blog post / glossary terms)

### Depth 3 (Flagged as too deep)
- **`/glossary/{52 terms}`** - Homepage > Blog > Blog post (tooltip links to ~12 terms) > Individual term. Most glossary terms are depth 3.
- **`/location/bangalore`** - Not reachable from body content at all (only via sitemap page = depth 2 from nav, but no body-content path).
- **`/location/india`** - Same issue.
- **`/location/remote`** - Same issue.

### Pages at Depth 3+ That Should Be More Accessible
| Page | Current Depth | Recommended Depth | How to Fix |
|---|---|---|---|
| `/glossary/{popular terms}` | 3 | 1-2 | Link top glossary terms from homepage or service pages |
| `/location/bangalore` | Unreachable (body) | 2 | Link from about page or footer |
| `/location/india` | Unreachable (body) | 2 | Link from about page or footer |
| `/location/remote` | Unreachable (body) | 2 | Link from about page or footer |
| `/about` | 2 | 1 | Already in nav; add body link from homepage AboutSection |
| `/resources/{slugs}` | 2-3 | 2 | Link from service pages |

---

## Step 4: Topical Cluster Audit

### 1. Services Cluster

**Status: PARTIALLY LINKED**

| What Should Exist | Exists? | Notes |
|---|---|---|
| Service pages link to related case studies | YES | Via ServicePageTemplate + relatedCaseStudies |
| Service pages link to other services | NO | No cross-service linking at all |
| Service pages link to relevant industries | NO | Only the services HUB links to industries |
| Service pages link to relevant glossary terms | NO | Zero glossary links from any service page |
| Service pages link to relevant blog posts | NO | Zero blog links from any service page |
| Service pages link back to `/services` hub | YES | Via breadcrumb |

**Missing Links:**
- Each service page should link to 2-3 related services (e.g., AI Automation should link to AI Integration)
- Each service page should link to the relevant industry pages it serves
- SEO Services page should link to glossary terms like `/glossary/technical-seo`, `/glossary/core-web-vitals`
- AI services pages should link to `/glossary/ai-agent`, `/glossary/rag`, etc.
- Service pages should link to the blog post when topically relevant

### 2. Products Cluster

**Status: PARTIALLY LINKED**

| What Should Exist | Exists? | Notes |
|---|---|---|
| Product pages link to related services | YES (hub only) | Products hub links to SaaS Development |
| Product pages link to each other | YES | Related products section |
| Product pages link to case studies | NO | SpecLens AI has a case study but no link |
| Product pages link to relevant glossary terms | NO | Zero glossary links |

**Missing Links:**
- `/products/speclens-ai` should link to `/case-studies/speclens-ai-procurement-saas`
- `/products/photoshoprequest` should link to `/case-studies/photoshoprequest-ai-editor`
- Product detail pages should link to `/services/saas-development`

### 3. Case Studies Cluster

**Status: PARTIALLY LINKED**

| What Should Exist | Exists? | Notes |
|---|---|---|
| Case studies link back to demonstrated service | NO | No service links from case study pages |
| Case studies link to relevant industry page | NO | No industry links |
| Case studies link to related products | NO | No product links |
| Case studies link to related case studies | YES | Related case studies section |

**Missing Links:**
- `/case-studies/seo-internal-linking-ai-agent` should link to `/services/seo-services`
- `/case-studies/healthcare-rcm-automation` should link to `/services/ai-integration`, `/industries/healthcare`
- `/case-studies/speclens-ai-procurement-saas` should link to `/products/speclens-ai`, `/services/saas-development`, `/industries/saas`
- `/case-studies/photoshoprequest-ai-editor` should link to `/products/photoshoprequest`
- `/case-studies/combinehealth-seo-redesign` should link to `/services/seo-services`, `/industries/healthcare`
- `/case-studies/autonomous-inbound-email-agent` should link to `/services/ai-automation-consulting`

### 4. Industries Cluster

**Status: PARTIALLY LINKED**

| What Should Exist | Exists? | Notes |
|---|---|---|
| Industry pages link to relevant services | YES | Service cards |
| Industry pages link to relevant case studies | YES | Related case studies section |
| Industry pages link to products | NO | No product links |
| Industry pages link to glossary terms | NO | No glossary links |
| Industry pages link to blog posts | NO | No blog links |

**Missing Links:**
- `/industries/saas` should link to `/products/speclens-ai`, `/glossary/saas-metrics`, `/glossary/multi-tenant-saas`
- `/industries/healthcare` should link to `/glossary/rcm`
- Industry pages should link to relevant blog posts

### 5. Glossary Cluster

**Status: WELL LINKED (best cluster)**

| What Should Exist | Exists? | Notes |
|---|---|---|
| Terms link to related terms | YES | relatedTerms array |
| Terms link to related services | YES | relatedService CTA |
| Terms link to related resources | YES | relatedPosts array |
| Service/blog pages link to glossary | PARTIAL | Blog post does (via tooltips), service pages do NOT |

**Missing Links:**
- Service pages need inline glossary links (biggest gap)
- FAQ answers should link to relevant glossary terms

### 6. Blog Cluster

**Status: PARTIALLY LINKED**

| What Should Exist | Exists? | Notes |
|---|---|---|
| Blog posts link to services | NO | No service links in blog post body |
| Blog posts link to products | NO | No product links |
| Blog posts link to case studies | NO | No case study links |
| Blog posts link to glossary terms | YES | 12 tooltip links |
| Blog posts link to resources | YES | 2 related resource links |
| Blog posts link to other posts | N/A | Only 1 post exists |

**Missing Links:**
- Blog post about SEO should link to `/services/seo-services`
- Blog post should link to `/case-studies/seo-internal-linking-ai-agent` and `/case-studies/combinehealth-seo-redesign`

### 7. Resources Cluster

**Status: PARTIALLY LINKED**

| What Should Exist | Exists? | Notes |
|---|---|---|
| Resources link to related services | YES | relatedService CTA |
| Resources link to blog posts | NO | No blog links from resources |
| Resources link to glossary terms | NO | No glossary links from resources |
| Resources link to other resources | NO | No cross-resource linking |

**Missing Links:**
- Resource pages should link to related glossary terms
- Resource pages should link to the blog post when relevant
- Resources should cross-link to related resources

### 8. Location Cluster

**Status: POORLY LINKED**

| What Should Exist | Exists? | Notes |
|---|---|---|
| Location pages link to services | YES | Service cards |
| Location pages link to case studies | NO | No case study links |
| Other pages link TO location pages | NO | Only HTML sitemap links to them |

**Missing Links:**
- About page should mention "Based in Bangalore" with link to `/location/bangalore`
- Contact page should link to location pages
- Location pages should show relevant case studies
- Footer should include location pages

---

## Step 5: Anchor Text Audit

### Generic Anchor Text (needs keyword-rich replacement)

| Current Anchor | Where Used | Suggested Replacement |
|---|---|---|
| "Explore >" | Services hub (all 5 cards) | Use service name: "AI Automation Consulting >" |
| "Try it >" | Product cards (external) | "Try SpecLens AI >" / "Try PhotoshopRequest >" |
| "Get in touch >" | 8+ pages (bottom CTA) | Vary: "Get a free AI consultation >", "Discuss your SEO strategy >" |
| "Let's talk >" | 5+ pages | Vary by context: "Talk about your project >", "Schedule a discovery call >" |
| "See my work >" | Homepage, about | "View AI & SEO case studies >" |
| "See all services >" | Homepage, about | OK as-is (acceptable) |
| "Read the blog >" | Homepage | "Read SEO & AI insights >" |

### Over-Optimized Exact-Match Anchors
No significant over-optimization detected. Service names used consistently as anchors is acceptable.

### Same Anchor Text Pointing to Different Pages
| Anchor Text | Target 1 | Target 2 | Issue |
|---|---|---|---|
| "Get in touch >" | `/contact` | N/A | Consistent (OK) |
| "See my work >" | `/case-studies` | N/A | Consistent (OK) |

No conflicts found.

### CRITICAL URL INCONSISTENCY
| Page | URL Used | Correct URL | Where |
|---|---|---|---|
| AI Integration service | `/services/ai-integration` | `/services/ai-integration-agentic-workflows` | 20+ glossary terms, sitemap.ts, `/services/ai-integration/page.tsx` |

**TWO separate page directories exist:**
- `src/app/services/ai-integration/page.tsx` (canonical: `/services/ai-integration`)
- `src/app/services/ai-integration-agentic-workflows/page.tsx`

The navbar, footer, and siteData all use `/services/ai-integration-agentic-workflows`.
The glossary terms, sitemap.ts, and the standalone page use `/services/ai-integration`.

**This creates duplicate content.** One URL should 301-redirect to the other, or the duplicate page should be removed.

---

## Step 6: Link Equity Distribution

### Pages with MOST inbound links (body content, excluding nav/footer)
1. `/contact` - 18+ links (appropriate for conversion page)
2. `/case-studies` - 8 links
3. `/services` - 4 links
4. `/process` - 5 links
5. `/services/{each}` - 3-4 links each

### High-Priority Pages with TOO FEW inbound links
| Page | Current Inbound | Target | Gap |
|---|---|---|---|
| `/products` | 1 (homepage only) | 5+ | Products hub needs more visibility |
| `/products/speclens-ai` | 2 | 5+ | Money page under-linked |
| `/products/photoshoprequest` | 2 | 5+ | Money page under-linked |
| `/blog` | 1 (homepage only) | 5+ | Blog hub needs more links for SEO authority |
| `/about` | 2 | 4+ | Trust page should be more accessible |
| `/resources` | 1 | 4+ | Resources hub under-linked |
| `/industries/{each}` | 1 (services hub only) | 3+ | Industry pages are nearly orphaned |
| `/location/{each}` | 0 | 3+ | COMPLETELY ORPHANED from body content |

### Link Equity Flow Analysis
- **Home > Services**: GOOD flow. All 5 services linked directly.
- **Home > Products**: GOOD flow. Both products linked directly.
- **Home > Case Studies**: GOOD flow. All 6 case studies linked.
- **Home > Blog**: WEAK flow. Only 1 blog post linked.
- **Blog > Services**: NO flow. Blog post doesn't link to service pages.
- **Glossary > Services**: GOOD flow. Glossary terms link to services.
- **Services > Blog/Glossary/Resources**: NO flow. Service pages don't link to informational content.
- **Case Studies > Services/Products**: NO flow. Case studies don't link back to services or products.

### Legal/Utility Pages Accumulating Equity
- `/privacy-policy`, `/terms-of-service`, `/sitemap` are in the footer (every page). This is standard but they should have `rel="nofollow"` or be deprioritized if equity is a concern. Currently they are normal followed links.
- `/thank-you` is excluded from sitemap (good) and only reachable via form redirect.

---

## Step 7: Contextual Linking Opportunities

### Blog Post: `rank-on-google-get-cited-by-ai-search-engines`
| Text Span to Link | Target URL | Rationale |
|---|---|---|
| Mention of SEO services/audits | `/services/seo-services` | Money page link from authoritative content |
| Mention of AI search visibility | `/services/ai-automation-consulting` | Relevant service cross-link |
| Mention of site architecture | `/services/web-development` | Service cross-link |
| Any mention of case study results | `/case-studies/combinehealth-seo-redesign` | Social proof link |
| Any mention of internal linking | `/case-studies/seo-internal-linking-ai-agent` | Relevant case study |

### Service Pages (all 5/6)
Each service page has body text mentioning topics that should link to:
| Service Page | Text Context | Target URL |
|---|---|---|
| AI Automation | mentions of AI agents | `/glossary/ai-agent` |
| AI Automation | mentions of LLMs | `/glossary/large-language-model` |
| AI Integration | mentions of RAG | `/glossary/rag` |
| AI Integration | mentions of prompt engineering | `/glossary/prompt-engineering` |
| AI Integration | mentions of voice agents | `/glossary/ivr`, `/glossary/speech-to-text` |
| SEO Services | mentions of technical SEO | `/glossary/technical-seo` |
| SEO Services | mentions of Core Web Vitals | `/glossary/core-web-vitals` |
| SEO Services | mentions of structured data | `/glossary/structured-data` |
| SEO Services | mentions of E-E-A-T | `/glossary/e-e-a-t` |
| Web Development | mentions of SSR | `/glossary/server-side-rendering` |
| Web Development | mentions of APIs | `/glossary/api` |
| SaaS Development | mentions of multi-tenancy | `/glossary/multi-tenant-saas` |
| SaaS Development | mentions of MVP | `/glossary/mvp` |

### FAQ Page
| FAQ Answer Topic | Target URL |
|---|---|
| AI automation mention | `/services/ai-automation-consulting` (exists) |
| SEO questions | `/services/seo-services` |
| Process questions | `/process` |
| Pricing questions | `/contact` |
| Technology stack questions | `/glossary/{relevant-term}` |

### Industry Pages
| Industry Page | Body Text Context | Target URL |
|---|---|---|
| `/industries/saas` | SaaS metrics discussion | `/glossary/saas-metrics` |
| `/industries/saas` | Product mention | `/products/speclens-ai` |
| `/industries/healthcare` | RCM mention | `/glossary/rcm` |
| `/industries/healthcare` | Case study reference | `/case-studies/healthcare-rcm-automation` |
| `/industries/ecommerce` | SEO mention | `/glossary/technical-seo` |

### Resource Pages
| Resource | Body Text Context | Target URL |
|---|---|---|
| AI Automation Guide | AI agent concepts | `/glossary/ai-agent`, `/glossary/large-language-model` |
| GEO Optimisation Guide | GEO concepts | `/glossary/geo`, `/glossary/llms-txt` |
| Technical SEO Checklist | SEO concepts | `/glossary/technical-seo`, `/glossary/core-web-vitals` |
| AI Voice Agents | Voice tech concepts | `/glossary/ivr`, `/glossary/speech-to-text` |
| Next.js SaaS Architecture | SaaS concepts | `/glossary/multi-tenant-saas`, `/glossary/api` |

---

## Step 8: Navigation & Footer Audit

### Main Navigation
| Check | Status | Notes |
|---|---|---|
| Home accessible | YES | Logo + "Home" link |
| About accessible | YES | Primary nav |
| All services accessible | YES | Dropdown menu |
| Products accessible | YES | Primary nav |
| Case Studies accessible | YES | Primary nav |
| Blog accessible | YES | Primary nav |
| Contact accessible | YES | CTA button |
| Resources accessible | NO | **Not in main nav** |
| Glossary accessible | NO | **Not in main nav** |
| Industries accessible | NO | **Not in main nav** |
| Locations accessible | NO | **Not in main nav** |
| FAQ accessible | NO | **Not in main nav** |
| Process accessible | NO | **Not in main nav** |
| Testimonials accessible | NO | **Not in main nav** |

### Footer
| Check | Status | Notes |
|---|---|---|
| All services listed | YES | Under "Services" section |
| Products linked | YES | Under "Build" section |
| Case Studies linked | YES | Under "Build" section |
| Testimonials linked | YES | Under "Build" section |
| About linked | YES | Under "Company" section |
| Process linked | YES | "How I Work" |
| FAQ linked | YES | Under "Company" section |
| Blog linked | YES | Under "Company" section |
| Resources linked | YES | Under "Company" section |
| Glossary linked | YES | Under "Company" section |
| Legal pages linked | YES | Bottom bar |
| **Industries linked** | **NO** | **Missing from footer** |
| **Locations linked** | **NO** | **Missing from footer** |

### Redundant Links
- `/` (homepage) is linked twice in navbar (logo + "Home") - standard, acceptable.
- Service pages are in both navbar dropdown AND footer - standard, acceptable.
- No problematic redundancies found.

---

## Step 9: Prioritized Action Plan

### P0 - CRITICAL

#### P0-1: Fix Duplicate Service Page URL
- **Issue:** Two separate pages exist at `/services/ai-integration` and `/services/ai-integration-agentic-workflows`
- **File:** `src/app/services/ai-integration/page.tsx`
- **Action:** Either (a) delete `src/app/services/ai-integration/` and add a redirect in `next.config.mjs`, or (b) update ALL references to use one consistent URL
- **Affected files:** `src/app/glossary/[term]/page.tsx` (20+ relatedService hrefs), `src/app/sitemap.ts`
- **SEO rationale:** Duplicate content dilutes ranking signals and confuses crawlers. The glossary terms all link to `/services/ai-integration` while nav/footer link to `/services/ai-integration-agentic-workflows`.

#### P0-2: Fix Location Pages Orphan Status
- **Issue:** `/location/bangalore`, `/location/india`, `/location/remote` have ZERO body-content inbound links
- **Files to change:**
  - `src/components/layout/Footer.tsx` - Add "Locations" section with links to all 3 location pages
  - `src/app/about/page.tsx` - Add "Based in Bangalore" with link to `/location/bangalore`
  - `src/app/contact/page.tsx` - Add location links in sidebar
- **SEO rationale:** Location pages are key for local SEO. Being orphaned means they won't get crawled or ranked.

#### P0-3: Add Service Links to Case Study Pages
- **Issue:** Case study detail pages never link back to the service they demonstrate
- **File:** `src/app/case-studies/[slug]/page.tsx`
- **Action:** For each case study, add a "Service used" link in the case study detail template. Example links:
  - `seo-internal-linking-ai-agent` > `/services/seo-services` (anchor: "SEO Services")
  - `autonomous-inbound-email-agent` > `/services/ai-automation-consulting` (anchor: "AI Automation Consulting")
  - `healthcare-rcm-automation` > `/services/ai-integration-agentic-workflows` (anchor: "AI Integration")
  - `speclens-ai-procurement-saas` > `/services/saas-development` (anchor: "SaaS Development")
  - `photoshoprequest-ai-editor` > `/services/web-development` (anchor: "Web Development")
  - `combinehealth-seo-redesign` > `/services/seo-services` (anchor: "SEO Services")
- **SEO rationale:** Case studies are high-authority pages (linked from homepage). Not linking to service pages wastes link equity that should flow to money pages.

#### P0-4: Add Product Links to Case Study Pages
- **File:** `src/app/case-studies/[slug]/page.tsx`
- **Action:** Add product links where applicable:
  - `speclens-ai-procurement-saas` > `/products/speclens-ai` (anchor: "SpecLens AI")
  - `photoshoprequest-ai-editor` > `/products/photoshoprequest` (anchor: "PhotoshopRequest")
- **SEO rationale:** Product pages are money pages with only 2 inbound links each.

---

### P1 - HIGH

#### P1-1: Add Cross-Service Links
- **Issue:** No service page links to any other service page
- **File:** `src/components/sections/ServicePageTemplate.tsx` or individual service pages
- **Action:** Add a "Related Services" section after the case studies section, linking 2-3 sibling services. Example:
  - AI Automation page > links to AI Integration, SaaS Development
  - SEO Services page > links to Web Development
  - Web Development > links to SaaS Development, SEO Services
- **SEO rationale:** Cross-linking within the services cluster distributes equity and helps crawlers understand topical relationships.

#### P1-2: Add Service Links from Blog Post
- **Issue:** Blog post about SEO doesn't link to `/services/seo-services`
- **File:** `src/data/blog-content/rank-on-google-get-cited-by-ai-search-engines.tsx`
- **Action:** Add inline links:
  - Link phrase "SEO strategy" or similar to `/services/seo-services` (anchor: "SEO services")
  - Link any AI-related mentions to `/services/ai-automation-consulting`
  - Link relevant case study mentions to `/case-studies/seo-internal-linking-ai-agent` and `/case-studies/combinehealth-seo-redesign`
- **SEO rationale:** Blog content is your highest-authority informational page. It should pass equity to money pages.

#### P1-3: Add Glossary Links to Service Pages
- **Issue:** Zero service pages link to any glossary terms
- **Files:** All 5-6 service page files under `src/app/services/`
- **Action:** Add inline Tooltip glossary links in descriptions/deliverables, similar to how the blog post uses them. At minimum 3-5 glossary links per service page.
- **SEO rationale:** Creates topical cluster signals. Helps crawlers understand semantic relationships between your service expertise and definitions.

#### P1-4: Add Industry Links to Case Study Pages
- **File:** `src/app/case-studies/[slug]/page.tsx`
- **Action:** Add "Industry" tag/link for each case study:
  - `healthcare-rcm-automation` > `/industries/healthcare`
  - `speclens-ai-procurement-saas` > `/industries/saas`
  - `combinehealth-seo-redesign` > `/industries/healthcare`
- **SEO rationale:** Industry pages have only 1 inbound link each (from services hub). This creates bidirectional cluster linking.

#### P1-5: Add Blog/Resource Links to Service Pages
- **Issue:** Service pages have zero links to blog posts or resources
- **Files:** Service page files
- **Action:** Add "Related Resources" section to ServicePageTemplate or individual pages:
  - SEO Services > `/resources/technical-seo-audit-checklist`, `/resources/geo-optimisation-guide`, `/blog/rank-on-google-get-cited-by-ai-search-engines`
  - AI Automation > `/resources/ai-automation-guide-for-business`
  - AI Integration > `/resources/ai-voice-agents-explainer`
  - SaaS Development > `/resources/nextjs-saas-architecture`
- **SEO rationale:** Creates bidirectional hub-spoke linking between service pages and supporting content.

#### P1-6: Add Industry & Location Pages to Footer
- **File:** `src/components/layout/Footer.tsx`
- **Action:** Add two new footer sections:
  - "Industries" with links to all 5 industry pages
  - "Locations" with links to all 3 location pages
- **SEO rationale:** Footer links ensure these pages are crawled from every page on the site.

---

### P2 - MEDIUM

#### P2-1: Improve Generic Anchor Text on CTAs
- **Files:** Multiple page files
- **Action:** Vary CTA anchor text to include keywords:
  - "Get in touch >" becomes "Get a free AI consultation >" on AI pages
  - "Get in touch >" becomes "Discuss your SEO strategy >" on SEO pages
  - "See my work >" becomes "View AI & SEO case studies >"
  - "Read the blog >" becomes "Read SEO & AI insights >"
- **SEO rationale:** Keyword-rich anchor text provides stronger ranking signals than generic text.

#### P2-2: Add Glossary Links from FAQ Page
- **File:** `src/app/faq/page.tsx`
- **Action:** Add inline glossary links in FAQ answers for technical terms mentioned.
- **SEO rationale:** FAQ is an informational page that should connect to the glossary cluster.

#### P2-3: Add Resource Cross-Links
- **File:** `src/app/resources/[slug]/page.tsx`
- **Action:** Add "Related Resources" section linking 2-3 sibling resources. Add glossary term links in resource body content.
- **SEO rationale:** Resources are currently isolated from each other and from the glossary.

#### P2-4: Add Blog Links from Resource Pages
- **File:** `src/app/resources/[slug]/page.tsx`
- **Action:** Add link to related blog post where applicable.
- **SEO rationale:** Creates bidirectional content cluster linking.

#### P2-5: Add Product Links from Industry Pages
- **File:** `src/app/industries/[industry]/page.tsx`
- **Action:** Add product showcase section where relevant:
  - `/industries/saas` > `/products/speclens-ai`
- **SEO rationale:** Products are under-linked money pages.

#### P2-6: Link Homepage AboutSection to /about
- **File:** `src/components/sections/home/AboutSection.tsx`
- **Action:** Add "Learn more about me >" link to `/about`
- **SEO rationale:** `/about` is currently only depth-2 via the service template. Direct homepage link improves discoverability.

#### P2-7: Add Location Links from Contact Page
- **File:** `src/app/contact/page.tsx`
- **Action:** Add "Based in Bangalore | Serving India & Remote" with links to the 3 location pages.
- **SEO rationale:** Natural contextual link for local SEO pages.

---

### P3 - LOW

#### P3-1: Add Legal Page Cross-Links
- **Files:** `src/app/privacy-policy/page.tsx`, `src/app/terms-of-service/page.tsx`
- **Action:** Add links between privacy/terms pages, and a "Back to Home" link.
- **SEO rationale:** Eliminates dead-end status. Minor SEO impact but good UX.

#### P3-2: Consider rel="nofollow" on Legal Footer Links
- **File:** `src/components/layout/Footer.tsx`
- **Action:** Add `rel="nofollow"` to Privacy Policy, Terms of Service, and Sitemap footer links.
- **SEO rationale:** Prevents link equity flowing to non-ranking utility pages. Minor optimization.

#### P3-3: About/Beyond-Work Needs More Outbound Links
- **File:** `src/app/about/beyond-work/page.tsx`
- **Action:** Add links to `/about`, `/services`, or `/case-studies` in body content.
- **SEO rationale:** Currently a near dead-end page.

#### P3-4: Add More Blog Posts to Homepage BlogSection
- **Note:** Only 1 blog post currently exists. As more posts are added, the homepage BlogSection should show 3-6 posts to increase depth-1 page count.

#### P3-5: Third Product Missing from Homepage
- **Issue:** The sitemap page lists `/products/mediamitra` and `/products/geo-checker` but the homepage and products hub only show 2 products.
- **Action:** Verify if these products exist and should be showcased. If yes, add them to the products data and homepage.
- **SEO rationale:** Pages listed in sitemap but not internally linked are effectively orphaned.

---

## Summary Statistics

| Metric | Count |
|---|---|
| Total pages audited | 61 |
| Pages with adequate interlinking | ~20 |
| Orphan pages (body content) | 7 |
| Dead-end pages | 2 |
| Island clusters | 1 (Location pages) |
| Pages at depth 3+ | 52+ (mostly glossary) |
| Duplicate content issue | 1 (critical - AI Integration URL) |
| P0 actions | 4 |
| P1 actions | 6 |
| P2 actions | 7 |
| P3 actions | 5 |
| Total action items | 22 |
