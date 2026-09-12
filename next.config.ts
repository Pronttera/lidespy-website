import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // A static export ships no image optimizer, so next/image serves the
    // source files as they are.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
