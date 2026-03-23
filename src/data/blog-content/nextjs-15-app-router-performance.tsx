export function NextjsContent() {
  return (
    <>
      <p>
        Next.js 15 changed the defaults in ways that catch developers off guard — caching is opt-in
        now, not opt-out, and the App Router&apos;s server component model requires a different
        mental model than Pages Router. This guide covers the performance patterns that matter in
        production, including the new caching behaviour that trips up teams migrating from Next.js
        13 and 14.
      </p>

      <h2>Understanding the App Router Performance Model</h2>
      <p>
        The App Router&apos;s performance advantage comes from server components. By default, every
        component in the App Router is a server component — it renders on the server and sends HTML
        to the client. No JavaScript is shipped for it. No hydration cost. The client receives a
        fully rendered HTML string.
      </p>
      <p>
        This is fundamentally different from the Pages Router, where every component hydrated on the
        client regardless of whether it needed to. In a typical SaaS marketing site, 80–90% of
        components have no interactivity. With server components, all of those ship zero client
        JavaScript.
      </p>
      <p>
        The performance implication: a Next.js 15 App Router page can have a Time to Interactive
        (TTI) of under 500ms even on a 3G connection, because the HTML is rendered server-side and
        there is minimal JavaScript for the browser to download and execute.
      </p>

      <h2>Server Components vs Client Components: The Correct Split</h2>
      <p>
        The most common mistake in App Router projects is over-using client components. Adding{" "}
        <code>&quot;use client&quot;</code> at the top of a file makes the entire subtree
        client-side — all children hydrate on the client.
      </p>
      <p>
        <strong>Use server components for:</strong> data fetching (database queries, API calls),
        static content (headings, paragraphs, images), layout components (nav, footer, page shells),
        and anything that reads environment variables.
      </p>
      <p>
        <strong>Use client components for:</strong> event handlers (onClick, onChange), React hooks
        (useState, useEffect, useRef), browser APIs (window, localStorage, document), and
        third-party libraries that use hooks (Framer Motion, React Query).
      </p>
      <p>
        The key pattern: push client components as far down the tree as possible. A page component
        should be a server component that fetches data and passes it to a small client component
        that handles interactivity.
      </p>
      <pre><code>{`// page.tsx — server component, fetches data
export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await db.product.findUnique({ where: { id: params.id } });
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <AddToCartButton productId={product.id} price={product.price} />
    </div>
  );
}`}</code></pre>
      <pre><code>{`// AddToCartButton.tsx — client component, handles interactivity only
"use client";
export function AddToCartButton({ productId, price }: { productId: string; price: number }) {
  const [loading, setLoading] = useState(false);
  return (
    <button onClick={() => handleAddToCart(productId, setLoading)} disabled={loading}>
      {loading ? "Adding..." : \`Add to Cart — $\${price}\`}
    </button>
  );
}`}</code></pre>

      <h2>Caching in Next.js 15: The Breaking Change</h2>
      <p>
        Next.js 15 reversed the caching defaults from Next.js 13/14. Understanding this is
        essential.
      </p>
      <p>
        <strong>In Next.js 13/14:</strong> <code>fetch()</code> calls in server components were
        cached by default. You had to opt out with <code>{'{ cache: \'no-store\' }'}</code>.
      </p>
      <p>
        <strong>In Next.js 15:</strong> <code>fetch()</code> calls are <em>not</em> cached by
        default. You must explicitly opt in to caching.
      </p>
      <p>
        This means migrating a Next.js 14 app to 15 without reviewing your data fetching will result
        in every data fetch hitting your API or database on every request — no caching.
      </p>

      <h3>How to cache data in Next.js 15</h3>
      <pre><code>{`// Cache for 1 hour (external API)
const data = await fetch('https://api.example.com/data', {
  next: { revalidate: 3600 }
});

// Cache indefinitely (static)
const data = await fetch('https://api.example.com/data', {
  cache: 'force-cache'
});`}</code></pre>
      <pre><code>{`// React cache() for database queries — deduplicates within a single render
import { cache } from 'react';
import { db } from '@/lib/db';

export const getProduct = cache(async (id: string) => {
  return db.product.findUnique({ where: { id } });
});`}</code></pre>
      <pre><code>{`// unstable_cache for persistent cache between requests
import { unstable_cache } from 'next/cache';

const getCachedProduct = unstable_cache(
  async (id: string) => db.product.findUnique({ where: { id } }),
  ['product'],
  { revalidate: 3600, tags: ['products'] }
);

// Invalidate with:
revalidateTag('products');`}</code></pre>

      <h2>Streaming with Suspense</h2>
      <p>
        Streaming lets you send parts of the page to the browser before the full page is ready.
        Wrap slow data-fetching components in <code>&lt;Suspense&gt;</code> with a fallback
        skeleton, and Next.js streams the shell immediately while the data loads in the background.
      </p>
      <pre><code>{`import { Suspense } from 'react';
import { ProductListSkeleton } from '@/components/skeletons';
import { ProductList } from '@/components/ProductList';

export default function ShopPage() {
  return (
    <div>
      <h1>Shop</h1>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList /> {/* fetches data internally, streams when ready */}
      </Suspense>
    </div>
  );
}`}</code></pre>
      <p>
        The browser receives the <code>&lt;h1&gt;Shop&lt;/h1&gt;</code> and the skeleton
        immediately. When <code>ProductList</code> finishes fetching, Next.js streams the HTML and
        React replaces the skeleton. This pattern dramatically improves perceived performance — users
        see content in under 200ms even when the actual data takes 1–2 seconds to load.
      </p>

      <h2>Parallel Data Fetching</h2>
      <p>Do not await sequential fetches when the data is independent:</p>
      <pre><code>{`// Slow — sequential, 600ms total
const user = await getUser(id);        // 300ms
const posts = await getUserPosts(id);  // 300ms

// Fast — parallel, 300ms total
const [user, posts] = await Promise.all([
  getUser(id),
  getUserPosts(id),
]);`}</code></pre>

      <h2>Image Optimisation</h2>
      <p>
        Next.js&apos;s <code>&lt;Image&gt;</code> component automatically converts images to
        WebP/AVIF (typically 30–50% smaller than JPEG), generates multiple sizes, prevents layout
        shift with explicit dimensions, and lazy-loads images below the fold.
      </p>
      <p>
        Critical: use <code>priority</code> on above-the-fold images:
      </p>
      <pre><code>{`<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={630}
  priority  // prevents LCP delay
/>`}</code></pre>
      <p>
        Missing <code>priority</code> on hero images is one of the most common causes of poor
        Largest Contentful Paint scores.
      </p>

      <h2>Font Optimisation</h2>
      <p>
        Use <code>next/font</code> to load Google Fonts. It eliminates the external network request,
        inlines the font CSS, and prevents layout shift:
      </p>
      <pre><code>{`import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={\`\${inter.variable} \${mono.variable}\`}>
      <body>{children}</body>
    </html>
  );
}`}</code></pre>
      <p>
        Never use <code>@import</code> for Google Fonts in CSS files in a Next.js app — it bypasses
        the optimisation entirely.
      </p>

      <h2>Bundle Analysis</h2>
      <p>
        Run <code>ANALYZE=true npm run build</code> (with <code>@next/bundle-analyzer</code>{" "}
        installed) to see a visual breakdown of your JavaScript bundle. Look for packages appearing
        in the wrong bundle, large libraries that could be dynamically imported, and duplicate
        packages at different versions.
      </p>
      <p>For heavy client-side libraries loaded conditionally, use dynamic imports:</p>
      <pre><code>{`const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  ssr: false,
  loading: () => <div>Loading chart...</div>,
});`}</code></pre>

      <h2>Frequently Asked Questions</h2>

      <h3>When should I use generateStaticParams vs dynamic rendering?</h3>
      <p>
        Use <code>generateStaticParams</code> for pages where the URL parameters are known at build
        time and the content does not change per-user (product pages, blog posts, glossary terms).
        Use dynamic rendering for pages that depend on request-time data — user dashboards,
        personalised content, real-time data. Static pages are served from a CDN edge and load in
        under 50ms globally.
      </p>

      <h3>How do I handle auth in the App Router without client components everywhere?</h3>
      <p>
        Keep auth logic in server components and middleware. Use Next.js middleware (
        <code>middleware.ts</code>) to redirect unauthenticated users before the page component
        runs. Pass user session data from the server component to client components as props, rather
        than fetching it client-side.
      </p>

      <h3>Is the App Router production-ready in Next.js 15?</h3>
      <p>
        Yes. Next.js 15 is stable and the App Router is the recommended approach for all new
        projects. The main gotcha is the caching default change from Next.js 14 — review all your
        data fetching if migrating.
      </p>

      <h3>What is the biggest performance win for an existing Next.js site?</h3>
      <p>
        In order of impact: (1) move data fetching to server components, (2) add{" "}
        <code>priority</code> to above-the-fold images, (3) migrate fonts to <code>next/font</code>,
        (4) audit and fix Core Web Vitals via PageSpeed Insights. Most sites see a 30–60%
        improvement in LCP after these four changes alone.
      </p>
    </>
  );
}
