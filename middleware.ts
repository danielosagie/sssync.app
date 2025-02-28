import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

// Combine both matchers
export const config = { 
  matcher: [
    '/welcome',
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};

export async function middleware(request) {
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
  
  // Add permissive CSP headers for images
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' data: https: http:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
  );
  
  return response;
} 