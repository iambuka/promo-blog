import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ REQUIRED for static hosting
  output: "export",

  // Optional but recommended for static sites
  trailingSlash: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bet25.com",
      },
      {
        protocol: "https",
        hostname: "www.figma.com",
      },
    ],
  },
};

export default nextConfig;