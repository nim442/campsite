import React from 'react';
import { useParentState } from '../useIframeState';
import { CarouselPagination } from '../../components/MediaGallery/Pagination';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state, setState] = useParentState({
    activeIndex: {
      type: "number",
      value: 0,
      label: "Active Index"
    }
  });

  const mockAttachments = [
    {
      id: "1",
      optimistic_id: "1",
      file_type: "image",
      width: 800,
      height: 600,
      image: true,
      url: "https://picsum.photos/800/600",
      image_urls: {
        thumbnail_url: "https://picsum.photos/100/100"
      }
    },
    {
      id: "2",
      optimistic_id: "2",
      file_type: "image",
      width: 800,
      height: 600,
      image: true,
      url: "https://picsum.photos/800/601",
      image_urls: {
        thumbnail_url: "https://picsum.photos/100/101"
      }
    }
  ];

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <CarouselPagination
          attachments={mockAttachments}
          activeIndex={state.activeIndex.value}
          setActiveIndex={([index]) => setState("activeIndex", index)}
          paginate={(direction) => {
            const newIndex = state.activeIndex.value + direction;
            if (newIndex >= 0 && newIndex < mockAttachments.length) {
              setState("activeIndex", newIndex);
            }
          }}
          onRemoveItem={(id) => console.log('Remove item:', id)}
          onReorder={(ids) => console.log('Reorder:', ids)}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}