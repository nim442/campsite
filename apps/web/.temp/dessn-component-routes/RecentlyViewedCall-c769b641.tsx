import React from 'react';
import { useParentState } from '../useIframeState';
import { RecentlyViewedCall } from '../../components/Sidebar/RecentlyViewed/RecentlyViewedItem';
import { ScopeProvider } from '@/contexts/scope';
import { QueryNormalizerProvider } from '@/utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';
import { Command } from '@campsite/ui/Command';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state] = useParentState({
    call: {
      type: "object",
      value: {
        id: "123",
        title: "Weekly Team Sync",
        project: null,
        created_at: new Date().toISOString(),
        url: "https://example.com/calls/123"
      },
      label: "Call Data"
    }
  });

  return (
    <QueryNormalizerProvider 
      queryClient={queryClient}
      normalizerConfig={{
        normalize: true
      }}
    >
      <ScopeProvider value={{ scope: "default" }}>
        <Command>
          <Command.List>
            <RecentlyViewedCall 
              call={state.call.value}
              onSelect={() => console.log("Call selected")}
            />
          </Command.List>
        </Command>
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}