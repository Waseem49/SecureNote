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
// "bcryptjs": "^2.4.3",
//"jsonwebtoken": "^9.0.1",
//"mongoose": "^7.3.1"
