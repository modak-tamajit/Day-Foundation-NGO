import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ── DAY Foundation Color Palette ── */
      colors: {
        // Primary — warm terracotta
        primary: {
          DEFAULT: "#C4572A",
          light: "#E8734A",
          dark: "#9E3E1A",
          50: "#FEF3EE",
          100: "#FDEEE8",
          200: "#F9CEBA",
          300: "#F2A47D",
          400: "#E8734A",
          500: "#C4572A",
          600: "#9E3E1A",
          700: "#7A2E12",
          800: "#5C210D",
          900: "#3D1508",
        },
        // Secondary — sage green (trust & growth)
        secondary: {
          DEFAULT: "#5B7A5E",
          light: "#7FA882",
          dark: "#3D5A3F",
          50: "#F0F5F0",
          100: "#E0EBE1",
          200: "#C1D7C3",
          300: "#9BBF9E",
          400: "#7FA882",
          500: "#5B7A5E",
          600: "#3D5A3F",
          700: "#2E4530",
          800: "#1F2F21",
          900: "#101A11",
        },
        // Cream — warm background
        cream: {
          DEFAULT: "#FDF6EE",
          50: "#FFFCF9",
          100: "#FDF6EE",
          200: "#FAE8D4",
          300: "#F5D5B3",
          400: "#F0C292",
          500: "#E8A96B",
        },
        // Rose — soft accent
        rose: {
          DEFAULT: "#FDEEE8",
          light: "#FFF5F1",
          dark: "#F9D5C8",
        },
        // Warm text accents
        warm: {
          DEFAULT: "#8B6914",
          light: "#B8922E",
          dark: "#6B4F0E",
        },
        // Surface colors
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F9F7F4",
          card: "#FFFDF9",
        },
        // Border
        border: {
          DEFAULT: "#E8E0D8",
          light: "#F0EBE5",
          dark: "#D4C9BD",
        },
      },
      /* ── Typography ── */
      fontFamily: {
        heading: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Fluid type scale
        "display-xl": [
          "clamp(2.5rem, 5vw + 1rem, 4.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-lg": [
          "clamp(2rem, 4vw + 0.5rem, 3.5rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-md": [
          "clamp(1.75rem, 3vw + 0.5rem, 2.75rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "heading-lg": [
          "clamp(1.5rem, 2vw + 0.5rem, 2.25rem)",
          { lineHeight: "1.25", fontWeight: "600" },
        ],
        "heading-md": [
          "clamp(1.25rem, 1.5vw + 0.5rem, 1.75rem)",
          { lineHeight: "1.3", fontWeight: "600" },
        ],
        "heading-sm": [
          "clamp(1.125rem, 1vw + 0.5rem, 1.375rem)",
          { lineHeight: "1.35", fontWeight: "600" },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        caption: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
      },
      /* ── Spacing (8px grid) ── */
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "42": "10.5rem",
      },
      /* ── Max Width ── */
      maxWidth: {
        container: "1280px",
        "container-lg": "1440px",
        content: "720px",
      },
      /* ── Border Radius ── */
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      /* ── Box Shadow ── */
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.04)",
        card: "0 4px 20px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 8px 30px rgba(0, 0, 0, 0.1)",
        warm: "0 4px 20px rgba(196, 87, 42, 0.12)",
        elevated: "0 12px 40px rgba(0, 0, 0, 0.08)",
      },
      /* ── Animations ── */
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      /* ── Transitions ── */
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
