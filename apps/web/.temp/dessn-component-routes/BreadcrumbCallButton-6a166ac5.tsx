import React from 'react';
import { useParentState } from '../useIframeState';
import { BreadcrumbCallButton } from '../../components/ThreadView/ThreadViewTitlebar';
export default function ComponentPreview() {
  const [state] = useParentState({
    thread: {
      type: "object",
      value: {
        id: "123",
        title: "Sample Thread",
        group: false,
        other_members: [
          {
            id: "1",
            role: "member",
            created_at: "2023-01-01T00:00:00Z",
            deactivated: false,
            is_organization_member: true,
            user: {
              id: "user1",
              avatar_url: "https://placeholder.com/avatar",
              avatar_urls: {
                xs: "https://placeholder.com/xs",
                sm: "https://placeholder.com/sm",
                base: "https://placeholder.com/base",
                lg: "https://placeholder.com/lg",
                xl: "https://placeholder.com/xl",
                xxl: "https://placeholder.com/xxl"
              },
              cover_photo_url: null,
              email: "user@example.com",
              username: "user1",
              display_name: "User One",
              system: false,
              integration: false,
              notifications_paused: false,
              notification_pause_expires_at: null,
              timezone: "UTC",
              logged_in: true,
              type_name: "User"
            },
            status: null
          }
        ],
        active_call: null,
        call_room_url: null,
        remote_call_room_id: null,
        last_message_at: null,
        latest_message_truncated: null,
        image_url: null,
        avatar_urls: null,
        channel_name: "general",
        organization_slug: "org",
        path: "/thread/123",
        integration_dm: false,
        deactivated_members: [],
        type_name: "Thread",
        project_id: null,
        unread_count: 0,
        manually_marked_unread: false,
        viewer_has_favorited: false,
        viewer_is_thread_member: true,
        viewer_can_manage_integrations: true,
        viewer_can_delete: true,
        viewer_can_force_notification: true
      },
      label: "Thread"
    }
  });

  return <BreadcrumbCallButton thread={state.thread.value} />;
}