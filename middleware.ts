import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';
import { NextRequest } from 'next/server';

// Combine both matchers
export const config = { 
  matcher: [
    '/welcome',
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};

export async function middleware(request: NextRequest) {
  // Check if this is the /welcome route
  if (request.nextUrl.pathname === '/welcome') {
    try {
      const greeting = await get('greeting');
      return NextResponse.json(greeting);
    } catch (error) {
      console.error('Error fetching greeting:', error);
      return NextResponse.json({ error: 'Failed to fetch greeting' }, { status: 500 });
    }
  }
  
  // For all other routes, add security headers
  const response = NextResponse.next();
  
  // Add comprehensive CSP headers that allow Fillout forms and analytics
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "img-src 'self' data: https: http: blob:; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://forms.fillout.com https://*.posthog.com https://*.vercel-insights.com https://*.vercel-analytics.com; " +
    "style-src 'self' 'unsafe-inline' https://forms.fillout.com; " +
    "connect-src 'self' https://*.posthog.com https://*.vercel-insights.com https://*.vercel-analytics.com https://forms.fillout.com; " +
    "frame-src 'self' https://forms.fillout.com; " +
    "font-src 'self' data:; " +
    "media-src 'self';"
  );
  
  return response;
} 