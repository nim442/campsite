import React from 'react';
import { useParentState } from '../useIframeState';
import { TagsIndex } from '../../components/Tags/TagList';
import { ScopeProvider } from '@/contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  const [state] = useParentState({
    scope: {
      type: "string",
      value: "default",
      label: "Scope",
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider initialScope={state.scope.value}>
        <TagsIndex />
      </ScopeProvider>
    </QueryClientProvider>
  );
}