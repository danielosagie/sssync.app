"use client";

import { useState, ReactNode } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureGridProps {
  title: string;
  subtitle: string;
  items: {
    title: string;
    description: string;
    icon?: ReactNode;
  }[];
  className?: string;
}

export function FeatureGrid({ title, subtitle, items, className }: FeatureGridProps) {
  return (
    <section className={cn("py-12 md:py-20", className)}>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={`feature-${i}`} className="bg-card rounded-lg p-6 border shadow-sm">
              {item.icon && (
                <div className="mb-4">
                  <div className="h-16 w-fit p-4 rounded-md bg-lime-600/15 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("inventory");

  const features = [
    {
      id: "inventory",
      label: "Inventory Sync",
      title: "Keep Your Inventory in Sync Across Platforms",
      description: "Never oversell or miss an opportunity. Our platform ensures your inventory is updated in real-time across all your selling channels.",
      image: "https://dxeikk2e6c.ufs.sh/f/0UWZWh8ye0t5LZPp2JjM7sV0g9flKRpzeaEcXDkCbGjJhtNr",
      bullets: [
        "Automatic inventory updates across platforms",
        "Real-time stock level synchronization",
        "Set buffer stock levels for each channel",
        "Prevent overselling with instant updates",
        "Track inventory movement and trends"
      ]
    },
    {
      id: "fulfillment",
      label: "Order Fulfillment",
      title: "Streamlined Order Fulfillment Process",
      description: "Effortlessly manage orders that you can't fulfill by leveraging our network of partner stores that can fulfill on your behalf.",
      image: "https://dxeikk2e6c.ufs.sh/f/0UWZWh8ye0t5LZPp2JjM7sV0g9flKRpzeaEcXDkCbGjJhtNr",
      bullets: [
        "Automated order routing to available partners",
        "Real-time order status tracking",
        "Simplified logistics coordination",
        "Reduce shipping costs and delivery times",
        "Maintain customer satisfaction with timely fulfillment"
      ]
    },
    {
      id: "marketplace",
      label: "Marketplace",
      title: "Tap Into Our Growing Marketplace Network",
      description: "Connect with other sellers to expand your product offerings or sell your excess inventory to partners who need it most.",
      image: "https://dxeikk2e6c.ufs.sh/f/0UWZWh8ye0t5LZPp2JjM7sV0g9flKRpzeaEcXDkCbGjJhtNr",
      bullets: [
        "Find partners to fulfill orders you can't",
        "Monetize your excess inventory",
        "Discover new product opportunities",
        "Expand your product catalog without risk",
        "Build valuable business relationships"
      ]
    },
    {
      id: "analytics",
      label: "Analytics",
      title: "Data-Driven Insights For Better Decisions",
      description: "Comprehensive analytics help you understand your performance, identify opportunities, and optimize your operations.",
      image: "https://dxeikk2e6c.ufs.sh/f/0UWZWh8ye0t5LZPp2JjM7sV0g9flKRpzeaEcXDkCbGjJhtNr",
      bullets: [
        "Track performance across all channels",
        "Identify your most profitable products",
        "Optimize inventory levels with smart recommendations",
        "Understand partner performance metrics",
        "Make data-backed business decisions"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features to Transform Your Business</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform offers a comprehensive set of tools designed to streamline your operations, connect with partners, and grow your business.
          </p>
        </div>

        <Tabs defaultValue="inventory" onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-12">
            {features.map((feature) => (
              <TabsTrigger 
                key={feature.id} 
                value={feature.id}
                className="px-4 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {feature.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id}>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl md:text-3xl font-bold">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground">{feature.description}</p>
                  
                  <ul className="space-y-3 mt-6">
                    {feature.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-2">
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
                          className="h-5 w-5 text-primary shrink-0 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-lg overflow-hidden border shadow-lg aspect-video bg-white"
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 border shadow-sm">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Never Miss a Sale</h3>
            <p className="text-muted-foreground">When you&apos;re out of stock, our system automatically finds partners who can fulfill the order, so you never lose a sale.</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 border shadow-sm">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Reduce Inventory Risk</h3>
            <p className="text-muted-foreground">Expand your product catalog without holding inventory by connecting with reliable partners who can fulfill orders on your behalf.</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 border shadow-sm">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Save Time and Resources</h3>
            <p className="text-muted-foreground">Our automated systems handle the complex logistics of order routing, fulfillment tracking, and inventory management so you can focus on growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
