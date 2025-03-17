import React from 'react';
import { useParentState } from '../useIframeState';
import { UnreadHomeSpaces } from '../../components/MobileHome/UnreadHomeSpaces';
import { ScopeProvider } from '@/contexts/scope';

// Create context providers for the hooks
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

// Create a mock QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Prefill the cache with mock data
queryClient.setQueryData(['projectMemberships'], [
  {
    project: {
      id: '1',
      name: 'Project 1',
      unread_for_viewer: true,
      accessory: '📚'
    }
  },
  {
    project: {
      id: '2',
      name: 'Project 2',
      unread_for_viewer: true,
      accessory: null
    }
  }
]);

queryClient.setQueryData(['favorites'], []);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    scope: {
      type: "string",
      value: "default-scope",
      label: "Scope"
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider initialScope={state.scope.value}>
        <UnreadHomeSpaces />
      </ScopeProvider>
    </QueryClientProvider>
  );
}