"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Loading spinner
function Spinner() {
  return (
    <div className="flex justify-center items-center p-12">
      <div className="w-12 h-12 border-4 border-lime-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

// Dynamically import the heavy component
const WorldMap = dynamic(
  () => import('@/components/ui/world-map').then(mod => mod.WorldMap),
  { 
    loading: () => <Spinner />,
    ssr: false  
  }
);

export default function WorldMapContainer() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render the dynamic component on the client
  if (!isClient) {
    return <Spinner />;
  }

  // Pass the required props to WorldMap
  return (
    <WorldMap 
      lineColor="#65a30d"
      dots={[
        {
          start: { lat: 33.7490, lng: -84.3880 }, // Atlanta
          end: { lat: 40.7128, lng: -74.0060 }, // New York
        },
        {
          start: { lat: 64.2008, lng: -149.4937 }, // Alaska
          end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
        },
        {
          start: { lat: 64.2008, lng: -149.4937 }, // Alaska
          end: { lat: -15.7975, lng: -47.8919 }, // Brazil
        },
        {
          start: { lat: 51.5074, lng: -0.1278 }, // London
          end: { lat: 28.6139, lng: 77.209 }, // New Delhi
        },
        {
          start: { lat: 28.6139, lng: 77.209 }, // New Delhi
          end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
        },
        {
          start: { lat: 28.6139, lng: 77.209 }, // New Delhi
          end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
        },
      ]}
    />
  );
}