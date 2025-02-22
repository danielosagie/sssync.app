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

export default function Hero() {
  const searchParams = useSearchParams();
  const source = searchParams.get("source");

  return (
    <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
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
          
          <FadeInSection delay={0.1}>
            <h1 className="m-1 relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-foreground bg-clip-text text-xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-6xl md:leading-tight dark:to-muted-foreground">
              <span className="font-semibold text-lime-600 underline">
                Sell On Any Marketplace:   
              </span> 
              <br />
              Build Your Own Supply & Fulfillment Network
            </h1>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p className="m-1 text-sm relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground sm:text-xl">
              Never lose another sale. Seamlessly update your inventory and join a trusted marketplace of merchants to ensure every order is fulfilled&mdash;even when you&apos;re out of stock.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-4 w-full px-4 sm:px-8">
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="w-full text-xs sm:text-sm md:text-base"
              >
                <a href="/onboarding?source=hero_cta">Try Demo</a>
              </Button>
              <Button 
                variant="default" 
                className="bg-lime-600 w-full text-xs sm:text-sm md:text-base" 
                size="lg" 
                asChild
              >
                <a href="/onboarding?source=marketplace_cta">
                  <Store className="mr-2 h-4 w-4" /> Join Marketplace
                </a>
              </Button>
            </div>
          </FadeInSection>

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
