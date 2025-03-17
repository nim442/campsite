import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScopeProvider } from '@/contexts/scope';
import { useParentState } from '../useIframeState';
import { StatusPicker } from '../../components/StatusPicker';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock the API responses
queryClient.setQueryData(
  ['users', 'me'],
  {
    username: 'johndoe',
    email: 'john@example.com',
    id: '1',
  }
);

queryClient.setQueryData(
  ['organizations', 'members', 'default-org', 'johndoe'],
  {
    username: 'johndoe',
    status: 'available',
    id: '1',
  }
);

export default function ComponentPreview() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        <StatusPicker />
      </ScopeProvider>
    </QueryClientProvider>
  );
}