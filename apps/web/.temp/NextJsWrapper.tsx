import React from 'react';
import type { ReactVersionInfo } from '../utils/detectFramework';
import type { NextRouter } from './next/router-context.shared-runtime';
import Image from 'next/image';

// Import the router context from Next.js
// This will be resolved by the nextJsStubsPlugin in Vite
let RouterContext: React.Context<NextRouter | null> = React.createContext<NextRouter | null>(null);

try {
  // Try to dynamically import the router context
  // This is wrapped in try/catch because it might not be available
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const nextRouter = require('next/dist/shared/lib/router-context.shared-runtime');
  if (nextRouter && nextRouter.RouterContext) {
    RouterContext = nextRouter.RouterContext;
  }
} catch (error) {
  // Silently fail if the import fails
  console.debug('Next.js router context not available, using fallback');
}

// Configure Next.js Image domains
const imageConfig = {
  domains: ['images.unsplash.com'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
};

// Override the default loader configuration
if (Image.defaultLoader) {
  const originalLoader = Image.defaultLoader;
  Image.defaultLoader = ({ src, width, quality }) => {
    // Allow images from configured domains
    if (src.startsWith('https://images.unsplash.com')) {
      return src;
    }
    return originalLoader({ src, width, quality });
  };
}

// Create a mock router value that matches the Next.js router shape
const mockRouterValue: NextRouter = {
  pathname: '/',
  route: '/',
  query: {},
  asPath: '/',
  basePath: '',
  isLocaleDomain: false,
  isFallback: false,
  isReady: true,
  isPreview: false,
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  prefetch: () => Promise.resolve(),
  beforePopState: () => true,
  isSsr: false,
  locale: 'en',
  locales: ['en'],
  defaultLocale: 'en',
};

interface NextJsWrapperProps {
  children: React.ReactNode;
  reactVersion?: ReactVersionInfo;
}

/**
 * A wrapper component that provides Next.js specific context providers
 * Currently supports Next.js router context
 */
export function NextJsWrapper({ 
  children, 
  reactVersion
}: NextJsWrapperProps) {
  return (
    <RouterContext.Provider value={mockRouterValue}>
      {children}
    </RouterContext.Provider>
  );
}

export default NextJsWrapper;