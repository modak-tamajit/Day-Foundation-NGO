/* ===================================================================
 * Root Layout
 * File: src/app/layout.tsx
 * ===================================================================
 * This is the root layout for the entire application.
 * It wraps every page with:
 * - Google Fonts (Playfair Display + Inter)
 * - Global CSS
 * - Navbar (fixed, transparent-to-blur)
 * - Footer
 * - SEO metadata
 * 
 * TO CUSTOMIZE:
 * - Fonts → change the Google Font imports below
 * - SEO → edit the metadata object
 * - Global wrapper → add providers, analytics, etc.
 * =================================================================== */

import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* ── Font Configuration ── */
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

/* ── SEO Metadata ── */
export const metadata: Metadata = {
  metadataBase: new URL("https://dayfoundation.in"),
  title: {
    default: "DAY Foundation — Rooted in Compassion, Built for Impact",
    template: "%s | DAY Foundation",
  },
  description:
    "DAY Foundation (BHTDAY Welfare Foundation) is a Section 8, NITI Aayog-registered NGO empowering underprivileged communities across India through Education, Aid, Youth, and Care since 2022.",
  keywords: [
    "NGO India",
    "DAY Foundation",
    "community development",
    "healthcare",
    "education",
    "sustainable livelihood",
    "donate",
    "volunteer",
    "social impact",
  ],
  authors: [{ name: "DAY Foundation" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dayfoundation.in",
    siteName: "DAY Foundation",
    title: "DAY Foundation — Rooted in Compassion, Built for Impact",
    description:
      "Empowering underprivileged communities through Education, Aid, Youth, and Care since 2022.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DAY Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DAY Foundation",
    description: "Rooted in Compassion, Built for Impact.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/Logo.png",
    apple: "/images/Logo.png",
  },
};

/* ── Root Layout ── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased">
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
