import React from 'react';
import { useParentState } from '../useIframeState';
import { AttachmentGrid } from '../../components/AttachmentGrid/index';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  const [state] = useParentState({
    postId: {
      type: "string",
      value: "post-123",
      label: "Post ID"
    },
    autoPlayVideo: {
      type: "boolean",
      value: true,
      label: "Auto Play Video"
    },
    attachments: {
      type: "object",
      value: [
        {
          id: "1",
          file_type: "image/jpeg",
          url: "https://picsum.photos/800/600",
          app_url: "https://picsum.photos/800/600",
          download_url: "https://picsum.photos/800/600",
          preview_url: "https://picsum.photos/800/600",
          preview_thumbnail_url: "https://picsum.photos/400/300",
          image_urls: {
            original_url: "https://picsum.photos/800/600",
            thumbnail_url: "https://picsum.photos/400/300",
            feed_url: "https://picsum.photos/600/400",
            email_url: "https://picsum.photos/300/200",
            slack_url: "https://picsum.photos/200/150",
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
          size: 123456,
          remote_figma_url: null,
          no_video_track: false,
          gallery_id: null,
          type_name: "image",
          subject_id: null,
          is_subject_comment: false,
          relative_url: "/images/1",
          preview_relative_url: "/images/1/preview",
          comments_count: 0,
          key: "image-1",
          optimistic_ready: true
        },
        {
          id: "2",
          file_type: "video/mp4",
          url: "https://www.w3schools.com/html/mov_bbb.mp4",
          app_url: "https://www.w3schools.com/html/mov_bbb.mp4",
          download_url: "https://www.w3schools.com/html/mov_bbb.mp4",
          preview_url: "https://picsum.photos/800/600",
          preview_thumbnail_url: "https://picsum.photos/400/300",
          image_urls: null,
          link: false,
          image: false,
          video: true,
          audio: false,
          origami: false,
          principle: false,
          lottie: false,
          stitch: false,
          gif: false,
          duration: 10000,
          width: 800,
          height: 600,
          subject_type: null,
          name: "Sample Video",
          size: 2345678,
          remote_figma_url: null,
          no_video_track: false,
          gallery_id: null,
          type_name: "video",
          subject_id: null,
          is_subject_comment: false,
          relative_url: "/videos/2",
          preview_relative_url: "/videos/2/preview",
          comments_count: 0,
          key: "video-2",
          optimistic_ready: true
        }
      ],
      label: "Attachments"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <AttachmentGrid
          postId={state.postId.value}
          autoPlayVideo={state.autoPlayVideo.value}
          attachments={state.attachments.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}