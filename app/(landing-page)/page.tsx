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
  ComponentInstanceIcon
} from "@radix-ui/react-icons";
import Hero from "@/components/sections/hero/default";
import { FadeInSection } from "@/components/ui/fade-in-section";

export default async function IndexPage() {
  const project = await stackServerApp.getProject();
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
              buttonText: "Get Started",
              buttonHref: "/onboarding?source=growth_plan",
            },
          ]}
        />
      </FadeInSection>
    </>
  );
}
