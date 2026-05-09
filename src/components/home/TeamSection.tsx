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

import Image from "next/image";
import { motion } from "framer-motion";
import { TEAM_MEMBERS } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TeamSection() {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading">Leadership with Heart</h2>
          <p className="section-subtitle">
            Meet the people who anchor our vision and lead by example, through hands-on service and
            strategic compassion.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group text-center"
              id={`team-member-${index}`}
            >
              {/* Portrait */}
              <div className="relative w-56 h-56 mx-auto mb-6 rounded-3xl overflow-hidden shadow-card group-hover:shadow-card-hover transition-all duration-400">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="224px"
                />
              </div>

              {/* Info */}
              <h3 className="font-heading text-heading-md text-[#1A1A1A] mb-1">
                {member.name}
              </h3>
              <p className="text-body-sm font-medium text-primary mb-2">
                {member.role}
              </p>
              <p className="text-body-sm text-[#6B6B6B] max-w-xs mx-auto">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
