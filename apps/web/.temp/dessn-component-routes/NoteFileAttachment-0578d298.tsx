import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteFileAttachment } from '../../components/Post/Notes/Attachments/NoteFileAttachment';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isUploading: {
      type: "boolean",
      value: false,
      label: "Is Uploading"
    },
    editable: {
      type: "boolean",
      value: true,
      label: "Editable"
    },
    attachment: {
      type: "object",
      value: {
        id: "123",
        file_type: "image/jpeg",
        url: "https://example.com/image.jpg",
        app_url: "https://example.com/app/image.jpg",
        download_url: "https://example.com/download/image.jpg",
        preview_url: "https://example.com/preview/image.jpg",
        preview_thumbnail_url: "https://example.com/thumbnail/image.jpg",
        image_urls: {
          original_url: "https://example.com/original.jpg",
          thumbnail_url: "https://example.com/thumb.jpg",
          feed_url: "https://example.com/feed.jpg",
          email_url: "https://example.com/email.jpg",
          slack_url: "https://example.com/slack.jpg",
          large_url: "https://example.com/large.jpg"
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
        name: "example-image.jpg",
        size: 1024000,
        remote_figma_url: null,
        no_video_track: false,
        gallery_id: null,
        type_name: "image",
        subject_id: null,
        is_subject_comment: false,
        relative_url: "/image.jpg",
        preview_relative_url: "/preview/image.jpg",
        comments_count: 0,
        key: "123",
        optimistic_ready: true
      },
      label: "Attachment"
    }
  });

  return (
    <NoteFileAttachment
      attachment={state.attachment.value}
      isUploading={state.isUploading.value}
      editable={state.editable.value}
      onDelete={() => console.log('Delete clicked')}
    />
  );
}