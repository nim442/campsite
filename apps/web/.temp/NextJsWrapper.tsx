import React from 'react';
import type { ReactVersionInfo } from '../utils/detectFramework';
import type { NextRouter } from './next/router-context.shared-runtime';

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