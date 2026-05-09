/* ===================================================================
 * Component: ImpactStats
 * File: src/components/home/ImpactStats.tsx
 * ===================================================================
 * Animated statistics counter section with:
 * - Four key impact numbers
 * - Count-up animation on scroll
 * - Icon-backed stat cards
 * - Warm gradient background
 * 
 * TO CUSTOMIZE:
 * - Statistics → edit IMPACT_STATS in src/lib/constants.ts
 * - Background → change the bg gradient classes
 * - Animation speed → adjust duration in useEffect
 * - Layout → modify grid columns
 * =================================================================== */

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, School, BarChart3, Users } from "lucide-react";
import { IMPACT_STATS } from "@/lib/constants";

const ICONS = [TrendingUp, School, BarChart3, Users];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ── Extracts numeric part + suffix from strings like "1,200+", "2022", "3" ── */
function parseStatValue(raw: string): { prefix: string; number: number; suffix: string } {
  const match = raw.match(/^([^\d]*?)([\d,]+)([^\d]*)$/);
  if (!match) return { prefix: "", number: 0, suffix: raw };
  return {
    prefix: match[1],
    number: parseInt(match[2].replace(/,/g, ""), 10),
    suffix: match[3],
  };
}

function formatWithCommas(n: number): string {
  return n.toLocaleString("en-IN");
}

/* ── Individual animated counter ── */
function AnimatedCounter({ value, duration = 1800 }: { value: string; duration?: number }) {
  const { prefix, number, suffix } = parseStatValue(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * number));
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(number);
    };
    requestAnimationFrame(step);
  }, [inView, number, duration]);

  return (
    <span ref={ref}>
      {prefix}{formatWithCommas(display)}{suffix}
    </span>
  );
}

export default function ImpactStats() {
  return (
    <section
      id="impact-stats"
      className="section-padding bg-gradient-to-br from-primary-50 via-cream to-rose"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="badge-primary mb-4 inline-block">OUR IMPACT</span>
          <h2 className="section-heading">Numbers That Tell Our Story</h2>
          <p className="section-subtitle">
            Every number represents a life changed, a community strengthened, and a promise kept.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {IMPACT_STATS.map((stat, index) => {
            const Icon = ICONS[index];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 text-center shadow-soft border border-border-light hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={26} />
                </div>
                <p className="font-heading text-display-md text-primary font-bold">
                  <AnimatedCounter value={stat.value} duration={1800} />
                </p>
                <p className="text-body-md font-semibold text-[#1A1A1A] mt-1">
                  {stat.label}
                </p>
                <p className="text-body-sm text-[#6B6B6B] mt-1">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
