"use client"

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface FallbackImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc: string;
  alt: string;
  debug?: boolean; // Optional debug flag
}

export function FallbackImage({
  src,
  fallbackSrc,
  alt,
  debug = false, // Default to false
  className = '',
  ...props
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    // Reset state when src changes
    setImgSrc(src);
    setLoading(true);
    setError(false);
    setUsingFallback(false);
  }, [src]);

  // Add a visual indicator class if using fallback
  const combinedClassName = `${className} ${usingFallback ? 'fallback-active' : ''}`;
  
  // Add a subtle border when fallback is active (can be removed in production)
  const fallbackStyle = usingFallback ? { border: debug ? '2px solid orange' : 'none' } : {};

  return (
    <div style={{ position: 'relative' }}>
      <Image
        {...props}
        className={combinedClassName}
        src={imgSrc}
        alt={alt}
        style={{ ...props.style, ...fallbackStyle }}
        data-using-fallback={usingFallback.toString()}
        data-original-src={src}
        data-fallback-src={fallbackSrc}
        onLoadingComplete={() => {
          setLoading(false);
          if (debug) console.log(`✅ Image loaded successfully: ${alt}`, usingFallback ? '(using fallback)' : '(using original)');
        }}
        onError={() => {
          if (!usingFallback) {
            console.warn(`⚠️ Image failed to load: ${alt}, using fallback: ${fallbackSrc}`);
            setError(true);
            setImgSrc(fallbackSrc);
            setUsingFallback(true);
          } else {
            console.error(`❌ Both original and fallback images failed to load for: ${alt}`);
          }
        }}
      />
      {debug && usingFallback && (
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          background: 'orange',
          color: 'black',
          fontSize: '10px',
          padding: '2px 4px',
          borderRadius: '0 0 0 4px',
          pointerEvents: 'none'
        }}>
          Fallback
        </div>
      )}
    </div>
  );
} 