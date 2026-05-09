/* ===================================================================
 * Page: About
 * File: src/app/about/page.tsx
 * ===================================================================
 * About DAY Foundation page with:
 * - Organization story & history
 * - Team section (reused from homepage)
 * - Credentials of trust
 * - Financial transparency section
 * 
 * TO CUSTOMIZE:
 * - Text content → edit strings directly below
 * - Team → edit TEAM_MEMBERS in src/lib/constants.ts
 * - Credentials → edit CREDENTIALS in src/lib/constants.ts
 * =================================================================== */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, BadgeCheck, Building2, FileCheck, Heart, Target, Eye } from "lucide-react";
import { TEAM_MEMBERS, CREDENTIALS, ORG_INFO } from "@/lib/constants";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Shield,
  BadgeCheck,
  Building2,
  FileCheck,
};

export default function AboutPage() {
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
            <span className="badge-primary mb-4 inline-block">ABOUT US</span>
            <h1 className="font-heading text-display-xl text-[#1A1A1A] mb-6">
              Our Story of Compassion
            </h1>
            <p className="text-body-lg text-[#6B6B6B] leading-relaxed">
              {ORG_INFO.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated">
                <Image
                  src="/images/about-story.jpg"
                  alt="DAY Foundation's journey — community gathering"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-heading text-display-md text-[#1A1A1A] mb-4">
                How It All Began
              </h2>
              <p className="text-body-lg text-[#6B6B6B] mb-4 leading-relaxed">
                Founded on 12th April 2022, DAY Foundation (BHTDAY Welfare Foundation) began as a 
                vision to empower underprivileged communities across India. Guided by the motto 
                &ldquo;शिक्षा से सशक्तिकरण, युवा से समर्थन&rdquo;, we saw the critical gaps in 
                education, healthcare, and youth development that needed urgent action.
              </p>
              <p className="text-body-md text-[#6B6B6B] leading-relaxed">
                Today, DAY Foundation operates across Delhi, Indore, and Jabalpur as a registered 
                Section 8, NITI Aayog-registered NGO. We focus on education for slum children, 
                healthcare and welfare drives, youth engagement through internship programs, and 
                sustainable employment via our innovative Rojgar initiative. With 1,200+ interns 
                trained and growing, we are building a brighter and more inclusive future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-padding bg-surface-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="section-heading">Our Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Heart, title: "Compassion First", desc: "Every decision begins with empathy and human dignity." },
              { icon: Target, title: "Impact Driven", desc: "We measure success by lives changed, not metrics tracked." },
              { icon: Eye, title: "Radical Transparency", desc: "Open finances, audited reports, and honest communication." },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-8 rounded-3xl bg-white shadow-soft border border-border-light"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary" size={26} />
                </div>
                <h3 className="font-heading text-heading-md text-[#1A1A1A] mb-2">{value.title}</h3>
                <p className="text-body-sm text-[#6B6B6B]">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="section-heading">Leadership with Heart</h2>
            <p className="section-subtitle">
              Meet the people anchoring our vision through hands-on service.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center group"
              >
                <div className="relative w-56 h-56 mx-auto mb-6 rounded-3xl overflow-hidden shadow-card group-hover:shadow-card-hover transition-all duration-400">
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="224px" />
                </div>
                <h3 className="font-heading text-heading-md text-[#1A1A1A] mb-1">{member.name}</h3>
                <p className="text-body-sm font-medium text-primary mb-2">{member.role}</p>
                <p className="text-body-sm text-[#6B6B6B] max-w-xs mx-auto">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Credentials ── */}
      <section id="transparency" className="section-padding bg-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="section-heading">Credentials of Trust</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {CREDENTIALS.map((cred, i) => {
              const Icon = ICON_MAP[cred.icon];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6 rounded-3xl bg-white border border-border-light shadow-soft"
                >
                  <div className="w-14 h-14 rounded-2xl bg-secondary-50 flex items-center justify-center mx-auto mb-4">
                    {Icon && <Icon className="text-secondary" size={26} />}
                  </div>
                  <h3 className="font-heading text-heading-sm text-[#1A1A1A] mb-2">{cred.title}</h3>
                  <p className="text-body-sm text-[#6B6B6B]">{cred.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
