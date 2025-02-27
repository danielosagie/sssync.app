/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep configuration minimal
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.ufs.sh",
        pathname: "/f/**",
      },
    ],
  },
  // Add these optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
}

module.exports = nextConfig 