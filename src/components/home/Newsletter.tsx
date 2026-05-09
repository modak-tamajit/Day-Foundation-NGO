/* ===================================================================
 * Component: Newsletter
 * File: src/components/home/Newsletter.tsx
 * ===================================================================
 * Newsletter/community subscription section with:
 * - Email input field
 * - Subscribe button
 * - Social follow CTA
 * - Warm background
 * 
 * TO CUSTOMIZE:
 * - Heading/description → edit strings below
 * - Background → change bg gradient classes
 * - Form action → connect to actual newsletter API later
 * - Social link → change the Instagram/Twitter href
 * =================================================================== */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to newsletter API (Phase 2)
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section id="newsletter" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-50 via-cream to-rose rounded-[2rem] p-8 md:p-14"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-display-md text-[#1A1A1A] mb-4">
              Stay updated with our journey.
            </h2>
            <p className="text-body-lg text-[#6B6B6B] mb-8">
              Join 16,000+ supporters receiving monthly Impact Reports and heartfelt success stories
              from the field.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-3.5 rounded-full border border-border bg-white text-body-md text-[#1A1A1A] placeholder:text-[#9B9B9B] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                id="newsletter-email-input"
              />
              <button
                type="submit"
                className="btn-primary px-6 py-3.5 whitespace-nowrap"
                id="newsletter-submit-btn"
              >
                {isSubmitted ? (
                  "Subscribed! ✓"
                ) : (
                  <>
                    Subscribe <Send size={16} />
                  </>
                )}
              </button>
            </form>

            <p className="text-caption text-[#9B9B9B] mt-4">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>

            {/* Social Follow */}
            <div className="mt-8 pt-6 border-t border-border-light">
              <div className="flex items-center justify-center gap-4">
                <p className="text-body-sm text-[#6B6B6B]">
                  Stay updated with our latest impact stories and programs.
                </p>
                <a
                  href="https://twitter.com/DAYFoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-body-sm px-5 py-2"
                >
                  Follow @DAYFoundation
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
