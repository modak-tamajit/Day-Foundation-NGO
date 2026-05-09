/* ===================================================================
 * Component: CampaignsSection
 * File: src/components/home/CampaignsSection.tsx
 * ===================================================================
 * Active campaigns display with:
 * - Large image cards with overlay text
 * - Category badges
 * - Description and CTA links
 * - Horizontal scroll on mobile
 * 
 * TO CUSTOMIZE:
 * - Campaigns → edit CAMPAIGNS in src/lib/constants.ts
 * - Card style → modify overlay gradient colors
 * - Layout → change from horizontal scroll to grid
 * - Images → replace files in public/images/campaign-*.jpg
 * =================================================================== */

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CAMPAIGNS } from "@/lib/constants";

export default function CampaignsSection() {
  return (
    <section id="campaigns" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="badge-primary mb-4 inline-block">ACTIVE CAMPAIGNS</span>
          <h2 className="section-heading">Join the Movement</h2>
          <p className="section-subtitle">
            Current initiatives where your support can make an immediate and lasting difference.
          </p>
        </motion.div>

        {/* Campaigns Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-3 lg:overflow-visible">
          {CAMPAIGNS.map((campaign, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group min-w-[300px] sm:min-w-[340px] lg:min-w-0 snap-start"
              id={`campaign-${index}`}
            >
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-card cursor-pointer">
                <Image
                  src={campaign.image}
                  alt={campaign.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 340px, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="badge bg-white/20 backdrop-blur-sm text-white text-[10px] mb-2 inline-block">
                    {campaign.category}
                  </span>
                  <h3 className="font-heading text-heading-sm text-white mb-1">
                    {campaign.title}
                  </h3>
                </div>
              </div>
              <div className="mt-4 px-1">
                <p className="text-body-sm text-[#6B6B6B] line-clamp-2 mb-3">
                  {campaign.description}
                </p>
                <Link
                  href={campaign.link}
                  className="inline-flex items-center gap-1 text-body-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
