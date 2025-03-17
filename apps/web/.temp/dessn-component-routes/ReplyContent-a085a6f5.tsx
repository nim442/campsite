import React from 'react';
import { useParentState } from '../useIframeState';
import { ReplyContent } from '../../components/ReplyContent/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    content: {
      type: "string",
      value: "<p>This is a sample reply content with some <strong>formatted</strong> text.</p>",
      label: "Content"
    },
    author: {
      type: "object",
      value: {
        id: "123",
        avatar_url: "https://placekitten.com/200/200",
        avatar_urls: {
          xs: "https://placekitten.com/50/50",
          sm: "https://placekitten.com/100/100",
          base: "https://placekitten.com/200/200",
          lg: "https://placekitten.com/300/300",
          xl: "https://placekitten.com/400/400",
          xxl: "https://placekitten.com/500/500"
        },
        cover_photo_url: null,
        email: "user@example.com",
        username: "sampleuser",
        display_name: "Sample User",
        system: false,
        integration: false,
        notifications_paused: false,
        notification_pause_expires_at: null,
        timezone: "UTC",
        logged_in: true,
        type_name: "User"
      },
      label: "Author"
    },
    attachments: {
      type: "object",
      value: [{
        id: "1",
        file_type: "image/jpeg",
        url: "https://example.com/image.jpg",
        app_url: "https://example.com/image",
        download_url: "https://example.com/image/download",
        preview_url: "https://example.com/image/preview",
        preview_thumbnail_url: "https://example.com/image/thumbnail",
        image_urls: {
          original_url: "https://example.com/image/original",
          thumbnail_url: "https://example.com/image/thumb",
          feed_url: "https://example.com/image/feed",
          email_url: "https://example.com/image/email",
          slack_url: "https://example.com/image/slack",
          large_url: "https://example.com/image/large"
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
        type_name: "Attachment",
        subject_id: null,
        is_subject_comment: false,
        relative_url: "/image",
        preview_relative_url: "/image/preview",
        comments_count: 0,
        key: null,
        optimistic_ready: true
      }],
      label: "Attachments"
    }
  });

  return (
    <ReplyContent
      content={state.content.value}
      author={state.author.value}
      onCancel={() => console.log('Cancel clicked')}
      attachments={state.attachments.value}
    />
  );
}