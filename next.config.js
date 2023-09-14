/** @type {import('next').NextConfig} */
const nextConfig = {
  //   experimental: {
  //     esmExternals: "loose", // <-- add this
  //     serverComponentsExternalPackages: ["mongoose"], // <-- and this
  //   },

  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
