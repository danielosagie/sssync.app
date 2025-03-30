import { Html, Head, Main, NextScript } from 'next/document';
import fs from 'fs';
import path from 'path';

// Read the critical CSS file at build time
const criticalCSS = fs.readFileSync(
  path.join(process.cwd(), 'app/critical.css'),
  'utf8'
);

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Inline critical CSS */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://ufs.sh" crossOrigin="anonymous" />
        
        {/* Preload critical fonts */}
        <link 
          rel="preload" 
          href="/_next/static/media/a34f9d1faa5f3315-s.p.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 