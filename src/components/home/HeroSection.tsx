/* ===================================================================
 * Component: HeroSection
 * File: src/components/home/HeroSection.tsx
 * ===================================================================
 * Full-width hero with:
 * - Large editorial heading with serif typography
 * - Descriptive paragraph
 * - CTA button
 * - Key statistics row
 * - Hero image with warm gradient overlay
 * - Framer Motion entrance animations
 * 
 * TO CUSTOMIZE:
 * - Text content → edit HERO_CONTENT in src/lib/constants.ts
 * - Background color → change bg-cream in the outer div
 * - Hero image → replace /images/hero-main.jpg in public/images/
 * - Animation speed → adjust transition.duration values
 * - Layout → modify grid columns (currently 1:1 split on desktop)
 * =================================================================== */

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO_CONTENT } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-cream min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose rounded-full blur-3xl opacity-30" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Text Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="badge-primary mb-6 inline-block"
            >
              {HERO_CONTENT.badge}
            </motion.span>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-heading text-display-xl text-[#1A1A1A] mb-6 whitespace-pre-line"
            >
              {HERO_CONTENT.heading}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-body-lg text-[#6B6B6B] mb-8 leading-relaxed"
            >
              {HERO_CONTENT.description}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link href={HERO_CONTENT.cta.href} className="btn-primary text-body-md px-8 py-4">
                {HERO_CONTENT.cta.label}
                <ArrowRight size={18} className="ml-1" />
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-8 mt-12 pt-8 border-t border-border"
            >
              {HERO_CONTENT.stats.map((stat, index) => (
                <div key={index}>
                  <p className="font-heading text-heading-lg text-primary font-bold">
                    {stat.value}
                  </p>
                  <p className="text-body-sm text-[#6B6B6B]">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Hero Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-[2rem] overflow-hidden shadow-elevated">
              <Image
                src="/images/hero-main.jpg"
                alt="DAY Foundation — Community members sharing a moment of hope and connection"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Warm gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 md:-left-8 bg-white rounded-2xl shadow-card p-4 border border-border-light"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-50 flex items-center justify-center">
                  <span className="text-secondary text-lg">🌱</span>
                </div>
                <div>
                  <p className="text-body-sm font-semibold text-[#1A1A1A]">10+ Years of Presence</p>
                  <p className="text-caption text-[#6B6B6B]">Across 4 Indian states</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
