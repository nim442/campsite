import React from 'react';
import { useParentState } from '../useIframeState';
import { AppLayout } from '../../components/Layout/AppLayout';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Override the useRouter hook
import Router from 'next/router';

const mockRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/inbox',
  pathname: '/[org]/inbox',
  route: '/[org]/inbox',
  basePath: '',
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  forward: () => {},
  prefetch: () => Promise.resolve(),
  beforePopState: () => {},
  isFallback: false,
  isLocaleDomain: false,
  isPreview: false,
};

// Override the useRouter implementation
const originalUseRouter = Router.useRouter;
Router.useRouter = () => mockRouter;

// Prefetch the current user data
queryClient.setQueryData(['users', 'me'], {
  logged_in: true,
  id: 1,
  email: 'test@example.com',
  name: 'Test User'
});

export default function ComponentPreview() {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryNormalizerProvider 
        queryClient={queryClient}
        normalizerConfig={{
          normalize: true
        }}
      >
        <ScopeProvider>
          <AppLayout>
            <div className="p-4">
              Sample content for the layout
            </div>
          </AppLayout>
        </ScopeProvider>
      </QueryNormalizerProvider>
    </QueryClientProvider>
  );
}