import React from 'react';
import { useParentState } from '../useIframeState';
import { ProfileDropdown } from '../../components/NavigationSidebar/ProfileDropdown';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    side: {
      type: "dropdown",
      value: "top",
      options: ["top", "bottom"],
      label: "Side"
    },
    align: {
      type: "dropdown",
      value: "start",
      options: ["start", "end", "center"],
      label: "Align"
    },
    showTrigger: {
      type: "boolean",
      value: false,
      label: "Show Custom Trigger"
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <ProfileDropdown 
            side={state.side.value as "top" | "bottom"}
            align={state.align.value as "start" | "end" | "center"}
            trigger={state.showTrigger.value ? <button>Custom Trigger</button> : undefined}
          />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </QueryClientProvider>
  );
}