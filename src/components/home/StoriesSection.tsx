/* ===================================================================
 * Component: StoriesSection
 * File: src/components/home/StoriesSection.tsx
 * ===================================================================
 * Editorial storytelling layout with:
 * - Featured story hero card (large)
 * - Secondary story cards (smaller grid)
 * - Category badges
 * - Read More links
 * - Image-heavy design matching reference
 * 
 * TO CUSTOMIZE:
 * - Stories → edit CAMPAIGNS in src/lib/constants.ts
 * - Layout → modify grid template for different arrangements
 * - Card style → change rounded/shadow/bg classes
 * - Images → replace files in public/images/campaign-*.jpg
 * =================================================================== */

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CAMPAIGNS } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function StoriesSection() {
  const featured = CAMPAIGNS[0];
  const secondary = CAMPAIGNS.slice(1);

  return (
    <section id="stories" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="badge-primary mb-4 inline-block">IMPACT STORIES</span>
          <h2 className="section-heading">Voices from the Field</h2>
          <p className="section-subtitle">
            Every program tells a story. These are the real experiences of communities we serve.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* ── Featured Story ── */}
          <motion.div
            variants={itemVariants}
            className="group relative rounded-3xl overflow-hidden shadow-card min-h-[400px] lg:min-h-[500px] cursor-pointer"
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="badge bg-primary text-white mb-3 inline-block">
                {featured.category}
              </span>
              <h3 className="font-heading text-heading-lg text-white mb-3">
                {featured.title}
              </h3>
              <p className="text-body-sm text-white/80 mb-4 max-w-md">
                {featured.description}
              </p>
              <Link
                href={featured.link}
                className="inline-flex items-center gap-2 text-body-sm font-semibold text-white hover:text-primary-200 transition-colors"
              >
                Read Full Story
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* ── Secondary Stories ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {secondary.map((story, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group card-base overflow-hidden cursor-pointer"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <span className="badge-primary text-[10px] mb-2 inline-block">
                    {story.category}
                  </span>
                  <h3 className="font-heading text-heading-sm text-[#1A1A1A] mb-2">
                    {story.title}
                  </h3>
                  <p className="text-body-sm text-[#6B6B6B] line-clamp-2">
                    {story.description}
                  </p>
                  <Link
                    href={story.link}
                    className="inline-flex items-center gap-1 text-body-sm font-semibold text-primary mt-3 hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
