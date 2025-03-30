/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization settings
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['dxeikk2e6c.ufs.sh'],
  },
  
  // Strict optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Additional Optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'lucide-react', 
      'framer-motion', 
      '@radix-ui/react-icons',
      '@stackframe/stack',
      'posthog-js',
    ],
    serverActions: {
      bodySizeLimit: '2mb',
    },
    webpackBuildWorker: true,
    swcMinify: true,
    scrollRestoration: true,
    turbo: {
      resolveAlias: {
        // Prevent duplicate modules
        'react': require.resolve('react'),
        'react-dom': require.resolve('react-dom'),
      },
    },
  },
  
  // Cache headers for static assets
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/assets/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Webpack optimization
  webpack: (config, { dev, isServer }) => {
    // Split chunks more aggressively
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: 'framework',
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler|next)[\\/]/,
            priority: 40,
            chunks: 'all',
            enforce: true,
          },
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
            priority: 20,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `npm.${packageName.replace('@', '')}`;
            },
            priority: 10,
            minChunks: 1,
            reuseExistingChunk: true,
          },
        },
      };
    }
    
    // Add SVG optimization
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });
    
    return config;
  },
  
  // Add output: 'standalone' for better serverless performance
  output: 'standalone',
};

export default nextConfig;
