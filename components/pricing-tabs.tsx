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
  const [activeTab, setActiveTab] = useState("monthly");
  
  return (
    <div className="px-4 sm:px-6">
      <Tabs defaultValue="monthly" onValueChange={setActiveTab}>
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 sm:mb-12">
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="yearly">Yearly (17% savings)</TabsTrigger>
        </TabsList>
        
        <TabsContent value="monthly">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <PricingCard
              title="Basic Sync"
              price="$9.99"
              description="Perfect for getting started"
              features={[
                "Real-time inventory sync between Square and Shopify",
                "Up to 500 products",
                "2,000 sync operations per month",
                "Basic marketplace participation",
                "Connect with up to 3 partner stores",
                "Standard support (48-hour response)"
              ]}
              buttonText="Get Started "
              buttonHref="/onboarding?source=basic_monthly"
            />
            <PricingCard
              title="Pro"
              price="$29.99"
              description="For growing businesses"
              features={[
                "Everything in Basic, plus:",
                "Up to 2,500 products",
                "10,000 sync operations per month",
                "Enhanced marketplace features",
                "Connect with up to 15 partner stores",
                "Priority support (24-hour response)"
              ]}
              buttonText="Get Started "
              isPopular={true}
              buttonHref="/onboarding?source=pro_monthly"
            />
            <PricingCard
              title="Business"
              price="$79.99"
              description="For established businesses"
              features={[
                "Everything in Pro, plus:",
                "Unlimited products",
                "30,000 sync operations per month",
                "Advanced marketplace capabilities",
                "Unlimited partner connections",
                "White-labeled marketplace widget",
                "Premium support (8-hour response)"
              ]}
              buttonText="Contact Sales"
              buttonHref="/onboarding?source=business_monthly"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="yearly">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <PricingCard
              title="Basic Sync"
              price="$99"
              description="$9.99/mo value - Save 17%"
              features={[
                "Real-time inventory sync between Square and Shopify",
                "Up to 500 products",
                "2,000 sync operations per month",
                "Basic marketplace participation",
                "Connect with up to 3 partner stores",
                "Standard support (48-hour response)"
              ]}
              buttonText="Get Started "
              buttonHref="/onboarding?source=basic_yearly"
            />
            <PricingCard
              title="Pro"
              price="$299"
              description="$29.99/mo value - Save 17%"
              features={[
                "Everything in Basic, plus:",
                "Up to 2,500 products",
                "10,000 sync operations per month",
                "Enhanced marketplace features",
                "Connect with up to 15 partner stores",
                "Priority support (24-hour response)"
              ]}
              buttonText="Get Started "
              isPopular={true}
              buttonHref="/onboarding?source=pro_yearly"
            />
            <PricingCard
              title="Business"
              price="$799"
              description="$79.99/mo value - Save 17%"
              features={[
                "Everything in Pro, plus:",
                "Unlimited products",
                "30,000 sync operations per month",
                "Advanced marketplace capabilities",
                "Unlimited partner connections",
                "White-labeled marketplace widget",
                "Premium support (8-hour response)"
              ]}
              buttonText="Contact Sales"
              buttonHref="/onboarding?source=business_yearly"
            />
          </div>
        </TabsContent>
      </Tabs>
      
      {/* 
      // Bundle comparison section - commented out as requested
      <div className="mt-16 sm:mt-24 mx-auto bg-slate-50 rounded-xl p-4 sm:p-8 md:p-12 max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Smart on price.<br/>
            Strong on power.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            sssync.app replaces multiple tools with one integrated solution. See how our all-in-one price compares to piecing together other services.
          </p>
        </div>
        
        ... bundle comparison content ...
      </div>
      */}
      
      {/* Competitor comparison table - with lime colors */}
      <div className="mt-16 sm:mt-24 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12">Compare With Competitors</h2>
        
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="inline-block min-w-full sm:px-0 align-middle">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 sm:py-4 px-4 sm:px-6 text-left font-bold text-sm sm:text-base"></th>
                  <th className="py-3 sm:py-4 px-4 sm:px-6 text-center font-bold text-sm sm:text-base">sssync.app</th>
                  <th className="py-3 sm:py-4 px-4 sm:px-6 text-center font-bold text-sm sm:text-base">Syncio</th>
                  <th className="py-3 sm:py-4 px-4 sm:px-6 text-center font-bold text-sm sm:text-base">Trunk</th>
                </tr>
              </thead>
              <tbody>
                {/* Pricing & Basic Info */}
                <tr className="border-b bg-slate-50">
                  <td colSpan={4} className="py-3 px-6 font-bold">Pricing & Basic Info</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6">Pricing Model</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">Flat fee with usage tiers</td>
                  <td className="py-3 px-6 text-center">Split model (source vs destination)</td>
                  <td className="py-3 px-6 text-center">Order volume-based tiers</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="py-3 px-6">Entry Price</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">$9.99/mo</td>
                  <td className="py-3 px-6 text-center">Free-$19/mo (source), $19/mo (destination)</td>
                  <td className="py-3 px-6 text-center">$35/mo</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6">Products (Basic)</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">500</td>
                  <td className="py-3 px-6 text-center">25 (free) - 100 (starter)</td>
                  <td className="py-3 px-6 text-center">Not limited by product count</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="py-3 px-6">Annual Savings</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">17%</td>
                  <td className="py-3 px-6 text-center">Not specified</td>
                  <td className="py-3 px-6 text-center">None offered</td>
                </tr>
                
                {/* Core Features */}
                <tr className="border-b">
                  <td colSpan={4} className="py-3 px-6 font-bold">Core Features</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="py-3 px-6">Platforms</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">Square + Clover (more coming soon)</td>
                  <td className="py-3 px-6 text-center">Primarily Shopify-to-Shopify</td>
                  <td className="py-3 px-6 text-center">Primarily Shopify focused</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6">Sync Speed</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">Real-time (60 sec)</td>
                  <td className="py-3 px-6 text-center">&quot;Real-time&quot; (5-15 min)</td>
                  <td className="py-3 px-6 text-center">&quot;Real-time&quot; (10-30 min)</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="py-3 px-6">Full Product Data Sync</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">Included in all plans</td>
                  <td className="py-3 px-6 text-center">Requires +$19/mo Product Settings add-on</td>
                  <td className="py-3 px-6 text-center">Included</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6">Custom Field Mapping</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">Included in all plans</td>
                  <td className="py-3 px-6 text-center">Limited without add-ons</td>
                  <td className="py-3 px-6 text-center">Basic only</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="py-3 px-6">Bulk Import/Export</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">Included in all plans</td>
                  <td className="py-3 px-6 text-center">Limited functionality</td>
                  <td className="py-3 px-6 text-center">Basic functionality</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6">Order Syncing</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">Included in all plans</td>
                  <td className="py-3 px-6 text-center">Requires +$22/mo Order Sync add-on</td>
                  <td className="py-3 px-6 text-center">Included</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="py-3 px-6">Bundling & Kitting</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">Included in Pro+ plans</td>
                  <td className="py-3 px-6 text-center">Not available</td>
                  <td className="py-3 px-6 text-center">Pro plan only (+$4/mo)</td>
                </tr>
                
                {/* Marketplace Features */}
                <tr className="border-b">
                  <td colSpan={4} className="py-3 px-6 font-bold">Marketplace Features</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="py-3 px-6">Partner Matchmaking</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">Included with compatibility scoring</td>
                  <td className="py-3 px-6 text-center">Basic partner finder only</td>
                  <td className="py-3 px-6 text-center">Not available</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6">Marketplace Analytics</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">Comprehensive in all paid plans</td>
                  <td className="py-3 px-6 text-center">Basic dashboard only</td>
                  <td className="py-3 px-6 text-center">Not available</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="py-3 px-6">Partner Ratings System</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">Included in Pro+ plans</td>
                  <td className="py-3 px-6 text-center">Not available</td>
                  <td className="py-3 px-6 text-center">Not available</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6">Automated Order Routing</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">Included in Pro+ plans</td>
                  <td className="py-3 px-6 text-center">Basic functionality only</td>
                  <td className="py-3 px-6 text-center">Not available</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="py-3 px-6">Customizable Fulfillment Rules</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">Included in Pro+ plans</td>
                  <td className="py-3 px-6 text-center">Not available</td>
                  <td className="py-3 px-6 text-center">Not available</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6">Storefront Widget</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">Included in Business plan</td>
                  <td className="py-3 px-6 text-center">Not available</td>
                  <td className="py-3 px-6 text-center">Not available</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="py-3 px-6">Partner Connections</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">3/15/Unlimited based on tier</td>
                  <td className="py-3 px-6 text-center">Unlimited but with complex pricing</td>
                  <td className="py-3 px-6 text-center">Limited to inventory sync only</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6">Automated Payouts</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">Weekly/bi-weekly/daily by tier</td>
                  <td className="py-3 px-6 text-center">Requires +$9/mo Payouts add-on</td>
                  <td className="py-3 px-6 text-center">Not available</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="py-3 px-6">API Access</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">Business plan</td>
                  <td className="py-3 px-6 text-center">Not available</td>
                  <td className="py-3 px-6 text-center">Limited access</td>
                </tr>
                
                {/* Support section */}
                <tr className="border-b">
                  <td colSpan={4} className="py-3 px-6 font-bold">Support & Misc</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="py-3 px-6">Response Times</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">48h / 24h / 8h based on tier</td>
                  <td className="py-3 px-6 text-center">72h standard</td>
                  <td className="py-3 px-6 text-center">48h standard</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6">Dedicated Representative</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">Business plan</td>
                  <td className="py-3 px-6 text-center">Enterprise only</td>
                  <td className="py-3 px-6 text-center">Not specified</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="py-3 px-6">Add-on Fees</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">None - all features included</td>
                  <td className="py-3 px-6 text-center">$19/mo for Product Settings<br/>$22/mo for Order Sync<br/>$9/mo for Payouts</td>
                  <td className="py-3 px-6 text-center">$4/mo for Pro features</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6">Fee Structure</td>
                  <td className="py-3 px-6 text-center font-medium text-lime-600">Transparent 1% marketplace fee</td>
                  <td className="py-3 px-6 text-center">Complex split between source/destination</td>
                  <td className="py-3 px-6 text-center">No marketplace capability</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8 text-center px-4 sm:px-0">
          <p className="text-sm sm:text-base text-muted-foreground mb-6">sssync.app offers a simpler pricing structure with more included features than competitors. No surprise fees, no complexity - just straightforward pricing for powerful inventory management and marketplace capabilities.</p>
          
          <a href="/onboarding" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs sm:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-lime-600 text-white hover:bg-lime-700 px-6 sm:px-8 py-2 sm:py-3">
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  );
}

// Also update the PricingCard component to use lime colors
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
      isPopular ? "border-lime-600" : "border-border"
    )}>
      {isPopular && (
        <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-lime-600 px-3 py-1 text-xs font-medium text-white">
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
                className="h-4 w-4 text-lime-600 shrink-0 mt-1"
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
              ? "bg-lime-600 text-white hover:bg-lime-700"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}  