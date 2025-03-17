import React from 'react';
import { useParentState } from '../useIframeState';
import { FigmaToggleButton } from '../../components/AttachmentLightbox/FigmaToggleButton';
export default function ComponentPreview() {
  const [state] = useParentState({
    attachment: {
      type: "object",
      value: {
        id: "123",
        file_type: "figma",
        url: "https://example.com",
        app_url: "https://example.com",
        download_url: "https://example.com/download",
        preview_url: "https://example.com/preview",
        preview_thumbnail_url: "https://example.com/thumbnail",
        image_urls: {
          original_url: "https://example.com/original",
          thumbnail_url: "https://example.com/thumbnail",
          feed_url: "https://example.com/feed",
          email_url: "https://example.com/email",
          slack_url: "https://example.com/slack",
          large_url: "https://example.com/large"
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
        width: 1920,
        height: 1080,
        subject_type: null,
        name: "Example Figma File",
        size: 1024,
        remote_figma_url: "https://figma.com/file/example",
        no_video_track: false,
        gallery_id: null,
        type_name: "figma",
        subject_id: null,
        is_subject_comment: false,
        relative_url: "/attachments/123",
        preview_relative_url: "/attachments/123/preview",
        comments_count: 0,
        key: null,
        optimistic_ready: true
      },
      label: "Attachment"
    }
  });

  return <FigmaToggleButton attachment={state.attachment.value} />;
}