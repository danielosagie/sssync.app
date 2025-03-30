'use client';

import { useEffect, useState } from 'react';
import { PostHogProvider } from 'posthog-js/react';

// Simplified PostHog provider that delays initialization
export function PostHogProviderWrapper({ children }: { children: React.ReactNode }) {
  const [posthog, setPosthog] = useState<any>(null);
  
  // Delay PostHog initialization
  useEffect(() => {
    // Only load PostHog after page is fully loaded and idle
    const loadPostHog = () => {
      import('posthog-js').then((module) => {
        const posthogInstance = module.default;
        posthogInstance.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
          capture_pageview: false,
          autocapture: false,
          disable_session_recording: true,
          loaded: (ph) => {
            if (process.env.NODE_ENV === 'development') ph.opt_out_capturing();
            ph.capture('$pageview');
          }
        });
        setPosthog(posthogInstance);
      });
    };

    // Use requestIdleCallback to load PostHog during browser idle time
    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(loadPostHog);
      } else {
        // Fallback for browsers that don't support requestIdleCallback
        setTimeout(loadPostHog, 5000);
      }
    }
  }, []);

  // If PostHog is not loaded yet, just render children without the provider
  if (!posthog) {
    return <>{children}</>;
  }

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
} 