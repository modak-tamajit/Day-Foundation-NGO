/* ===================================================================
 * Component: MissionVision
 * File: src/components/home/MissionVision.tsx
 * ===================================================================
 * Side-by-side Mission & Vision cards with:
 * - Icon header
 * - Description text
 * - Bullet point highlights
 * - Soft card styling with hover lift
 * - Scroll-triggered entrance animations
 * 
 * TO CUSTOMIZE:
 * - Text content → edit MISSION_VISION in src/lib/constants.ts
 * - Card colors → change bg classes (currently white + cream)
 * - Icons → swap Heart/Eye with other Lucide icons
 * - Layout → modify grid-cols for different arrangements
 * =================================================================== */

"use client";

import { motion } from "framer-motion";
import { Heart, Eye, CheckCircle2 } from "lucide-react";
import { MISSION_VISION } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function MissionVision() {
  return (
    <section id="mission" className="section-padding bg-surface-muted">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* ── Mission Card ── */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-soft border border-border-light hover:shadow-card transition-all duration-400"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6">
              <Heart className="text-primary" size={28} />
            </div>
            <h2 className="font-heading text-display-md text-[#1A1A1A] mb-4">
              {MISSION_VISION.mission.title}
            </h2>
            <p className="text-body-md text-[#6B6B6B] mb-6 leading-relaxed">
              {MISSION_VISION.mission.description}
            </p>
            <ul className="space-y-3">
              {MISSION_VISION.mission.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-body-sm text-[#4A4A4A]">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Vision Card ── */}
          <motion.div
            variants={cardVariants}
            className="bg-cream rounded-3xl p-8 md:p-10 shadow-soft border border-border-light hover:shadow-card transition-all duration-400"
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary-50 flex items-center justify-center mb-6">
              <Eye className="text-secondary" size={28} />
            </div>
            <h2 className="font-heading text-display-md text-[#1A1A1A] mb-4">
              {MISSION_VISION.vision.title}
            </h2>
            <p className="text-body-md text-[#6B6B6B] mb-6 leading-relaxed">
              {MISSION_VISION.vision.description}
            </p>
            <ul className="space-y-3">
              {MISSION_VISION.vision.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-body-sm text-[#4A4A4A]">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
