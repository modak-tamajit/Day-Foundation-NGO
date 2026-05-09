/* ===================================================================
 * Component: Footer
 * File: src/components/layout/Footer.tsx
 * ===================================================================
 * Site-wide footer with:
 * - Organization branding and description
 * - Three-column link grid (Explore, Governance, Connect)
 * - Social media links
 * - Registration and legal information
 * 
 * TO CUSTOMIZE:
 * - Links → edit FOOTER_LINKS in src/lib/constants.ts
 * - Organization info → edit ORG_INFO in src/lib/constants.ts
 * - Colors → change bg/text classes below
 * - Layout → modify the grid columns in the main container
 * =================================================================== */

import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
  Mail,
  MapPin,
} from "lucide-react";
import { ORG_INFO, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="bg-[#1A1A1A] text-white"
      role="contentinfo"
    >
      {/* ── Main Footer Content ── */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* ── Brand Column ── */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-3 group"
              id="footer-logo"
            >
              <Image
                src="/images/Logo.png"
                alt="DAY Foundation"
                width={44}
                height={44}
                className="w-11 h-11 rounded-full opacity-90 group-hover:opacity-100 transition-all duration-300"
              />
              <span className="font-heading text-2xl font-bold text-white group-hover:text-primary-200 transition-colors">
                {ORG_INFO.name}
              </span>
            </Link>
            <p className="mt-4 text-body-sm text-gray-400 max-w-sm leading-relaxed">
              {ORG_INFO.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6" id="footer-social-links">
              {[
                { icon: Instagram, href: ORG_INFO.social.instagram, label: "Instagram" },
                { icon: Twitter, href: ORG_INFO.social.twitter, label: "Twitter" },
                { icon: Linkedin, href: ORG_INFO.social.linkedin, label: "LinkedIn" },
                { icon: Facebook, href: ORG_INFO.social.facebook, label: "Facebook" },
                { icon: Youtube, href: ORG_INFO.social.youtube, label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Link Columns ── */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-heading text-heading-sm text-white mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-gray-400 hover:text-primary-200 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Legal Info */}
          <p className="text-caption text-gray-500 text-center md:text-left">
            © {currentYear} {ORG_INFO.fullName}. {ORG_INFO.registrationType}.
          </p>

          {/* Contact Info */}
          <div className="flex items-center gap-6 text-caption text-gray-500">
            <a
              href={`mailto:${ORG_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-primary-200 transition-colors"
            >
              <Mail size={14} />
              {ORG_INFO.email}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} />
              {ORG_INFO.address.city}, {ORG_INFO.address.state}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
