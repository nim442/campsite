import React from 'react';
import { useParentState } from '../useIframeState';
import { BubbleReactions } from '../../components/Thread/Bubble/BubbleReactions';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  const [state] = useParentState({
    message: {
      type: "object",
      value: {
        id: "msg-1",
        content: "Hello world",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        discarded_at: null,
        has_content: true,
        viewer_is_sender: false,
        viewer_can_delete: true,
        unfurled_link: null,
        reply: null,
        attachments: [],
        call: null,
        shared_post_url: null,
        optimistic_id: null,
        grouped_reactions: [
          {
            viewer_reaction_id: "reaction-1",
            emoji: "👍",
            tooltip: "Thumbs up",
            reactions_count: 2,
            custom_content: null
          },
          {
            viewer_reaction_id: null,
            emoji: "❤️",
            tooltip: "Heart",
            reactions_count: 1,
            custom_content: null
          }
        ],
        sender: {
          id: "user-1",
          role: "member",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          status: null,
          user: {
            id: "user-1",
            avatar_url: "https://placekitten.com/100/100",
            avatar_urls: {
              xs: "https://placekitten.com/50/50",
              sm: "https://placekitten.com/75/75",
              base: "https://placekitten.com/100/100",
              lg: "https://placekitten.com/150/150",
              xl: "https://placekitten.com/200/200",
              xxl: "https://placekitten.com/300/300"
            },
            cover_photo_url: null,
            email: "user@example.com",
            username: "testuser",
            display_name: "Test User",
            system: false,
            integration: false,
            notifications_paused: false,
            notification_pause_expires_at: null,
            timezone: "UTC",
            logged_in: true,
            type_name: "User"
          }
        }
      },
      label: "Message"
    },
    thread: {
      type: "object",
      value: {
        id: "thread-1",
        last_message_at: new Date().toISOString(),
        latest_message_truncated: "Hello world",
        image_url: null,
        avatar_urls: null,
        group: false,
        channel_name: "general",
        organization_slug: "test-org",
        path: "/thread/1",
        call_room_url: null,
        remote_call_room_id: null,
        integration_dm: false,
        active_call: null,
        deactivated_members: [],
        type_name: "MessageThread",
        title: "Test Thread",
        project_id: null,
        unread_count: 0,
        manually_marked_unread: false,
        viewer_has_favorited: false,
        other_members: [],
        viewer_is_thread_member: true,
        viewer_can_manage_integrations: true,
        viewer_can_delete: true,
        viewer_can_force_notification: true
      },
      label: "Thread"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <BubbleReactions 
          message={state.message.value}
          thread={state.thread.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}