"use client";

import dynamic from "next/dynamic";

// Dynamically import slow components in a client component
const PostHogProviderWrapper = dynamic(
  () => import('@/components/providers/posthog').then(mod => mod.PostHogProviderWrapper),
  { 
    ssr: false,
    loading: () => <div>Loading analytics...</div>
  }
);

const PHProvider = dynamic(
  () => import('@/components/posthog-provider').then(mod => mod.PHProvider),
  {
    ssr: false,
    loading: () => null
  }
);

export function AnalyticsProviders() {
  return (
    <div id="deferred-analytics">
      <PHProvider>
        <PostHogProviderWrapper>
          <div style={{ display: 'none' }}></div>
        </PostHogProviderWrapper>
      </PHProvider>
    </div>
  );
} 