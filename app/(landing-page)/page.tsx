import { FeatureGrid } from "@/components/features";
//import { Hero } from "@/components/hero";
import { PricingGrid } from "@/components/pricing";
import { stackServerApp } from "@/stack";
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
  Wallet
} from "lucide-react";
import Hero from "@/components/sections/hero/default";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { FAQ } from "@/components/sections/faq";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { UpdateIcon } from "@radix-ui/react-icons";
import { cookies } from "next/headers";

export default async function IndexPage() {
  const project = await stackServerApp.getProject();
  const cookieStore = cookies();
  if (!project.config.clientTeamCreationEnabled) {
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
          subtitle="Everything you need to sync inventory and never lose a sale"
          items={[
            {
              icon: <BarChartIcon className="h-8 w-8" />,
              title: "Real-Time Inventory Sync",
              description: "Seamlessly connect with Shopify, Clover, and Square for automatic inventory updates across all channels.",
            },
            {
              icon: <LayersIcon className="h-8 w-8" />,
              title: "Shared Inventory Marketplace",
              description: "When you're out of stock, orders are automatically matched with nearby partners who have available inventory.",
            },
            {
              icon: <ReaderIcon className="h-8 w-8" />,
              title: "Transparent Fulfillment",
              description: "Every shared order is logged with clear details on fulfillment, payouts, and returns.",
            },
            {
              icon: <StarIcon className="h-8 w-8" />,
              title: "Marketplace Ratings",
              description: "Build trust with transparent vendor ratings based on fulfillment performance and product quality.",
            },
            {
              icon: <DrawingPinIcon className="h-8 w-8" />,
              title: "Automated Payouts",
              description: "Small, fixed convenience fees with clear revenue flow and automated payment processing.",
            },
            {
              icon: <ComponentInstanceIcon className="h-8 w-8" />,
              title: "Real-Time Widget",
              description: "Embed a customizable widget on your storefront showing live product availability from the shared network.",
            },
          ]}
        />
      </FadeInSection>

      <Section id="why-choose" className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-lime-600 mb-4">
              Why use <span className="text-black">sssync?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <div className="flex justify-left mb-4">
                    <RefreshCw className="h-8 w-8" />
                  </div>
                ),
                title: "Effortless Connectivity",
                text: "Eliminate manual inventory management and prevent lost sales with our seamless, automated system."
              },
              {
                icon: <RocketIcon className="h-8 w-8" />,
                title: "Risk-Free Sales Growth",
                text: "Turn stockouts into opportunities without needing extra inventory."
              },
              {
                icon: <CheckCircledIcon className="h-8 w-8" />,
                title: "Trust & Transparency",
                text: "Clear ratings, dispute resolution, and automated processes ensure fair partnerships."
              },
              {
                icon: <BarChart className="h-8 w-8" />,
                title: "Scalable & Simple",
                text: "Start with a free tier and upgrade as you grow—our plans meet all business sizes."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-background rounded-xl">
                <div className="mb-4 text-lime-600">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div id="pricing" />
      <FadeInSection>
        <PricingGrid
          title="Pricing"
          subtitle="Choose a plan that grows with your business"
          items={[
            {
              title: "Free",
              price: "$0",
              description: "Perfect for getting started",
              features: [
                "Up to 30 SKUs",
                "Up to 1 partner store",
                "Basic analytics",
                "Standard support",
                "50¢ convenience fee per order",
              ],
              buttonText: "Get Started",
              buttonHref: "/onboarding?source=free_plan",
            },
            {
              title: "Starter",
              price: "$15",
              description: "For growing businesses",
              features: [
                "Up to 150 SKUs",
                "Up to 15 partner stores",
                "Enhanced analytics",
                "Priority support",
                "Lower convenience fees",
              ],
              buttonText: "Start Free Trial",
              isPopular: true,
              buttonHref: "/onboarding?source=starter_plan",
            },
            {
              title: "Growth",
              price: "$30",
              description: "For established businesses",
              features: [
                "Up to 400 SKUs",
                "Up to 40 partner stores",
                "Advanced analytics",
                "Premium support",
                "Lowest convenience fees",
              ],
              buttonText: "Start Free Trial",
              buttonHref: "/onboarding?source=growth_plan",
            },
          ]}
        />
      </FadeInSection>

      <div id="faq" />
      <FAQ />

      
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
