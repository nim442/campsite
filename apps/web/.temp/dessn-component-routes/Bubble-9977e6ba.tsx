import React from 'react';
import { useParentState } from '../useIframeState';
import { Bubble } from '../../components/Thread/Bubble/index';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state] = useParentState({
    position: {
      type: "dropdown",
      value: "first",
      options: ["first", "middle", "last", "only"],
      label: "Position"
    }
  });

  const mockMessage = {
    id: "1",
    content: "Hello world!",
    unfurled_link: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    discarded_at: null,
    has_content: true,
    sender: {
      id: "1",
      role: "admin",
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      user: {
        id: "1",
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
        username: "testuser",
        display_name: "Test User",
        system: false,
        integration: false,
        notifications_paused: false,
        notification_pause_expires_at: null,
        timezone: null,
        logged_in: true,
        type_name: "User"
      },
      status: null
    },
    reply: null,
    attachments: [],
    call: null,
    viewer_is_sender: true,
    viewer_can_delete: true,
    grouped_reactions: [],
    shared_post_url: null,
    optimistic_id: null
  };

  const mockThread = {
    id: "1",
    last_message_at: new Date().toISOString(),
    latest_message_truncated: null,
    image_url: null,
    avatar_urls: null,
    group: false,
    channel_name: "general",
    organization_slug: "test-org",
    path: "/test",
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
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <Bubble 
          message={mockMessage}
          thread={mockThread}
          position={state.position.value as 'first' | 'middle' | 'last' | 'only'}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}