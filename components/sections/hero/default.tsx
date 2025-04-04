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
import { motion } from "framer-motion";
import { usePostHog } from 'posthog-js/react';
import { FallbackImage } from "@/components/ui/fallback-image";
import WorldMapContainer from "@/components/world-map-container";



export default function Hero() {

  const searchParams = useSearchParams();
  const source = searchParams?.get("source") || null;
  const posthog = usePostHog();

  const trackCTA = (buttonName: string) => {
    posthog.capture('cta_click', {
      button: buttonName,
      page: window.location.pathname
    });
  };

  const trackWaitlist = () => {
    posthog.capture('waitlist_signup', {
      source: 'hero_section'
    })
  }

  return (
    <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <div className="mx-auto flex max-w-container flex-col gap-8 pt-8 sm:gap-12 sm:pt-16">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
          <FadeInSection>
            <Badge variant="outline" className="animate-appear w-full border-gray-700/15 drop-shadow-sm sm:w-auto">
              <div className="bg-lime-600 rounded-full w-2 h-2">

              </div>
              <span className="text-muted-foreground">
                Early Access Available Now
              </span>
              <a
                href="/onboarding?source=learn_more"
                onClick={() => trackCTA('learn_more')}
                className="flex items-center gap-1"
              >
                Learn More
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          </FadeInSection>

          <div className="space-y-6 w-full px-4 sm:px-0">
            <FadeInSection delay={0.1}>
              <div className="flex flex-col text-center items-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-lime-600 mb-3 sm:mb-4">
                  Sync, Partner, & Fulfill
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mb-4 sm:mb-6">
                  Multi-Platform Inventory Sync & Shared Marketplace
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-neutral-500 max-w-2xl mx-auto px-2 sm:px-0 mb-8 sm:mb-12">
                  Say goodbye to stockouts & extra inventory. Seamlessly sync inventory across{' '}
                  <span className="text-darkgrey font-semibold">Shopify</span>,{' '}
                  <span className="text-darkgrey font-semibold">Square</span>,{' '}
                  <span className="text-darkgrey font-semibold">Clover</span>,{' '}
                  <span className="text-darkgrey font-semibold">Amazon</span>, and a{' '}
                  <span className="text-darkgrey font-semibold">network of local partners</span>. 
                  Keep your stores stocked, partner with local stores, automate orders/fulfillment, 
                  all while saving time & money.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-3 w-full sm:w-auto mx-2 sm:mx-8">
                <Button 
                  variant="default" 
                  className="bg-lime-600 w-full sm:w-auto text-xs sm:text-sm md:text-base" 
                  size="lg" 
                  asChild
                >
                  <a 
                    href="/onboarding?source=marketplace_cta" 
                    onClick={() => trackCTA('join_marketplace')}
                  >
                    <Store className="mr-2 h-4 w-4" /> Join Marketplace
                  </a>
                </Button>
              </div>
            </FadeInSection>
          </div>
          

          <FadeInSection delay={0.4}>
            <div className="relative pt-8 sm:pt-12">
              <MockupFrame
                className="animate-appear"
                size="small"
              >
                <Mockup type="responsive">
                  <FallbackImage
                    src="https://dxeikk2e6c.ufs.sh/f/0UWZWh8ye0t5hqWlkTurS9NUyMBt2OHPvFi8dWQRqLw7GYxC"
                    fallbackSrc="public/assets/landing_page_sssync.png"
                    alt="sssync.app dashboard"
                    width={1248}
                    height={765}
                    quality={100}
                    priority={true}
                    debug={false}
                    className="rounded-md"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
