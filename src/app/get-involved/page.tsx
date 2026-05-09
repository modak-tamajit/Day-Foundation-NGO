/* ===================================================================
 * Page: Get Involved
 * File: src/app/get-involved/page.tsx
 * ===================================================================
 * Volunteer, internship, and donation page with:
 * - Hero section
 * - Volunteer opportunities
 * - Internship programs
 * - Clean donation CTA redirecting to form
 * 
 * TO CUSTOMIZE:
 * - Opportunities → edit the OPPORTUNITIES array below
 * - Donation form link → update DONATION_FORM_URL
 * - Images → replace in public/images/
 * =================================================================== */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Users, GraduationCap, ArrowRight, Shield, BadgeCheck, Building2 } from "lucide-react";
import { INTERNSHIP_INFO, ORG_INFO } from "@/lib/constants";

const OPPORTUNITIES = [
  {
    id: "volunteer",
    title: "On-Ground Volunteer",
    description: "Work directly with communities in health camps, schools, and development projects.",
    commitment: "Weekends / Full-time",
    icon: Users,
    formLink: ORG_INFO.forms.volunteer,
  },
  {
    id: "digital-volunteer",
    title: "Digital Volunteer",
    description: "Contribute remotely — content writing, social media, tech support, translations.",
    commitment: "Flexible hours",
    icon: Users,
    formLink: ORG_INFO.forms.volunteer,
  },
  {
    id: "internship",
    title: "Student Internship",
    description: `Certified ${INTERNSHIP_INFO.duration} social work internship program for college students across all disciplines.`,
    commitment: INTERNSHIP_INFO.duration,
    icon: GraduationCap,
    formLink: INTERNSHIP_INFO.formLink,
  },
];

const TRUST_BADGES = [
  { icon: Shield, label: "Section 8 Registered" },
  { icon: Building2, label: "NITI Aayog Verified" },
  { icon: BadgeCheck, label: "80G Tax Deductible" },
];

export default function GetInvolvedPage() {
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
            <span className="badge-primary mb-4 inline-block">GET INVOLVED</span>
            <h1 className="font-heading text-display-xl text-[#1A1A1A] mb-6">
              Your Impact Starts Here
            </h1>
            <p className="text-body-lg text-[#6B6B6B] leading-relaxed">
              Whether you volunteer your time, share your skills, or contribute financially —
              every action creates ripples of positive change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Volunteer Section ── */}
      <section id="volunteer" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="section-heading">Volunteer With Us</h2>
            <p className="section-subtitle">
              Find the right opportunity that matches your skills, time, and passion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OPPORTUNITIES.map((opp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="card-base p-8"
                id={opp.id}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center mb-4">
                  <opp.icon className="text-secondary" size={24} />
                </div>
                <h3 className="font-heading text-heading-md text-[#1A1A1A] mb-2">{opp.title}</h3>
                <p className="text-body-sm text-[#6B6B6B] mb-4">{opp.description}</p>
                <p className="text-caption text-primary font-semibold">⏱ {opp.commitment}</p>
                <a
                  href={opp.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 w-full"
                >
                  Apply Now <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Donation Section ── */}
      <section id="donate" className="section-padding bg-gradient-to-br from-primary-50 to-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated"
            >
              <Image
                src="/images/donation-cta.jpg"
                alt="Children smiling — your donation at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Donation CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-heading text-display-md text-[#1A1A1A] mb-4">
                Make a Donation
              </h2>
              <p className="text-body-lg text-[#6B6B6B] mb-6 leading-relaxed">
                Every contribution, no matter the size, directly funds education for slum children, 
                healthcare drives, and youth empowerment programs across India. 100% of your 
                donation goes to community impact.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {TRUST_BADGES.map((badge, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-full border border-border-light shadow-soft"
                  >
                    <badge.icon size={16} className="text-secondary" />
                    <span className="text-body-sm font-medium text-[#4A4A4A]">{badge.label}</span>
                  </div>
                ))}
              </div>

              {/* Donate Now Button — redirects to Google Form */}
              <a
                href={ORG_INFO.forms.donation}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full py-4 text-body-md justify-center"
              >
                <Heart size={20} />
                Donate Now
                <ArrowRight size={18} />
              </a>

              <p className="mt-4 text-caption text-[#6B6B6B] text-center">
                Tax-deductible under Section 80G · You will receive a receipt via email
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
