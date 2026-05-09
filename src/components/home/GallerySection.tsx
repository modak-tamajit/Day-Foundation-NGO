/* ===================================================================
 * Component: GallerySection
 * File: src/components/home/GallerySection.tsx
 * ===================================================================
 * Photo gallery masonry-style grid with:
 * - Mixed-size image tiles
 * - Hover overlay with caption
 * - Lightbox-style zoom potential
 * - Scroll-triggered stagger animation
 * 
 * TO CUSTOMIZE:
 * - Gallery images → add/remove items in GALLERY_IMAGES below
 * - Grid layout → change grid-cols and row-span classes
 * - Hover effect → modify the overlay opacity/background
 * - Images → replace files in public/images/gallery-*.jpg
 * =================================================================== */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* Gallery images — edit this array to add/remove photos */
const GALLERY_IMAGES = [
  { src: "/images/gallery-1.jpg", alt: "Community health camp in rural Bihar", span: "md:row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Children learning in digital classroom", span: "" },
  { src: "/images/gallery-3.jpg", alt: "Volunteer team distributing supplies", span: "" },
  { src: "/images/gallery-4.jpg", alt: "Women's livelihood training workshop", span: "md:row-span-2" },
  { src: "/images/gallery-5.jpg", alt: "Community gathering and celebration", span: "" },
  { src: "/images/gallery-6.jpg", alt: "Tree planting initiative", span: "" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function GallerySection() {
  return (
    <section id="gallery" className="section-padding bg-surface-muted">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="badge-secondary mb-4 inline-block">GALLERY</span>
          <h2 className="section-heading">Moments That Matter</h2>
          <p className="section-subtitle">
            A glimpse into the lives we touch and the communities we build together.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[220px]"
        >
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${image.span}`}
              id={`gallery-item-${index}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <p className="text-white text-body-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
