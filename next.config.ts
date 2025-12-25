import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "bet25.com" },
      { protocol: "https", hostname: "www.figma.com" },
    ],
    // IMPORTANT for static export if you use next/image
    unoptimized: true,
  },
};

export default nextConfig;