import React from 'react';
import { useParentState } from '../useIframeState';
import { FloatingNewPostButton } from '../../components/FloatingButtons/NewPost';
import { PostComposer } from '@/components/PostComposer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScopeProvider } from '@/contexts/scope';
import { createContext } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Create a mock router context
const RouterContext = createContext({
  query: { org: 'demo-org' },
  isReady: true,
  asPath: '/demo-org/posts',
});

// Override the next/router module
import Router from 'next/router';
Object.defineProperty(Router, 'useRouter', {
  value: () => ({
    query: { org: 'demo-org' },
    isReady: true,
    asPath: '/demo-org/posts',
  }),
  writable: true,
});

export default function ComponentPreview() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        <FloatingNewPostButton />
      </ScopeProvider>
    </QueryClientProvider>
  );
}