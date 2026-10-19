import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Keep in sync with IMAGE_HOST in app/pictures.ts
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vc6bfofuoftvo8ls.public.blob.vercel-storage.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
