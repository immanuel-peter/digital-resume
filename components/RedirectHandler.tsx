'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function RedirectHandler() {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  useEffect(() => {
    if (redirectTo) {
      try {
        // Decode the URL if it's encoded
        const decodedUrl = decodeURIComponent(redirectTo);
        
        // Validate it's a proper URL
        let url: URL;
        try {
          // If it doesn't have a protocol, add https://
          const urlString = decodedUrl.includes('://') 
            ? decodedUrl 
            : `https://${decodedUrl}`;
          url = new URL(urlString);
        } catch {
          // If URL parsing fails, try with https:// prefix
          url = new URL(`https://${decodedUrl}`);
        }

        // Only allow http/https protocols for security
        if (url.protocol === 'http:' || url.protocol === 'https:') {
          window.location.href = url.toString();
        }
      } catch (error) {
        console.error('Invalid redirect URL:', error);
      }
    }
  }, [redirectTo]);

  return null;
}
