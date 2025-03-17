import React from 'react';
import { useParentState } from '../useIframeState';
import { InboxProjectRenderer } from '../../components/InboxItems/InboxProjectRenderer';
import { ScopeProvider } from '../../contexts/scope';
import { NextRouter } from 'next/router';
import { createContext } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';

// Create a router context
const RouterContext = createContext<NextRouter>({} as NextRouter);

const mockRouter: NextRouter = {
  route: '/',
  pathname: '/',
  query: { org: 'test-org' },
  asPath: '/test-org/inbox',
  basePath: '',
  isReady: true,
  isPreview: false,
  isLocaleDomain: false,
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  prefetch: () => Promise.resolve(),
  beforePopState: () => {},
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  isFallback: false,
  locale: 'en',
  defaultLocale: 'en',
  domainLocales: [],
  isLocaleDomain: false
};

// Override the useRouter implementation
import Router from 'next/router';
Router.router = mockRouter;

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    projectId: {
      type: "string",
      value: "project-123",
      label: "Project ID"
    }
  });

  return (
    <RouterContext.Provider value={mockRouter}>
      <QueryNormalizerProvider 
        queryClient={queryClient}
        normalizerConfig={{
          normalize: true
        }}
      >
        <ScopeProvider>
          <InboxProjectRenderer projectId={state.projectId.value} />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </RouterContext.Provider>
  );
}