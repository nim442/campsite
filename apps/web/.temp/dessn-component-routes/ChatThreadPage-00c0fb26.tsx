import '@campsite/ui/src/styles/global.css';
import '@campsite/ui/src/styles/code.css';
import 'styles/editor.css';
import 'styles/global.css';
import 'styles/prose.css';

import React from 'react';
import Image from 'next/image';
import { useParentState } from '../useIframeState';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '../ErrorBoundary';
import type { NextRouter } from 'next/router';

// Import the components directly
import ChatThreadPage from '@/pages/[org]/chat/[threadId]';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';
import { AppLayout } from '@/components/Layout/AppLayout';

// Create RouterContext
const RouterContext = React.createContext<NextRouter | null>(null);

// Configure Next.js Image
if (typeof window !== 'undefined') {
  // @ts-ignore
  Image.defaultProps = {
    ...Image.defaultProps,
    unoptimized: true,
    loader: ({ src }: { src: string }) => src,
  };
}

// Configure domains for Next.js Image
try {
  // @ts-ignore
  Image.domains = ['placekitten.com', 'picsum.photos'];
  // @ts-ignore
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

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state] = useParentState({
    threadId: {
      type: "string",
      value: "example-thread-123",
      label: "Thread ID"
    },
    org: {
      type: "string",
      value: "example-org",
      label: "Organization"
    }
  });

  // Enhanced mock router
  const mockRouter: NextRouter = {
    query: {
      threadId: state.threadId.value,
      org: state.org.value
    },
    asPath: `/${state.org.value}/chat/${state.threadId.value}`,
    pathname: '/[org]/chat/[threadId]',
    push: () => Promise.resolve(true),
    replace: () => Promise.resolve(true),
    prefetch: () => Promise.resolve(),
    back: () => window.history.back(),
    reload: () => window.location.reload(),
    events: {
      on: () => {},
      off: () => {},
      emit: () => {}
    },
    isFallback: false,
    basePath: '',
    isLocaleDomain: false,
    isReady: true,
    isPreview: false,
    route: '/[org]/chat/[threadId]',
    locale: 'en',
    locales: ['en'],
    defaultLocale: 'en',
    beforePopState: () => true,
    isSsr: false
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        id="component"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ErrorBoundary>
          <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            
            :root {
              --font-inter: 'Inter', sans-serif;
            }
          `}</style>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <QueryClientProvider client={queryClient}>
              <RouterContext.Provider value={mockRouter}>
                <div className="font-inter">
                  <AuthAppProviders>
                    <AppLayout>
                      <ChatThreadPage />
                    </AppLayout>
                  </AuthAppProviders>
                </div>
              </RouterContext.Provider>
            </QueryClientProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </div>
    </div>
  );
}