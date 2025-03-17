import React from 'react';
import { useParentState } from '../useIframeState';
import { PostNoteAttachment } from '../../components/RichTextRenderer/handlers/PostNoteAttachment';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    attachmentId: {
      type: "string",
      value: "attachment-123",
      label: "Attachment ID"
    },
    optimisticId: {
      type: "string",
      value: "opt-123",
      label: "Optimistic ID"
    }
  });

  const mockNode = {
    attrs: {
      id: state.attachmentId.value,
      optimistic_id: state.optimisticId.value
    }
  };

  // Create a new QueryClient instance
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryNormalizerProvider 
      queryClient={queryClient}
      normalizerConfig={{
        normalize: true
      }}
    >
      <ScopeProvider>
        <PostNoteAttachment 
          node={mockNode}
          onOpenAttachment={(id) => console.log('Attachment opened:', id)}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}