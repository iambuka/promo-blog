import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bet25.com',
      },
      {
        protocol: 'https',
        hostname: 'www.figma.com',
      },
    ],
  },
};

export default nextConfig;
