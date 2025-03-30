import { StackProvider, StackTheme } from "@stackframe/stack";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { stackServerApp } from "../stack";
import "./globals.css";
import { Provider } from "./provider";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google' 
import { AnalyticsProviders } from "@/components/analytics-providers";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sssync.app' || 'https://www.sssync.app' || 'https://localhost:3000'),
  title: "sssync - Inventory Sync & Marketplace",
  description: "The easiest way to sync inventory across your marketplaces & create your own shared inventory marketplace",
  icons: {
    icon: '/assets/favicon.ico',
  },
  openGraph: {
    title: "sssync - Inventory Sync & Marketplace",
    description: "The easiest way to sync inventory across all your marketplaces & create your own shared inventory marketplace",
    images: "/assets/Cover_Ad.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <head>
        {/* Preconnect tags moved to head where they belong */}
        <link rel="preconnect" href="https://ufs.sh" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://ufs.sh" />
      </head>

      <body>
        {/* Google Tag Manager code */}
        <GoogleTagManager gtmId="GTM-PPD2JL8C" />
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PPD2JL8C"
        height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        
        {/* Media session fix */}
        <Script id="media-session-fix">
          {`
            window.MediaSession = window.MediaSession || {};
            window.MediaSession.prototype = window.MediaSession.prototype || {};
            window.MediaSession.prototype.setActionHandler = window.MediaSession.prototype.setActionHandler || function() {};
          `}
        </Script>
        
        {/* Move non-critical scripts inside body */}
        <Script src="https://critical-script.com/script.js" strategy="beforeInteractive" />
        <Script src="https://analytics.com/script.js" strategy="afterInteractive" />
        <Script src="https://non-critical.com/script.js" strategy="lazyOnload" />
      
        <Analytics />
        <Provider>
          <StackProvider app={stackServerApp}>
            <StackTheme>
              {children}
              <SpeedInsights />
            </StackTheme>
          </StackProvider>
        </Provider>
        
        {/* Load PostHog providers as a client component */}
        <AnalyticsProviders />
      </body>
    </html>
  );
}
