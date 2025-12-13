'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

// Whitelist of trusted domains allowed for redirects
const ALLOWED_DOMAINS = [
  'eduspheretech.com',
  'matchbox.eduspheretech.com',
];

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
        if (url.protocol !== 'http:' && url.protocol !== 'https:') {
          console.error('Invalid protocol:', url.protocol);
          return;
        }

        // Validate hostname: allow same-origin or whitelisted domains
        const currentHostname = typeof window !== 'undefined' ? window.location.hostname : '';
        const redirectHostname = url.hostname.toLowerCase();
        
        const isSameOrigin = redirectHostname === currentHostname.toLowerCase();
        const isWhitelisted = ALLOWED_DOMAINS.some(domain => {
          const domainLower = domain.toLowerCase();
          // Exact match or subdomain (e.g., www.eduspheretech.com matches eduspheretech.com)
          return redirectHostname === domainLower || redirectHostname.endsWith(`.${domainLower}`);
        });

        if (isSameOrigin || isWhitelisted) {
          window.location.href = url.toString();
        } else {
          console.error('Redirect blocked: hostname not allowed:', redirectHostname);
        }
      } catch (error) {
        console.error('Invalid redirect URL:', error);
      }
    }
  }, [redirectTo]);

  return null;
}
