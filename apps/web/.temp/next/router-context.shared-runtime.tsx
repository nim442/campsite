import React from 'react';

// Define the router shape to match Next.js
export interface NextRouter {
  pathname: string;
  route: string;
  query: Record<string, string | string[]>;
  asPath: string;
  basePath: string;
  isLocaleDomain: boolean;
  isFallback: boolean;
  isReady: boolean;
  isPreview: boolean;
  events: {
    on: (type: string, handler: (...evts: any[]) => void) => void;
    off: (type: string, handler: (...evts: any[]) => void) => void;
    emit: (type: string, ...evts: any[]) => void;
  };
  push: (url: string, as?: string, options?: any) => Promise<boolean>;
  replace: (url: string, as?: string, options?: any) => Promise<boolean>;
  reload: () => void;
  back: () => void;
  prefetch: (url: string) => Promise<void>;
  beforePopState: (cb: (state: any) => boolean) => void;
  isSsr: boolean;
  locale?: string;
  locales?: string[];
  defaultLocale?: string;
}

// Create the router context
export const RouterContext = React.createContext<NextRouter | null>(null);

// Export a default object to avoid import errors
export default {
  RouterContext
}; 