"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { FilloutFullScreenEmbed } from "@fillout/react";
import dynamic from "next/dynamic";

function LoadingPlaceholder() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        <div className="w-16 h-16 border-4 border-lime-600 border-t-transparent rounded-full animate-spin"></div>
        <h2 className="text-xl font-medium text-gray-700">Loading your application form...</h2>
        <div className="max-w-md text-center text-gray-500 text-sm">
          Please wait while we prepare your onboarding experience. This should only take a moment.
        </div>
      </div>
    </div>
  );
}

export default function OnboardingPage() {
  const searchParams = useSearchParams();

  const source = searchParams?.get("source") || "direct";
  const plan = source.includes("plan") ? source.split("_")[0] : "";

  return (
    <FilloutFullScreenEmbed 
      filloutId="o8WtoyuYDRus"
      inheritParameters
      parameters={{
        source,
        plan
      }}
    />
  );
} 