import React from 'react';
import { useParentState } from '../useIframeState';
import { GroupedAttachments } from '../../components/GroupedAttachments';
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
    content: {
      type: "string",
      value: "Sample post content without attachments",
      label: "Content"
    },
    truncatedContent: {
      type: "string",
      value: "Sample truncated content",
      label: "Truncated Content"
    },
    display: {
      type: "dropdown",
      value: "feed",
      options: ["feed", "feed-compact", "page", "preview"],
      label: "Display Type"
    },
    autoPlayVideo: {
      type: "boolean",
      value: false,
      label: "Auto Play Video"
    }
  });

  const sampleAttachments = [
    {
      id: "1",
      file_type: "image/jpeg",
      url: "https://placekitten.com/800/600",
      app_url: "https://example.com/image1",
      download_url: "https://example.com/download1",
      preview_url: "https://placekitten.com/800/600",
      preview_thumbnail_url: "https://placekitten.com/200/150",
      image_urls: {
        original_url: "https://placekitten.com/800/600",
        thumbnail_url: "https://placekitten.com/200/150",
        feed_url: "https://placekitten.com/400/300",
        email_url: "https://placekitten.com/300/225",
        slack_url: "https://placekitten.com/150/113",
        large_url: "https://placekitten.com/1200/900"
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
      name: "sample-image.jpg",
      size: 1024000,
      remote_figma_url: null,
      no_video_track: false,
      gallery_id: null,
      type_name: "image",
      subject_id: null,
      is_subject_comment: false,
      relative_url: "/attachments/1",
      preview_relative_url: "/previews/1",
      comments_count: 0,
      key: "attachment-1",
      optimistic_ready: true
    }
  ];

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <GroupedAttachments
          postId={state.postId.value}
          content={state.content.value}
          truncatedContent={state.truncatedContent.value}
          display={state.display.value as "feed" | "feed-compact" | "page" | "preview"}
          autoPlayVideo={state.autoPlayVideo.value}
          attachments={sampleAttachments}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}