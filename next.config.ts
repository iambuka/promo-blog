import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // Good for static hosting so `/about` becomes `/about/`
  trailingSlash: true,

  // Optional but useful for static export (avoids build failing on minor issues)
  // Note: 'eslint' and 'typescript' are not valid NextConfig options. Move these to a separate
  // 'eslint.config.js' and 'tsconfig.json' file instead, or remove them from next.config.ts.
  
  images: {
    // When exporting static sites, Next Image Optimization is not available.
    // This must be true if you use <Image />
    unoptimized: true,

    // remotePatterns are ignored when unoptimized=true, but keeping them is harmless.
    // You can remove them if you want.
    remotePatterns: [
      { protocol: "https", hostname: "bet25.com" },
      { protocol: "https", hostname: "www.figma.com" },
    ],
  },
};

export default nextConfig;
