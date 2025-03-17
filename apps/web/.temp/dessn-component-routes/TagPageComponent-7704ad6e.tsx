import React from 'react';
import { useParentState } from '../useIframeState';
import { TagPageComponent } from '../../components/Tags/TagPageComponent';
import { ScopeProvider } from '@/contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'jotai';
import type { NextRouter } from 'next/router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock router object with proper NextRouter type
const mockRouter: NextRouter = {
  query: { tagName: 'example-tag' },
  push: () => Promise.resolve(true),
  pathname: '',
  asPath: '',
  basePath: '',
  isLocaleDomain: false,
  isReady: true,
  isPreview: false,
  route: '',
  locale: 'en',
  locales: ['en'],
  defaultLocale: 'en',
  isFallback: false,
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  prefetch: () => Promise.resolve(),
  beforePopState: () => true,
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  }
};

// Create a mock router context
const RouterContext = React.createContext<NextRouter>(mockRouter);

// Override the useRouter hook
(global as any).__NEXT_DATA__ = { props: {} };
const useRouter = () => React.useContext(RouterContext);
if (typeof window !== 'undefined') {
  (window as any).next = { router: mockRouter };
}

export default function ComponentPreview() {
  const [state] = useParentState({
    scope: {
      type: "string",
      value: "default",
      label: "Scope",
    },
  });

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <RouterContext.Provider value={mockRouter}>
          <ScopeProvider initialScope={state.scope.value}>
            <TagPageComponent />
          </ScopeProvider>
        </RouterContext.Provider>
      </QueryClientProvider>
    </Provider>
  );
}