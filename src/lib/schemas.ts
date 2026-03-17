// JSON-LD schema builders for SEO & GEO

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aryanrawther.com";
const PERSON_NAME = "Aryan Rawther";
const COMPANY_NAME = "Apex Mind LLP";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${PERSON_NAME} — ${COMPANY_NAME}`,
    url: SITE_URL,
    description:
      "AI Automation Consulting, SEO Services, and Web Development by Aryan Rawther, founder of Apex Mind LLP.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/og/logo.png`,
    sameAs: [
      "https://www.linkedin.com/in/aryanrawther",
      "https://github.com/Mr-Nayra",
    ],
    founder: {
      "@type": "Person",
      name: PERSON_NAME,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSON_NAME,
    jobTitle: "Founder & Principal Consultant",
    worksFor: {
      "@type": "Organization",
      name: COMPANY_NAME,
    },
    url: SITE_URL,
    sameAs: [
      "https://www.linkedin.com/in/aryanrawther",
      "https://github.com/Mr-Nayra",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
    knowsAbout: [
      "AI Automation Consulting",
      "LLM Integration",
      "AI Agent Development",
      "SEO Services",
      "Web Development",
      "Next.js",
      "Python",
      "FastAPI",
      "SaaS Development",
    ],
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      "@type": "Person",
      name: PERSON_NAME,
      worksFor: {
        "@type": "Organization",
        name: COMPANY_NAME,
      },
    },
  };
}

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: PERSON_NAME,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: SITE_URL,
    },
    image: image ? `${SITE_URL}${image}` : `${SITE_URL}/images/og/default.png`,
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function softwareApplicationSchema({
  name,
  description,
  url,
  applicationCategory,
  datePublished,
}: {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: `${SITE_URL}${url}`,
    applicationCategory,
    datePublished,
    author: {
      "@type": "Person",
      name: PERSON_NAME,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function localBusinessSchema({
  name,
  description,
  url,
  areaServed,
  addressLocality,
}: {
  name: string;
  description: string;
  url: string;
  areaServed: string | string[];
  addressLocality: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY_NAME,
    description,
    url: `${SITE_URL}${url}`,
    founder: {
      "@type": "Person",
      name: PERSON_NAME,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality,
      addressCountry: "IN",
    },
    areaServed,
    sameAs: [
      "https://www.linkedin.com/in/aryanrawther",
      "https://github.com/Mr-Nayra",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contact.aryanrawther@gmail.com",
      availableLanguage: ["English", "Hindi"],
    },
  };
}

export function itemListSchema(
  items: { name: string; description: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      description: item.description,
      url: `${SITE_URL}${item.url}`,
    })),
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    url: SITE_URL,
    founder: {
      "@type": "Person",
      name: PERSON_NAME,
      jobTitle: "Founder & Principal Consultant",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "contact.aryanrawther@gmail.com",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/aryanrawther",
      "https://github.com/Mr-Nayra",
    ],
  };
}

export function reviewSchema(
  testimonials: {
    author: string;
    review: string;
    rating?: number;
  }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY_NAME,
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.author },
      reviewBody: t.review,
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating || 5,
        bestRating: 5,
      },
    })),
  };
}
