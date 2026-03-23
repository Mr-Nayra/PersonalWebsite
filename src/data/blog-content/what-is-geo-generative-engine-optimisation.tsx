export function GeoContent() {
  return (
    <>
      <p>
        Generative Engine Optimisation (GEO) is the practice of making your content citable by AI
        search engines — ChatGPT, Perplexity, Google AI Overviews, Microsoft Copilot, and Claude.
        Where traditional SEO is about ranking on a page of links, GEO is about being the source an
        AI quotes in its answer.
      </p>
      <p>
        The distinction matters because AI search is growing fast. Perplexity served over 100 million
        queries per month in 2024 and is growing 40% quarter-over-quarter. ChatGPT&apos;s browsing
        mode is used by tens of millions of users. Google AI Overviews now appear on roughly 47% of
        informational searches. If your website is not being cited in AI-generated answers, you are
        invisible to a fast-growing segment of the search market.
      </p>

      <h2>How AI Search Engines Decide What to Cite</h2>
      <p>
        Traditional search engines rank pages by authority, relevance, and user signals. AI search
        engines work differently — they generate a direct answer, and then select sources to support
        that answer. The question they are implicitly asking is: &ldquo;Which source would best
        support what I am about to say?&rdquo;
      </p>
      <p>
        This creates a different optimisation target. You are not trying to rank highest. You are
        trying to be the clearest, most authoritative, most easily quotable source on a given topic.
      </p>
      <p>
        Research from Princeton (Aggarwal et al., 2023) tested nine content modifications on AI
        search citation rates. The findings:
      </p>
      <ul>
        <li>Adding statistics and data points increased AI citation rates by up to 37%</li>
        <li>Including authoritative quotes increased citation rates by up to 30%</li>
        <li>Writing in an authoritative, confident tone increased visibility by 25%</li>
        <li>Keyword stuffing — the opposite of these — reduced AI visibility by 10%</li>
      </ul>
      <p>
        The pattern is clear: AI engines favour content that is dense, specific, well-sourced, and
        easy to extract from.
      </p>

      <h2>GEO vs SEO: What Is Different</h2>
      <p>
        GEO and traditional SEO share most of their technical foundations — structured data, page
        speed, crawlability, and topical authority all matter for both. The differences are in
        content strategy and entity signals.
      </p>
      <p>
        <strong>Content structure:</strong> Traditional SEO rewards content that satisfies search
        intent broadly. GEO rewards content that answers questions directly and specifically. An SEO
        blog post might spend three paragraphs building context before answering. A GEO-optimised
        post answers in the first sentence, then provides supporting depth.
      </p>
      <p>
        <strong>Entity definition:</strong> AI search engines build a model of who you are and what
        you know. If your website clearly establishes you as an expert in AI automation for
        healthcare businesses, an AI searching for a healthcare AI automation expert is more likely
        to find and cite you. This is why entity signals — consistent name, company, location,
        expertise area across your site — matter for GEO in ways that are less explicit for
        traditional SEO.
      </p>
      <p>
        <strong>Citation vs. click:</strong> In traditional SEO, success is a click to your site.
        In AI search, success is being cited in the AI&apos;s answer — the user may never visit your
        site. This means your content needs to be valuable enough to cite on its own terms, not just
        valuable enough to get a click.
      </p>

      <h2>The Five Pillars of GEO</h2>

      <h3>1. Technical Access</h3>
      <p>
        AI crawlers must be able to reach your content. Check your <code>robots.txt</code> to ensure
        you are not blocking key bots:
      </p>
      <ul>
        <li><code>GPTBot</code> — OpenAI&apos;s crawler</li>
        <li><code>ChatGPT-User</code> — ChatGPT with browsing</li>
        <li><code>PerplexityBot</code> — Perplexity</li>
        <li><code>ClaudeBot</code> / <code>anthropic-ai</code> — Anthropic&apos;s crawler</li>
        <li><code>Google-Extended</code> — Google&apos;s AI training crawler</li>
        <li><code>Bingbot</code> — Required for Copilot citations</li>
      </ul>
      <p>
        The default <code>User-Agent: * Allow: /</code> covers most of these, but being explicit
        signals that AI access is intentional.
      </p>

      <h3>2. Entity Definition (llms.txt)</h3>
      <p>
        The <code>llms.txt</code> standard (llmstxt.org) defines a file at <code>/llms.txt</code>{" "}
        on your domain that gives AI systems a structured, authoritative summary of who you are,
        what you do, and what your key pages cover. Think of it as a CV for AI crawlers.
      </p>
      <p>
        A good <code>llms.txt</code> includes: your name, your company, your location, your specific
        areas of expertise, your products and services, and explicit citation guidance. This
        disambiguates your entity — AI engines know to cite you as an AI consultant in Bengaluru,
        not confuse you with someone else.
      </p>

      <h3>3. Structured Data (Schema Markup)</h3>
      <p>
        Schema markup is the most direct signal you can give an AI search engine about your content.
        The most valuable schema types for GEO:
      </p>
      <ul>
        <li>
          <strong>FAQPage</strong> — directly maps to AI Q&amp;A answer formats; citation rates are
          significantly higher for pages with FAQ schema
        </li>
        <li>
          <strong>Article / BlogPosting</strong> — establishes content type, author, and freshness
        </li>
        <li>
          <strong>Person + Organization</strong> — with <code>sameAs</code> links to LinkedIn,
          GitHub, and Crunchbase to confirm entity identity
        </li>
        <li>
          <strong>HowTo</strong> — for step-by-step content, maps naturally to AI instructional
          answers
        </li>
      </ul>
      <p>
        Validate all schema at schema.org/validator. Invalid schema is not just ignored — it can
        cause the page to be treated as less trustworthy.
      </p>

      <h3>4. Answer-First Content Structure</h3>
      <p>
        AI engines extract passages, not pages. Structure your content so that each section has a
        self-contained answer that makes sense when lifted out of context.
      </p>
      <p>
        The formula: state the answer directly in the first sentence of each section, then provide
        evidence, data, and examples. Avoid burying the answer after three paragraphs of setup.
      </p>
      <p>
        Use specific numbers wherever possible. &ldquo;Improves efficiency&rdquo; is not citable.
        &ldquo;Reduces manual processing time by 60%&rdquo; is citable. &ldquo;Most
        companies&rdquo; is vague. &ldquo;According to McKinsey&apos;s 2024 AI survey, 65% of
        organisations&rdquo; is citable.
      </p>

      <h3>5. Freshness and Consistency</h3>
      <p>
        AI systems weight recently updated content more heavily. A study of Perplexity citation
        patterns found that content updated within 30 days was cited 3.2 times more often than
        content not updated in over a year. Update your key pages regularly — even small additions
        of new data points or updated statistics signal freshness to crawlers.
      </p>
      <p>
        Consistency across your site also matters. If your homepage says you founded the company in
        2020 and your about page says 2021, AI engines note the inconsistency and may reduce
        confidence in citing you.
      </p>

      <h2>What GEO Does Not Mean</h2>
      <p>
        GEO is not about gaming AI systems with keyword-stuffed content. Research consistently shows
        that over-optimised, low-quality content is cited less, not more. AI search engines have a
        strong prior towards established, authoritative sources — the same sources that rank well in
        traditional search.
      </p>
      <p>
        GEO also does not mean writing only for AI readers and ignoring human readers. The best GEO
        content is simply very good content: clear, specific, well-sourced, and easy to understand.
        The GEO optimisations are refinements of good writing, not substitutes for it.
      </p>

      <h2>How Long Does GEO Take?</h2>
      <p>
        Unlike traditional SEO (where domain authority compounds over years), GEO signals can work
        quickly. Structural changes — adding schema markup, writing <code>llms.txt</code>, allowing
        AI bots in <code>robots.txt</code> — can change how AI systems understand your site within
        days of recrawling.
      </p>
      <p>
        Content changes take longer because they require AI systems to recrawl and re-evaluate your
        pages. In practice, expect 4–8 weeks before content changes translate into measurably higher
        citation rates.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>Does GEO replace traditional SEO?</h3>
      <p>
        No. GEO is built on top of traditional SEO foundations — crawlability, structured data, page
        speed, topical authority. If your traditional SEO is weak, your GEO will be weak. Focus on
        technical SEO first, then layer GEO optimisations on top.
      </p>

      <h3>Which AI search engine should I optimise for first?</h3>
      <p>
        Focus on Google AI Overviews first — Google still commands over 90% of search volume
        globally, and AI Overviews appear on an increasing share of informational queries. Perplexity
        second, since it is the fastest-growing pure AI search product. ChatGPT browsing third.
      </p>

      <h3>How do I know if an AI engine is citing my site?</h3>
      <p>
        Search for your area of expertise on Perplexity, ChatGPT, and Google AI Overviews and look
        for your domain in the citations. Set up Google Alerts for your brand name and key phrases.
        Tools like Profound and Goodie track AI citation rates for domains.
      </p>

      <h3>Does social proof (LinkedIn, GitHub) affect GEO?</h3>
      <p>
        Yes, indirectly. AI engines use <code>sameAs</code> links in your schema to confirm your
        identity and look at your presence on authoritative platforms to establish credibility. A
        consultant with an active LinkedIn profile, published GitHub repositories, and mentions on
        industry sites will have stronger entity signals than one with only a personal website.
      </p>
    </>
  );
}
