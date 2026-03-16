"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";

const services = [
  { name: "AI Automation Consulting", href: "/services/ai-automation-consulting" },
  { name: "AI Integration & Agentic Workflows", href: "/services/ai-integration-agentic-workflows" },
  { name: "SEO Services", href: "/services/seo-services" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "SaaS Product Development", href: "/services/saas-development" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Products", href: "/products" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg-surface/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-[1.75rem] font-signature font-bold text-text-primary group-hover:text-accent-primary transition-colors">
            Aryan Rawther
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.name} className="relative">
                <button
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={cn(
                    "px-4 py-2 text-sm rounded-btn transition-colors flex items-center gap-1",
                    pathname.startsWith("/services")
                      ? "text-accent-primary"
                      : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
                  )}
                >
                  {link.name}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                    className={cn(
                      "transition-transform duration-200",
                      servicesOpen && "rotate-180"
                    )}
                  >
                    <path d="M6 8L2 4h8L6 8z" />
                  </svg>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute top-full left-0 mt-1 bg-bg-surface border border-border rounded-card shadow-xl min-w-[240px] py-2"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm transition-colors",
                            pathname === service.href
                              ? "text-accent-primary bg-accent-primary/5"
                              : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
                          )}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm rounded-btn transition-colors",
                  pathname === link.href
                    ? "text-accent-primary"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
                )}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden sm:flex" />
          <Button
            href="/contact"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Contact
          </Button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-btn border border-border hover:border-accent-primary transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "w-5 h-0.5 bg-text-secondary transition-all duration-200",
                mobileOpen && "rotate-45 translate-y-2"
              )}
            />
            <span
              className={cn(
                "w-5 h-0.5 bg-text-secondary transition-all duration-200",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "w-5 h-0.5 bg-text-secondary transition-all duration-200",
                mobileOpen && "-rotate-45 -translate-y-2"
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-bg-surface border-b border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-2.5 text-sm rounded-btn transition-colors",
                      pathname === link.href || (link.hasDropdown && pathname.startsWith("/services"))
                        ? "text-accent-primary bg-accent-primary/5"
                        : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
                    )}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="ml-4 mt-1 space-y-0.5">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-2 text-xs text-text-muted hover:text-text-primary rounded-btn transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-3 px-4 pt-3 border-t border-border mt-2">
                <ThemeToggle />
                <Button href="/contact" variant="primary" size="sm" className="flex-1 justify-center">
                  Contact
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
