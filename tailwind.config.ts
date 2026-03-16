import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "rgb(var(--bg-base-rgb) / <alpha-value>)",
        "bg-surface": "rgb(var(--bg-surface-rgb) / <alpha-value>)",
        "bg-elevated": "rgb(var(--bg-elevated-rgb) / <alpha-value>)",
        border: "var(--border)",
        "accent-primary": "var(--accent-primary)",
        "accent-secondary": "var(--accent-secondary)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
      },
      fontFamily: {
        display: ["var(--font-clash-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "Courier New", "monospace"],
        signature: ["var(--font-caveat)", "cursive"],
      },
      spacing: {
        "section-y": "80px",
        "section-y-mobile": "48px",
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        card: "8px",
        btn: "6px",
      },
      boxShadow: {
        "glow-primary": "0 0 20px rgba(108, 99, 255, 0.3)",
        "glow-secondary": "0 0 20px rgba(0, 212, 180, 0.3)",
      },
      animation: {
        aurora: "aurora 20s ease infinite",
        "fade-up": "fadeUp 0.4s ease-out forwards",
        "count-up": "countUp 0.5s ease-out forwards",
      },
      keyframes: {
        aurora: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
            backgroundSize: "200% 200%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
            backgroundSize: "200% 200%",
          },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
