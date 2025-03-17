import React from 'react';
import { useParentState } from '../useIframeState';
import { MediaGallery } from '../../components/RichTextRenderer/handlers/MediaGallery';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state] = useParentState({
    node: {
      type: "object",
      value: {
        content: [
          {
            attrs: {
              id: "attachment1",
              url: "https://example.com/image1.jpg",
              thumbnailUrl: "https://example.com/thumbnail1.jpg",
              title: "Sample Image 1"
            }
          },
          {
            attrs: {
              id: "attachment2",
              url: "https://example.com/image2.jpg",
              thumbnailUrl: "https://example.com/thumbnail2.jpg",
              title: "Sample Image 2"
            }
          }
        ],
        attrs: {
          id: "gallery123"
        }
      },
      label: "Node Content"
    }
  });

  const handleOpenAttachment = (attachmentId: string, galleryId?: string) => {
    console.log('Opening attachment:', attachmentId, 'from gallery:', galleryId);
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
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <MediaGallery 
          node={state.node.value}
          onOpenAttachment={handleOpenAttachment}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}