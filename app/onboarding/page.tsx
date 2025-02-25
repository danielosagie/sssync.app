"use client";

import { FilloutFullScreenEmbed } from "@fillout/react";
import "@fillout/react/style.css";
import { useSearchParams } from "next/navigation";

export default function OnboardingPage() {
  const searchParams = useSearchParams();

  // Get source and plan from URL parameters
  const source = searchParams.get("source") || "direct";
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