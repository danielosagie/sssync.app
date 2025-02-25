"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/ui/section";
import { FadeInSection } from "@/components/ui/fade-in-section";

export function FAQ() {
  return (
    <Section className="py-8 md:py-12 lg:py-24">
      <FadeInSection>
        <div className="mx-auto flex max-w-6xl flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Common Questions
          </h2>
          <p className="max-w-[85%] text-muted-foreground sm:text-lg">
            Answers to questions from store owners like you
          </p>
        </div>

        <div className="mx-auto max-w-3xl mt-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What happens if a partner store provides poor service to my customer?</AccordionTrigger>
              <AccordionContent>
                We take quality control seriously. Every fulfillment is tracked and rated. Partners with poor performance are immediately suspended from the network. Plus, you maintain the customer relationship - if there&apos;s ever an issue, we&apos;ll help make it right and find a new fulfillment partner immediately.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Do I need to change my existing store setup or workflow?</AccordionTrigger>
              <AccordionContent>
                Not at all! sssync works alongside your existing systems. Keep using your current POS and e-commerce platforms exactly as you do now. We simply add a layer of inventory sync and fulfillment options without disrupting your normal operations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>How do you protect my customer relationships and data?</AccordionTrigger>
              <AccordionContent>
                Partner stores only see order fulfillment details - never your customer data or sales history. You maintain complete control of your customer relationships. The fulfillment process is white-labeled, so customers only see your branding throughout their experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>What if I want to fulfill orders for others but not share my inventory?</AccordionTrigger>
              <AccordionContent>
                That&apos;s completely fine! You can choose to be a fulfillment-only partner or an inventory-sharing partner. Set your preferences for each product and change them anytime. You&apos;re in control of how you participate in the network.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How quickly can I start recovering lost sales?</AccordionTrigger>
              <AccordionContent>
                Most stores start recovering lost sales within the first week. Setup takes less than 30 minutes, and our team helps you connect with trusted partners in your area. As soon as you&apos;re connected, any out-of-stock orders can be automatically fulfilled by partners.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>What if I need to handle returns or exchanges?</AccordionTrigger>
              <AccordionContent>
                Returns and exchanges work just like they do now. Customers contact you, and we help coordinate with the fulfillment partner if needed. All return shipping labels and processing are handled automatically through our system to maintain a seamless experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>How does pricing work for marketplace transactions?</AccordionTrigger>
              <AccordionContent>
                Our pricing is transparent and based on your tier. For sellers--there is no fee. We charge a small service fee to the customer by adding it to the final price (5-10% depending on your plan). On marketplace transactions - there is a 3% fee. For marketplace operators, there&apos;s a connector fee (1-3%) on transactions facilitated through your marketplace.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>Can I connect multiple e-commerce platforms to sssync?</AccordionTrigger>
              <AccordionContent>
                Absolutely! One of our core strengths is multi-platform inventory synchronization. You can connect Shopify, WooCommerce, Square, Amazon, Clover, and more simultaneously. This allows you to manage inventory across all your sales channels from a single dashboard.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>How do you handle shipping costs between partner stores?</AccordionTrigger>
              <AccordionContent>
                Shipping costs are calculated automatically based on distance, weight, and carrier rates. These costs are factored into the fulfillment fee that partner stores receive. You can set your preferences for shipping methods and carriers in your dashboard, and even offer local pickup or delivery options.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>Is there a limit to how many partner stores I can connect with?</AccordionTrigger>
              <AccordionContent>
                The number of partner connections depends on your plan. Free tier users can connect with up to 2 partners, Pro Marketplace users can connect with up to 30, and Enterprise users have unlimited connections. You can always upgrade your plan as your network grows.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </FadeInSection>
    </Section>
  );
}

// Also export as default to fix import conflicts
export default FAQ; 