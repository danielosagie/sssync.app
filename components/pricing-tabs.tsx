"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PricingGrid } from "@/components/pricing";
import { cn } from "@/lib/utils";

// Add type interface at the top of the file
interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonHref: string;
  isPopular?: boolean;
}

export function PricingTabs() {
  const [activeTab, setActiveTab] = useState("sellers");
  
  return (
    <div>
      <Tabs defaultValue="sellers" onValueChange={setActiveTab}>
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
          <TabsTrigger value="sellers">Individual Sellers</TabsTrigger>
          <TabsTrigger value="both">Both</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplace Owners</TabsTrigger>
        </TabsList>
        
        <TabsContent value="sellers">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <PricingCard
              title="Free Tier"
              price="$0"
              description="Perfect for getting started"
              features={[
                "Basic inventory sync (up to 50 SKUs)",
                "Limited order offloading (5 orders/month)",
                "Basic fulfillment tracking",
                "Basic dashboards",
                "10% service fee (passed to customer) on marketplace transactions",
                "Email support"
              ]}
              buttonText="Get Started"
              buttonHref="/onboarding?source=free_seller"
            />
            <PricingCard
              title="Pro Seller"
              price="$29"
              description="For growing businesses"
              features={[
                "Advanced inventory sync (up to 500 SKUs)",
                "Expanded order offloading (50 orders/month)",
                "Access to partner stores for fulfillment",
                "Automated payout processing",
                "Enhanced fulfillment tracking",
                "7% service fee (passed to customer) on marketplace transactions",
                "Priority support"
              ]}
              buttonText="Start Free Trial"
              isPopular={true}
              buttonHref="/onboarding?source=pro_seller"
            />
            <PricingCard
              title="Enterprise Seller"
              price="$79"
              description="For established businesses"
              features={[
                "Unlimited inventory sync across all platforms",
                "Unlimited order offloading",
                "Priority matching in the marketplace",
                "Fully automated contracts and payouts",
                "Comprehensive fulfillment/tracking system",
                "5% service fee (passed to customer) on marketplace transactions",
                "Dedicated support manager"
              ]}
              buttonText="Contact Sales"
              buttonHref="/onboarding?source=enterprise_seller"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="marketplace">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <PricingCard
              title="Free Tier"
              price="$0"
              description="For new marketplace connections"
              features={[
                "Connect with up to 2 partner stores",
                "Basic customer-facing marketplace widget",
                "Simple inventory availability display",
                "Manual order routing",
                "Basic tracking dashboard",
                "3% connector fee",
                "Email support"
              ]}
              buttonText="Get Started"
              buttonHref="/onboarding?source=free_marketplace"
            />
            <PricingCard
              title="Pro Marketplace"
              price="$39"
              description="For growing marketplaces"
              features={[
                "Connect with up to 30 partner stores",
                "Enhanced customer-facing marketplace widget",
                "Automated order routing to partners",
                "Transparent fulfillment tracking",
                "Customizable fulfillment rules",
                "2% connector fee",
                "Priority support"
              ]}
              buttonText="Start Free Trial"
              isPopular={true}
              buttonHref="/onboarding?source=pro_marketplace"
            />
            <PricingCard
              title="Enterprise Marketplace"
              price="$99"
              description="For established marketplaces"
              features={[
                "Unlimited partner store connections",
                "Fully customizable marketplace widget",
                "Advanced order routing algorithms",
                "Complete fulfillment transparency",
                "White-labeled tracking experience",
                "1% connector fee",
                "Dedicated support manager"
              ]}
              buttonText="Contact Sales"
              buttonHref="/onboarding?source=enterprise_marketplace"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="both">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <PricingCard
              title="Growth Bundle"
              price="$59"
              description="Save $9 per month"
              features={[
                "Includes Pro Seller ($29 value)",
                "Includes Pro Marketplace ($39 value)",
                "All Pro Seller features",
                "All Pro Marketplace features",
                "Unified dashboard for both functions",
                "Combined priority support",
                "Streamlined setup process"
              ]}
              buttonText="Start Free Trial"
              isPopular={true}
              buttonHref="/onboarding?source=growth_bundle"
            />
            <PricingCard
              title="Enterprise Bundle"
              price="$149"
              description="Save $29 per month"
              features={[
                "Includes Enterprise Seller ($79 value)",
                "Includes Enterprise Marketplace ($99 value)",
                "All Enterprise Seller features",
                "All Enterprise Marketplace features",
                "Unified enterprise dashboard",
                "Single dedicated support manager",
                "Custom integration support"
              ]}
              buttonText="Contact Sales"
              buttonHref="/onboarding?source=enterprise_bundle"
            />
          </div>
        </TabsContent>
      </Tabs>
      {/*
      <div className="mt-16 max-w-3xl mx-auto bg-muted/50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">How This Actually Works in Practice</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Example 1: Offloading Orders You Can't Fulfill</h4>
            <p className="text-muted-foreground">When a customer orders a product you're out of stock on:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
              <li>System finds a partner with inventory and routes the order</li>
              <li>You keep your full asking price, minus the service fee</li>
              <li>Partner gets compensated for product cost plus handling</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Example 2: Selling Excess Inventory</h4>
            <p className="text-muted-foreground">When you have extra inventory to sell:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
              <li>List it on the marketplace for other stores to access</li>
              <li>When another store's customer orders your product, you fulfill it</li>
              <li>You get paid for the product cost plus handling fee</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Example 3: Fulfilling Orders for Others</h4>
            <p className="text-muted-foreground">When a partner store is out of stock:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
              <li>You can fulfill orders for their customers using your inventory</li>
              <li>You receive payment for product cost plus handling fee</li>
              <li>Transaction is tracked in your dashboard</li>
            </ul>
          </div>
        </div>
        
        <p className="mt-6 text-sm text-muted-foreground italic">The core functionality of sharing inventory and fulfilling orders is available at all tiers. Higher tiers simply give you more connections, lower fees, and better tools to manage the process at scale.</p>
      </div>
      */}

    </div>
  );
}

// Update the component to use the interface
function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonHref,
  isPopular = false
}: PricingCardProps) {
  return (
    <div className={cn(
      "relative flex flex-col h-full rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-sm",
      isPopular ? "border-primary" : "border-border"
    )}>
      {isPopular && (
        <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          Popular
        </div>
      )}
      
      <div className="p-6 pt-8 flex-grow">
        <div className="mb-5">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-muted-foreground text-sm mt-1">{description}</p>
        </div>
        
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "$0" && <span className="text-muted-foreground ml-1">/month</span>}
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-primary shrink-0 mt-1"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-6 pt-0 mt-auto">
        <a
          href={buttonHref}
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full py-2.5",
            isPopular
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}  