import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Caveat } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aryanrawther.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aryan Rawther — AI Automation, SEO & Web Development Consultant",
    template: "%s | Aryan Rawther",
  },
  description:
    "Aryan Rawther — AI automation consultant, technical SEO specialist, and full-stack developer. Founder of Apex Mind LLP, Bengaluru. LLM integrations, AI agents, GEO, Next.js, and SaaS development for businesses globally.",
  keywords: [
    // Brand
    "Aryan Rawther",
    "Apex Mind LLP",
    // AI Automation
    "AI automation consultant India",
    "hire AI developer India",
    "AI consulting services India",
    "ChatGPT API developer India",
    "OpenAI integration consultant",
    "LangChain developer India",
    "LLM integration consultant",
    "AI agent development India",
    "AI workflow automation India",
    "agentic AI developer India",
    // SEO
    "technical SEO consultant India",
    "GEO optimisation consultant",
    "programmatic SEO consultant India",
    "AI search optimisation consultant",
    // Web & SaaS
    "Next.js developer India",
    "React developer India",
    "full stack developer India",
    "SaaS developer India",
    "MVP development consultant India",
    "B2B SaaS architect India",
    // Voice AI
    "AI voice agent developer India",
    "Twilio developer India",
    "conversational AI developer India",
    // Location
    "AI consultant Bengaluru",
    "freelance AI consultant India",
    "SEO consultant Bengaluru",
  ],
  authors: [{ name: "Aryan Rawther", url: SITE_URL }],
  creator: "Aryan Rawther",
  publisher: "Apex Mind LLP",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Aryan Rawther — Apex Mind LLP",
    title: "Aryan Rawther — AI Automation, SEO & Web Development Consultant",
    description:
      "AI Automation Consulting, SEO Services, and Web Development by Aryan Rawther, founder of Apex Mind LLP. Based in Bengaluru, working globally.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Rawther — AI Automation, SEO & Web Development Consultant",
    description:
      "AI Automation Consulting, SEO Services, and Web Development by Aryan Rawther, founder of Apex Mind LLP.",
    creator: "@aryanrawther",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link type="text/plain" rel="llms.txt" href="/llms.txt" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${caveat.variable} font-sans bg-bg-base text-text-primary`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-NKD5WRYEB7"} />
      </body>
    </html>
  );
}
