"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

const suggestedFeatures = [
  { id: "inventory-sync", label: "Real-Time Inventory Sync" },
  { id: "marketplace", label: "Shared Inventory Marketplace" },
  { id: "fulfillment", label: "Transparent Fulfillment" },
  { id: "ratings", label: "Marketplace Ratings" },
  { id: "payouts", label: "Automated Payouts" },
  { id: "widget", label: "Real-Time Widget" },
];

export default function OnboardingPage() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    phone: "",
    plan: "",
    features: [] as string[],
    otherFeatures: "",
    businessGoal: "",
    source: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Get source and plan from URL parameters
    const source = searchParams.get("source") || "direct";
    const plan = source.includes("plan") ? source.split("_")[0] : "";
    
    setFormData(prev => ({
      ...prev,
      source,
      plan,
    }));
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      // Redirect to success page
      window.location.href = '/onboarding/success';
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {error && (
          <div className="mb-4 p-4 text-sm border border-red-200 bg-red-50 text-red-600 rounded-md">
            {error}
          </div>
        )}
        <AnimatePresence mode="wait">
          {isComplete ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-4"
            >
              <div className="flex justify-center">
                <CheckCircle2 className="h-16 w-16 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold">You're on the waitlist!</h2>
              <p className="text-muted-foreground">
                We'll reach out as soon as your spot is ready. In the meantime, follow us on Twitter for updates.
              </p>
              <Button asChild variant="outline">
                <a href="https://twitter.com/sssyncapp" target="_blank" rel="noopener noreferrer">
                  Follow us on Twitter
                </a>
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8 bg-card p-8 rounded-lg border"
            >
              {step === 1 && (
                <>
                  <div className="space-y-2">
                    <h1 className="text-2xl font-bold">Welcome to sssync</h1>
                    <p className="text-muted-foreground">
                      {formData.plan 
                        ? `Let's get you started with our ${formData.plan} plan`
                        : "Let's get your business set up"}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input
                        id="businessName"
                        placeholder="Enter your business name"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <Button 
                    className="w-full"
                    onClick={() => setStep(2)}
                    disabled={!formData.businessName || !formData.email || !formData.phone}
                  >
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="space-y-2">
                    <h1 className="text-2xl font-bold">Tell us about your needs</h1>
                    <p className="text-muted-foreground">Help us understand how we can best support your business</p>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label>What are you looking to achieve with sssync?</Label>
                      <Textarea
                        placeholder="Tell us about your main business challenges and what you hope to accomplish..."
                        value={formData.businessGoal}
                        onChange={(e) => setFormData({ ...formData, businessGoal: e.target.value })}
                        className="min-h-[100px]"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <Label>Which features interest you? (Select all that apply)</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {suggestedFeatures.map((feature) => (
                          <div key={feature.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={feature.id}
                              checked={formData.features.includes(feature.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setFormData({
                                    ...formData,
                                    features: [...formData.features, feature.id],
                                  });
                                } else {
                                  setFormData({
                                    ...formData,
                                    features: formData.features.filter((f) => f !== feature.id),
                                  });
                                }
                              }}
                            />
                            <Label htmlFor={feature.id} className="text-sm">{feature.label}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Any other features you'd like to see?</Label>
                      <Textarea
                        placeholder="Tell us about any other features or functionality you'd find valuable..."
                        value={formData.otherFeatures}
                        onChange={(e) => setFormData({ ...formData, otherFeatures: e.target.value })}
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setStep(1)} className="w-full">
                      Back
                    </Button>
                    <Button 
                      className="w-full"
                      onClick={handleSubmit}
                      disabled={isSubmitting || !formData.businessGoal}
                    >
                      {isSubmitting ? "Submitting..." : "Complete Setup"}
                    </Button>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 