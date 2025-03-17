import React from 'react';
import { useParentState } from '../useIframeState';
import { PrincipleAttachment } from '../../components/Thread/Bubble/AttachmentCard/PrincipleAttachment';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    preview: {
      type: "boolean",
      value: false,
      label: "Preview Mode"
    },
    attachment: {
      type: "object",
      value: {
        id: "123",
        file_type: "principle",
        url: "https://example.com/file",
        app_url: "https://example.com/app",
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
        image: false,
        video: false,
        audio: false,
        origami: false,
        principle: true,
        lottie: false,
        stitch: false,
        gif: false,
        duration: 0,
        width: 800,
        height: 600,
        subject_type: null,
        name: "Example Principle File",
        size: 1024,
        remote_figma_url: null,
        no_video_track: false,
        gallery_id: null,
        type_name: "principle",
        subject_id: null,
        is_subject_comment: false,
        relative_url: "/relative",
        preview_relative_url: null,
        comments_count: 0,
        key: "key123",
        optimistic_ready: true
      },
      label: "Attachment Data"
    }
  });

  return (
    <PrincipleAttachment 
      attachment={state.attachment.value}
      preview={state.preview.value}
    />
  );
}