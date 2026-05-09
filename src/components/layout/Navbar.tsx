/* ===================================================================
 * Component: Navbar
 * File: src/components/layout/Navbar.tsx
 * ===================================================================
 * Responsive navigation bar with:
 * - Desktop horizontal links
 * - Mobile hamburger menu with slide-down animation
 * - Scroll-triggered background blur effect
 * - Active link highlighting
 * 
 * TO CUSTOMIZE:
 * - Navigation links → edit NAV_LINKS in src/lib/constants.ts
 * - CTA buttons → edit NAV_CTA in src/lib/constants.ts
 * - Colors → change bg/text classes below or edit tailwind.config.ts
 * - Logo → replace the text "DAY Foundation" with an <Image> component
 * =================================================================== */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, NAV_CTA, ORG_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* ── Scroll detection for background blur ── */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Close mobile menu on route change (via escape key) ── */
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      id="navbar"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-soft border-b border-border-light"
          : "bg-transparent"
      )}
    >
      <nav
        className="container-custom flex items-center justify-between h-16 md:h-20"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          id="nav-logo"
          className="flex items-center gap-2"
        >
          <Image
            src="/images/Logo.png"
            alt="DAY Foundation — Development And Youth"
            width={48}
            height={48}
            className={cn(
              "w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-300",
              !isScrolled && "bg-white/80 shadow-[0_4px_18px_rgba(158,62,26,0.18)] ring-1 ring-white/80"
            )}
            priority
          />
          <span
            className={cn(
              "font-heading text-lg md:text-xl font-bold text-primary transition-all duration-300",
              !isScrolled && "drop-shadow-[0_1px_8px_rgba(255,255,255,0.95)]"
            )}
          >
            {ORG_INFO.name}
          </span>
        </Link>

        {/* ── Desktop Links ── */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-body-sm font-medium text-[#4A4A4A] hover:text-primary transition-colors duration-300 relative group"
            >
              {link.label}
              {/* Hover underline animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}
        </div>

        {/* ── Desktop CTA Buttons ── */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href={NAV_CTA.donate.href}
            id="nav-donate-btn"
            className="btn-primary text-body-sm px-5 py-2.5"
          >
            {NAV_CTA.donate.label}
          </Link>
        </div>

        {/* ── Mobile Menu Toggle ── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl hover:bg-cream-100 transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          id="nav-mobile-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-border-light shadow-elevated overflow-hidden"
            id="nav-mobile-menu"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 text-body-md font-medium text-[#1A1A1A] hover:text-primary hover:bg-cream-100 rounded-xl transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="border-t border-border-light pt-4 mt-2 flex flex-col gap-3">
                <Link
                  href={NAV_CTA.donate.href}
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-center"
                >
                  {NAV_CTA.donate.label}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
