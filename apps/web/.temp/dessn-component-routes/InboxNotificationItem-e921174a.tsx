import React from 'react';
import { useParentState } from '../useIframeState';
import { InboxNotificationItem } from '../../components/InboxItems/InboxNotificationItem';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    variant: {
      type: "dropdown",
      value: "plain",
      options: ["plain", "group-parent", "group-child"],
      label: "Variant"
    },
    groupSize: {
      type: "number",
      value: 3,
      label: "Group Size"
    },
    isGroupExpanded: {
      type: "boolean",
      value: false,
      label: "Is Group Expanded"
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
        organization_slug: "demo-org",
        preview_url: null,
        preview_is_canvas: false,
        reply_to_body_preview: "Previous message",
        body_preview_prefix: "New message",
        body_preview_prefix_fallback: "Fallback preview",
        body_preview: "This is a notification body preview",
        summary_blocks: [],
        activity_seen: false,
        reason: "mention",
        actor: {
          avatar_url: "https://placekitten.com/100/100",
          avatar_urls: {
            xs: "https://placekitten.com/50/50",
            sm: "https://placekitten.com/75/75",
            base: "https://placekitten.com/100/100",
            lg: "https://placekitten.com/150/150",
            xl: "https://placekitten.com/200/200",
            xxl: "https://placekitten.com/300/300"
          },
          username: "demo_user",
          display_name: "Demo User",
          integration: false
        },
        subject: {
          id: "subject1",
          type: "message"
        },
        target: {
          id: "target1",
          type: "Message",
          title: "Important Update",
          project: {
            id: "project1",
            name: "Demo Project",
            accessory: "📱",
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
    <InboxNotificationItem
      notification={state.notification.value}
      variant={state.variant.value as 'plain' | 'group-parent' | 'group-child'}
      groupSize={state.groupSize.value}
      isGroupExpanded={state.isGroupExpanded.value}
      toggleGroup={() => console.log('Group toggled')}
    />
  );
}