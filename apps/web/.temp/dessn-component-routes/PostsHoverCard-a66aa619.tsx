import React from 'react';
import { useParentState } from '../useIframeState';
import { PostsHoverCard } from '../../components/Sidebar/PostsHoverCard';
import { Provider } from 'jotai';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScopeProvider } from '../../contexts/scope';
import { NextRouter } from 'next/router';

// Mock Next.js router for preview environment
const mockRouter: Partial<NextRouter> = {
  query: { org: 'demo-org' },
  isReady: true,
  asPath: '/demo-org/posts',
  push: () => Promise.resolve(true),
  prefetch: () => Promise.resolve(),
  replace: () => Promise.resolve(true),
  route: '/',
  pathname: '/',
  basePath: '',
  events: {
    on: () => {},
    off: () => {},
    emit: () => {}
  }
};

const queryClient = new QueryClient();

export default function ComponentPreview() {
  return (
    <div style={{ padding: '1rem' }}>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <ScopeProvider>
            <PostsHoverCard>
              <button>Hover over me</button>
            </PostsHoverCard>
          </ScopeProvider>
        </Provider>
      </QueryClientProvider>
    </div>
  );
}