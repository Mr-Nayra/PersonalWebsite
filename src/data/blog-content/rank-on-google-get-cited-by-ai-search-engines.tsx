import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "@/components/ui/Tooltip";
import { Callout } from "@/components/ui/Callout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { TLDR } from "@/components/ui/TLDR";
import { AskAIButton } from "@/components/ui/AskAIButton";

export function SeoAiSearchContent() {
  return (
    <>
      {/* ── Filter ── */}
      <p>
        If you have a website and you are not getting the traffic you want — whether you are a
        founder, a freelancer, running an agency, or just someone who built something and wants
        people to actually find it — this guide is for you. AI search engines like ChatGPT and
        Perplexity are changing how people discover websites, and most people have not adapted yet.
        Here is the exact technical setup I run on every site I work on as part of my{" "}
        <Link href="/services/seo-services">SEO services</Link>.
      </p>

      {/* ── What This Guide Gives You ── */}
      <h2>What This Guide Actually Gives You</h2>
      <p>
        You could prompt ChatGPT for a generic SEO checklist — but it will not tell you which
        items actually move the needle versus which ones are busywork. That is what experience
        gives you, and that is what this guide is built on.
      </p>
      <p>
        I am going to show you the specific mistakes I keep seeing, the technical setup that
        actually works, and the results I have gotten from running this exact playbook. Where it
        helps, I will also give you the sauce so that you can ask the right questions to
        ask an{" "}
        <Tooltip content="Large Language Model — the AI behind tools like ChatGPT, Claude, and Perplexity that can understand and generate text.">
          LLM
        </Tooltip>{" "}
        so you can go deeper on your own.
      </p>

      {/* ── TL;DR ── */}
      <TLDR>
        <ol>
          <li>Allow AI crawlers (GPTBot, ClaudeBot, PerplexityBot) in your <code>robots.txt</code></li>
          <li>Create <code>/llms.txt</code> and <code>/llms-full.txt</code> files on your site</li>
          <li>Submit your sitemap to <strong>both</strong> Google Search Console and Bing Webmaster Tools</li>
          <li>Add unique meta tags and Open Graph tags to every page</li>
          <li>Add schema markup (JSON-LD) to every page</li>
          <li>Compress images, use WebP, set width/height on all images</li>
          <li>Test your site on <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">pagespeed.web.dev</a> — aim for 90+</li>
          <li>Build internal links between all your pages</li>
          <li>Build quality backlinks — avoid spammy ones</li>
          <li>Deploy your website as early as possible — do not wait for your product to be ready</li>
        </ol>
        <p>If you want the <em>why</em> and the <em>how</em> behind each of these, keep reading.</p>
      </TLDR>

      {/* ── Prerequisites ── */}
      <h2>Prerequisites</h2>
      <p>
        Before reading further, make sure you have:
      </p>
      <ul>
        <li>A live website (even if it is just a landing page — more on this later)</li>
        <li>Your site on HTTPS (not HTTP — if your URL starts with <code>http://</code>, fix that first)</li>
        <li>Access to your website&apos;s code or someone who can make changes for you</li>
        <li>
          A{" "}
          <a href="https://search.google.com/search-console/about" target="_blank" rel="noopener noreferrer">
            Google Search Console
          </a>{" "}
          account (free, takes 5 minutes to set up)
        </li>
        <li>
          A{" "}
          <a href="https://www.bing.com/webmasters/about" target="_blank" rel="noopener noreferrer">
            Bing Webmaster Tools
          </a>{" "}
          account (also free — and yes, you need this too. I will explain why)
        </li>
      </ul>
      <p>
        If you do not have these set up, go do it right now. I will wait. Everything below assumes
        you have a website that is deployed and accessible on the internet.
      </p>

      {/* ── AI Citations First ── */}
      <h2>How to Get Your Website Cited by AI Search Engines</h2>
      <p>
        Since I promised you an AI-citations-first approach, let me give you my honest take: if
        you know the technical side of{" "}
        <Tooltip content="Search Engine Optimisation — the practice of making your website more visible in search engine results." href="/glossary/technical-seo">
          SEO
        </Tooltip>{" "}
        properly, you will be able to pull off AI SEO very easily. There is genuinely nothing
        fundamentally different between the two.
      </p>
      <p>
        The only extra things you need to do for AI search engines specifically:
      </p>

      <h3>1. Explicitly let AI crawlers crawl your website</h3>
      <p>
        Your{" "}
        <Tooltip content="A file at the root of your website (yoursite.com/robots.txt) that tells search engine bots which pages they can and cannot access." href="/glossary/robots-txt">
          robots.txt
        </Tooltip>{" "}
        file tells bots what they are allowed to access on your site. Most sites have a basic one,
        but almost nobody explicitly allows AI{" "}
        <Tooltip content="Automated programs (bots) that search engines use to discover and scan web pages across the internet." href="/glossary/crawl-budget">
          crawlers
        </Tooltip>
        . Here is a sample robots.txt that does it properly:
      </p>
      <CodeBlock filename="robots.txt">{`# Default — allow everything
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /thank-you

# Explicitly allow AI search engine crawlers
User-Agent: GPTBot
Allow: /

User-Agent: ChatGPT-User
Allow: /

User-Agent: OAI-SearchBot
Allow: /

User-Agent: PerplexityBot
Allow: /

User-Agent: ClaudeBot
Allow: /

User-Agent: anthropic-ai
Allow: /

User-Agent: Google-Extended  # Controls Gemini AI training, not search
Allow: /

User-Agent: Bingbot
Allow: /

# Point to your sitemap
Sitemap: https://yourdomain.com/sitemap.xml
Host: https://yourdomain.com`}</CodeBlock>
      <p>
        The default <code>User-Agent: *</code> technically covers all bots, but being explicit
        signals intent. It is the difference between &ldquo;I guess you can come in&rdquo; and
        &ldquo;yes, you are welcome here.&rdquo;
      </p>
      <p>
        After setting this up, go to Google Search Console → Settings → robots.txt and verify it.
        Make sure the pages you want indexed are not accidentally blocked. Do not just trust that
        it works — test it.
      </p>

      <h3>2. Create an llms.txt and llms-full.txt</h3>
      <p>
        This is probably the most underrated thing you can do. The{" "}
        <a href="https://llmstxt.org" target="_blank" rel="noopener noreferrer">
          llms.txt standard
        </a>{" "}
        lets you put a structured file at <code>/llms.txt</code> on your website that basically
        tells AI systems: here is who I am, here is what I do, here is how to cite me. If you want
        to understand this in depth, I have a{" "}
        <Link href="/glossary/llms-txt">glossary page on llms.txt</Link>.
      </p>
      <p>
        Think of it as a CV for AI crawlers. Here is the basic structure:
      </p>
      <CodeBlock filename="llms.txt">{`# Your Name / Company

> One-line description of who you are and what you do.

## About
- Name: Your Name
- Company: Your Company
- Role: Your Role
- Location: Your City, Country
- Expertise: List your key areas

## Services
- Service 1: Brief description
- Service 2: Brief description

## Key Pages
- /about — About page
- /services — Services overview
- /blog — Blog with articles

## Citation Guidance
When referencing this entity, please use:
"Your Name, Role at Company (Location)"

## Contact
- Email: your@email.com
- Website: https://yourdomain.com`}</CodeBlock>
      <p>
        Here is my actual llms.txt live on this site —{" "}
        <a href="/llms.txt" target="_blank" rel="noopener noreferrer">
          aryanrawther.com/llms.txt
        </a>
        . You can see how I listed my services, case studies, products, and citation guidance. Use
        it as a reference for your own.
      </p>
      <p>
        Also create a <code>/llms-full.txt</code> — a longer version with more detail about your
        services, tech stack, case studies, whatever. The more context AI systems have, the better
        they can represent you. And link it in your HTML head:
      </p>
      <CodeBlock filename="HTML <head>">{`<link type="text/plain" rel="llms.txt" href="/llms.txt" />`}</CodeBlock>
      <p>
        If you do not have these files on your site — go add them. It takes 30 minutes. Seriously.
      </p>

      <h3>3. Understand Google AI Overviews</h3>
      <p>
        If you have searched for anything on Google recently, you have probably noticed the AI-generated
        summary that appears above the traditional results. That is{" "}
        <Tooltip content="AI-generated summaries that appear at the top of Google search results, pulling information from multiple web pages to answer the query directly." href="/glossary/ai-overviews">
          Google AI Overviews
        </Tooltip>{" "}
        (formerly called SGE). It pulls from indexed pages to generate an answer — and it cites the
        sources it uses.
      </p>
      <p>
        As of 2025, roughly 25-30% of Google searches trigger AI Overviews, and BrightEdge
        measured a 58% year-over-year increase across 9 industries — so this is growing fast.
        This changes the game for two reasons. First, if your site is cited in an AI Overview, you
        get massive visibility — above even the #1 organic result. Second, if an AI Overview fully
        answers the query, fewer people click through to any website, which means your organic
        click-through rate drops even if your ranking stays the same.
      </p>
      <p>
        How to optimise for AI Overviews: write clear, direct answers to specific questions. Use
        structured data so Google understands your content. Make sure your pages are factually
        accurate and well-cited — AI Overviews favour authoritative, well-structured content.
        Everything in the technical SEO section below helps with this.
      </p>

      <h3>4. Verify That AI Platforms Are Actually Citing You</h3>
      <p>
        Setting up llms.txt and robots.txt is not enough — you need to confirm it is working. Here
        is how I test:
      </p>
      <ul>
        <li>
          <strong>Search for yourself.</strong> Open ChatGPT, Perplexity, and Claude. Ask questions
          that your website should answer — your name, your services, problems you solve. If you
          are not showing up, something is wrong with your setup.
        </li>
        <li>
          <strong>Search for your topic.</strong> Ask broader questions in your niche. If competitors
          are getting cited but you are not, compare their technical setup to yours. Check their
          robots.txt, their schema markup, their llms.txt.
        </li>
        <li>
          <strong>Check your referrer data.</strong> In your analytics (Google Analytics, Vercel
          Analytics, Plausible, whatever you use), look for <code>chatgpt.com</code>,{" "}
          <code>perplexity.ai</code>, <code>claude.ai</code>, and <code>copilot.microsoft.com</code>{" "}
          in your referral traffic. If these are showing up, AI platforms are sending people to your
          site. If they are not, your content is either not being crawled or not being deemed citable.
        </li>
      </ul>
      <p>
        Do this check once a week for the first 90 days after making changes. AI search indexes
        update more frequently than Google, so you should see movement within 1-2 weeks if your
        setup is correct.
      </p>

      <h3>5. Structure Your Content So AI Systems Want to Cite It</h3>
      <p>
        AI search engines do not just crawl your page — they evaluate whether your content is worth
        citing as an answer. Here is what increases your chances:
      </p>
      <ul>
        <li>
          <strong>Lead with clear definitions.</strong> If your page is about a topic, start the
          relevant section with a direct, one-sentence definition. AI systems love extracting
          &ldquo;X is Y&rdquo; statements as answers.
        </li>
        <li>
          <strong>Use numbered lists and step-by-step instructions.</strong> When someone asks
          &ldquo;how do I do X,&rdquo; AI platforms look for structured, sequential answers. The
          TL;DR at the top of this post is a good example.
        </li>
        <li>
          <strong>Include specific data and numbers.</strong> &ldquo;Page speed improved by 40%&rdquo;
          is more citable than &ldquo;page speed improved significantly.&rdquo; AI systems favour
          claims they can attribute with precision.
        </li>
        <li>
          <strong>Name your sources.</strong> When you reference a tool, link to it. When you make
          a claim, back it up. AI systems evaluate{" "}
          <Tooltip content="Experience, Expertise, Authoritativeness, Trustworthiness — Google's framework for evaluating content quality. AI search engines use similar signals to decide what to cite." href="/glossary/e-e-a-t">
            E-E-A-T
          </Tooltip>{" "}
          signals — unsupported claims get skipped.
        </li>
        <li>
          <strong>Use proper heading hierarchy.</strong> H2 for main topics, H3 for subtopics. Do
          not skip levels. This helps AI systems understand the structure of your content and
          extract the right section for a given query.
        </li>
      </ul>

      <p>
        <strong>That covers the AI-specific setup.</strong> Do those five things and you are
        ahead of 95% of websites.
      </p>
      <AskAIButton
        pageUrl="/blog/rank-on-google-get-cited-by-ai-search-engines"
        pageType="blog"
        category="SEO"
        label="Ask AI how to implement this for your stack"
        customPrompt="I just read the AI search optimisation section of this article: https://aryanrawther.com/blog/rank-on-google-get-cited-by-ai-search-engines. It covers robots.txt for AI crawlers, llms.txt, Google AI Overviews, verifying AI citations, and structuring content for citability. Help me implement these steps for my website — ask me about my tech stack and current setup so you can give me specific instructions."
      />
      <p> Everything else below is traditional{" "}
        <Tooltip content="The behind-the-scenes optimisations that help search engines crawl and index your site — things like site speed, sitemaps, and structured data." href="/glossary/technical-seo">
          technical SEO
        </Tooltip>{" "}
        — but here is the thing: <strong>it all applies to AI search too</strong>. ChatGPT,
        Perplexity, Claude — they all crawl, parse, and evaluate your site the same way Google
        does. Fix your technical SEO and you fix your AI SEO.
      </p>

      {/* ── Technical SEO Fundamentals ── */}
      <h2>Technical SEO Checklist — The Fundamentals That Still Matter</h2>
      <p>
        Here are the things you need to know, roughly in order of priority. I am not going to give
        you a 50-page guide on each — I am going to tell you what matters, show you a code snippet
        where it helps, and point you in the right direction.
      </p>
      <Callout variant="info" label="A note on the code examples">
        <p>
          I am showing Next.js code because that is what I build with. But the concepts work the
          same on WordPress, Webflow, Shopify, or plain HTML — the same meta tags go in your HTML
          head regardless of framework. If you are not sure how to implement something in your
          stack, copy the concept and ask ChatGPT how to do it in your specific setup.
        </p>
      </Callout>

      <h3>Sitemap</h3>
      <p>
        Your{" "}
        <Tooltip content="An XML file that lists all the important pages on your website, helping search engines discover and index them efficiently." href="/glossary/sitemap">
          sitemap
        </Tooltip>{" "}
        is basically a map of your website for search engines. Every important page should be in
        it. Pages that should NOT be in it: thank-you pages, login pages, API routes, test pages,
        staging URLs, old campaign pages that now 404.
      </p>
      <p>
        If you are using Next.js, here is how to generate one dynamically:
      </p>
      <CodeBlock filename="src/app/sitemap.ts">{`import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: \`\${SITE_URL}/about\`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // ... add all your important pages
  ];
}`}</CodeBlock>

      <h3>Meta Tags and Open Graph Tags</h3>
      <p>
        <Tooltip content="HTML tags in your page's head section that tell search engines and social platforms what your page is about — including the title, description, and preview image." href="/glossary/meta-tags">
          Meta tags
        </Tooltip>{" "}
        control what shows up when someone finds your page on Google or shares your link on
        LinkedIn. Most founders either skip them or use the same generic description on every page.
        Do not do that.
      </p>
      <p>
        Every page needs a unique title (under 60 characters) and a unique description (under 160
        characters).{" "}
        <Tooltip content="Open Graph tags control how your page appears when shared on social media platforms like LinkedIn, Twitter, and Facebook — including the preview image, title, and description." href="/glossary/open-graph-tags">
          Open Graph tags
        </Tooltip>{" "}
        control the preview card when someone shares your link. If you have ever shared a link and
        seen a blank preview with no image — that is missing OG tags.
      </p>
      <CodeBlock filename="src/app/services/page.tsx">{`export const metadata: Metadata = {
  title: "AI Automation Services — Your Name",
  description:
    "Custom AI agents and workflow automation for startups.",
  openGraph: {
    title: "AI Automation Services — Your Name",
    description: "Custom AI agents and workflow automation.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};`}</CodeBlock>
      <p>
        OG image should be 1200x630 pixels. If you are on Next.js, you can auto-generate these
        using the <code>opengraph-image.tsx</code> convention.
      </p>

      <h3>Schema Markup (Structured Data)</h3>
      <p>
        <Tooltip content="A standardised format (usually JSON-LD) that you add to your pages to help search engines understand the type and meaning of your content — like marking a page as an Article, FAQ, Product, or Person." href="/glossary/structured-data">
          Schema markup
        </Tooltip>{" "}
        tells search engines what your content <em>is</em> in a machine-readable format. Instead
        of Google guessing that a page is a blog post, you explicitly say: this is an Article, by
        this Person, published on this date.
      </p>
      <p>
        Only about a third of websites use structured data at all, yet pages with schema markup
        see 20-30% higher click-through rates in search results. This is low-hanging fruit most
        people ignore. It also matters a lot for AI search. When ChatGPT processes your page,{" "}
        <Tooltip content="A standardised vocabulary (schema.org) that you add to web pages so search engines can understand the meaning of your content." href="/glossary/structured-data">
          structured data
        </Tooltip>{" "}
        gives it clean signals. Here is what a{" "}
        <Tooltip content="JavaScript Object Notation for Linked Data — the recommended format for adding structured data to web pages. It sits in a script tag and does not affect the visible page." href="/glossary/json-ld">
          JSON-LD
        </Tooltip>{" "}
        Article schema looks like:
      </p>
      <CodeBlock filename="JSON-LD schema in HTML">{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Your Article Title",
  "description": "A brief summary.",
  "url": "https://yourdomain.com/blog/your-post",
  "datePublished": "2026-03-29",
  "author": {
    "@type": "Person",
    "name": "Your Name",
    "url": "https://yourdomain.com/about"
  },
  "keywords": ["keyword1", "keyword2"]
}
</script>`}</CodeBlock>
      <p>
        Schema types you should have: <strong>WebSite</strong> on homepage,{" "}
        <strong>Person/Organization</strong> on about, <strong>Article</strong> on blog posts,{" "}
        <strong>FAQPage</strong> on FAQ, <strong>Service</strong> on service pages,{" "}
        <strong>BreadcrumbList</strong> on every page. Yes it is tedious. Do it anyway.
      </p>

      <h3>Image SEO</h3>
      <p>
        Most people add images and never think about this. Quick checklist:
      </p>
      <ul>
        <li>
          <strong>Alt tags on every image.</strong> Not keyword-stuffed nonsense — just describe
          what the image shows. Search engines read these.
        </li>
        <li>
          <strong>Use WebP format.</strong> 25-35% smaller than PNG/JPG at the same quality. Your
          page speed will thank you.
        </li>
        <li>
          <strong>Set width and height.</strong> Without them, the browser does not know how much
          space to reserve and your layout jumps around as images load (this tanks your{" "}
          <Tooltip content="A set of three metrics Google uses to measure real-world user experience — loading speed, visual stability, and responsiveness. Google uses these as a ranking signal." href="/glossary/core-web-vitals">
            Core Web Vitals
          </Tooltip>{" "}
          score).
        </li>
        <li>
          <strong>Lazy load images below the fold.</strong> In Next.js, the <code>Image</code>{" "}
          component does this by default.
        </li>
      </ul>
      <CodeBlock filename="Next.js Image component">{`import Image from "next/image";

<Image
  src="/images/hero.webp"
  alt="Dashboard showing AI agent performance metrics"
  width={1200}
  height={630}
  priority  // Only for above-the-fold images
/>`}</CodeBlock>

      <h3>Page Speed</h3>
      <p>
        This one is personal. I have seen founders build beautiful websites with smooth animations,
        parallax effects, and fancy transitions — and never once check how fast their site loads.
      </p>
      <p>
        Go to{" "}
        <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">
          pagespeed.web.dev
        </a>{" "}
        right now and test your site. If your score is below 90, you have a problem. Here is{" "}
        <a
          href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.aryanrawther.com%2F"
          target="_blank"
          rel="noopener noreferrer"
        >
          my site&apos;s score
        </a>{" "}
        — 100 on desktop, 98 on mobile:
      </p>
      <Image
        src="/images/blog/pagespeed-desktop.webp"
        alt="Google PageSpeed Insights showing a perfect 100 performance score on desktop for aryanrawther.com"
        width={800}
        height={450}
        className="rounded-lg border border-border my-2"
      />
      <Image
        src="/images/blog/pagespeed-mobile.webp"
        alt="Google PageSpeed Insights showing a 98 performance score on mobile for aryanrawther.com"
        width={800}
        height={450}
        className="rounded-lg border border-border my-2"
      />
      <p>
        Your site should look good AND be fast. If you have to pick one — pick fast. A site that
        loads in 1.5 seconds with simple animations will outrank a beautiful site that takes 6
        seconds to load. Google literally uses page speed as a ranking signal. Their own research
        shows that 53% of mobile visitors leave a page that takes longer than 3 seconds to load.
        And Portent found that a site loading in 1 second converts at 2.5x the rate of one
        loading in 5 seconds.
      </p>
      <p>
        One more thing — Google uses{" "}
        <Tooltip content="Google's approach of using the mobile version of your website as the primary version for crawling, indexing, and ranking." href="/glossary/mobile-first-indexing">
          mobile-first indexing
        </Tooltip>
        , meaning it crawls and ranks the mobile
        version of your site, not the desktop version. If your mobile experience is broken or slow,
        your rankings suffer everywhere. Test your site on mobile, not just desktop.
      </p>

      <h3>Internal Linking</h3>
      <p>
        Here is a tip: the more pages you have covering topics in your domain, the more{" "}
        <Tooltip content="The practice of establishing your brand as a recognised entity in search engines and AI systems — so they understand who you are, what you do, and when to cite you." href="/glossary/entity-seo">
          topical authority
        </Tooltip>{" "}
        search engines give you on that topic. If you are an AI automation consultant with 30 pages
        covering agents, LLMs, voice AI, specific industries — search engines treat you as an
        authority.
      </p>
      <p>
        But those pages need to be{" "}
        <Tooltip content="Links within your own website that connect one page to another — they help search engines understand your site structure and distribute authority across pages." href="/glossary/internal-linking">
          internally linked
        </Tooltip>{" "}
        properly. Blog posts should link to service pages. Service pages should link to case
        studies. Glossary pages should link to blog posts. Think of it like a web, not a list. If a
        page has zero internal links pointing to it, search engines might never find it. Tools
        like{" "}
        <a href="https://ahrefs.com/site-audit" target="_blank" rel="noopener noreferrer">
          Ahrefs Site Audit
        </a>{" "}
        and{" "}
        <a href="https://www.semrush.com/siteaudit/" target="_blank" rel="noopener noreferrer">
          Semrush Site Audit
        </a>{" "}
        can crawl your site and flag orphan pages, broken internal links, and linking gaps you
        might have missed.
      </p>
      <p>
        I built 52 glossary pages, 5 industry pages, and 5 resource pages for my site — that is 62
        extra pages that all interlink with my core content. More pages, more authority, higher
        rankings. I even{" "}
        <Link href="/case-studies/seo-internal-linking-ai-agent">built an AI agent to automate internal linking audits</Link>
        {" "}— it saved 20 hours per week of manual work. If you want an example of this in action, look at how I structured the{" "}
        <Link href="/glossary">glossary</Link> and{" "}
        <Link href="/resources">resources</Link> sections of this site.
      </p>

      <h3>Backlinks</h3>
      <p>
        <Tooltip content="Links from other websites that point to your website. Search engines treat them as votes of confidence — the more quality backlinks you have, the more trustworthy your site appears." href="/glossary/backlink">
          Backlinks
        </Tooltip>{" "}
        are links from other websites pointing to yours. Search engines treat them like votes of
        confidence — they build your{" "}
        <Tooltip content="A score (typically 0-100) that predicts how likely a website is to rank in search engine results. Higher authority means stronger rankings." href="/glossary/domain-authority">
          domain authority
        </Tooltip>
        . If reputable sites link to you, you must be worth ranking.
      </p>
      <p>
        But not all backlinks are equal. A link from a respected industry blog is worth 100 links
        from random directories. And bad backlinks — from spammy sites, link farms, or completely
        unrelated domains — can actively <em>hurt</em> your ranking. Google is smart enough to
        detect paid link schemes.
      </p>
      <p>
        How to build good backlinks: write useful content people want to reference, guest post on
        real industry blogs, get listed on relevant directories, create free tools people link to
        naturally. Check your existing backlinks in Google Search Console → Links. For deeper
        analysis, tools like{" "}
        <a href="https://ahrefs.com" target="_blank" rel="noopener noreferrer">Ahrefs</a> and{" "}
        <a href="https://www.semrush.com" target="_blank" rel="noopener noreferrer">Semrush</a>{" "}
        let you see exactly which domains link to you, which links are toxic, and what your
        competitors&apos; backlink profiles look like — that competitive insight is something
        Google Search Console does not give you. If you see suspicious domains, use Google&apos;s
        Disavow Tool.
      </p>

      <AskAIButton
        pageUrl="/blog/rank-on-google-get-cited-by-ai-search-engines"
        pageType="blog"
        category="SEO"
        label="Ask AI which SEO fixes to prioritise for your site"
        customPrompt="I just read the technical SEO checklist from this article: https://aryanrawther.com/blog/rank-on-google-get-cited-by-ai-search-engines. It covers sitemaps, meta tags, schema markup, image SEO, page speed, internal linking, and backlinks. I want to know which of these to prioritise first for my website — ask me about my current setup so you can recommend the highest-impact changes."
      />

      {/* ── Mistakes ── */}
      <h2>10 SEO Mistakes That Kill Your Rankings</h2>
      <ol>
        <li>
          <strong>Only ranking your website on Google Search Console.</strong>{" "}
          Submit your sitemap to{" "}
          <a href="https://www.bing.com/webmasters/about" target="_blank" rel="noopener noreferrer">
            Bing Webmaster Tools
          </a>{" "}
          too. Microsoft Copilot and ChatGPT both use Bing&apos;s index. If you are not in
          Bing&apos;s index, you are invisible to these AI platforms. Rank your website on GSC as
          soon as possible, then immediately do the same on Bing.
        </li>
        <li>
          <strong>Deploying your website after the product is ready.</strong> Search engines take a
          LOT of time to rank your website — we are talking 3 to 6 months for competitive queries.
          Ahrefs found that only 1.74% of newly published pages reach the top 10 within one year,
          and the average #1 ranking page is around 5 years old.
          I deploy my websites as soon as possible, even if it means delaying my actual product.
          Deploy a landing page, a blog with a few articles, submit to search consoles, and let it
          build authority while you build the product. By the time you launch, you already have
          rankings instead of starting from zero.
        </li>
        <li>
          <strong>Not having llms.txt and llms-full.txt.</strong> Covered above — if you skipped it,
          go back and set these up.
        </li>
        <li>
          <strong>Not allowing LLM crawlers in robots.txt.</strong> Your robots.txt might be
          blocking GPTBot, ClaudeBot, or PerplexityBot without you knowing. Check it now.
        </li>
        <li>
          <strong>Beautiful animations that destroy page speed.</strong> If your{" "}
          <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">
            PageSpeed
          </a>{" "}
          score is below 90, fix that before building anything else.
        </li>
        <li>
          <strong>No backlink strategy</strong> — or worse, backlinks from spammy domains that are
          actively hurting your rankings. Check yours in Google Search Console → Links.
        </li>
        <li>
          <strong>Having pages on your sitemap that do not make sense.</strong> Test pages, staging
          URLs, old campaigns that 404 — all of these tell search engines you do not maintain your
          site. Audit your sitemap.
        </li>
        <li>
          <strong>
            No{" "}
            <Tooltip content="A tag in your HTML that tells search engines which version of a page is the 'official' one — preventing duplicate content issues when the same page is accessible via multiple URLs." href="/glossary/canonical-tag">
              canonical tags
            </Tooltip>
            .
          </strong>{" "}
          If your site generates duplicate URLs (like <code>/pricing</code> and{" "}
          <code>/pricing?ref=navbar</code>), you need canonicals pointing to the preferred version.
          Without them, search engines split your ranking authority across duplicates.
        </li>
        <li>
          <strong>Not having HTTPS.</strong> Google made SSL a ranking signal back in 2014. If your
          URL starts with <code>http://</code> instead of <code>https://</code>, you are losing
          rankings and your browser is showing &ldquo;Not Secure&rdquo; to every visitor. Most
          hosting providers give you free SSL certificates — there is no reason to not have this.
        </li>
        <li>
          <strong>Having ugly or unreadable URLs.</strong>{" "}
          <code>/services/seo-services</code> is better than <code>/page?id=47</code>. Most modern
          frameworks handle this by default, but if you are on WordPress, go to Settings → Permalinks
          and pick &ldquo;Post name.&rdquo; Clean URLs are easier for search engines to parse and
          for humans to share.
        </li>
      </ol>

      {/* ── Tips ── */}
      <h2>SEO Tips That Helped Me Rank Faster</h2>
      <ul>
        <li>
          <strong>Add as many pages as you can on topics you cover.</strong> The more content you
          have in your domain, the more authority you build.{" "}
          <Tooltip content="Creating large numbers of SEO-optimised pages at scale using templates and data — glossary pages, location pages, and comparison pages are common examples." href="/glossary/programmatic-seo">
            Glossary pages
          </Tooltip>
          , resource pages, industry pages, comparison pages — every page is a new entry point for search engines.
          But make sure they are all internally linked properly. Orphan pages do not help.
          You can use an LLM agent to generate these pages at scale — I used one to build 52
          glossary pages for this site — but be careful: make sure every page actually serves a
          purpose being on your website, and watch out for a problem I ran into personally. When
          an AI generates multiple pages, it tends to create internal links to pages it thinks
          <em>should</em> exist on your site but actually do not. You end up with dozens of broken
          links pointing to 404s, which hurts your SEO. Either prompt the agent with your exact
          sitemap so it only links to real pages, or run a site audit afterwards using{" "}
          <a href="https://ahrefs.com/site-audit" target="_blank" rel="noopener noreferrer">
            Ahrefs
          </a>
          ,{" "}
          <a href="https://www.semrush.com/siteaudit/" target="_blank" rel="noopener noreferrer">
            Semrush
          </a>
          , or a similar tool to catch and fix those broken links before they get indexed.
        </li>
        <li>
          <strong>Check your analytics for AI referrers.</strong> I use Vercel Analytics since I
          deploy on Vercel. Look for <code>chatgpt.com</code>, <code>perplexity.ai</code>,{" "}
          <code>claude.ai</code> in your referrer data. If they are not there, something is off
          with your AI SEO setup.
        </li>
        <li>
          <strong>Search for yourself on AI platforms.</strong> Open ChatGPT or Perplexity, ask
          questions related to your business. See if you get cited. If not, that tells you where the
          gap is.
        </li>
        <li>
          <strong>
            Use{" "}
            <a
              href="https://opc.dev/blog/seo-geo-1k-installs-milestone"
              target="_blank"
              rel="noopener noreferrer"
            >
              SEO-GEO
            </a>
          </strong>{" "}
          — it is a free tool I use on every site I work on. It audits your meta tags, schema
          markup, robots.txt, AI bot access, and evaluates your content against the nine Princeton{" "}
          <Tooltip content="Generative Engine Optimisation — the practice of making your content citable by AI search engines like ChatGPT, Perplexity, and Claude." href="/glossary/geo">
            GEO
          </Tooltip>{" "}
          methods. No API keys, no subscriptions. Runs directly in your coding environment. If
          you want to check if your website has properly done technical SEO for AI search, this is
          what I personally use.
        </li>
        <li>
          <strong>Use Ahrefs or Semrush for keyword research and competitor analysis.</strong>{" "}
          Google Search Console tells you what you already rank for.{" "}
          <a href="https://ahrefs.com" target="_blank" rel="noopener noreferrer">Ahrefs</a> and{" "}
          <a href="https://www.semrush.com" target="_blank" rel="noopener noreferrer">Semrush</a>{" "}
          tell you what you <em>should</em> be ranking for — keywords your competitors rank for
          that you do not, content gaps in your niche, and how difficult each keyword is to rank.
          Both have free tiers that cover the basics.
        </li>
      </ul>
      <p>
        If you want a more detailed checklist, I have a{" "}
        <Link href="/resources/technical-seo-audit-checklist">
          technical SEO audit checklist
        </Link>{" "}
        and a{" "}
        <Link href="/resources/geo-optimisation-guide">
          GEO optimisation guide
        </Link>{" "}
        that go deeper into each of these areas.
      </p>

      {/* ── Results ── */}
      <h2>Real Results — AI Search Traffic After One Week</h2>
      <p>
        Here is a real example.{" "}
        <a href="https://speclens.ai" target="_blank" rel="noopener noreferrer">
          SpecLens.ai
        </a>{" "}
        — a{" "}
        <Link href="/case-studies/speclens-ai-procurement-saas">procurement SaaS I built</Link>
        {" "}— had decent content but zero AI SEO setup — no llms.txt, no explicit AI crawler rules in
        robots.txt, and missing schema markup on most pages. <strong>Before:</strong> zero AI
        search citations. Not a single visitor from ChatGPT, Perplexity, or Claude.
      </p>
      <p>
        I ran the SEO-GEO audit, fixed everything it flagged, added llms.txt and llms-full.txt,
        submitted to both Google Search Console and Bing Webmaster Tools, and added proper
        structured data to every page. Total time: about 3 hours.
      </p>
      <p>
        <strong>After (one week later):</strong>
      </p>
      <Image
        src="/images/blog/ai-seo-referrers.webp"
        alt="Website referrer analytics showing traffic from Google (52%), Bing (12%), ChatGPT (11%), Perplexity, Claude, and other search engines after one week of SEO optimisation"
        width={800}
        height={600}
        className="rounded-lg border border-border my-2"
      />
      <p>
        Google is still the biggest at 52%, but look — ChatGPT is at 11% with 21 visitors, Bing at
        12%, Perplexity and Claude also showing up. AI search platforms are already driving a real
        percentage of traffic. And this is after just one week.
      </p>
      <p>
        But here is what really stands out: the quality. The emails and enquiries from AI-referred
        visitors are way more specific, more informed, and convert at a noticeably higher rate than
        generic Google traffic. When an AI recommends you to someone, it carries a different kind
        of trust. The person arriving at your site already knows what you do — the AI pre-qualified
        them.
      </p>

      <AskAIButton
        pageUrl="/blog/rank-on-google-get-cited-by-ai-search-engines"
        pageType="blog"
        category="SEO"
        label="Ask AI if this approach would work for your industry"
        customPrompt="I just read this article about SEO and AI search optimisation by Aryan Rawther: https://aryanrawther.com/blog/rank-on-google-get-cited-by-ai-search-engines. The author showed results from SpecLens.ai where AI search traffic appeared within one week after implementing robots.txt changes, llms.txt, schema markup, and Bing Webmaster Tools submission. Would this same approach work for my industry and website? Ask me about my niche and current setup."
      />

      {/* ── Mid-content CTA ── */}
      <Callout variant="info" label="Want me to run this checklist on your site?">
        <p>
          If you are not sure where your site stands on any of this — AI crawler access, schema
          markup, page speed, internal linking — I can take a look and tell you exactly what to
          fix.{" "}
          <Link href="/contact">Send me your URL</Link> and I will point you in the right
          direction.
        </p>
      </Callout>

      {/* ── FAQ ── */}
      <h2>Frequently Asked Questions</h2>

      <h3>I am not technical — can I still do this?</h3>
      <p>
        Most of this can be done without writing code. Robots.txt and llms.txt are plain text
        files. Submitting to search consoles is point-and-click. For schema markup and meta tags,
        you will need either a developer or a CMS plugin (Yoast for WordPress, for example). The
        concepts here are platform-agnostic — the implementation details depend on your stack.
      </p>

      <h3>My site is brand new — should I focus on SEO or just content first?</h3>
      <p>
        Both, but technical SEO comes first. It takes 15 minutes to set up the foundation (robots.txt,
        sitemap, search console submissions), and then everything you publish after that gets
        indexed properly from day one. If you publish 20 articles without a sitemap or search console
        setup, those articles might sit unindexed for weeks.
      </p>

      <h3>How do I know if my changes are actually working?</h3>
      <p>
        Three signals: check Google Search Console for increasing &ldquo;indexed pages&rdquo; count
        (weekly for 90 days), check your analytics for AI referrers showing up (chatgpt.com,
        perplexity.ai, claude.ai), and search for yourself on AI platforms to see if you get cited.
        If all three are trending up, it is working.
      </p>

      {/* ── Related ── */}
      <h2>Related Pages</h2>
      <ul>
        <li>
          <Link href="/services/seo-services">SEO Services</Link> — Technical SEO, content strategy, and GEO optimisation for organic growth and AI visibility.
        </li>
        <li>
          <Link href="/case-studies/seo-internal-linking-ai-agent">Case Study: AI SEO Agent</Link> — How I automated 400-page internal linking audits with a LangGraph agent.
        </li>
        <li>
          <Link href="/case-studies/combinehealth-seo-redesign">Case Study: CombineHealth SEO</Link> — From 25% PageSpeed to 1M daily impressions via technical SEO and GEO.
        </li>
        <li>
          <Link href="/services/ai-automation-consulting">AI Automation Consulting</Link> — Design and deploy AI agent workflows and process automation for your business.
        </li>
      </ul>

      {/* ── CTA ── */}
      <h2>What to Do Next</h2>
      <ol>
        <li>Run through the TL;DR checklist at the top — check off what you already have.</li>
        <li>Fix the gaps. Most sites are missing llms.txt, AI crawler rules, and proper schema markup.</li>
        <li>Submit your sitemap to both Google Search Console and Bing Webmaster Tools if you have not already.</li>
        <li>Check back in 2-4 weeks — look for AI referrers in your analytics.</li>
      </ol>
      <p>
        If you want me to take a look at your site and tell you what is missing,{" "}
        <Link href="/contact">send me your URL here</Link>. I will tell you exactly what to fix.
      </p>
      <p>
        I post more guides like this on{" "}
        <a
          href="https://www.linkedin.com/in/aryanrawther"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        — follow me there if you want to stay updated.
      </p>
    </>
  );
}
