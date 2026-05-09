/* ===================================================================
 * Page: FAQ
 * File: src/app/faq/page.tsx
 * ===================================================================
 * Full FAQ page with:
 * - Search input
 * - Category quick-links
 * - Full accordion list
 * - Contact CTA at bottom
 * 
 * TO CUSTOMIZE:
 * - Questions → edit FAQ_ITEMS in src/lib/constants.ts
 * - Categories → modify the CATEGORIES array below
 * - Search behavior → currently filters by question text
 * - Contact CTA → change href and button text
 * =================================================================== */

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, HelpCircle, Heart, Users, Award, BookOpen } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

const CATEGORIES = [
  { label: "Donations", icon: Heart, description: "Tax benefits & methods" },
  { label: "Volunteering", icon: Users, description: "Roles & opportunities" },
  { label: "Certifications", icon: Award, description: "12A, 80G & Darpan" },
  { label: "Programs", icon: BookOpen, description: "Educational initiatives" },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredItems = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-12 bg-cream">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-display-xl text-primary mb-4">
              How can we help you today?
            </h1>
            <p className="text-body-lg text-[#6B6B6B] max-w-2xl mx-auto mb-8">
              Find answers about our programs, donations, and how you can make a meaningful impact
              in our community.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9B9B9B]"
              />
              <input
                type="text"
                placeholder='Search for "80G receipt", "Volunteering"...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-5 py-4 rounded-full border border-border bg-white text-body-md shadow-soft focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                id="faq-search"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Category Quick Links ── */}
      <section className="py-10 bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-5 rounded-2xl bg-white shadow-soft border border-border-light hover:shadow-card hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-secondary-50 flex items-center justify-center mx-auto mb-3">
                  <cat.icon className="text-secondary" size={22} />
                </div>
                <h3 className="text-body-md font-semibold text-[#1A1A1A]">{cat.label}</h3>
                <p className="text-caption text-[#6B6B6B]">{cat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="section-heading text-center mb-10">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-surface-muted rounded-2xl border border-border-light overflow-hidden"
                id={`faq-item-${index}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-cream transition-colors"
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
              </motion.div>
            ))}

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="text-[#9B9B9B] mx-auto mb-4" size={40} />
                <p className="text-body-lg text-[#6B6B6B]">
                  No questions found matching &ldquo;{searchQuery}&rdquo;
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Still Have Questions CTA ── */}
      <section className="section-padding bg-surface-muted">
        <div className="container-custom max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-card border border-border-light"
          >
            <h2 className="font-heading text-heading-lg text-[#1A1A1A] mb-3">
              Still have questions?
            </h2>
            <p className="text-body-md text-[#6B6B6B] mb-6">
              Our team is here to help you understand our mission and your potential impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <button className="btn-secondary">
                Request a Callback
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
