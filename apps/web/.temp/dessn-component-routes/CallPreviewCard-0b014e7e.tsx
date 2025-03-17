import React from 'react';
import { useParentState } from '../useIframeState';
import { CallPreviewCard } from '../../components/PreviewCards/CallPreviewCard';
import { ScopeProvider } from '@/contexts/scope';
import { QueryClient } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '@/utils/normy/QueryNormalizerProvider';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  
  const [state, setState] = useParentState({
    callId: {
      type: "string",
      value: "call-123",
      label: "Call ID"
    },
    interactive: {
      type: "boolean",
      value: true,
      label: "Interactive"
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider initialScope="default">
        <CallPreviewCard 
          callId={state.callId.value}
          interactive={state.interactive.value}
          className={state.className.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}