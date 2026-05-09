/* ===================================================================
 * Component: DonationCTA
 * File: src/components/home/DonationCTA.tsx
 * ===================================================================
 * Donation call-to-action block with:
 * - Full-width warm gradient background
 * - Emotional headline
 * - Trust indicators (credentials)
 * - Donate button
 * 
 * TO CUSTOMIZE:
 * - Heading/description → edit the strings below
 * - Credentials → edit CREDENTIALS in src/lib/constants.ts
 * - Background gradient → change from/to gradient classes
 * - Button → modify href and label
 * =================================================================== */

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, BadgeCheck, Building2, FileCheck, Heart } from "lucide-react";
import { CREDENTIALS } from "@/lib/constants";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Shield,
  BadgeCheck,
  Building2,
  FileCheck,
};

export default function DonationCTA() {
  return (
    <section id="donation-cta" className="section-padding bg-white">
      <div className="container-custom">
        {/* ── Credentials Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading">Credentials of Trust</h2>
          <p className="section-subtitle">
            We operate with complete financial and ethical transparency.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {CREDENTIALS.map((cred, index) => {
            const Icon = ICON_MAP[cred.icon];
            return (
              <div
                key={index}
                className="text-center p-6 rounded-3xl bg-surface-muted border border-border-light hover:shadow-soft transition-all duration-300"
                id={`credential-${index}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary-50 flex items-center justify-center mx-auto mb-4">
                  {Icon && <Icon className="text-secondary" size={26} />}
                </div>
                <h3 className="font-heading text-heading-sm text-[#1A1A1A] mb-2">
                  {cred.title}
                </h3>
                <p className="text-body-sm text-[#6B6B6B]">{cred.description}</p>
              </div>
            );
          })}
        </motion.div>

        {/* ── Main CTA Block ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] overflow-hidden bg-gradient-to-r from-primary to-primary-light p-10 md:p-16 text-center shadow-warm"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Heart className="text-white" size={32} />
            </div>
            <h2 className="font-heading text-display-md text-white mb-4">
              Every Contribution Creates Ripples of Change
            </h2>
            <p className="text-body-lg text-white/85 max-w-2xl mx-auto mb-8">
              Your donation is tax-deductible under Section 80G. 94% of every rupee goes directly to
              community programs. Join 5,000+ supporters making a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-involved#donate"
                className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-cream hover:shadow-elevated transition-all duration-300 active:scale-[0.98]"
              >
                Donate Now
                <Heart size={18} />
              </Link>
              <Link
                href="/about#transparency"
                className="inline-flex items-center gap-2 bg-white/15 text-white font-semibold px-8 py-4 rounded-full border border-white/30 hover:bg-white/25 transition-all duration-300"
              >
                View Transparency Report
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
