import React from 'react';
import { useParentState } from '../useIframeState';
import { MediaGallery } from '../../components/MediaGallery/index';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient, useQueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = useQueryClient();
  const [state, setState] = useParentState({
    editable: {
      type: "boolean",
      value: true,
      label: "Editable"
    },
    galleryId: {
      type: "string",
      value: "gallery-1",
      label: "Gallery ID"
    },
    attachments: {
      type: "object",
      value: [
        {
          id: "1",
          optimistic_id: "opt-1",
          file_type: "image",
          width: 800,
          height: 600
        },
        {
          id: "2",
          optimistic_id: "opt-2",
          file_type: "video",
          width: 1920,
          height: 1080
        }
      ],
      label: "Attachments"
    }
  });

  const handleRemoveItem = (id: string) => {
    console.log('Removing item:', id);
  };

  const handleReorder = (ids: string[]) => {
    console.log('Reordering:', ids);
  };

  const handleOpenAttachment = (attachmentId: string, galleryId?: string) => {
    console.log('Opening attachment:', attachmentId, 'in gallery:', galleryId);
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <MediaGallery
          attachments={state.attachments.value}
          editable={state.editable.value}
          galleryId={state.galleryId.value}
          onRemoveItem={handleRemoveItem}
          onReorder={handleReorder}
          onOpenAttachment={handleOpenAttachment}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}