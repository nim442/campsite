import React from 'react';
import { useParentState } from '../useIframeState';
import { CallsIndex } from '../../components/Calls/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'jotai';
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
  const [state] = useParentState({
    scope: {
      type: "string",
      value: "organization",
      label: "Scope"
    },
    isCommunity: {
      type: "boolean",
      value: false,
      label: "Is Community"
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <ScopeProvider>
          <div className="h-screen w-screen">
            <CallsIndex />
          </div>
        </ScopeProvider>
      </Provider>
    </QueryClientProvider>
  );
}