/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  allowedDevOrigins: process.env.NEXT_PUBLIC_ALLOWED_DEV_ORIGINS
    ? JSON.parse(process.env.NEXT_PUBLIC_ALLOWED_DEV_ORIGINS)
    : [],
};

module.exports = nextConfig;