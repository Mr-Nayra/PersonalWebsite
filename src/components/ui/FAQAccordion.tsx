"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

function FAQAccordionItem({ item }: { item: FAQItem; index?: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "border border-border rounded-card overflow-hidden",
        isOpen && "border-accent-primary/40"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-bg-elevated transition-colors duration-150"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-text-primary pr-4">{item.question}</span>
        <span
          className={cn(
            "text-accent-primary transition-transform duration-200 flex-shrink-0 text-xl",
            isOpen && "rotate-45"
          )}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5">
              <p className="text-text-secondary leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <FAQAccordionItem key={index} item={item} index={index} />
      ))}
    </div>
  );
}
