/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
    images: {
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    }
}
=======
  output: "export",
  images: {
    domains: ["giaiphap.xyz"],
    formats: ["image/avif", "image/webp"],
  },
};
>>>>>>> 0feb511ea80beb29f2c6e61c1d6645925bc4e012

module.exports = nextConfig;
