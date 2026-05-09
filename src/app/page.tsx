/* ===================================================================
 * Page: Homepage
 * File: src/app/page.tsx
 * ===================================================================
 * The landing page assembles all homepage sections in order.
 * Each section is a separate component file for easy editing.
 * 
 * TO CUSTOMIZE:
 * - Reorder sections → rearrange the component order below
 * - Remove a section → delete or comment out the import + usage
 * - Add a new section → create component in src/components/home/
 *   and import + place it in the desired position
 * =================================================================== */

import HeroSection from "@/components/home/HeroSection";
import MissionVision from "@/components/home/MissionVision";
import ImpactStats from "@/components/home/ImpactStats";
import FocusAreas from "@/components/home/FocusAreas";
import StoriesSection from "@/components/home/StoriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CampaignsSection from "@/components/home/CampaignsSection";
import GallerySection from "@/components/home/GallerySection";
import VolunteerCTA from "@/components/home/VolunteerCTA";
import DonationCTA from "@/components/home/DonationCTA";
import FAQPreview from "@/components/home/FAQPreview";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — Full-screen landing with CTA */}
      <HeroSection />

      {/* 2. Mission & Vision — Side-by-side cards */}
      <MissionVision />

      {/* 3. Impact Statistics — Animated counters */}
      <ImpactStats />

      {/* 4. Focus Areas — 4-column grid */}
      <FocusAreas />

      {/* 5. Impact Stories — Editorial storytelling */}
      <StoriesSection />

      {/* 6. Testimonials — Quote cards */}
      <TestimonialsSection />

      {/* 8. Active Campaigns — Image overlay cards */}
      <CampaignsSection />

      {/* 9. Gallery — Masonry photo grid */}
      <GallerySection />

      {/* 10. Volunteer CTA — Two-column with image */}
      <VolunteerCTA />

      {/* 11. Donation CTA — Credentials + gradient block */}
      <DonationCTA />

      {/* 12. FAQ Preview — Top 3 questions */}
      <FAQPreview />
    </>
  );
}
