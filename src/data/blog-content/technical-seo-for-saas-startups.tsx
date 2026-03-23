export function TechnicalSeoContent() {
  return (
    <>
      <p>
        Most SaaS startups treat SEO as an afterthought. They build the product, launch, and then
        wonder why organic traffic is zero six months later. Technical SEO is not about tricks — it
        is the foundation that determines whether Google can find, understand, and trust your site.
        Fix the foundation first. Content compounds on top of it.
      </p>
      <p>
        This checklist covers every technical SEO issue I audit on SaaS sites, in the order that
        matters.
      </p>

      <h2>Crawlability and Indexing</h2>
      <p>
        Before Google can rank a page, it needs to find and index it. Most SaaS sites have indexing
        problems they do not know about.
      </p>

      <h3>robots.txt</h3>
      <p>
        Check that your <code>robots.txt</code> is not accidentally blocking important pages. A
        common mistake: blocking <code>/app/*</code> to keep the dashboard out of search results,
        but forgetting that the marketing site lives at <code>/</code> while the app is on{" "}
        <code>app.yoursite.com</code>. Another common mistake: blocking CSS and JavaScript files,
        which stops Google from rendering your pages correctly.
      </p>
      <p>
        Your <code>robots.txt</code> should allow everything except internal dashboards, thank-you
        pages, and API routes. Include a <code>Sitemap:</code> directive pointing to your sitemap.
      </p>

      <h3>XML Sitemap</h3>
      <p>
        Every SaaS site needs a dynamic XML sitemap that auto-updates when new pages are added.
        Include every marketing page, every feature page, every blog post. Exclude paginated pages
        beyond page 1, filtered URLs with query parameters, login/signup pages, and any page with a{" "}
        <code>noindex</code> tag.
      </p>
      <p>
        Submit your sitemap in Google Search Console and Bing Webmaster Tools. Check for crawl
        errors weekly in the first 90 days after launch.
      </p>

      <h3>Canonical Tags</h3>
      <p>
        SaaS sites often generate duplicate URLs: <code>/pricing</code>,{" "}
        <code>/pricing?plan=annual</code>, <code>/pricing?ref=navbar</code>. Every page needs a
        canonical tag pointing to the preferred version. Use self-referencing canonicals on all
        pages — not just pages with duplicates.
      </p>

      <h3>JavaScript Rendering</h3>
      <p>
        If your marketing site is a React or Next.js SPA, check whether Google can render it. Use
        the URL Inspection tool in Search Console and click &ldquo;Test Live URL&rdquo; →
        &ldquo;View Tested Page&rdquo; → &ldquo;Screenshot.&rdquo; If the page looks blank or
        missing content, you have a rendering problem. Server-side rendering (SSR) or static
        generation (SSG) is the fix — not a workaround.
      </p>

      <h2>Core Web Vitals</h2>
      <p>
        Google uses Core Web Vitals as a ranking signal. More importantly, they directly affect
        conversion rates. A 1-second improvement in load time increases conversions by 7% on average
        (Deloitte, 2020).
      </p>

      <h3>Largest Contentful Paint (LCP) — Target: under 2.5 seconds</h3>
      <p>
        LCP measures how long it takes for the largest visible element — usually your hero image or
        headline — to load. Common causes of slow LCP in SaaS:
      </p>
      <ul>
        <li>
          Hero images not preloaded (<code>&lt;link rel=&quot;preload&quot;&gt;</code> fixes this)
        </li>
        <li>Large unoptimised images (use WebP, set explicit width/height)</li>
        <li>
          Render-blocking third-party scripts (Google Tag Manager, Intercom, Hotjar all add
          200–500ms)
        </li>
        <li>No CDN (every asset should be served from a CDN edge node)</li>
      </ul>

      <h3>Cumulative Layout Shift (CLS) — Target: under 0.1</h3>
      <p>
        CLS measures visual stability. If elements jump around as the page loads, CLS is high.
        Causes: images without explicit dimensions, fonts loading late and shifting text, dynamic
        content injected above existing content. Fix: always set width and height on images, use{" "}
        <code>font-display: swap</code> with <code>size-adjust</code> to minimise font shift.
      </p>

      <h3>Interaction to Next Paint (INP) — Target: under 200ms</h3>
      <p>
        INP replaced First Input Delay in 2024. It measures the responsiveness of every interaction,
        not just the first click. Heavy JavaScript on the main thread is the usual cause. Defer
        non-critical scripts, use web workers for heavy computation, and avoid synchronous calls in
        event handlers.
      </p>
      <p>
        Run your Core Web Vitals through Google PageSpeed Insights and the CrUX dashboard in Search
        Console. Lab data (PageSpeed) tells you what to fix. Field data (CrUX) tells you what users
        actually experience.
      </p>

      <h2>On-Page Technical Signals</h2>

      <h3>Title Tags</h3>
      <p>
        Every page needs a unique title tag under 60 characters that includes the primary keyword.
        SaaS title tag formula: <code>[Primary Keyword] — [Brand] | [Secondary Keyword]</code>. Do
        not duplicate title tags across pages — it signals thin content.
      </p>

      <h3>Meta Descriptions</h3>
      <p>
        Meta descriptions do not directly affect rankings but do affect click-through rates. Write
        them as a value proposition for the searcher, not a summary of the page. Include the keyword
        naturally. Keep under 160 characters.
      </p>

      <h3>H1 Structure</h3>
      <p>
        One H1 per page, containing the primary keyword. H2s for major sections. H3s for sub-points
        within sections. Do not use H tags for styling — use CSS classes. Google uses heading
        hierarchy to understand page structure.
      </p>

      <h3>Structured Data (Schema Markup)</h3>
      <p>Add JSON-LD schema markup to every page type:</p>
      <ul>
        <li>
          <code>WebSite</code> schema on the homepage with a <code>SearchAction</code> for sitelinks
          search box
        </li>
        <li>
          <code>SoftwareApplication</code> schema on product pages
        </li>
        <li>
          <code>FAQPage</code> schema on pricing and feature pages — this gets your content into AI
          search results
        </li>
        <li>
          <code>Article</code> schema on every blog post with <code>datePublished</code>,{" "}
          <code>dateModified</code>, <code>author</code>, and <code>image</code>
        </li>
        <li>
          <code>Organization</code> schema on the about page with <code>sameAs</code> linking to
          LinkedIn, Crunchbase, and GitHub
        </li>
      </ul>
      <p>
        Validate your schema at schema.org/validator. Fix every error — invalid schema is ignored by
        search engines.
      </p>

      <h2>Site Architecture</h2>

      <h3>URL Structure</h3>
      <p>SaaS URL best practices:</p>
      <ul>
        <li>
          Feature pages: <code>/features/[feature-name]</code>
        </li>
        <li>
          Use cases: <code>/use-cases/[use-case]</code>
        </li>
        <li>
          Integrations: <code>/integrations/[tool-name]</code>
        </li>
        <li>
          Blog: <code>/blog/[slug]</code>
        </li>
        <li>
          Pricing: <code>/pricing</code>
        </li>
      </ul>
      <p>
        Keep URLs short, lowercase, hyphen-separated, and descriptive. Avoid query parameters in
        navigable URLs.
      </p>

      <h3>Internal Linking</h3>
      <p>
        Internal links pass authority between pages and help Google understand which pages are most
        important. Every blog post should link to at least two related pages — a feature page and
        another blog post. Every feature page should link to a use case page and a pricing page.
        Build a deliberate internal link structure, not random links wherever they feel natural.
      </p>

      <h3>Pagination</h3>
      <p>
        If you have a blog with 50+ posts, paginate with <code>/blog/page/2</code>, not with{" "}
        <code>?page=2</code>. Use <code>&lt;link rel=&quot;next&quot;&gt;</code> and{" "}
        <code>&lt;link rel=&quot;prev&quot;&gt;</code> between paginated pages. Do not{" "}
        <code>noindex</code> paginated pages — they carry internal link value.
      </p>

      <h2>HTTPS and Security</h2>
      <p>
        All pages must be served over HTTPS. Mixed content (HTTPS page loading HTTP resources)
        causes browser warnings and may affect rankings. Use your browser&apos;s developer tools to
        check for mixed content. Also ensure your <code>www</code> and non-<code>www</code> versions
        both redirect to the same canonical domain — not both resolving independently.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>How long does technical SEO take to show results?</h3>
      <p>
        Technical fixes show results faster than content — usually within 4–8 weeks for crawl and
        indexing improvements. Core Web Vitals improvements can show ranking impact within 2–4 weeks
        of Google reprocessing your pages. Structured data additions (rich results) typically appear
        within 1–3 weeks of validation.
      </p>

      <h3>Should SaaS companies block their app dashboard from Google?</h3>
      <p>
        Yes. Use a subdomain (<code>app.yoursite.com</code>) for the product and your main domain
        for the marketing site. If they share a domain, use <code>noindex</code> on all
        authenticated pages and <code>Disallow</code> the app paths in robots.txt. You do not want
        Google crawling user-generated content inside your product.
      </p>

      <h3>Is programmatic SEO right for my SaaS startup?</h3>
      <p>
        Programmatic SEO — generating hundreds of pages targeting long-tail keywords from a template
        — works when you have real data to populate those pages. Integration pages and use-case
        pages are the most common and effective patterns for SaaS. Do not generate empty template
        pages just to have URLs — thin content is penalised.
      </p>

      <h3>How important is blog content vs. technical SEO fixes?</h3>
      <p>
        Fix technical SEO first. A perfectly written blog post on a site with a broken sitemap,
        JavaScript rendering issues, and no schema markup will rank poorly. Technical SEO is the
        floor. Content is what compounds on top of it. For most SaaS startups with under 50 pages,
        you can fix all technical issues in a week of focused work.
      </p>
    </>
  );
}
