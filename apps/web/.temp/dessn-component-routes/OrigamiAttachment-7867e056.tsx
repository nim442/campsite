import React from 'react';
import { useParentState } from '../useIframeState';
import { OrigamiAttachment } from '../../components/Thread/Bubble/AttachmentCard/OrigamiAttachment';
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
        file_type: "origami",
        url: "https://example.com/file",
        app_url: "https://example.com/app",
        download_url: "https://example.com/download",
        preview_url: "https://example.com/preview",
        preview_thumbnail_url: "https://example.com/thumbnail",
        image_urls: null,
        link: false,
        image: false,
        video: false,
        audio: false,
        origami: true,
        principle: false,
        lottie: false,
        stitch: false,
        gif: false,
        duration: 0,
        width: 800,
        height: 600,
        subject_type: null,
        name: "sample.origami",
        size: 1024,
        remote_figma_url: null,
        no_video_track: false,
        gallery_id: null,
        type_name: "origami",
        subject_id: null,
        is_subject_comment: false,
        relative_url: "/file",
        preview_relative_url: null,
        comments_count: 0,
        key: null,
        optimistic_ready: false
      },
      label: "Attachment Data"
    }
  });

  return (
    <OrigamiAttachment 
      attachment={state.attachment.value}
      preview={state.preview.value}
    />
  );
}