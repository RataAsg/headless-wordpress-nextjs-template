import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: (process.env.REMOTE_PROTOCOL as "http" | "https") || "http",
        hostname: process.env.REMOTE_HOSTNAME || "localhost",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
