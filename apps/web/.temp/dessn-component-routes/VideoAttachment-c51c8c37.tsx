import React from 'react';
import { useParentState } from '../useIframeState';
import { VideoAttachment } from '../../components/Post/Notes/Attachments/VideoAttachment';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isUploading: {
      type: "boolean",
      value: false,
      label: "Is Uploading"
    },
    editable: {
      type: "boolean",
      value: false,
      label: "Editable"
    },
    attachment: {
      type: "object",
      value: {
        id: "123",
        file_type: "video/mp4",
        url: "https://example.com/sample-video.mp4",
        app_url: "https://example.com/app/video",
        download_url: "https://example.com/download/video",
        preview_url: "https://example.com/preview.jpg",
        preview_thumbnail_url: "https://example.com/thumbnail.jpg",
        image_urls: {
          original_url: "https://example.com/original.jpg",
          thumbnail_url: "https://example.com/thumb.jpg",
          feed_url: "https://example.com/feed.jpg",
          email_url: "https://example.com/email.jpg",
          slack_url: "https://example.com/slack.jpg",
          large_url: "https://example.com/large.jpg"
        },
        link: false,
        image: false,
        video: true,
        audio: false,
        origami: false,
        principle: false,
        lottie: false,
        stitch: false,
        gif: false,
        duration: 30,
        width: 1920,
        height: 1080,
        subject_type: null,
        name: "Sample Video",
        size: 1024000,
        remote_figma_url: null,
        no_video_track: false,
        gallery_id: null,
        type_name: "video",
        subject_id: null,
        is_subject_comment: false,
        relative_url: "/videos/123",
        preview_relative_url: "/previews/123",
        comments_count: 0,
        key: "video-123",
        optimistic_ready: true
      },
      label: "Attachment"
    }
  });

  return (
    <VideoAttachment
      attachment={state.attachment.value}
      isUploading={state.isUploading.value}
      editable={state.editable.value}
    />
  );
}