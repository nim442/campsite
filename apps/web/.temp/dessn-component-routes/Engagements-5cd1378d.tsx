import React from 'react';
import { useParentState } from '../useIframeState';
import { Engagements } from '../../components/Thread/Bubble/Engagements';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state] = useParentState({
    message: {
      type: "object",
      value: {
        id: "123",
        content: "Hello world",
        unfurled_link: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        discarded_at: null,
        has_content: true,
        viewer_is_sender: true,
        viewer_can_delete: true,
        shared_post_url: "https://example.com/post",
        optimistic_id: null,
        grouped_reactions: [
          {
            viewer_reaction_id: "1",
            emoji: "👍",
            tooltip: "Thumbs up",
            reactions_count: 1,
            custom_content: null
          }
        ],
        sender: {
          id: "user1",
          role: "member",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "user1",
            avatar_url: "https://example.com/avatar.jpg",
            avatar_urls: {
              xs: "https://example.com/avatar-xs.jpg",
              sm: "https://example.com/avatar-sm.jpg",
              base: "https://example.com/avatar-base.jpg",
              lg: "https://example.com/avatar-lg.jpg",
              xl: "https://example.com/avatar-xl.jpg",
              xxl: "https://example.com/avatar-xxl.jpg"
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
        },
        attachments: [],
        reply: null,
        call: null
      },
      label: "Message"
    },
    thread: {
      type: "object",
      value: {
        id: "thread1",
        last_message_at: new Date().toISOString(),
        latest_message_truncated: "Hello world",
        image_url: null,
        avatar_urls: null,
        group: true,
        channel_name: "general",
        organization_slug: "org",
        path: "/thread/1",
        call_room_url: null,
        remote_call_room_id: null,
        integration_dm: false,
        active_call: null,
        deactivated_members: [],
        type_name: "Thread",
        title: "General Discussion",
        project_id: null,
        unread_count: 0,
        manually_marked_unread: false,
        viewer_has_favorited: false,
        other_members: [],
        viewer_is_thread_member: true,
        viewer_can_manage_integrations: false,
        viewer_can_delete: false,
        viewer_can_force_notification: false
      },
      label: "Thread"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <Engagements message={state.message.value} thread={state.thread.value} />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}