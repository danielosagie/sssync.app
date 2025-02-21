import { StackProvider, StackTheme } from "@stackframe/stack";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { stackServerApp } from "../stack";
import "./globals.css";
import { Provider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>
          <StackProvider app={stackServerApp}>
            <StackTheme>{children}</StackTheme>
          </StackProvider>
        </Provider>
      </body>
    </html>
  );
}
