/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    turbo: {
      enabled: false,
    },
  },
  images: {
    domains: ["res.cloudinary.com"], // ✅ Allow Cloudinary image host
  },
};

export default nextConfig;
