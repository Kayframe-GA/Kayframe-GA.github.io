/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;