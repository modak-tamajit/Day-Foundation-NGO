/* ===================================================================
 * Component: FAQPreview
 * File: src/components/home/FAQPreview.tsx
 * ===================================================================
 * FAQ accordion preview with:
 * - Top 3 frequently asked questions
 * - Animated accordion expand/collapse
 * - Link to full FAQ page
 * 
 * TO CUSTOMIZE:
 * - Questions → edit FAQ_ITEMS in src/lib/constants.ts
 * - Number shown → change the .slice(0, 3) count
 * - Accordion style → modify border/bg/padding classes
 * - Link → change the "View All" href
 * =================================================================== */

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const previewItems = FAQ_ITEMS.slice(0, 3);

  return (
    <section id="faq-preview" className="section-padding bg-cream">
      <div className="container-custom max-w-3xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Quick answers about our programs, donations, and how you can get involved.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {previewItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-border-light shadow-soft overflow-hidden"
              id={`faq-preview-${index}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-muted transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-heading text-heading-sm text-[#1A1A1A] pr-4">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} className="text-[#6B6B6B]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-body-md text-[#6B6B6B] leading-relaxed border-t border-border-light pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-body-md font-semibold text-primary hover:gap-3 transition-all"
          >
            View All Questions
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
