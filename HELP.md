# DAY Foundation — Developer Help Guide

> **Purpose**: This is your comprehensive reference for modifying ANY part of the website.
> Find the section you want to change, read the guide, and edit the correct file.

---

## Table of Contents

1. [Quick Reference — File Map](#quick-reference--file-map)
2. [Global Configuration](#global-configuration)
3. [Navbar](#navbar)
4. [Footer](#footer)
5. [Homepage Sections](#homepage-sections)
6. [About Page](#about-page)
7. [Programs Page](#programs-page)
8. [Impact Page](#impact-page)
9. [Get Involved Page](#get-involved-page)
10. [Contact Page](#contact-page)
11. [FAQ Page](#faq-page)
12. [Design System](#design-system)
13. [Images & Assets](#images--assets)
14. [Routing](#routing)
15. [Adding New Pages](#adding-new-pages)
16. [Adding New Components](#adding-new-components)
17. [Admin Architecture (Future)](#admin-architecture-future)
18. [Deployment](#deployment)

---

## Quick Reference — File Map

```
src/
├── app/
│   ├── layout.tsx          ← Root layout (fonts, SEO, navbar/footer wrapper)
│   ├── page.tsx            ← Homepage (assembles all sections)
│   ├── globals.css         ← Global styles, design tokens, utility classes
│   ├── about/page.tsx      ← About page
│   ├── programs/page.tsx   ← Programs page
│   ├── impact/page.tsx     ← Impact stories page
│   ├── get-involved/page.tsx ← Volunteer + donate page
│   ├── contact/page.tsx    ← Contact form page
│   └── faq/page.tsx        ← FAQ page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      ← Navigation bar
│   │   └── Footer.tsx      ← Footer
│   └── home/
│       ├── HeroSection.tsx
│       ├── MissionVision.tsx
│       ├── ImpactStats.tsx
│       ├── FocusAreas.tsx
│       ├── StoriesSection.tsx
│       ├── TeamSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── CampaignsSection.tsx
│       ├── EventsSection.tsx
│       ├── GallerySection.tsx
│       ├── VolunteerCTA.tsx
│       ├── DonationCTA.tsx
│       ├── FAQPreview.tsx
│       └── Newsletter.tsx
├── lib/
│   ├── constants.ts        ← ALL site text, data, links (edit here first!)
│   └── utils.ts            ← Tailwind class merge utility
└── hooks/
    └── useScrollAnimation.ts ← Scroll-based animation hook
```

---

## Global Configuration

### Change site-wide text, links, or data
**File**: `src/lib/constants.ts`

This is the **#1 file to edit** for content changes. It contains:
- `NAV_LINKS` — Navigation menu items
- `NAV_CTA` — Navigation CTA buttons
- `ORG_INFO` — Organization name, emails, phone, cities, links, funding policy
- `HERO_CONTENT` — Hero section text and stats
- `MISSION_VISION` — Mission and Vision card content
- `FOCUS_AREAS` — Four focus area cards
- `IMPACT_STATS` — Impact statistics numbers
- `TEAM_MEMBERS` — Central management team
- `CITY_MANAGEMENT` — City-level management
- `TESTIMONIALS` — Testimonial quotes
- `CAMPAIGNS` — Campaign/story cards
- `INTERNSHIP_INFO` — Internship program details
- `EVENTS` — Event listings
- `FAQ_ITEMS` — FAQ questions and answers
- `CREDENTIALS` — Trust credentials
- `FUTURE_VISION` — Future plans list
- `FOOTER_LINKS` — Footer link columns

### Change fonts
**File**: `src/app/layout.tsx` (lines 20-33)
- Heading font: `Playfair_Display` (currently)
- Body font: `Inter` (currently)
- Change the Google Font imports and update `variable` names

### Change SEO metadata
**File**: `src/app/layout.tsx` (metadata export, lines 36-78)
- Title, description, keywords, OpenGraph, Twitter cards

### Change colors
**File**: `tailwind.config.ts` (colors section)
- `primary` → Terracotta (#C4572A) — main CTA color
- `secondary` → Sage green (#5B7A5E) — trust/growth accent
- `cream` → Warm background (#FDF6EE)
- `rose` → Soft accent (#FDEEE8)

### Change global CSS / utilities
**File**: `src/app/globals.css`
- Design tokens (CSS custom properties)
- `.section-padding` — vertical padding for all sections
- `.container-custom` — max-width wrapper
- `.card-base` — default card styling
- `.btn-primary` / `.btn-secondary` — button styles
- `.badge-primary` / `.badge-secondary` — badge styles

---

## Navbar

**File**: `src/components/layout/Navbar.tsx`

| What to change | Where to edit |
|---|---|
| Logo text/image | Search for `{ORG_INFO.name}` — replace with `<Image>` tag |
| Nav links | `src/lib/constants.ts` → `NAV_LINKS` |
| CTA buttons | `src/lib/constants.ts` → `NAV_CTA` |
| Background color (scrolled) | Line with `bg-white/90 backdrop-blur-md` |
| Background color (top) | Line with `bg-transparent` |
| Height | Line with `h-16 md:h-20` |
| Link hover color | Line with `hover:text-primary` |
| Hover underline | Line with `bg-primary` in the `<span>` under links |
| Mobile menu style | `AnimatePresence` block near bottom |
| Scroll threshold | `window.scrollY > 20` — change the number |

---

## Footer

**File**: `src/components/layout/Footer.tsx`

| What to change | Where to edit |
|---|---|
| Brand text | Uses `ORG_INFO.name` from constants |
| Description | Uses `ORG_INFO.description` from constants |
| Social links | `src/lib/constants.ts` → `ORG_INFO.social` |
| Footer columns | `src/lib/constants.ts` → `FOOTER_LINKS` |
| Background color | Line with `bg-[#1A1A1A]` |
| Legal text | Bottom bar with `ORG_INFO.fullName` |
| Email/location | Bottom bar with `ORG_INFO.email` |

---

## Homepage Sections

The homepage (`src/app/page.tsx`) assembles 14 sections in order. Each section is a separate file.

### 1. Hero Section
**File**: `src/components/home/HeroSection.tsx`

| What to change | Where to edit |
|---|---|
| Heading, description, CTA | `src/lib/constants.ts` → `HERO_CONTENT` |
| Badge text | `HERO_CONTENT.badge` |
| Statistics row | `HERO_CONTENT.stats` array |
| Hero image | Replace `public/images/hero-main.jpg` |
| Background color | `bg-cream` on the section element |
| Floating card text | Hardcoded in the component (search "10+ Years") |
| Background blobs | Decorative `div`s with `bg-primary-100` and `bg-rose` |
| Animation timing | `transition={{ delay: X }}` values |

### 2. Mission & Vision
**File**: `src/components/home/MissionVision.tsx`

| What to change | Where to edit |
|---|---|
| Text content | `src/lib/constants.ts` → `MISSION_VISION` |
| Card background | Mission: `bg-white`, Vision: `bg-cream` |
| Icons | `Heart` and `Eye` imports from lucide-react |
| Bullet point icon | `CheckCircle2` — change icon or color |

### 3. Impact Statistics
**File**: `src/components/home/ImpactStats.tsx`

| What to change | Where to edit |
|---|---|
| Statistics | `src/lib/constants.ts` → `IMPACT_STATS` |
| Icons | `ICONS` array at top of file |
| Background gradient | `bg-gradient-to-br from-primary-50 via-cream to-rose` |
| Card style | `bg-white/80 backdrop-blur-sm rounded-3xl` |

### 4. Focus Areas
**File**: `src/components/home/FocusAreas.tsx`

| What to change | Where to edit |
|---|---|
| Focus areas | `src/lib/constants.ts` → `FOCUS_AREAS` |
| Icons | `ICON_MAP` object at top of file |
| Images | Replace `public/images/focus-*.jpg` |
| Grid columns | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` |

### 5. Impact Stories
**File**: `src/components/home/StoriesSection.tsx`

| What to change | Where to edit |
|---|---|
| Stories | `src/lib/constants.ts` → `CAMPAIGNS` |
| Featured story | First item in CAMPAIGNS array |
| Images | Replace `public/images/campaign-*.jpg` |

### 6. Team / Leadership
**File**: `src/components/home/TeamSection.tsx`

| What to change | Where to edit |
|---|---|
| Team members | `src/lib/constants.ts` → `TEAM_MEMBERS` |
| Portrait images | Replace `public/images/team-*.jpg` |
| Portrait shape | `rounded-3xl` — change to `rounded-full` for circles |
| Grid columns | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` |

### 7. Testimonials
**File**: `src/components/home/TestimonialsSection.tsx`

| What to change | Where to edit |
|---|---|
| Testimonials | `src/lib/constants.ts` → `TESTIMONIALS` |
| Avatar images | Replace `public/images/testimonial-*.jpg` |
| Card background | `bg-white rounded-3xl` |
| Quote icon | `Quote` from lucide-react |

### 8. Campaigns
**File**: `src/components/home/CampaignsSection.tsx`

| What to change | Where to edit |
|---|---|
| Campaigns | `src/lib/constants.ts` → `CAMPAIGNS` |
| Images | Replace `public/images/campaign-*.jpg` |
| Card overlay | `bg-gradient-to-t from-black/70 via-black/20 to-transparent` |

### 9. Events
**File**: `src/components/home/EventsSection.tsx`

| What to change | Where to edit |
|---|---|
| Events | `src/lib/constants.ts` → `EVENTS` |
| Images | Replace `public/images/event-*.jpg` |
| RSVP button | `<button>` at the end of each card |

### 10. Gallery
**File**: `src/components/home/GallerySection.tsx`

| What to change | Where to edit |
|---|---|
| Gallery images | `GALLERY_IMAGES` array inside the file |
| Image files | Replace `public/images/gallery-*.jpg` |
| Grid layout | `grid-cols-2 md:grid-cols-3` and `auto-rows-[200px]` |
| Image span (tall) | `row-span-2` class on specific items |

### 11. Volunteer CTA
**File**: `src/components/home/VolunteerCTA.tsx`

| What to change | Where to edit |
|---|---|
| Heading | `HEADING` constant inside the file |
| Description | `DESCRIPTION` constant inside the file |
| Highlight points | `POINTS` array inside the file |
| Image | Replace `public/images/volunteer-cta.jpg` |
| CTA buttons | `<Link>` tags near bottom |

### 12. Donation CTA
**File**: `src/components/home/DonationCTA.tsx`

| What to change | Where to edit |
|---|---|
| Credentials | `src/lib/constants.ts` → `CREDENTIALS` |
| CTA heading | Hardcoded: "Every Contribution Creates Ripples of Change" |
| CTA description | Below the heading in the gradient block |
| Gradient colors | `bg-gradient-to-r from-primary to-primary-light` |
| Buttons | "Donate Now" and "View Transparency Report" links |

### 13. FAQ Preview
**File**: `src/components/home/FAQPreview.tsx`

| What to change | Where to edit |
|---|---|
| FAQ questions | `src/lib/constants.ts` → `FAQ_ITEMS` |
| Number shown | `.slice(0, 3)` — change 3 to show more |
| "View All" link | `<Link href="/faq">` near bottom |

### 14. Newsletter
**File**: `src/components/home/Newsletter.tsx`

| What to change | Where to edit |
|---|---|
| Heading | Hardcoded: "Stay updated with our journey." |
| Description | Below the heading |
| Form action | `handleSubmit` function (connect to API) |
| Social link | `@DAYFoundation` link near bottom |

---

## About Page
**File**: `src/app/about/page.tsx`

Contains 4 sections: Story, Core Values, Team, Credentials.
- Story text is hardcoded in the file
- Team uses `TEAM_MEMBERS` from constants
- Credentials uses `CREDENTIALS` from constants
- Values are hardcoded as an inline array

---

## Programs Page
**File**: `src/app/programs/page.tsx`

- Uses `FOCUS_AREAS` from constants for program cards
- Alternating left/right layout (image + text)
- Add more programs by adding to `FOCUS_AREAS` array

---

## Impact Page
**File**: `src/app/impact/page.tsx`

- Featured story hero at the top (hardcoded image reference)
- Category filter tabs (`CATEGORIES` array in file)
- Story cards from `CAMPAIGNS` constant
- Impact stats from `IMPACT_STATS` constant

---

## Get Involved Page
**File**: `src/app/get-involved/page.tsx`

- Volunteer opportunities (`OPPORTUNITIES` array in file)
- Donation section with amount grid (`AMOUNTS` array in file)
- Connect forms to real APIs in Phase 2

---

## Contact Page
**File**: `src/app/contact/page.tsx`

- Contact info from `ORG_INFO` in constants
- Form fields: name, email, subject, message
- Presence section uses `ORG_INFO.activeCities` and `ORG_INFO.expansionCities`
- Connect form to real API in Phase 2

---

## FAQ Page
**File**: `src/app/faq/page.tsx`

- Full searchable FAQ from `FAQ_ITEMS` in constants
- Category quick-links (`CATEGORIES` array in file)
- Search filters by question and answer text
- "Still have questions?" CTA at bottom

---

## Design System

### Colors (tailwind.config.ts)
| Token | Value | Usage |
|---|---|---|
| `primary` | #C4572A | CTAs, links, accents |
| `primary-light` | #E8734A | Gradient endpoints |
| `secondary` | #5B7A5E | Trust badges, nature accents |
| `cream` | #FDF6EE | Warm backgrounds |
| `rose` | #FDEEE8 | Soft highlights |
| `surface` | #FFFFFF | Clean white |
| `surface-muted` | #F9F7F4 | Off-white sections |

### Typography
| Class | Font | Usage |
|---|---|---|
| `font-heading` | Playfair Display | All headings (h1-h6) |
| `font-body` | Inter | Body text, labels, nav |
| `text-display-xl` | Fluid 2.5-4.5rem | Page titles |
| `text-display-md` | Fluid 1.75-2.75rem | Section headings |
| `text-heading-lg` | Fluid 1.5-2.25rem | Sub-headings |
| `text-body-lg` | 1.125rem | Lead paragraphs |
| `text-body-md` | 1rem | Body text |
| `text-body-sm` | 0.875rem | Captions, labels |

### Utility Classes (globals.css)
| Class | Purpose |
|---|---|
| `.section-padding` | Consistent section vertical padding |
| `.container-custom` | Centered max-width container |
| `.card-base` | Default card with hover lift |
| `.btn-primary` | Primary button (filled) |
| `.btn-secondary` | Secondary button (outlined) |
| `.badge-primary` | Primary badge |
| `.badge-secondary` | Secondary badge |
| `.section-heading` | Section title style |
| `.section-subtitle` | Section description style |

---

## Images & Assets

See `ASSETS.md` for the complete image inventory with sizes and copy commands.

---

## Routing

| Route | File | Purpose |
|---|---|---|
| `/` | `src/app/page.tsx` | Homepage |
| `/about` | `src/app/about/page.tsx` | About |
| `/programs` | `src/app/programs/page.tsx` | Programs |
| `/impact` | `src/app/impact/page.tsx` | Impact Stories |
| `/get-involved` | `src/app/get-involved/page.tsx` | Volunteer + Donate |
| `/contact` | `src/app/contact/page.tsx` | Contact |
| `/faq` | `src/app/faq/page.tsx` | FAQ |

---

## Adding New Pages

1. Create a folder under `src/app/` (e.g., `src/app/blog/`)
2. Add a `page.tsx` file inside it
3. The route is automatically the folder name (`/blog`)
4. Add the link to `NAV_LINKS` or `FOOTER_LINKS` in constants

---

## Adding New Components

1. Create a `.tsx` file in the appropriate folder:
   - `src/components/home/` — homepage sections
   - `src/components/layout/` — layout components
   - `src/components/ui/` — reusable UI elements
2. Import and use in the relevant page
3. For homepage sections, import in `src/app/page.tsx`

---

## Admin Architecture (Future)

Planned for Phase 2+:
```
src/app/
├── admin/
│   ├── layout.tsx          ← Admin layout with sidebar
│   ├── page.tsx            ← Dashboard
│   ├── programs/page.tsx   ← Manage programs
│   ├── stories/page.tsx    ← Manage impact stories
│   ├── volunteers/page.tsx ← Manage volunteers
│   ├── donations/page.tsx  ← Donation tracking
│   └── settings/page.tsx   ← Site settings
├── api/
│   ├── auth/               ← NextAuth endpoints
│   ├── donations/          ← Razorpay integration
│   ├── contact/            ← Contact form handler
│   └── newsletter/         ← Newsletter subscription
```

Database schema (Prisma) will include:
- User, Volunteer, Intern, Donation, Program, Story, Event, FAQ, Contact models

---

## Deployment

### Vercel (Temporary)
1. Push to GitHub
2. Connect repo to Vercel
3. Vercel auto-detects Next.js and deploys
4. Set environment variables in Vercel dashboard

### Hostinger (Production)
1. Build: `npm run build`
2. Deploy the `.next/` output to Hostinger VPS
3. Or use Hostinger's Node.js hosting with `npm start`
4. Set up custom domain and SSL

### Environment Variables
Create `.env.local` for local development:
```env
# Future Phase 2 variables
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3000
RAZORPAY_KEY_ID=your-key
RAZORPAY_KEY_SECRET=your-secret
CLOUDINARY_CLOUD_NAME=your-cloud
CLOUDINARY_API_KEY=your-key
CLOUDINARY_API_SECRET=your-secret
```
