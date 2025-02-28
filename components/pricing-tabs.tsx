"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="yearly">Yearly (17% savings)</TabsTrigger>
        </TabsList>
        
        <TabsContent value="monthly">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
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
                "Standard support (48-hour response)",
                "Basic AI product migration (20/mo)"
              ]}
              buttonText="Get Basic "
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
                "Priority support (24-hour response)",
                "Advanced AI product migration (100/mo)"
              ]}
              buttonText="Get Pro "
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
                "Premium support (8-hour response)",
                "Higher Rates AI product migration (500/mo)"
              ]}
              buttonText="Contact Sales"
              buttonHref="/onboarding?source=business_monthly"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="yearly">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
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
              buttonText="Get Basic "
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
              buttonText="Get Pro "
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
              buttonText="Get Business"
              buttonHref="/onboarding?source=business_yearly"
            />
          </div>
        </TabsContent>
      </Tabs>
      {/*
      <div className="mt-24 max-w-6xl mx-auto bg-slate-50 rounded-xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Smart on price.<br/>
            Strong on power.
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            sssync.app replaces multiple tools with one integrated solution. See how our all-in-one price compares to piecing together other services.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">With Syncio</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    <span className="w-8 h-8 rounded bg-red-100 flex items-center justify-center">S</span>
                  </div>
                  <span className="font-medium">Source Store (Starter)</span>
                </div>
                <p className="text-2xl font-bold mb-1">$19<span className="text-sm font-normal text-slate-500">/month</span></p>
                <p className="text-sm text-slate-500">11-100 orders with synced products</p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    <span className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center">D</span>
                  </div>
                  <span className="font-medium">Destination Store</span>
                </div>
                <p className="text-2xl font-bold mb-1">$29<span className="text-sm font-normal text-slate-500">/month</span></p>
                <p className="text-sm text-slate-500">Up to 500 products (Traction)</p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    <span className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center">P</span>
                  </div>
                  <span className="font-medium">Product Settings Add-on</span>
                </div>
                <p className="text-2xl font-bold mb-1">$19<span className="text-sm font-normal text-slate-500">/month</span></p>
                <p className="text-sm text-slate-500">Required for full product syncing</p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    <span className="w-8 h-8 rounded bg-green-100 flex items-center justify-center">O</span>
                  </div>
                  <span className="font-medium">Order Sync Add-on</span>
                </div>
                <p className="text-2xl font-bold mb-1">$22<span className="text-sm font-normal text-slate-500">/month</span></p>
                <p className="text-sm text-slate-500">Required for order forwarding</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-72 flex flex-col">
            <div className="bg-yellow-50 p-6 rounded-lg mb-4 flex-grow">
              <div className="text-slate-600 uppercase text-sm font-medium mb-2">TOTAL</div>
              <div className="relative mb-2">
                <span className="text-4xl font-bold">$89</span>
                <span className="text-sm ml-1 text-slate-600">/month</span>
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -rotate-6"></div>
              </div>
              
              <div className="text-slate-600 uppercase text-sm font-medium mt-8 mb-2">WITH SSSYNC.APP</div>
              <div className="mb-2">
                <span className="text-4xl font-bold text-green-600">$29.99</span>
                <span className="text-sm ml-1 text-slate-600">/month</span>
              </div>
              <p className="text-sm text-slate-500">Pro Plan - all-inclusive</p>
            </div>
            
            <a href="/onboarding" className="text-center w-full bg-primary text-primary-foreground font-medium py-3 rounded-md hover:bg-primary/90 transition-colors">
              Get Started For Free
            </a>
          </div>
        </div>
      </div> */}
      
      <div className="mt-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Compare Plans & Features</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-4 px-6 text-left font-bold">Features</th>
                <th className="py-4 px-6 text-center font-bold">Basic Sync<br/><span className="font-normal text-sm">$9.99/mo</span></th>
                <th className="py-4 px-6 text-center font-bold bg-green-50">Pro<br/><span className="font-normal text-sm">$29.99/mo</span></th>
                <th className="py-4 px-6 text-center font-bold">Business<br/><span className="font-normal text-sm">$79.99/mo</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-6 font-bold text-sm" colSpan={4}>Pricing</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm whitespace-nowrap">Monthly Price</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">$9.99</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50 font-medium">$29.99</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">$79.99</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm whitespace-nowrap">Annual Price (per month)</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">$8.29</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50 font-medium">$24.99</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">$66.49</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm whitespace-nowrap">Marketplace Fee</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">3%</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50 font-medium">2%</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">1%</td>
              </tr>

              {/* Basic Features */}
              <tr className="border-b bg-slate-50">
                <td colSpan={4} className="py-2 sm:py-3 px-4 sm:px-6 font-bold text-sm">Basic Features</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm">Inventory Sync</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">Up to 500 SKUs</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50">Up to 2,500 SKUs</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">Unlimited SKUs</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm">Sync Frequency</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">Every 5 minutes</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50">Real-time (60 sec)</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">Real-time (60 sec)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm">Partner Connections</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">Up to 3</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50">Up to 15</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">Unlimited</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm">Order Offloading Limit</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">50 orders/month</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50">500 orders/month</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">Unlimited</td>
              </tr>
              
              {/* Advanced Features */}
              <tr className="border-b bg-slate-50">
                <td colSpan={4} className="py-2 sm:py-3 px-4 sm:px-6 font-bold text-sm">Advanced Features</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm">Smart Order Routing</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm">Automated Contracts</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm">Automated Payouts</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm">Full Product Data Sync</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm">Bundling & Kitting</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm">AI Product Migration & Listing Creation</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">Basic (20/mo)</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50">Pro (500/mo)</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">Business (500/mo)</td>
              </tr>

              {/* Marketplace Features */}
              <tr className="border-b bg-slate-50">
                <td colSpan={4} className="py-2 sm:py-3 px-4 sm:px-6 font-bold text-sm">Marketplace Features</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm">Partner Matchmaking</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">Basic</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50">Advanced with scoring</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">Advanced with priority</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm">Storefront Widget</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm">Marketplace Analytics</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">Basic</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50">Comprehensive</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">Advanced + Custom Reports</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm">Marketplace Priority</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">Standard</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50">Priority</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">Premium Priority</td>
              </tr>

              {/* Support & Additional Features */}
              <tr className="border-b bg-slate-50">
                <td colSpan={4} className="py-2 sm:py-3 px-4 sm:px-6 font-bold text-sm">Support & Additional Features</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm">Support Response Time</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">48 hours</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50">24 hours</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">8 hours</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm">Custom Integration Support</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm">Dedicated Account Manager</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm">Custom Contract Terms</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-sm">White-Labeling Options</td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm bg-green-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="py-2 sm:py-3 px-4 sm:px-6 text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>  
        
        <div className="mt-8 text-center px-4 sm:px-0">
          <p className="text-sm sm:text-base text-muted-foreground mb-6">sssync.app offers a simpler pricing structure with more included features than competitors. No surprise fees, no complexity - just straightforward pricing for powerful inventory management and marketplace capabilities.</p>
          
          <a href="/onboarding" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs sm:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-2 sm:py-3">
            Start your 14-day free trial today
          </a>
        </div>
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
                    <td className="py-3 px-6 text-center font-medium text-green-600">Flat fee with usage tiers</td>
                    <td className="py-3 px-6 text-center">Split model (source vs destination)</td>
                    <td className="py-3 px-6 text-center">Order volume-based tiers</td>
                    </tr>
                    <tr className="border-b bg-slate-50">
                    <td className="py-3 px-6">Entry Price</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">$9.99/mo</td>
                    <td className="py-3 px-6 text-center">Free-$19/mo (source), $19/mo (destination)</td>
                    <td className="py-3 px-6 text-center">$35/mo</td>
                    </tr>
                    <tr className="border-b">
                    <td className="py-3 px-6">Products (Basic)</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">500</td>
                    <td className="py-3 px-6 text-center">25 (free) - 100 (starter)</td>
                    <td className="py-3 px-6 text-center">Not limited by product count</td>
                    </tr>
                    <tr className="border-b bg-slate-50">
                    <td className="py-3 px-6">Annual Savings</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">17%</td>
                    <td className="py-3 px-6 text-center">Not specified</td>
                    <td className="py-3 px-6 text-center">None offered</td>
                    </tr>
                    
                    {/* Core Features */}
                    <tr className="border-b">
                    <td colSpan={4} className="py-3 px-6 font-bold">Core Features</td>
                    </tr>
                    <tr className="border-b bg-slate-50">
                    <td className="py-3 px-6">Platforms</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">Square + Clover (more coming soon)</td>
                    <td className="py-3 px-6 text-center">Primarily Shopify-to-Shopify</td>
                    <td className="py-3 px-6 text-center">Primarily Shopify focused</td>
                    </tr>
                    <tr className="border-b">
                    <td className="py-3 px-6">Sync Speed</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">Real-time (60 sec)</td>
                    <td className="py-3 px-6 text-center">"Real-time" (5-15 min)</td>
                    <td className="py-3 px-6 text-center">"Real-time" (10-30 min)</td>
                    </tr>
                    <tr className="border-b bg-slate-50">
                    <td className="py-3 px-6">Full Product Data Sync</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">Included in all plans</td>
                    <td className="py-3 px-6 text-center">Requires +$19/mo Product Settings add-on</td>
                    <td className="py-3 px-6 text-center">Included</td>
                    </tr>
                    <tr className="border-b">
                    <td className="py-3 px-6">Custom Field Mapping</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">Included in all plans</td>
                    <td className="py-3 px-6 text-center">Limited without add-ons</td>
                    <td className="py-3 px-6 text-center">Basic only</td>
                    </tr>
                    <tr className="border-b bg-slate-50">
                    <td className="py-3 px-6">Bulk Import/Export</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">Included in all plans</td>
                    <td className="py-3 px-6 text-center">Limited functionality</td>
                    <td className="py-3 px-6 text-center">Basic functionality</td>
                    </tr>
                    <tr className="border-b">
                    <td className="py-3 px-6">Order Sync</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">Included in all plans</td>
                    <td className="py-3 px-6 text-center">Requires +$22/mo Order Sync add-on</td>
                    <td className="py-3 px-6 text-center">Included</td>
                    </tr>
                    <tr className="border-b bg-slate-50">
                    <td className="py-3 px-6">Sync History & Logs</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">Detailed in all plans</td>
                    <td className="py-3 px-6 text-center">Basic only</td>
                    <td className="py-3 px-6 text-center">Basic only</td>
                    </tr>
                    <tr className="border-b">
                    <td className="py-3 px-6">Bundling & Kitting</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">Included in Pro+ plans</td>
                    <td className="py-3 px-6 text-center">Not available</td>
                    <td className="py-3 px-6 text-center">Pro plan only (+$4/mo)</td>
                    </tr>
                    
                    {/* Marketplace Features */}
                    <tr className="border-b">
                    <td colSpan={4} className="py-3 px-6 font-bold">Marketplace Features</td>
                    </tr>
                    <tr className="border-b bg-slate-50">
                    <td className="py-3 px-6">Marketplace Integration</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">Built into all plans</td>
                    <td className="py-3 px-6 text-center">Basic access, "priority access" for paid plans</td>
                    <td className="py-3 px-6 text-center">Not available</td>
                    </tr>
                    <tr className="border-b">
                    <td className="py-3 px-6">List Excess Inventory</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">All plans</td>
                    <td className="py-3 px-6 text-center">Basic functionality</td>
                    <td className="py-3 px-6 text-center">Not available</td>
                    </tr>
                    <tr className="border-b bg-slate-50">
                    <td className="py-3 px-6">Partner Matchmaking</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">With compatibility scoring</td>
                    <td className="py-3 px-6 text-center">Basic partner finder only</td>
                    <td className="py-3 px-6 text-center">Not available</td>
                    </tr>
                    <tr className="border-b">
                    <td className="py-3 px-6">Marketplace Analytics</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">Comprehensive in all paid plans</td>
                    <td className="py-3 px-6 text-center">Basic dashboard only</td>
                    <td className="py-3 px-6 text-center">Not available</td>
                    </tr>
                    <tr className="border-b bg-slate-50">
                    <td className="py-3 px-6">Partner Ratings System</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">Included in Pro+ plans</td>
                    <td className="py-3 px-6 text-center">Not available</td>
                    <td className="py-3 px-6 text-center">Not available</td>
                    </tr>
                    <tr className="border-b">
                    <td className="py-3 px-6">Automated Order Routing</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">Included in Pro+ plans</td>
                    <td className="py-3 px-6 text-center">Basic functionality only</td>
                    <td className="py-3 px-6 text-center">Not available</td>
                    </tr>
                    <tr className="border-b bg-slate-50">
                    <td className="py-3 px-6">Customizable Fulfillment Rules</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">Included in Pro+ plans</td>
                    <td className="py-3 px-6 text-center">Not available</td>
                    <td className="py-3 px-6 text-center">Not available</td>
                    </tr>
                    <tr className="border-b">
                    <td className="py-3 px-6">Storefront Widget</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">Included in Business plan</td>
                    <td className="py-3 px-6 text-center">Not available</td>
                    <td className="py-3 px-6 text-center">Not available</td>
                    </tr>
                    <tr className="border-b bg-slate-50">
                    <td className="py-3 px-6">Partner Connections</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">3/15/Unlimited based on tier</td>
                    <td className="py-3 px-6 text-center">Unlimited but with complex pricing</td>
                    <td className="py-3 px-6 text-center">Limited to inventory sync only</td>
                    </tr>
                    <tr className="border-b">
                    <td className="py-3 px-6">Automated Payouts</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">Weekly/bi-weekly/daily by tier</td>
                    <td className="py-3 px-6 text-center">Requires +$9/mo Payouts add-on</td>
                    <td className="py-3 px-6 text-center">Not available</td>
                    </tr>
                    <tr className="border-b bg-slate-50">
                    <td className="py-3 px-6">API Access</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">Business plan</td>
                    <td className="py-3 px-6 text-center">Not available</td>
                    <td className="py-3 px-6 text-center">Limited access</td>
                    </tr>
                    
                    {/* Support section */}
                    <tr className="border-b">
                    <td colSpan={4} className="py-3 px-6 font-bold">Support & Misc</td>
                    </tr>
                    <tr className="border-b bg-slate-50">
                    <td className="py-3 px-6">Response Times</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">48h / 24h / 8h based on tier</td>
                    <td className="py-3 px-6 text-center">72h standard</td>
                    <td className="py-3 px-6 text-center">48h standard</td>
                    </tr>
                    <tr className="border-b">
                    <td className="py-3 px-6">Dedicated Representative</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">Business plan</td>
                    <td className="py-3 px-6 text-center">Enterprise only</td>
                    <td className="py-3 px-6 text-center">Not specified</td>
                    </tr>
                    <tr className="border-b bg-slate-50">
                    <td className="py-3 px-6">Add-on Fees</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">None - all features included</td>
                    <td className="py-3 px-6 text-center">$19/mo for Product Settings<br/>$22/mo for Order Sync<br/>$9/mo for Payouts</td>
                    <td className="py-3 px-6 text-center">$4/mo for Pro features</td>
                    </tr>
                    <tr className="border-b">
                    <td className="py-3 px-6">Fee Structure</td>
                    <td className="py-3 px-6 text-center font-medium text-green-600">Transparent 1% marketplace fee</td>
                    <td className="py-3 px-6 text-center">Complex split between source/destination</td>
                    <td className="py-3 px-6 text-center">No marketplace capability</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
        
        <div className="mt-8 text-center px-4 sm:px-0">
            <p className="text-sm sm:text-base text-muted-foreground mb-6">sssync.app offers a simpler pricing structure with more included features than competitors. No surprise fees, no complexity - just straightforward pricing for powerful inventory management and marketplace capabilities.</p>
            
            <a href="/onboarding" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs sm:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-2 sm:py-3">
            Start your 14-day free trial today
            </a>
        </div>
      </div>
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