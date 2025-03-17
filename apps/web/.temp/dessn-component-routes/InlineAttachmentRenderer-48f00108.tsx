import React from 'react';
import { useParentState } from '../useIframeState';
import { InlineAttachmentRenderer } from '../../components/InlineAttachmentRenderer';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  const [state, setState] = useParentState({
    editable: {
      type: "boolean",
      value: true,
      label: "Editable"
    },
    commentsEnabled: {
      type: "boolean",
      value: true,
      label: "Comments Enabled"
    },
    id: {
      type: "string",
      value: "attachment-123",
      label: "Attachment ID"
    },
    optimisticId: {
      type: "string",
      value: "opt-123",
      label: "Optimistic ID"
    },
    error: {
      type: "string",
      value: "",
      label: "Error Message"
    },
    width: {
      type: "number",
      value: 640,
      label: "Width"
    },
    height: {
      type: "number",
      value: 480,
      label: "Height"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <InlineAttachmentRenderer
          editable={state.editable.value}
          commentsEnabled={state.commentsEnabled.value}
          id={state.id.value}
          optimisticId={state.optimisticId.value}
          error={state.error.value}
          width={state.width.value}
          height={state.height.value}
          onOpen={(id) => console.log('Attachment opened:', id)}
          onDelete={() => console.log('Delete clicked')}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}