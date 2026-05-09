/* ===================================================================
 * Page: Get Involved
 * File: src/app/get-involved/page.tsx
 * ===================================================================
 * Volunteer, internship, and donation page with:
 * - Hero section
 * - Volunteer opportunities
 * - Internship programs
 * - Donation section with amount options
 * 
 * TO CUSTOMIZE:
 * - Opportunities → edit the OPPORTUNITIES array below
 * - Donation amounts → modify the AMOUNTS array
 * - Images → replace in public/images/
 * =================================================================== */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Users, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";

const OPPORTUNITIES = [
  {
    title: "On-Ground Volunteer",
    description: "Work directly with communities in health camps, schools, and development projects.",
    commitment: "Weekends / Full-time",
    icon: Users,
  },
  {
    title: "Digital Volunteer",
    description: "Contribute remotely — content writing, social media, tech support, translations.",
    commitment: "Flexible hours",
    icon: Users,
  },
  {
    title: "Student Internship",
    description: "Certified 3-6 month internship programs for college students across all disciplines.",
    commitment: "3-6 months",
    icon: GraduationCap,
  },
];

const AMOUNTS = [500, 1000, 2500, 5000, 10000, 25000];

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
              >
                <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center mb-4">
                  <opp.icon className="text-secondary" size={24} />
                </div>
                <h3 className="font-heading text-heading-md text-[#1A1A1A] mb-2">{opp.title}</h3>
                <p className="text-body-sm text-[#6B6B6B] mb-4">{opp.description}</p>
                <p className="text-caption text-primary font-semibold">⏱ {opp.commitment}</p>
                <button className="btn-primary mt-6 w-full">
                  Apply Now <ArrowRight size={16} />
                </button>
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

            {/* Donation Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-display-md text-[#1A1A1A] mb-4">
                Make a Donation
              </h2>
              <p className="text-body-lg text-[#6B6B6B] mb-8">
                100% tax-deductible under Section 80G. 94% of funds go directly to programs.
              </p>

              {/* Amount Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {AMOUNTS.map((amount) => (
                  <button
                    key={amount}
                    className="py-3 rounded-xl border-2 border-border text-body-md font-semibold text-[#1A1A1A] hover:border-primary hover:text-primary hover:bg-primary-50 transition-all"
                  >
                    ₹{amount.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <input
                type="number"
                placeholder="Or enter custom amount (₹)"
                className="w-full px-5 py-3 rounded-xl border border-border bg-white text-body-md mb-6 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />

              <button className="btn-primary w-full py-4 text-body-md">
                <Heart size={20} />
                Donate Now
              </button>

              <div className="mt-4 flex items-start gap-2">
                <CheckCircle2 size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-caption text-[#6B6B6B]">
                  Secure payment via Razorpay. You will receive an 80G receipt within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
