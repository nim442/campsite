import React from 'react';
import { useParentState } from '../useIframeState';
import { NotificationListItem } from '../../components/InboxItems/NotificationListItem';

// Base64 encoded 1x1 pixel gray image
const placeholderImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=';

export default function ComponentPreview() {
  const [state] = useParentState({
    display: {
      type: "dropdown",
      value: "home",
      options: ["activity", "home"],
      label: "Display Mode"
    },
    notification: {
      type: "object",
      value: {
        id: "1",
        inbox_key: "inbox1",
        is_inbox: true,
        created_at: new Date().toISOString(),
        summary: "New notification",
        read: false,
        archived: false,
        organization_slug: "test-org",
        preview_url: placeholderImage,
        preview_is_canvas: true,
        reply_to_body_preview: "Previous message",
        body_preview: "This is a preview of the message",
        body_preview_prefix: null,
        body_preview_prefix_fallback: null,
        activity_seen: false,
        reason: "mention",
        summary_blocks: [
          {
            text: {
              content: "John Doe mentioned you in a comment",
              bold: true
            }
          }
        ],
        actor: {
          avatar_url: placeholderImage,
          avatar_urls: {
            xs: placeholderImage,
            sm: placeholderImage,
            base: placeholderImage,
            lg: placeholderImage,
            xl: placeholderImage,
            xxl: placeholderImage
          },
          username: "johndoe",
          display_name: "John Doe",
          integration: false
        },
        subject: {
          id: "123",
          type: "Comment"
        },
        target: {
          id: "456",
          type: "Post",
          title: "Project Update",
          project: {
            id: "789",
            name: "Test Project",
            accessory: null,
            private: false,
            archived: false,
            message_thread_id: null
          },
          resolved: false
        },
        subtarget: null,
        reaction: null,
        follow_up_subject: null
      },
      label: "Notification Data"
    }
  });

  return (
    <NotificationListItem 
      notification={state.notification.value}
      display={state.display.value as 'activity' | 'home'}
    />
  );
}