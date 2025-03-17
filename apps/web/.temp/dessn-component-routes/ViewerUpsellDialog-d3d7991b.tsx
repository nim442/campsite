import React from 'react';
import { useParentState } from '../useIframeState';
import { ViewerUpsellDialog } from '../../components/Upsell/ViewerUpsellDialog';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    title: {
      type: "string",
      value: "Upgrade Your Role",
      label: "Dialog Title"
    }
  });

  // Mock Next.js router context
  const mockRouter = {
    query: { org: 'demo-org' },
    isReady: true,
    asPath: '/demo-org/dashboard'
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        <ViewerUpsellDialog
          open={state.open.value}
          onOpenChange={(open) => setState("open", open)}
          icon={<span>🔒</span>}
          title={state.title.value}
        />
      </ScopeProvider>
    </QueryClientProvider>
  );
}