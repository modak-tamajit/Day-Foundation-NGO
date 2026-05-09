/* ===================================================================
 * Component: VolunteerCTA
 * File: src/components/home/VolunteerCTA.tsx
 * ===================================================================
 * Volunteer/Internship call-to-action with:
 * - Two-column layout (text + image)
 * - Highlight points with check icons
 * - Primary and secondary CTA buttons
 * - Warm background gradient
 * 
 * TO CUSTOMIZE:
 * - Heading/text → edit the strings directly below
 * - Highlight points → modify the POINTS array
 * - Background → change bg gradient classes
 * - Image → replace /images/volunteer-cta.jpg
 * - Buttons → modify href and label strings
 * =================================================================== */

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Users } from "lucide-react";

const HEADING = "Be the Change Your Community Needs";
const DESCRIPTION =
  "Whether you have an hour or a lifetime, your skills and compassion can transform lives. Join our network of changemakers volunteering across education, healthcare, and community development.";

const POINTS = [
  "Flexible remote and on-ground opportunities",
  "Certified internship programs for students",
  "Skill-matched volunteer placements",
  "Impact tracking and recognition",
];

export default function VolunteerCTA() {
  return (
    <section id="volunteer-cta" className="section-padding bg-gradient-to-br from-secondary-50 to-cream">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ── Image ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated">
              <Image
                src="/images/volunteer-cta.jpg"
                alt="Volunteers working together in the community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 md:-right-8 bg-white rounded-2xl shadow-card p-4 border border-border-light"
            >
              <div className="flex items-center gap-2">
                <Users className="text-secondary" size={24} />
                <div>
                  <p className="text-body-sm font-bold text-[#1A1A1A]">120+ Active</p>
                  <p className="text-caption text-[#6B6B6B]">Volunteers</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="badge-secondary mb-4 inline-block">JOIN US</span>
            <h2 className="font-heading text-display-md text-[#1A1A1A] mb-4">
              {HEADING}
            </h2>
            <p className="text-body-lg text-[#6B6B6B] mb-8 leading-relaxed">
              {DESCRIPTION}
            </p>

            {/* Points */}
            <ul className="space-y-3 mb-8">
              {POINTS.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-body-md text-[#4A4A4A]">{point}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/get-involved#volunteer" className="btn-primary">
                Become a Volunteer
                <ArrowRight size={18} />
              </Link>
              <Link href="/get-involved#internship" className="btn-secondary">
                Internship Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
