'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { useEffect } from 'react';

export function PostHogProviderWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      posthog.init('phc_trhi7EqdEj1CQofc0yljbYEDfIty04ZXbho399Gsqw9', {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only'
      });
    }
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
} 