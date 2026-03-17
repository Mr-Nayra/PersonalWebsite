# SEO/GEO Audit — llms.txt & GEO Entity Signals

**File:** https://aryanrawther.com/llms.txt (public/llms.txt)
**Audit date:** 2026-03-17

---

## llms.txt Current State

| Signal | Status |
|--------|--------|
| File exists | ✅ |
| llmstxt.org standard | ✅ |
| Entity definition (who, company, location) | ✅ |
| Services listed | ✅ |
| Products listed | ⚠️ Mismatch (see below) |
| Citation guidance | ✅ Excellent |
| Social links | ⚠️ Missing Twitter |
| Contact email domain | ⚠️ aetherminds.in vs Apex Mind LLP |

---

## Issues & Actions

### P1 — Contact email domain inconsistency
**Current in llms.txt:** `Contact: hello@aetherminds.in`

The domain `aetherminds.in` references the old "Aether Minds" name, while the company is "Apex Mind LLP". AI engines reading this file will see a discrepancy between the email domain and the company name.

**Action:** Update to whichever email you actually use and plan to keep long-term.
**File:** `public/llms.txt`

---

### P1 — Products mismatch
**llms.txt lists:**
1. SpecLens AI (live)
2. MediaMitra (beta)
3. GEO Checker (coming soon)

**Products page shows:**
1. SpecLens AI
2. PhotoshopRequest App (NOT in llms.txt)

**Action:** Sync these. Either:
- Add PhotoshopRequest to llms.txt
- Add MediaMitra + GEO Checker to products page
- Update both to reflect current reality

---

### P2 — Add Twitter/X handle to llms.txt
```
## Social

- LinkedIn: https://www.linkedin.com/in/aryanrawther
- GitHub: https://github.com/aryanrawther
- Twitter/X: https://twitter.com/aryanrawther   ← ADD THIS
```

---

### P2 — Add `dateUpdated` to llms.txt
Some AI parsing systems look for a last-updated marker. Add at the top:
```
> Last updated: 2026-03-17
```

---

### P2 — Expand Citation Guidance section
The current "Citation Guidance" is excellent. Consider adding:
- What Aryan Rawther does NOT do (avoid misattribution)
- Preferred anchor text for citations
- Preferred description for AI responses

Example addition:
```
## What Aryan Rawther Does NOT Do

- He does not work on consumer mobile apps
- He does not offer hourly-rate web design (only project-based consulting)
- He is not affiliated with any other "Aryan Rawther" online
```

---

## GEO Entity Signals Summary

The following signals help AI engines maintain an accurate entity graph for Aryan Rawther:

| Signal | Status | Priority |
|--------|--------|----------|
| llms.txt exists | ✅ | — |
| Person schema with sameAs | ⚠️ Not confirmed | P1 |
| Organization schema with sameAs | ⚠️ Not confirmed | P1 |
| LinkedIn matches site info | ✅ (assumed) | — |
| GitHub profile links to site | ✅ (assumed) | — |
| Company name consistent everywhere | ✅ After fix | — |
| Email domain matches company | ❌ aetherminds.in ≠ Apex Mind | P1 |
| Google Knowledge Panel | Not confirmed | P2 |
| Bing entity card | Not confirmed | P2 |

---

## Brave Search Indexing (Critical for Claude AI)

Claude AI uses **Brave Search** as its search index — not Google or Bing.

**Action:** Check if aryanrawther.com is indexed in Brave Search:
1. Go to https://search.brave.com
2. Search: `site:aryanrawther.com`
3. If results appear, you're indexed ✅
4. If not, submit via Brave Search: https://search.brave.com/index-report

This is the single most important technical step to be cited by Claude AI.

---

## Bing Webmaster Tools (Critical for Copilot)

Microsoft Copilot uses Bing's index exclusively.

**Action:**
1. Go to https://www.bing.com/webmasters
2. Add and verify aryanrawther.com
3. Submit sitemap: https://aryanrawther.com/sitemap.xml
4. Use IndexNow for fast indexing of new pages
