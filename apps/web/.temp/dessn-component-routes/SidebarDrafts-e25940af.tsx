import React from 'react';
import { useParentState } from '../useIframeState';
import { SidebarDrafts } from '../../components/Sidebar/SidebarDrafts';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state] = useParentState({
    scope: {
      type: "string",
      value: "my-org",
      label: "Organization Scope"
    }
  });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider initialScope={state.scope.value}>
        <SidebarDrafts />
      </ScopeProvider>
    </QueryClientProvider>
  );
}