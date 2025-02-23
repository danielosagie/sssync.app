'use client';

import { useEffect } from 'react';

export default function ErrorBoundary({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('Error caught by boundary:', event.error);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  return <>{children}</>;
} 