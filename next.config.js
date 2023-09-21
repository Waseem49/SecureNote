/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // serverActions: true,
    appDir: true,
    serverComponentsExternalPackages: ["mongoose", "jsonwebtoken", "bcryptjs"],
  },
  images: {
    domains: ["i.ibb.co"],
  },
};

module.exports = nextConfig;

