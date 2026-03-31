/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
    outputFileTracingRoot: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
      },
      {
        protocol: 'https',
        hostname: 'books.google.com',
      },
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog/how-to-build-ai-agents-with-langchain',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/technical-seo-for-saas-startups',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/building-ai-ivr-twilio-deepgram',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/what-is-geo-generative-engine-optimisation',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/nextjs-15-app-router-performance',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/services/ai-integration-agentic-workflows',
        destination: '/services/ai-integration',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
