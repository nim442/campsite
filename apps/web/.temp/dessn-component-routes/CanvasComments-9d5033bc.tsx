import React from 'react';
import { useParentState } from '../useIframeState';
import { CanvasComments } from '../../components/CanvasComments/CanvasComments';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state] = useParentState({
    preventNewComment: {
      type: "boolean",
      value: false,
      label: "Prevent New Comment"
    },
    attachment: {
      type: "object",
      value: {
        id: "123",
        file_type: "image/jpeg",
        url: "https://picsum.photos/800/600",
        app_url: "https://example.com",
        download_url: "https://example.com/download",
        preview_url: "https://picsum.photos/400/300",
        preview_thumbnail_url: "https://picsum.photos/200/150",
        image_urls: {
          original_url: "https://picsum.photos/800/600",
          thumbnail_url: "https://picsum.photos/200/150",
          feed_url: "https://picsum.photos/400/300",
          email_url: "https://picsum.photos/300/225",
          slack_url: "https://picsum.photos/150/113",
          large_url: "https://picsum.photos/1200/900"
        },
        link: false,
        image: true,
        video: false,
        audio: false,
        origami: false,
        principle: false,
        lottie: false,
        stitch: false,
        gif: false,
        duration: 0,
        width: 800,
        height: 600,
        subject_type: null,
        name: "Sample Image",
        size: 1024000,
        remote_figma_url: null,
        no_video_track: false,
        gallery_id: null,
        type_name: "image",
        subject_id: null,
        is_subject_comment: false,
        relative_url: "/sample-image",
        preview_relative_url: "/sample-image-preview",
        comments_count: 0,
        key: null,
        optimistic_ready: true
      },
      label: "Attachment"
    }
  });

  return (
    <Provider>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <CanvasComments 
            attachment={state.attachment.value}
            preventNewComment={state.preventNewComment.value}
          />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </Provider>
  );
}