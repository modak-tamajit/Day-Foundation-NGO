/* ===================================================================
 * Page: Programs
 * File: src/app/programs/page.tsx
 * ===================================================================
 * Programs/Focus areas page with:
 * - Hero with page title
 * - Detailed program cards
 * - Each program has image, description, key highlights
 * 
 * TO CUSTOMIZE:
 * - Programs data → edit FOCUS_AREAS in src/lib/constants.ts
 * - Add more programs → add items to the FOCUS_AREAS array
 * - Card layout → modify the grid/flex structure below
 * - Images → replace in public/images/focus-*.jpg
 * =================================================================== */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, HeartPulse, Sprout, Users, ArrowRight } from "lucide-react";
import { FOCUS_AREAS } from "@/lib/constants";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  GraduationCap,
  HeartPulse,
  Sprout,
  Users,
};

export default function ProgramsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="badge-secondary mb-4 inline-block">OUR PROGRAMS</span>
            <h1 className="font-heading text-display-xl text-[#1A1A1A] mb-6">
              Programs That Transform
            </h1>
            <p className="text-body-lg text-[#6B6B6B] leading-relaxed">
              Each initiative is designed to create lasting, measurable change in the communities we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Program Cards ── */}
      <section className="section-padding bg-white">
        <div className="container-custom space-y-16">
          {FOCUS_AREAS.map((program, index) => {
            const Icon = ICON_MAP[program.icon];
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
                id={`program-${program.id}`}
              >
                {/* Image */}
                <div className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-card ${!isEven ? "lg:order-2" : ""}`}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className={!isEven ? "lg:order-1" : ""}>
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                    {Icon && <Icon className="text-primary" size={24} />}
                  </div>
                  <h2 className="font-heading text-display-md text-[#1A1A1A] mb-4">
                    {program.title}
                  </h2>
                  <p className="text-body-lg text-[#6B6B6B] leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <button className="btn-primary">
                    Learn More <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
