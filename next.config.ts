import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow external image domains for development
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
