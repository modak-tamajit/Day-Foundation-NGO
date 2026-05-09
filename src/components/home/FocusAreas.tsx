/* ===================================================================
 * Component: FocusAreas
 * File: src/components/home/FocusAreas.tsx
 * ===================================================================
 * Grid of NGO focus area cards with:
 * - Image thumbnail
 * - Icon badge
 * - Title and description
 * - Hover zoom effect on image
 * - Staggered scroll animation
 * 
 * TO CUSTOMIZE:
 * - Focus areas → edit FOCUS_AREAS in src/lib/constants.ts
 * - Card style → modify card-base classes or add new styles
 * - Grid layout → change grid-cols-* classes
 * - Images → replace files in public/images/focus-*.jpg
 * =================================================================== */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, HeartPulse, Sprout, Users } from "lucide-react";
import { FOCUS_AREAS } from "@/lib/constants";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  GraduationCap,
  HeartPulse,
  Sprout,
  Users,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function FocusAreas() {
  return (
    <section id="focus-areas" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="badge-secondary mb-4 inline-block">WHAT WE DO</span>
          <h2 className="section-heading">Areas of Focus</h2>
          <p className="section-subtitle">
            Four pillars that guide every initiative, every program, and every life we touch.
          </p>
        </motion.div>

        {/* Focus Areas Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FOCUS_AREAS.map((area) => {
            const Icon = ICON_MAP[area.icon];
            return (
              <motion.div
                key={area.id}
                variants={cardVariants}
                className="group card-base overflow-hidden cursor-pointer"
                id={`focus-area-${area.id}`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-3 -mt-10 relative z-10 border-2 border-white shadow-soft">
                    {Icon && <Icon className="text-primary" size={20} />}
                  </div>
                  <h3 className="font-heading text-heading-sm text-[#1A1A1A] mb-2">
                    {area.title}
                  </h3>
                  <p className="text-body-sm text-[#6B6B6B] leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
