/* ===================================================================
 * Page: Impact
 * File: src/app/impact/page.tsx
 * ===================================================================
 * Impact stories and reports page with:
 * - Featured story hero
 * - Category filter tabs
 * - Story cards grid
 * - Impact statistics
 * - Transparency report link
 * 
 * TO CUSTOMIZE:
 * - Stories → edit STORIES in src/lib/constants.ts
 * - Stats → edit IMPACT_STATS in src/lib/constants.ts
 * - Filter categories → modify the CATEGORIES array below
 * - Images → replace in public/images/campaign-*.jpg
 * =================================================================== */

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3 } from "lucide-react";
import { CAMPAIGNS, IMPACT_STATS, STORIES } from "@/lib/constants";

const CATEGORIES = ["All Stories", "Education", "Healthcare", "Livelihood", "Volunteer Stories"];

export default function ImpactPage() {
  const [activeCategory, setActiveCategory] = useState("All Stories");
  const impactItems = [
    ...STORIES.map((item) => ({ ...item, type: "story" as const })),
    ...CAMPAIGNS.map((item) => ({ ...item, type: "campaign" as const })),
  ];
  const filteredItems =
    activeCategory === "All Stories"
      ? impactItems
      : impactItems.filter((item) => item.category === activeCategory);
  const featured = STORIES[0];

  return (
    <>
      {/* ── Featured Story Hero ── */}
      <section className="pt-20">
        <div className="relative h-[60vh] min-h-[400px]">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="badge bg-primary text-white mb-4 inline-block">Featured Story</span>
                <h1 className="font-heading text-display-xl text-white mb-4 max-w-2xl">
                  {featured.title}
                </h1>
                <p className="text-body-lg text-white/80 max-w-xl mb-6">
                  {featured.description}
                </p>
                <Link href={featured.link} className="btn-primary bg-white text-primary hover:bg-cream">
                  Read Full Story <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <section className="py-8 bg-white border-b border-border-light sticky top-16 md:top-20 z-40 backdrop-blur-md bg-white/90">
        <div className="container-custom">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-body-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-warm"
                    : "bg-surface-muted text-[#6B6B6B] hover:bg-cream"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stories Grid ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((story, index) => (
              <motion.div
                key={`${story.type}-${story.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group card-base overflow-hidden"
                id={`${story.type}-${story.id}`}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="badge-primary text-[10px] mb-3 inline-block">{story.category}</span>
                  <h3 className="font-heading text-heading-md text-[#1A1A1A] mb-2">{story.title}</h3>
                  <p className="text-body-sm text-[#6B6B6B] line-clamp-3 mb-4">{story.description}</p>
                  <Link href={story.link} className="inline-flex items-center gap-1 text-body-sm font-semibold text-primary hover:gap-2 transition-all">
                    {story.type === "campaign" ? "Learn More" : "Read More"} <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}

            {filteredItems.length === 0 && (
              <div className="md:col-span-2 lg:col-span-3 text-center py-12">
                <p className="text-body-lg text-[#6B6B6B]">No stories found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Impact Stats ── */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-heading">Impact by Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT_STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-3xl bg-white shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="text-primary" size={22} />
                </div>
                <p className="font-heading text-display-md text-primary font-bold">{stat.value}</p>
                <p className="text-body-sm font-semibold text-[#1A1A1A] mt-1">{stat.label}</p>
                <p className="text-caption text-[#6B6B6B]">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
