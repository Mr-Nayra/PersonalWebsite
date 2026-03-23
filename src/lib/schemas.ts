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
  };
}

export function webPageSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  speakableSelectors,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  speakableSelectors?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${SITE_URL}${url}`,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: PERSON_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: SITE_URL,
    },
    inLanguage: "en",
    ...(speakableSelectors && speakableSelectors.length > 0 && {
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: speakableSelectors,
      },
    }),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    description:
      "Apex Mind LLP is an AI automation and web consulting firm founded by Aryan Rawther in Bengaluru, India. We design and deliver AI agent workflows, LLM integrations, technical SEO, GEO optimisation, and SaaS products for businesses across India and globally.",
    url: SITE_URL,
    logo: `${SITE_URL}/images/og/logo.png`,
    foundingDate: "2026",
    email: "contact.aryanrawther@gmail.com",
    areaServed: ["India", "United Kingdom", "United States", "Global"],
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
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contact.aryanrawther@gmail.com",
      availableLanguage: ["English", "Hindi"],
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSON_NAME,
    jobTitle: "Founder & Principal Consultant",
    image: `${SITE_URL}/images/aryan/aryan-rawther-headshot.webp`,
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

export function serviceSchema(name: string, description: string, url: string, dateModified?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${url}`,
    dateModified: dateModified || new Date().toISOString().split("T")[0],
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
  keywords,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  keywords?: string[];
}) {
  const canonicalUrl = `${SITE_URL}${url}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    headline: title,
    description,
    url: canonicalUrl,
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
    ...(keywords && keywords.length > 0 && { keywords: keywords.join(", ") }),
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
