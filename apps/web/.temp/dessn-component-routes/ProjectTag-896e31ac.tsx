import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectTag } from '../../components/ProjectTag';
import { ScopeProvider } from '@/contexts/scope';
import { QueryClient } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '@/utils/normy/QueryNormalizerProvider';

export default function ComponentPreview() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  const [state, setState] = useParentState({
    projectName: {
      type: "string",
      value: "My Project",
      label: "Project Name"
    },
    projectId: {
      type: "string",
      value: "proj-123",
      label: "Project ID"
    },
    isPrivate: {
      type: "boolean",
      value: false,
      label: "Is Private"
    },
    accessory: {
      type: "string",
      value: "🚀",
      label: "Accessory Emoji"
    }
  });

  const project = {
    id: state.projectId.value,
    name: state.projectName.value,
    private: state.isPrivate.value,
    accessory: state.accessory.value
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider initialScope="default">
        <ProjectTag project={project} />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}