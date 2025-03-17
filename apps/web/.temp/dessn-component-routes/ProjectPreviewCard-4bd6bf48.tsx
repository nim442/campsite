import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectPreviewCard } from '../../components/PreviewCards/ProjectPreviewCard';
import { ScopeProvider } from '@/contexts/scope';
import { QueryClient } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '@/utils/normy/QueryNormalizerProvider';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  
  const [state, setState] = useParentState({
    projectId: {
      type: "string",
      value: "project-123",
      label: "Project ID"
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
      <ScopeProvider initialScope="demo">
        <ProjectPreviewCard 
          projectId={state.projectId.value}
          interactive={state.interactive.value}
          className={state.className.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}