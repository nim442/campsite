import React from 'react';
import { useParentState } from '../useIframeState';
import { FigmaTip } from '../../components/AttachmentLightbox/FigmaTip';
export default function ComponentPreview() {
  const [state] = useParentState({
    attachment: {
      type: "object",
      value: {
        id: "123",
        file_type: "figma",
        url: "https://www.figma.com/file/example",
        app_url: "figma://file/example",
        download_url: "https://example.com/download",
        preview_url: "https://example.com/preview",
        preview_thumbnail_url: "https://example.com/thumbnail",
        image_urls: {
          original_url: "https://example.com/original",
          thumbnail_url: "https://example.com/thumb",
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
        subject_type: "Post",
        name: "Example Figma File",
        size: 1024,
        remote_figma_url: "https://www.figma.com/file/example",
        no_video_track: false,
        gallery_id: null,
        type_name: "figma",
        subject_id: "post123",
        is_subject_comment: false,
        relative_url: "/files/example",
        preview_relative_url: "/preview/example",
        comments_count: 0,
        key: "figma123",
        optimistic_ready: true
      },
      label: "Attachment"
    }
  });

  return <FigmaTip attachment={state.attachment.value} />;
}