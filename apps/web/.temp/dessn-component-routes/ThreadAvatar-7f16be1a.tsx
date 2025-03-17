import React from 'react';
import { useParentState } from '../useIframeState';
import { ThreadAvatar } from '../../components/ThreadAvatar/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    size: {
      type: "dropdown",
      value: "lg",
      options: ["base", "lg"],
      label: "Size"
    },
    thread: {
      type: "object",
      value: {
        id: "1",
        last_message_at: new Date().toISOString(),
        latest_message_truncated: "Hello world",
        image_url: null,
        avatar_urls: {
          xs: "https://placekitten.com/32/32",
          sm: "https://placekitten.com/48/48",
          base: "https://placekitten.com/64/64",
          lg: "https://placekitten.com/96/96",
          xl: "https://placekitten.com/128/128",
          xxl: "https://placekitten.com/256/256"
        },
        group: true,
        channel_name: "general",
        organization_slug: "demo-org",
        path: "/messages/1",
        call_room_url: null,
        remote_call_room_id: null,
        integration_dm: false,
        active_call: null,
        deactivated_members: [],
        type_name: "MessageThread",
        title: "Demo Thread",
        project_id: null,
        unread_count: 0,
        manually_marked_unread: false,
        viewer_has_favorited: false,
        other_members: [
          {
            id: "1",
            role: "admin",
            created_at: new Date().toISOString(),
            deactivated: false,
            is_organization_member: true,
            user: {
              id: "1",
              avatar_url: "https://placekitten.com/64/64",
              avatar_urls: {
                xs: "https://placekitten.com/32/32",
                sm: "https://placekitten.com/48/48",
                base: "https://placekitten.com/64/64",
                lg: "https://placekitten.com/96/96",
                xl: "https://placekitten.com/128/128",
                xxl: "https://placekitten.com/256/256"
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
        viewer_is_thread_member: true,
        viewer_can_manage_integrations: true,
        viewer_can_delete: true,
        viewer_can_force_notification: true
      },
      label: "Thread Data"
    }
  });

  return (
    <ThreadAvatar 
      thread={state.thread.value}
      size={state.size.value as 'base' | 'lg'}
    />
  );
}