import React from 'react';
import { useParentState } from '../useIframeState';
import { ThreadViewTitlebar } from '../../components/ThreadView/ThreadViewTitlebar';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    threadId: {
      type: "string",
      value: "thread-123",
      label: "Thread ID"
    },
    placement: {
      type: "dropdown",
      value: "hovercard",
      options: ["hovercard"],
      label: "Placement"
    },
    isFocus: {
      type: "boolean",
      value: false,
      label: "Is Focus"
    }
  });

  // Create a new QueryClient instance
  const queryClient = new QueryClient();

  return (
    <QueryNormalizerProvider 
      queryClient={queryClient}
      normalizerConfig={{
        normalize: true
      }}
    >
      <ScopeProvider>
        <ThreadViewTitlebar 
          threadId={state.threadId.value}
          placement={state.placement.value as "hovercard"}
          isFocus={state.isFocus.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}