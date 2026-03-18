"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error ?? "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  const isLoading = status === "loading";

  return (
    <div>
      <h2 className="text-xl font-bold text-text-primary mb-6">Send a message</h2>

      {status === "success" && (
        <div className="mb-6 rounded-card border border-green-500/30 bg-green-500/10 p-4">
          <p className="text-green-400 text-sm font-medium">
            Message sent! I&apos;ll get back to you within 24 hours.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 rounded-card border border-red-500/30 bg-red-500/10 p-4">
          <p className="text-red-400 text-sm">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label className="block text-text-secondary text-sm font-medium mb-1.5">
            Name <span className="text-accent-primary">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            disabled={isLoading}
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-btn border border-border bg-bg-surface text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors text-sm disabled:opacity-60"
          />
        </div>

        <div>
          <label className="block text-text-secondary text-sm font-medium mb-1.5">
            Email <span className="text-accent-primary">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            disabled={isLoading}
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-btn border border-border bg-bg-surface text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors text-sm disabled:opacity-60"
          />
        </div>

        <div>
          <label className="block text-text-secondary text-sm font-medium mb-1.5">
            Company <span className="text-text-muted">(optional)</span>
          </label>
          <input
            type="text"
            name="company"
            disabled={isLoading}
            placeholder="Your company"
            className="w-full px-4 py-3 rounded-btn border border-border bg-bg-surface text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors text-sm disabled:opacity-60"
          />
        </div>

        <div>
          <label className="block text-text-secondary text-sm font-medium mb-1.5">
            Service interested in <span className="text-accent-primary">*</span>
          </label>
          <select
            name="service"
            required
            disabled={isLoading}
            className="w-full px-4 py-3 rounded-btn border border-border bg-bg-surface text-text-primary focus:outline-none focus:border-accent-primary transition-colors text-sm disabled:opacity-60"
          >
            <option value="">Select a service</option>
            <option value="ai-automation">AI Automation Consulting</option>
            <option value="ai-voice">AI Voice Agents &amp; IVR</option>
            <option value="seo">SEO Services</option>
            <option value="web-development">Web Development</option>
            <option value="saas">SaaS Development</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        <div>
          <label className="block text-text-secondary text-sm font-medium mb-1.5">
            Tell me about your project <span className="text-accent-primary">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={5}
            disabled={isLoading}
            placeholder="What are you trying to build or solve? The more context, the better I can help."
            className="w-full px-4 py-3 rounded-btn border border-border bg-bg-surface text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors text-sm resize-none disabled:opacity-60"
          />
        </div>

        <div>
          <label className="block text-text-secondary text-sm font-medium mb-1.5">
            Approximate budget <span className="text-text-muted">(optional)</span>
          </label>
          <select
            name="budget"
            disabled={isLoading}
            className="w-full px-4 py-3 rounded-btn border border-border bg-bg-surface text-text-primary focus:outline-none focus:border-accent-primary transition-colors text-sm disabled:opacity-60"
          >
            <option value="">Prefer not to say</option>
            <option value="under-1k">Under ₹1 lakh / $1,000</option>
            <option value="1k-5k">₹1–5 lakh / $1,000–$5,000</option>
            <option value="5k-15k">₹5–15 lakh / $5,000–$15,000</option>
            <option value="15k-plus">₹15 lakh+ / $15,000+</option>
          </select>
        </div>

        <div className="pt-2">
          <p className="text-text-muted text-xs mb-4">
            No pricing shown on this page. Every engagement is scoped to fit your needs. This form goes directly to my inbox.
          </p>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-6 bg-accent-primary text-white font-medium rounded-btn hover:bg-opacity-90 hover:scale-[1.01] transition-all duration-150 text-sm disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending…" : "Send message →"}
          </button>
        </div>
      </form>
    </div>
  );
}
