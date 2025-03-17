import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectAccessoryBreadcrumbIcon } from '../../components/Titlebar/BreadcrumbPageIcons';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Mock the feature data
queryClient.setQueryData(['organization-features'], {
  features: []
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    accessory: {
      type: "string",
      value: "🚀",
      label: "Project Accessory"
    },
    message_thread_id: {
      type: "string",
      value: "thread_123",
      label: "Message Thread ID"
    }
  });

  const project = {
    accessory: state.accessory.value,
    message_thread_id: state.message_thread_id.value
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        <ProjectAccessoryBreadcrumbIcon project={project} />
      </ScopeProvider>
    </QueryClientProvider>
  );
}