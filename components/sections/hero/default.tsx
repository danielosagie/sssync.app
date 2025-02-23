"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, Store } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import Glow from "@/components/ui/glow";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { useSearchParams } from "next/navigation";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";

function WorldMapDemo() {
  return (
    <div className="py-40 dark:bg-black bg-white w-full">
      {/* ... rest of WorldMapDemo implementation ... */}
    </div>
  );
}

export default function Hero() {
  const searchParams = useSearchParams();
  const source = searchParams.get("source");

  return (
    <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0 m-5">
      <div className="mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          <FadeInSection>
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                Coming in Private Beta
              </span>
              <a
                href="/onboarding?source=learn_more"
                className="flex items-center gap-1"
              >
                Join Beta
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          </FadeInSection>

          <div className="space-y-8 w-full">
            <FadeInSection delay={0.1}>
              <div className="flex flex-col text-left items-center">
                <h1 className="text-4xl md:text-6xl font-bold text-lime-600 mb-4">
                  Connect, Sync & Fulfill
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold text-black dark:text-white">
                  Say Goodbye To Stockouts & Extra Inventory
                </h2>
                <p className="text-sm md:text-lg text-center text-neutral-500 max-w-2xl mx-auto py-4 px-4">
                 Build your own supply & fulfillment network to never lose a sale to stockouts again. Seamlessly update your inventory and join a trusted marketplace of merchants to ensure all of your orders are fulfilled&mdash;even when you&apos;re out of stock.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-4 w-full sm:w-auto mx-4 sm:mx-8">
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="w-full sm:w-auto text-xs sm:text-sm md:text-base"
                >
                  <a href="/onboarding?source=hero_cta">Try Demo</a>
                </Button>
                <Button 
                  variant="default" 
                  className="bg-lime-600 w-full sm:w-auto text-xs sm:text-sm md:text-base" 
                  size="lg" 
                  asChild
                >
                  <a href="/onboarding?source=marketplace_cta">
                    <Store className="mr-2 h-4 w-4" /> Join Marketplace
                  </a>
                </Button>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="py-8 dark:bg-black bg-white w-full rounded-xl">
                <WorldMap
                  lineColor="#65a30d"
                  dots={[
                    {
                      start: { lat: 33.7490, lng: -84.3880 }, // Atlanta
                      end: { lat: 40.7128, lng: -74.0060 }, // New York
                    },
                    {
                      start: { lat: 64.2008, lng: -149.4937 }, // Alaska
                      end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
                    },
                    {
                      start: { lat: 64.2008, lng: -149.4937 }, // Alaska
                      end: { lat: -15.7975, lng: -47.8919 }, // Brazil
                    },
                    {
                      start: { lat: 51.5074, lng: -0.1278 }, // London
                      end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                    },
                    {
                      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                      end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                    },
                    {
                      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                      end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                    },
                  ]}
                />
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.4}>
            <div className="relative pt-12">
              <MockupFrame
                className="animate-appear"
                size="small"
              >
                <Mockup type="responsive">
                  <Image
                    src="/assets/landing_page_sssync.png"
                    alt="sssync.app dashboard preview"
                    width={1248}
                    height={765}
                    className="rounded-md"
                  />
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="animate-appear-zoom"
              />
            </div>
          </FadeInSection>
        </div>
      </div>
    </Section>
  );
}
