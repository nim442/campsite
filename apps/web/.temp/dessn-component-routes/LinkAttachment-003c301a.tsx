import React from 'react';
import { useParentState } from '../useIframeState';
import { LinkAttachment } from '../../components/Thread/Bubble/AttachmentCard/LinkAttachment';
export default function ComponentPreview() {
  const [state] = useParentState({
    selfSize: {
      type: "boolean",
      value: false,
      label: "Self Size"
    },
    attachment: {
      type: "object",
      value: {
        id: "123",
        file_type: "link",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        app_url: "https://app.example.com",
        download_url: "https://download.example.com",
        preview_url: "https://preview.example.com",
        preview_thumbnail_url: "https://thumbnail.example.com",
        image_urls: {
          original_url: "https://original.example.com",
          thumbnail_url: "https://thumbnail.example.com",
          feed_url: "https://feed.example.com",
          email_url: "https://email.example.com",
          slack_url: "https://slack.example.com",
          large_url: "https://large.example.com"
        },
        link: true,
        image: false,
        video: true,
        audio: false,
        origami: false,
        principle: false,
        lottie: false,
        stitch: false,
        gif: false,
        duration: 180,
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
        relative_url: "/video/123",
        preview_relative_url: "/preview/123",
        comments_count: 0,
        key: "video-123",
        optimistic_ready: true
      },
      label: "Attachment"
    }
  });

  return (
    <LinkAttachment 
      attachment={state.attachment.value}
      selfSize={state.selfSize.value}
    />
  );
}