import React from 'react';
import { useParentState } from '../useIframeState';
import { NotificationOverflowMenu } from '../../components/InboxItems/NotificationOverflowMenu';
export default function ComponentPreview() {
  const [state] = useParentState({
    type: {
      type: "dropdown",
      value: "dropdown",
      options: ["dropdown", "context"],
      label: "Menu Type"
    },
    item: {
      type: "object",
      value: {
        id: "123",
        inbox_key: "inbox-1",
        is_inbox: true,
        created_at: new Date().toISOString(),
        summary: "New notification",
        read: false,
        archived: false,
        organization_slug: "org-1",
        preview_url: null,
        preview_is_canvas: false,
        reply_to_body_preview: null,
        body_preview_prefix: null,
        body_preview_prefix_fallback: null,
        body_preview: "This is a notification",
        summary_blocks: [],
        activity_seen: false,
        reason: "mention",
        actor: {
          avatar_url: "https://placeholder.com/avatar",
          avatar_urls: {
            xs: "https://placeholder.com/xs",
            sm: "https://placeholder.com/sm",
            base: "https://placeholder.com/base",
            lg: "https://placeholder.com/lg",
            xl: "https://placeholder.com/xl",
            xxl: "https://placeholder.com/xxl"
          },
          username: "testuser",
          display_name: "Test User",
          integration: false
        },
        subject: {
          id: "subject-1",
          type: "comment"
        },
        target: {
          id: "target-1",
          type: "post",
          title: "Test Post",
          project: null,
          resolved: false
        },
        subtarget: null,
        reaction: null,
        follow_up_subject: null
      },
      label: "Notification Item"
    }
  });

  return (
    <NotificationOverflowMenu 
      type={state.type.value as 'dropdown' | 'context'} 
      item={state.item.value}
    >
      <button>Click Me</button>
    </NotificationOverflowMenu>
  );
}