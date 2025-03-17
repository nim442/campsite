import React from 'react';
import { useParentState } from '../useIframeState';
import { ChatThread } from '../../components/MobileHome/ChatThread';
import { ScopeProvider } from '@/contexts/scope';

const mockThread = {
  id: "123",
  title: "Example Chat",
  group: false,
  manually_marked_unread: false,
  unread_count: 0,
  image_url: null,
  avatar_urls: {
    xs: "https://placekitten.com/50/50",
    sm: "https://placekitten.com/100/100",
    base: "https://placekitten.com/200/200",
    lg: "https://placekitten.com/300/300",
    xl: "https://placekitten.com/400/400",
    xxl: "https://placekitten.com/500/500"
  },
  other_members: [{
    id: "user1",
    role: "member",
    created_at: "2023-01-01",
    deactivated: false,
    is_organization_member: true,
    user: {
      id: "user1",
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
    status: {
      message: "Available",
      emoji: "👋",
      expiration_setting: "1h",
      expires_at: null,
      pause_notifications: false,
      expires_in: "1h"
    }
  }],
  last_message_at: "2023-01-01T00:00:00Z",
  latest_message_truncated: "Hello!",
  channel_name: "general",
  organization_slug: "example-org",
  path: "/chat/123",
  call_room_url: null,
  remote_call_room_id: null,
  integration_dm: false,
  active_call: null,
  deactivated_members: [],
  type_name: "MessageThread",
  project_id: null,
  viewer_has_favorited: false,
  viewer_is_thread_member: true,
  viewer_can_manage_integrations: false,
  viewer_can_delete: false,
  viewer_can_force_notification: false
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    thread: {
      type: "object",
      value: mockThread,
      label: "Thread"
    }
  });

  return (
    <ScopeProvider>
      <ChatThread thread={state.thread.value} />
    </ScopeProvider>
  );
}