import React from 'react';
import { useParentState } from '../useIframeState';
import { useUploadChatAttachments } from '../../hooks/useUploadChatAttachments';
import { Provider } from 'jotai';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    enabled: {
      type: "boolean",
      value: true,
      label: "Enabled"
    }
  });

  return (
    <ScopeProvider>
      <MockComponent state={state} />
    </ScopeProvider>
  );
}

// Separate the hook usage into a child component to ensure proper context access
function MockComponent({ state }) {
  const hook = useUploadChatAttachments({
    enabled: state.enabled.value
  });

  // Since this is a hook, we don't actually render anything
  // But we need to return something for React
  return null;
}