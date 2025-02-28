//import { useState } from "react";
import { FeatureGrid } from "@/components/features";
//import { Hero } from "@/components/hero";
import { PricingGrid } from "@/components/pricing";
import { stackServerApp } from "../../stack";
import { 
  BarChartIcon, 
  LayersIcon, 
  ReaderIcon, 
  StarIcon,
  DrawingPinIcon,
  ComponentInstanceIcon,
  RocketIcon,
  CheckCircledIcon,
} from "@radix-ui/react-icons";
import { 
  Calendar,
  RefreshCw,
  Rocket,
  CheckCircle2,
  XCircle,
  BarChart,
  Share2,
  Wallet,
  GitFork,
  Truck,
  ShoppingBag,
} from "lucide-react";
import Hero from "@/components/sections/hero/default";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { UpdateIcon } from "@radix-ui/react-icons";
import { cookies } from "next/headers";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';
import dynamic from 'next/dynamic'
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import { WhyChooseSection } from "@/components/sections/whychooseus";
import { FallbackImage } from '@/components/ui/fallback-image';

// Lazy load components that are below the fold
const DynamicPricingTabs = dynamic(() => import('@/components/pricing-tabs').then(mod => mod.PricingTabs), {
  loading: () => <div className="h-96 animate-pulse bg-muted/50 rounded-lg"></div>
})

const DynamicFAQ = dynamic(() => import('@/components/sections/faq').then(mod => mod.default || mod.FAQ))

async function LandingPage() {
  let showSetupRequired = false;
  try {
    const project = await stackServerApp.getProject();
    showSetupRequired = project.config && !project.config.clientTeamCreationEnabled;
  } catch (error) {
    console.error("Error accessing project configuration:", error);
  }

  if (showSetupRequired) {
    return (
      <div className="w-full min-h-96 flex items-center justify-center">
        <div className="max-w-xl gap-4">
          <p className="font-bold text-xl">Setup Required</p>
          <p className="">
            {
              "To start using this project, please enable client-side team creation in the Stack Auth dashboard (Project > Team Settings). This message will disappear once the feature is enabled."
            }
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Hero />
      {/* 
      <Hero
        capsuleText="100% Open-source & Free"
        capsuleLink="https://stacktemplate.com"
        title="A Multi-tenant Next.js Starter Template"
        subtitle="Built for developers, by developers. Next.js + Shadcn UI + Stack Auth."
        primaryCtaText="Get Started"
        primaryCtaLink={stackServerApp.urls.signUp}
        secondaryCtaText="GitHub"
        secondaryCtaLink="https://github.com/stack-auth/stack-template"
        credits={
          <>
            Crafted with ❤️ by{" "}
            <a
              href="https://stack-auth.com"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Stack Auth
            </a>
          </>
        }
      />
      */}

      <div id="features" />
      <FadeInSection>
        <FeatureGrid
          title="Core Features"
          subtitle="Powerful tools to connect and grow your business network"
          items={[
            {
              icon: (
                <div className="w-fit flex items-center justify-center gap-6">
                  <FallbackImage 
                    src="https://dxeikk2e6c.ufs.sh/f/0UWZWh8ye0t5r68Y3eDIWUX741uOAt8sNM3aKmjDlELbpfR2"
                    fallbackSrc="/assets/shopify-logo-svgrepo-com.svg"
                    width={40} 
                    height={40} 
                    alt="Shopify"
                    priority={true}
                    debug={true}
                  />
                  <FallbackImage 
                    src="https://dxeikk2e6c.ufs.sh/f/0UWZWh8ye0t5uu4A1tRPuIMFSAwTZgvGC2BzXq5Hyk1DRNe8" 
                    fallbackSrc="/assets/Square,_Inc._-_Square_logo.svg"
                    width={40} 
                    height={40} 
                    alt="Square"
                    priority={true}
                    debug={true}
                  />
                  <FallbackImage 
                    src="https://dxeikk2e6c.ufs.sh/f/0UWZWh8ye0t5MjfGso2zKhfNEjBx9Q2zpulADRPmGrvCHMeU" 
                    fallbackSrc="/assets/Clover-POS-300x300.webp"
                    width={40} 
                    height={40} 
                    alt="Clover"
                    priority={true}
                    debug={true}
                  />
                  <FallbackImage 
                    src="https://dxeikk2e6c.ufs.sh/f/0UWZWh8ye0t5bGLqL8IRHnfzVBgFT0WMP9t8awbJ2rOESokd" 
                    fallbackSrc="/assets/Amazon_icon.svg"
                    width={40} 
                    height={40} 
                    alt="Amazon"
                    priority={true}
                    debug={true}
                  />
                </div>
              ),
              title: "Multi-Platform Inventory Sync",
              description: "Seamlessly connect and sync real-time inventory across Shopify, Square, Amazon, and Clover simultaneously. (more coming soon)",
            },
            {
              icon: <ShoppingBag className="h-8 w-8" />,
              title: "Shopify Inventory Widget",
              description: "Display real-time partner inventory availability directly on your Shopify store. Inventory counts remain private while showing availability status.",
            },
            {
              icon: <GitFork className="h-8 w-8" />,
              title: "Inventory Sharing & Order Routing",
              description: "Share inventory between stores and automatically route orders to partners when you're out of stock. Fully automated process.",
            },
            {
              icon: <StarIcon className="h-8 w-8" />,
              title: "Inventory Marketplace",
              description: "Buy and sell excess inventory with other merchants. See merchant ratings, nearby location matching, and support for perishable/frozen goods.",
            },
            {
              icon: <ReaderIcon className="h-8 w-8" />,
              title: "Automated Partnerships",
              description: "From contracts to payouts, we handle all partnership logistics automatically. Focus on growing your business.",
            },
            {
              icon: <Truck className="h-8 w-8" />,
              title: "Unified Dashboard",
              description: "Track orders, fulfillment, and analytics across your entire network in one powerful dashboard.",
            },
          ]}
        />
      </FadeInSection>


      <div id="pricing" />
      <FadeInSection>
        <div className="container mx-auto px-4 py-12">
          <Suspense fallback={<Skeleton className="h-[600px] w-full rounded-lg" />}>
            <DynamicPricingTabs />
          </Suspense>
        </div>
      </FadeInSection>

      <div id="faq" />
      <DynamicFAQ /> {/* Lazy loaded component */}

      
      {/*
      <Section id="beta-access" className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-lime-600 mb-4">
              Join Our Private Beta
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience a smarter way to manage inventory and boost sales without extra stock.
            </p>
          </div>

          
          <div className="bg-background p-8 rounded-xl">
            <form action="/onboarding" method="GET" className="space-y-6">
              <div className="grid gap-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full"
                />
                <input type="hidden" name="source" value="beta_access" />
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="w-full sm:w-auto">
                    Get Started for Free
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto"
                    asChild
                  >
                    <a href="https://cal.com/your-booking-link" target="_blank">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book a Demo
                    </a>
                  </Button>
                </div>
              </div>
      
              
              <p className="text-sm text-muted-foreground text-center">
                By submitting, you agree to our terms and privacy policy.
              </p>
            </form>
          </div>
        </div>
      </Section> 
      */}
    </>
  );
}

export default LandingPage;

