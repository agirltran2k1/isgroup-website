/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["giaiphap.xyz"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
