import React from 'react';
import { useParentState } from '../useIframeState';
import { DisconnectSlackConfirmationDialog } from '../../components/OrgSettings/DisconnectSlackConfirmationDialog';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScopeProvider } from '../../contexts/scope';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function ComponentPreview() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        <DisconnectSlackConfirmationDialog />
      </ScopeProvider>
    </QueryClientProvider>
  );
}