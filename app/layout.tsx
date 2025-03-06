import { StackProvider, StackTheme } from "@stackframe/stack";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { stackServerApp } from "../stack";
import "./globals.css";
import { Provider } from "./provider";
import { PostHogProviderWrapper } from '@/components/providers/posthog';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import Script from "next/script";
import { PHProvider } from '@/components/posthog-provider';
import { GoogleTagManager } from '@next/third-parties/google' 

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
    description: "The easiest way to sync inventory across your marketplaces & create your own shared inventory marketplace",
    images: "/assets/landing_page_sssync.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>

      <GoogleTagManager gtmId="GTM-PPD2JL8C" />
      <Script id="media-session-fix">
        {`
          window.MediaSession = window.MediaSession || {};
          window.MediaSession.prototype = window.MediaSession.prototype || {};
          window.MediaSession.prototype.setActionHandler = window.MediaSession.prototype.setActionHandler || function() {};
        `}
      </Script>
      <link rel="preconnect" href="https://ufs.sh" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://ufs.sh" />
      <Script src="https://critical-script.com/script.js" strategy="beforeInteractive" />
      <Script src="https://analytics.com/script.js" strategy="afterInteractive" />
      <Script src="https://non-critical.com/script.js" strategy="lazyOnload" />

      

      <body>
        
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PPD2JL8C"
        height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
      
        <Analytics />
        <PHProvider>
          <PostHogProviderWrapper>
            <Provider>
              <StackProvider app={stackServerApp}>
                <StackTheme>
                  {children}
                  <GoogleTagManager gtmId="GTM-PPD2JL8C" />
                  <SpeedInsights />
                </StackTheme>
              </StackProvider>
            </Provider>
          </PostHogProviderWrapper>
        </PHProvider>
      </body>
    </html>
  );
}
