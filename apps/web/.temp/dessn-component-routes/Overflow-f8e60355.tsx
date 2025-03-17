import React from 'react';
import { useParentState } from '../useIframeState';
import { Overflow } from '../../components/Thread/Bubble/Overflow';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  
  const [state, setState] = useParentState({
    messageId: {
      type: "string",
      value: "msg-123",
      label: "Message ID"
    },
    messageContent: {
      type: "string",
      value: "Hello world",
      label: "Message Content"
    },
    threadId: {
      type: "string",
      value: "thread-123",
      label: "Thread ID"
    },
    isOpen: {
      type: "boolean",
      value: false,
      label: "Is Open"
    }
  });

  const mockMessage = {
    id: state.messageId.value,
    content: state.messageContent.value,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    discarded_at: null,
    has_content: true,
    unfurled_link: null,
    viewer_is_sender: true,
    viewer_can_delete: true,
    grouped_reactions: [],
    shared_post_url: null,
    optimistic_id: null,
    attachments: [],
    call: null,
    reply: null,
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
        timezone: null,
        logged_in: true,
        type_name: "User"
      }
    }
  };

  const mockThread = {
    id: state.threadId.value,
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
    viewer_can_manage_integrations: false,
    viewer_can_delete: true,
    viewer_can_force_notification: false
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <Overflow 
          message={mockMessage}
          thread={mockThread}
          state={[state.isOpen.value, (open: boolean) => setState("isOpen", open)]}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}