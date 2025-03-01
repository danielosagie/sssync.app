"use client"

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
  posthog.init('phc_trhi7EqdEj1CQofc0yljbYEDfIty04ZXbho399Gsqw9', {
    api_host: 'https://us.i.posthog.com',
    capture_pageview: true
  })
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
} 