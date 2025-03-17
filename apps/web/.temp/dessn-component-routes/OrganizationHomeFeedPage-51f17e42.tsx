// Mock Next.js server module before any imports
const __dirname = '/';
const __filename = '/index.js';

// Mock Next.js server features
globalThis.__dirname = __dirname;
globalThis.__filename = __filename;
globalThis.process = {
  env: {
    NODE_ENV: 'development',
    NEXT_PUBLIC_API_URL: 'http://localhost:3000'
  }
};

// Mock require function
globalThis.require = function(path) {
  if (path === 'ua-parser-js') {
    return {
      UAParser: class {
        getResult() {
          return {
            browser: { name: 'Chrome', version: '91.0.0' },
            os: { name: 'Windows', version: '10' }
          };
        }
      }
    };
  }
  if (path === 'next/server') {
    return {
      userAgent: {
        parse: () => ({
          browser: { name: 'Chrome', version: '91.0.0' },
          os: { name: 'Windows', version: '10' }
        })
      }
    };
  }
  return {};
};

import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/index';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';
import { AppLayout } from '@/components/Layout/AppLayout';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// Create router context
const RouterContext = React.createContext({});

const RouterProvider = ({ children }: { children: React.ReactNode }) => {
  const router = {
    query: { org: 'test-org' },
    push: () => Promise.resolve(true),
    replace: () => Promise.resolve(true),
    prefetch: () => Promise.resolve(),
    pathname: '/[org]',
    asPath: '/test-org',
    events: {
      on: () => {},
      off: () => {},
      emit: () => {}
    },
    isFallback: false,
    basePath: '',
    isLocaleDomain: false,
    isReady: true,
    isPreview: false
  };

  return (
    <RouterContext.Provider value={router}>
      {children}
    </RouterContext.Provider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    organizationName: {
      type: "string",
      value: "Test Organization",
      label: "Organization Name"
    }
  });

  // Mock the useGetCurrentOrganization hook
  const mockUseGetCurrentOrganization = () => ({
    data: {
      name: state.organizationName.value
    }
  });

  // Override the hook in the component's scope
  (global as any).useGetCurrentOrganization = mockUseGetCurrentOrganization;

  // Ensure mocks are applied
  React.useEffect(() => {
    // Re-apply mocks if needed
    if (!globalThis.__dirname) {
      Object.defineProperty(globalThis, '__dirname', {
        value: '/',
        configurable: false,
        writable: false
      });
    }
  }, []);

  return (
    <RouterProvider>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <AuthAppProviders>
          <AppLayout>
            <ImportedComponent />
          </AppLayout>
        </AuthAppProviders>
      </NextThemesProvider>
    </RouterProvider>
  );
}

// Add type declarations
declare global {
  var __dirname: string;
  var __filename: string;
  var require: (path: string) => any;
}