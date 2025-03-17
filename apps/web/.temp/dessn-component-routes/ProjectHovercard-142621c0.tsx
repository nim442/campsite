import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectHovercard } from '../../components/InlinePost/ProjectHovercard';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  
  const [state, setState] = useParentState({
    projectId: {
      type: "string",
      value: "project-123",
      label: "Project ID"
    },
    side: {
      type: "dropdown",
      value: "bottom",
      options: ["top", "right", "bottom", "left"],
      label: "Side"
    },
    align: {
      type: "dropdown",
      value: "start",
      options: ["start", "center", "end"],
      label: "Align"
    },
    sideOffset: {
      type: "number",
      value: 4,
      label: "Side Offset"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider value={{ scope: 'demo' }}>
        <ProjectHovercard
          projectId={state.projectId.value}
          side={state.side.value as 'top' | 'right' | 'bottom' | 'left'}
          align={state.align.value as 'start' | 'center' | 'end'}
          sideOffset={state.sideOffset.value}
        >
          <div style={{ padding: '20px', border: '1px solid #ccc', display: 'inline-block' }}>
            Hover over me
          </div>
        </ProjectHovercard>
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}