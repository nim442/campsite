import React from 'react';
import { useParentState } from '../useIframeState';
import { FileMenu } from '../../components/AttachmentLightbox/FileDropdown';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    type: {
      type: "dropdown",
      value: "dropdown",
      options: ["dropdown", "menu"],
      label: "Menu Type"
    },
    attachment: {
      type: "object",
      value: {
        id: "123",
        file_type: "image",
        url: "https://example.com/image.jpg",
        app_url: "https://app.example.com/image.jpg",
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
        relative_url: "/images/example.jpg",
        preview_relative_url: "/images/preview/example.jpg",
        comments_count: 0,
        key: "image-123",
        optimistic_ready: true
      },
      label: "Attachment"
    },
    links: {
      type: "object",
      value: [
        {
          id: "1",
          name: "Example Link",
          url: "https://example.com"
        },
        {
          id: "2",
          name: "Figma Link",
          url: "https://figma.com/file/123"
        }
      ],
      label: "Links"
    }
  });

  return (
    <FileMenu
      type={state.type.value as 'dropdown' | 'menu'}
      attachment={state.attachment.value}
      links={state.links.value}
    >
      <div>Click me</div>
    </FileMenu>
  );
}