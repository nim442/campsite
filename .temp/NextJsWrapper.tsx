import React from 'react';
import type { ReactVersionInfo } from '../utils/detectFramework';
import type { NextRouter } from './next/router-context.shared-runtime';
import Image from 'next/image';

// Import the router context from Next.js
let RouterContext: React.Context<NextRouter | null> = React.createContext<NextRouter | null>(null);

try {
  // Try to dynamically import the router context
  const nextRouter = require('next/dist/shared/lib/router-context.shared-runtime');
  if (nextRouter && nextRouter.RouterContext) {
    RouterContext = nextRouter.RouterContext;
  }
} catch (error) {
  console.debug('Next.js router context not available, using fallback');
}

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

// Override Next.js Image configuration
if (typeof window !== 'undefined') {
  // @ts-ignore - Add configuration
  Image.defaultProps = {
    ...Image.defaultProps,
    unoptimized: true,
    loader: ({ src }: { src: string }) => src,
  };
}

// Configure domains for Next.js Image
const configureNextImage = () => {
  try {
    // @ts-ignore - Configure images
    Image.domains = ['placekitten.com', 'picsum.photos'];
    // @ts-ignore - Configure remote patterns
    Image.remotePatterns = [
      {
        protocol: 'https',
        hostname: 'placekitten.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      }
    ];
  } catch (error) {
    console.debug('Failed to configure Next.js Image domains', error);
  }
};

// Run configuration
configureNextImage();

interface NextJsWrapperProps {
  children: React.ReactNode;
  reactVersion?: ReactVersionInfo;
}

/**
 * A wrapper component that provides Next.js specific context providers
 * Currently supports Next.js router context and configured Image component
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