import React from 'react';
import { Provider as JotaiProvider } from 'jotai';
import { NewPostButton } from '../../components/Sidebar/NewPostButton';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScopeProvider } from '../../contexts/scope';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  // Mock Next.js router context that ScopeProvider expects
  const mockRouter = {
    query: { org: 'demo-org' },
    isReady: true,
    asPath: '/demo-org/posts'
  };

  // @ts-ignore - We're mocking the router context
  global.Router = {
    asPath: '/demo-org/posts'
  };

  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        {/* @ts-ignore - We're providing minimal router context */}
        <ScopeProvider router={mockRouter}>
          <NewPostButton />
        </ScopeProvider>
      </QueryClientProvider>
    </JotaiProvider>
  );
}