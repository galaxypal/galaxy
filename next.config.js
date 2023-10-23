/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["paw-fury-be.vercel.app", "localhost", "github.com"],
  },
};

module.exports = nextConfig;
