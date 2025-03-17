import React from 'react';
import { useParentState } from '../useIframeState';
import { ThreadView } from '../../components/ThreadView/ThreadView';
import { ScopeProvider as CustomScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  
  const [state, setState] = useParentState({
    threadId: {
      type: "string",
      value: "thread-123",
      label: "Thread ID"
    },
    placement: {
      type: "dropdown",
      value: "hovercard",
      options: ["hovercard", "undefined"],
      label: "Placement"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient} normalizerConfig={{ normalize: false }}>
      <CustomScopeProvider>
        <ThreadView 
          threadId={state.threadId.value} 
          placement={state.placement.value === "undefined" ? undefined : state.placement.value as "hovercard"}
        />
      </CustomScopeProvider>
    </QueryNormalizerProvider>
  );
}