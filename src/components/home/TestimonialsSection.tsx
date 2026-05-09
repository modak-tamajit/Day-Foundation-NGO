/* ===================================================================
 * Component: TestimonialsSection
 * File: src/components/home/TestimonialsSection.tsx
 * ===================================================================
 * Testimonial cards section with:
 * - Quote display with decorative marks
 * - Avatar, name, and location
 * - Horizontal scroll on mobile, grid on desktop
 * - Warm background tones
 * 
 * TO CUSTOMIZE:
 * - Testimonials → edit TESTIMONIALS in src/lib/constants.ts
 * - Card background → change bg-* classes
 * - Quote style → modify font-heading/italic classes
 * - Images → replace files in public/images/testimonial-*.jpg
 * =================================================================== */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AVAILABLE_TESTIMONIAL_IMAGES = new Set([
  "/images/testimonial-1.jpg",
  "/images/testimonial-2.jpg",
  "/images/testimonial-3.jpg",
]);

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-surface-muted">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading italic">Echoes of Gratitude</h2>
          <p className="section-subtitle">
            Hearing the real voices of people whose lives have been touched by our work.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial, index) => {
            const hasImage = AVAILABLE_TESTIMONIAL_IMAGES.has(testimonial.image);

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-3xl p-8 shadow-soft border border-border-light hover:shadow-card transition-all duration-300 flex flex-col"
                id={`testimonial-${index}`}
              >
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                  <Quote className="text-primary" size={20} />
                </div>

                {/* Quote Text */}
                <p className="text-body-md text-[#4A4A4A] leading-relaxed italic flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border-light">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-cream flex items-center justify-center">
                    {hasImage ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    ) : (
                      <span className="font-heading text-body-md font-semibold text-primary">
                        {getInitials(testimonial.name)}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-body-sm font-semibold text-[#1A1A1A]">
                      {testimonial.name}
                    </p>
                    <p className="text-caption text-[#6B6B6B]">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
