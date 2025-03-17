import React from 'react';
import { useParentState } from '../useIframeState';
import { ManageGroupChatMembersDialog } from '../../components/Thread/ManageGroupChatMembersDialog';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    thread: {
      type: "object",
      value: {
        id: "123",
        other_members: [
          {
            id: "1",
            role: "member",
            created_at: "2024-01-01T00:00:00Z",
            deactivated: false,
            is_organization_member: true,
            user: {
              id: "user1",
              avatar_url: "https://placekitten.com/100/100",
              avatar_urls: {
                xs: "https://placekitten.com/50/50",
                sm: "https://placekitten.com/100/100",
                base: "https://placekitten.com/200/200",
                lg: "https://placekitten.com/300/300",
                xl: "https://placekitten.com/400/400",
                xxl: "https://placekitten.com/500/500"
              },
              cover_photo_url: null,
              email: "user1@example.com",
              username: "user1",
              display_name: "User One",
              system: false,
              integration: false,
              notifications_paused: false,
              notification_pause_expires_at: null,
              timezone: "UTC",
              logged_in: true,
              type_name: "user"
            },
            status: null
          }
        ],
        last_message_at: null,
        latest_message_truncated: null,
        image_url: null,
        avatar_urls: null,
        group: true,
        channel_name: "general",
        organization_slug: "org",
        path: "/chat",
        call_room_url: null,
        remote_call_room_id: null,
        integration_dm: false,
        active_call: null,
        deactivated_members: [],
        type_name: "thread",
        title: "General Chat",
        project_id: null,
        unread_count: 0,
        manually_marked_unread: false,
        viewer_has_favorited: false,
        viewer_is_thread_member: true,
        viewer_can_manage_integrations: true,
        viewer_can_delete: true,
        viewer_can_force_notification: true
      },
      label: "Thread Data"
    }
  });

  return (
    <ScopeProvider>
      <ManageGroupChatMembersDialog
        thread={state.thread.value}
        open={state.open.value}
        onOpenChange={(open) => setState('open', open)}
      />
    </ScopeProvider>
  );
}