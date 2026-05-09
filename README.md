# DAY Foundation — NGO Platform Website

A modern, production-grade website for **DAY Foundation (BHTDAY Welfare Foundation)** — a Section 8, NITI Aayog-registered NGO empowering communities through Education, Aid, Youth, and Care.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (staging) → Hostinger (production)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/          → Pages (Next.js App Router)
├── components/   → Reusable UI components
├── lib/          → Utilities & constants
└── hooks/        → Custom React hooks
```

## Key Files

| File | Purpose |
|---|---|
| `src/lib/constants.ts` | All site text, data, and links |
| `tailwind.config.ts` | Design system (colors, fonts, spacing) |
| `src/app/globals.css` | Global styles and utility classes |
| `HELP.md` | Comprehensive editing guide |
| `ASSETS.md` | Image asset inventory |
| `ROADMAP.md` | Development roadmap |

## Documentation

- **[HELP.md](./HELP.md)** — Complete guide to modifying every component
- **[ASSETS.md](./ASSETS.md)** — Image asset inventory with replacement guide
- **[ROADMAP.md](./ROADMAP.md)** — Development phases and timeline
- **[CHANGELOG.md](./CHANGELOG.md)** — Version history

## Organization

**DAY Foundation (BHTDAY Welfare Foundation)**
- Founded: 12th April 2022
- Registration: Section 8, NITI Aayog
- Active Cities: Delhi, Indore, Jabalpur
- Website: [dayfoundation.in](https://dayfoundation.in)
- Email: info@dayfoundation.in

## License

© 2024 DAY Foundation. All rights reserved.
