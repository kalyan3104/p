import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "medapallikalyan.me",
          },
        ],
        permanent: true,
        destination: "https://medapallikalyan.me/:path*",
      },
    ]
  },
  images: {
    domains: ["medapallikalyan.me", "res.cloudinary.com"],
  },
}

export default nextConfig

