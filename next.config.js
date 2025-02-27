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
}

module.exports = nextConfig 