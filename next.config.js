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
    domains: ['dxeikk2e6c.ufs.sh'],
    formats: ['image/avif', 'image/webp'],
  },
  // No need for custom headers - Cloudflare will handle caching
  poweredByHeader: false,
}

module.exports = nextConfig 