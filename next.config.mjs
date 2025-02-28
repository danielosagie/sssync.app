/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization settings
  images: {
    formats: ['image/avif', 'image/webp', 'image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['dxeikk2e6c.ufs.sh', 'res.cloudinary.com'],
  },
  
  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Cache headers for static assets
  async headers() {
    return [
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  experimental: {
    allowMiddlewareResponseBody: true,
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Add these performance optimizations
  poweredByHeader: false,
  compress: true,

  // Add output: 'standalone' for better serverless performance
  output: 'standalone',
};

export default nextConfig;
