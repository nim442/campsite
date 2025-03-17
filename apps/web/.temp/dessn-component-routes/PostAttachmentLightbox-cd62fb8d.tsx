import React from 'react';
import { useParentState } from '../useIframeState';
import { PostAttachmentLightbox } from '../../components/AttachmentLightbox/PostAttachmentLightbox';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  
  const [state, setState] = useParentState({
    postId: {
      type: "string",
      value: "post-123",
      label: "Post ID"
    },
    galleryId: {
      type: "string",
      value: "gallery-456",
      label: "Gallery ID"
    },
    selectedAttachmentId: {
      type: "string",
      value: "attachment-789",
      label: "Selected Attachment ID"
    }
  });

  return (
    <Provider>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <PostAttachmentLightbox
            postId={state.postId.value}
            galleryId={state.galleryId.value}
            selectedAttachmentId={state.selectedAttachmentId.value}
            setSelectedAttachmentId={(id) => setState('selectedAttachmentId', id || '')}
          />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </Provider>
  );
}