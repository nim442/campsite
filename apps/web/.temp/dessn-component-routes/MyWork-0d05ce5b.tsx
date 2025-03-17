import React from 'react';
import { useParentState } from '../useIframeState';
import { MyWork } from '../../components/MyWork/index';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Create mock data for the router
const mockRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/posts',
  push: () => Promise.resolve(true),
  prefetch: () => Promise.resolve(),
  replace: () => Promise.resolve(true),
  pathname: '/test-org/posts',
  route: '/[org]/posts',
};

// Create Next.js router context
const NextRouterContext = React.createContext(mockRouter);
NextRouterContext.displayName = 'NextRouterContext';

// Override the useRouter implementation
import { useRouter } from 'next/router';
const RouterProvider = ({ children }) => (
  <NextRouterContext.Provider value={mockRouter}>
    {children}
  </NextRouterContext.Provider>
);

export default function ComponentPreview() {
  // Provide initial data to the QueryClient
  React.useEffect(() => {
    // Set initial data for current user
    queryClient.setQueryData(['currentUser'], {
      preferences: {
        home_display_reactions: 'true',
        home_display_attachments: 'true',
        home_display_comments: 'true',
        home_display_resolved: 'true'
      }
    });
  }, []);

  return (
    <RouterProvider>
      <QueryClientProvider client={queryClient}>
        <QueryNormalizerProvider 
          queryClient={queryClient}
          normalizerConfig={{
            normalize: true
          }}
        >
          <Provider>
            <ScopeProvider>
              <div className="w-full h-full">
                <MyWork />
              </div>
            </ScopeProvider>
          </Provider>
        </QueryNormalizerProvider>
      </QueryClientProvider>
    </RouterProvider>
  );
}

// Override the useRouter hook
Object.defineProperty(require('next/router'), 'useRouter', {
  value: () => React.useContext(NextRouterContext),
  writable: true
});