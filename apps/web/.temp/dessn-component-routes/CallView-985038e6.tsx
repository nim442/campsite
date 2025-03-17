import React from 'react';
import { useParentState } from '../useIframeState';
import { CallView } from '../../components/CallView/index';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';

export default function ComponentPreview() {
  const [state] = useParentState({
    callId: {
      type: "string",
      value: "call-123",
      label: "Call ID"
    }
  });

  // Get the queryClient from the parent Wrapper component's context
  const queryClient = new QueryClient();

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <CallView callId={state.callId.value} />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}