import React from 'react';
import { useParentState } from '../useIframeState';
import { BreadcrumbProjectCallButton } from '../../components/Projects/ProjectCallButton';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  
  const [state, setState] = useParentState({
    messageThreadId: {
      type: "string",
      value: "thread-123",
      label: "Message Thread ID"
    },
    variant: {
      type: "dropdown",
      value: "plain",
      options: ["plain", "primary", "secondary", "danger", "success"],
      label: "Button Variant"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    hotkey: {
      type: "boolean",
      value: true,
      label: "Enable Hotkey"
    },
    scope: {
      type: "string",
      value: "test-org",
      label: "Organization Scope"
    }
  });

  const project = {
    message_thread_id: state.messageThreadId.value
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <BreadcrumbProjectCallButton
          project={project}
          disabled={state.disabled.value}
          variant={state.variant.value}
          hotkey={state.hotkey.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}