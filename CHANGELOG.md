# Changelog

All notable changes to the DAY Foundation website will be documented in this file.

## [1.0.0] — 2026-05-09

### Phase 1: Frontend Architecture & Design

#### Added
- **Project Setup**: Next.js 15 App Router with TypeScript, Tailwind CSS, Framer Motion
- **Design System**: Complete color palette (terracotta primary, sage green secondary, cream backgrounds), fluid typography (Playfair Display + Inter), 8px spacing grid, custom animations
- **Navbar**: Responsive navigation with scroll-triggered blur effect, mobile hamburger menu with Framer Motion animations, accessibility support
- **Homepage**: 11 sections — Hero, Mission/Vision, Impact Stats, Focus Areas, Stories, Testimonials, Campaigns, Gallery, Volunteer CTA, Donation CTA, FAQ Preview
- **About Page**: Organization story, core values, team section, credentials of trust
- **Programs Page**: Detailed program cards with alternating layouts
- **Impact Page**: Featured story hero, category filters, story grid, impact statistics
- **Get Involved Page**: Volunteer opportunities, internship info, donation form with amount grid
- **Contact Page**: Contact form, office info, active cities, expansion plans, India map
- **FAQ Page**: Searchable FAQ with category quick-links, animated accordion
- **Footer**: Brand section, three-column links, social icons, legal info
- **Documentation**: README.md, HELP.md (comprehensive editing guide), ASSETS.md (image inventory), ROADMAP.md, CHANGELOG.md
- **AI-Generated Images**: 15+ placeholder images for all sections
- **SEO**: Complete metadata, OpenGraph, Twitter cards

#### Technical
- Centralized constants (`src/lib/constants.ts`) for all site content
- Reusable utility classes in `globals.css`
- Tailwind-merge utility for class composition
- `.gitignore` for clean version control
- `.prettierrc` for consistent formatting
- Real DAY Foundation data from official Central Information Sheet
