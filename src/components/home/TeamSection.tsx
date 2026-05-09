/* ===================================================================
 * Component: TeamSection
 * File: src/components/home/TeamSection.tsx
 * ===================================================================
 * Leadership team display with:
 * - Circular/rounded portrait images
 * - Name, role, and bio
 * - Hover scale effect
 * - Staggered entrance animation
 * 
 * TO CUSTOMIZE:
 * - Team members → edit TEAM_MEMBERS in src/lib/constants.ts
 * - Images → replace files in public/images/team-*.jpg
 * - Card style → modify rounded/shadow classes
 * - Grid layout → change grid-cols for more/fewer columns
 * =================================================================== */

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TEAM_BY_CATEGORY } from "@/lib/constants";

type Category = keyof typeof TEAM_BY_CATEGORY;
const CATEGORIES = Object.keys(TEAM_BY_CATEGORY) as Category[];
const PER_PAGE = 3;

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState<Category>("Central");
  const [page, setPage] = useState(0);

  const members = TEAM_BY_CATEGORY[activeTab];
  const totalPages = Math.ceil(members.length / PER_PAGE);
  const visible = members.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const handleTab = (tab: Category) => {
    setActiveTab(tab);
    setPage(0);
  };

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="badge-primary mb-4 inline-block">OUR PEOPLE</span>
          <h2 className="section-heading">Leadership with Heart</h2>
          <p className="section-subtitle">
            Meet the dedicated individuals anchoring our vision through hands-on service and strategic compassion.
          </p>
        </motion.div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleTab(cat)}
              className={`px-5 py-2 rounded-full text-body-sm font-semibold transition-all duration-300 border-2 ${
                activeTab === cat
                  ? "bg-primary text-white border-primary shadow-warm"
                  : "bg-white text-[#4A4A4A] border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards + Arrows */}
        <div className="relative flex items-center gap-4">
          {/* Prev */}
          <button
            onClick={prev}
            disabled={page === 0}
            className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-border flex items-center justify-center text-[#6B6B6B] hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards */}
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${page}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visible.map((member, i) => (
                  <div
                    key={member.name}
                    className="group card-base overflow-hidden"
                  >
                    {/* Photo */}
                    <div className="relative w-full aspect-[3/3.2] overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    {/* Info */}
                    <div className="p-5 text-center">
                      <h3 className="font-heading text-heading-sm text-[#1A1A1A] mb-1">
                        {member.name}
                      </h3>
                      <p className="text-body-sm font-medium text-primary">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next */}
          <button
            onClick={next}
            disabled={page >= totalPages - 1}
            className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-border flex items-center justify-center text-[#6B6B6B] hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-6 h-2.5 bg-primary"
                    : "w-2.5 h-2.5 bg-border-dark hover:bg-primary/50"
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
