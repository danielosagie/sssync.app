import { Header } from "@/components/header";
import { StackProvider, StackTheme } from "@stackframe/stack";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { stackServerApp } from "../stack";
import "./globals.css";
import { Provider } from "./provider";
import { PostHogProviderWrapper } from '@/components/providers/posthog';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sssync.app' || 'https://www.sssync.app' || 'https://localhost:3000'),
  title: "sssync - Inventory Marketplace",
  description: "The easiest way to sync inventory across your marketplaces & create your own shared inventory marketplace",
  icons: {
    icon: '/assets/favicon.ico',
  },
  openGraph: {
    title: "sssync - Inventory Marketplace",
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
      <body>
        <Analytics />
        <PostHogProviderWrapper>
          <Provider>
            <StackProvider app={stackServerApp}>
              <StackTheme>
                {children}
              </StackTheme>
            </StackProvider>
          </Provider>
        </PostHogProviderWrapper>
      </body>
    </html>
  );
}
