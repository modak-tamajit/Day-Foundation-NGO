/* ===================================================================
 * Component: EventsSection
 * File: src/components/home/EventsSection.tsx
 * ===================================================================
 * Upcoming events timeline with:
 * - Event cards with date, location, description
 * - Image thumbnails
 * - Calendar-style date display
 * - Hover effects
 * 
 * TO CUSTOMIZE:
 * - Events → edit EVENTS in src/lib/constants.ts
 * - Card style → modify card-base or create new styles
 * - Date display → change the calendar icon format
 * - Images → replace files in public/images/event-*.jpg
 * =================================================================== */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { EVENTS } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function EventsSection() {
  return (
    <section id="events" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="badge-secondary mb-4 inline-block">UPCOMING</span>
          <h2 className="section-heading">Events & Gatherings</h2>
          <p className="section-subtitle">
            Join us in person or online to learn, connect, and create impact together.
          </p>
        </motion.div>

        {/* Events List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          {EVENTS.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-3xl p-4 md:p-6 shadow-soft border border-border-light hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 flex flex-col md:flex-row gap-5 items-center"
              id={`event-${index}`}
            >
              {/* Image */}
              <div className="relative w-full md:w-40 h-32 md:h-28 rounded-2xl overflow-hidden flex-shrink-0">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 160px"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-heading text-heading-sm text-[#1A1A1A] mb-2">
                  {event.title}
                </h3>
                <p className="text-body-sm text-[#6B6B6B] mb-3">{event.description}</p>
                <div className="flex flex-wrap gap-4 text-body-sm text-[#6B6B6B]">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary" />
                    {event.location}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <button className="btn-secondary text-body-sm px-5 py-2 whitespace-nowrap">
                RSVP
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
