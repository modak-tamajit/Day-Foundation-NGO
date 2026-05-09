/* ===================================================================
 * Page: Contact
 * File: src/app/contact/page.tsx
 * ===================================================================
 * Contact page with:
 * - Hero headline
 * - Contact form (name, email, subject, message)
 * - Office info sidebar (address, email, phone)
 * - Social follow CTA
 * - Global presence / map section
 * 
 * TO CUSTOMIZE:
 * - Contact info → edit ORG_INFO in src/lib/constants.ts
 * - Form fields → modify the form JSX below
 * - Form action → connect to API route in Phase 2
 * - Map image → replace /images/india-map.jpg
 * =================================================================== */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { ORG_INFO } from "@/lib/constants";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to API route in Phase 2
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-cream">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-primary mb-4 inline-block">GET IN TOUCH</span>
            <h1 className="font-heading text-display-xl text-primary mb-4">
              Every conversation starts a cycle of hope.
            </h1>
            <p className="text-body-lg text-[#6B6B6B] max-w-2xl mx-auto">
              Whether you&apos;re looking to volunteer, seeking support, or simply want to share a
              story, our community is here to listen and grow together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Form + Info ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* ── Sidebar ── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Office */}
              <div className="bg-cream rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-3">
                  <MapPin className="text-primary" size={20} />
                </div>
                <h3 className="font-heading text-heading-sm text-[#1A1A1A] mb-2">Registered Office</h3>
                <p className="text-body-sm text-[#6B6B6B]">
                  {ORG_INFO.address.street}<br />
                  {ORG_INFO.address.city}, {ORG_INFO.address.state} {ORG_INFO.address.pincode}
                </p>
              </div>

              {/* Email */}
              <div className="bg-cream rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-3">
                  <Mail className="text-primary" size={20} />
                </div>
                <h3 className="font-heading text-heading-sm text-[#1A1A1A] mb-2">Email Us</h3>
                <p className="text-body-sm text-[#6B6B6B]">
                  {ORG_INFO.email}<br />
                  {ORG_INFO.supportEmail}
                </p>
              </div>

              {/* Phone */}
              <div className="bg-cream rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-3">
                  <Phone className="text-primary" size={20} />
                </div>
                <h3 className="font-heading text-heading-sm text-[#1A1A1A] mb-2">Call Us</h3>
                <p className="text-body-sm text-[#6B6B6B]">
                  {ORG_INFO.phone}<br />
                  Emergency: {ORG_INFO.emergencyPhone}
                </p>
              </div>
            </motion.div>

            {/* ── Form ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="font-heading text-display-md text-[#1A1A1A] mb-8">
                Send a Message
              </h2>

              {isSubmitted ? (
                <div className="bg-secondary-50 rounded-2xl p-10 text-center">
                  <CheckCircle2 className="text-secondary mx-auto mb-4" size={48} />
                  <h3 className="font-heading text-heading-lg text-[#1A1A1A] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-body-md text-[#6B6B6B]">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-body-sm font-medium text-[#1A1A1A] mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-surface-muted text-body-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        id="contact-name"
                      />
                    </div>
                    <div>
                      <label className="block text-body-sm font-medium text-[#1A1A1A] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-surface-muted text-body-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        id="contact-email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-body-sm font-medium text-[#1A1A1A] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="How can we help you?"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface-muted text-body-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      id="contact-subject"
                    />
                  </div>
                  <div>
                    <label className="block text-body-sm font-medium text-[#1A1A1A] mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us more about your inquiry..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface-muted text-body-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                      id="contact-message"
                    />
                  </div>
                  <button type="submit" className="btn-primary px-8 py-3.5" id="contact-submit">
                    Send Message <Send size={18} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Registered Office Map ── */}
      <section className="section-padding bg-surface-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="section-heading">Our Registered Office</h2>
            <p className="section-subtitle">
              {ORG_INFO.address.full}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-card border border-border-light"
          >
            <iframe
              src={`https://maps.google.com/maps?q=${ORG_INFO.address.coordinates.lat},${ORG_INFO.address.coordinates.lng}&z=16&output=embed`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DAY Foundation Office — Jabalpur, Madhya Pradesh"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Our Presence ── */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Active Cities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-soft border border-border-light"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-heading-md text-[#1A1A1A] mb-4">Active Cities</h3>
              <ul className="space-y-3">
                {ORG_INFO.activeCities.map((loc, i) => (
                  <li key={i} className="flex items-center gap-2 text-body-md text-[#4A4A4A]">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {loc}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Expanding To */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-soft border border-border-light"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center mb-4">
                <MapPin className="text-secondary" size={24} />
              </div>
              <h3 className="font-heading text-heading-md text-[#1A1A1A] mb-4">Expanding To</h3>
              <ul className="space-y-3">
                {ORG_INFO.expansionCities.map((loc, i) => (
                  <li key={i} className="flex items-center gap-2 text-body-md text-[#6B6B6B]">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    {loc}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Head Office */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-soft border border-border-light"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-heading-md text-[#1A1A1A] mb-4">Head Office</h3>
              <p className="text-body-sm text-[#6B6B6B] leading-relaxed">
                {ORG_INFO.address.street}<br />
                {ORG_INFO.address.city}, {ORG_INFO.address.state}<br />
                {ORG_INFO.address.pincode}, {ORG_INFO.address.country}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
