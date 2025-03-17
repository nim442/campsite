import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectCallButton } from '../../components/Projects/ProjectCallButton';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    variant: {
      type: "dropdown",
      value: "primary",
      options: ["primary", "secondary", "plain", "danger"],
      label: "Button Variant"
    },
    size: {
      type: "dropdown",
      value: "md",
      options: ["sm", "md", "lg", "base"],
      label: "Button Size"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    loading: {
      type: "boolean",
      value: false,
      label: "Loading"
    },
    fullWidth: {
      type: "boolean",
      value: false,
      label: "Full Width"
    },
    align: {
      type: "dropdown",
      value: "center",
      options: ["center", "left"],
      label: "Alignment"
    },
    hotkey: {
      type: "boolean",
      value: false,
      label: "Hotkey"
    },
    children: {
      type: "string",
      value: "Call Button",
      label: "Button Text"
    }
  });

  const mockProject = {
    message_thread_id: "mock-thread-id"
  };

  // Create a new QueryClient instance
  const queryClient = new QueryClient();

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <ProjectCallButton
          project={mockProject}
          variant={state.variant.value}
          size={state.size.value}
          disabled={state.disabled.value}
          loading={state.loading.value}
          fullWidth={state.fullWidth.value}
          align={state.align.value}
          hotkey={state.hotkey.value}
        >
          {state.children.value}
        </ProjectCallButton>
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}