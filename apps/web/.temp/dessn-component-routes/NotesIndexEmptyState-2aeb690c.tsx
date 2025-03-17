import React from 'react';
import { NotesIndexEmptyState } from '../../components/NotesIndex/index';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Mock Next.js router
const MockNextRouter = ({ children }) => {
  const mockRouter = {
    query: { org: 'demo-org' },
    isReady: true,
    asPath: '/demo-org/notes',
  };

  // @ts-ignore - we're mocking the router context
  React.useEffect(() => {
    (window).next = {
      router: mockRouter
    };
  }, []);

  return children;
};

export default function ComponentPreview() {
  return (
    <QueryClientProvider client={queryClient}>
      <MockNextRouter>
        <ScopeProvider>
          <NotesIndexEmptyState />
        </ScopeProvider>
      </MockNextRouter>
    </QueryClientProvider>
  );
}