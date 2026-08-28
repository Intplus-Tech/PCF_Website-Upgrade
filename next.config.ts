import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve images straight from the CDN instead of proxying them through
    // Next's optimizer — the local Node connection to Sanity times out.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;