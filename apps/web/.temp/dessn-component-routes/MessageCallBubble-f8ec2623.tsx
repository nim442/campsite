import React from 'react';
import { useParentState } from '../useIframeState';
import { MessageCallBubble } from '../../components/Thread/Bubble/MessageCallBubble';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    className: {
      type: "string",
      value: "rounded-lg",
      label: "Class Name"
    }
  });

  const mockThread = {
    id: "1",
    title: "Test Thread",
    call_room_url: "https://example.com/call",
    active_call: null,
    type_name: "thread",
    organization_slug: "test-org",
    path: "/test",
    channel_name: "general",
    group: false,
    integration_dm: false,
    unread_count: 0,
    manually_marked_unread: false,
    viewer_has_favorited: false,
    viewer_is_thread_member: true,
    viewer_can_manage_integrations: false,
    viewer_can_delete: false,
    viewer_can_force_notification: false,
    other_members: [],
    deactivated_members: [],
    last_message_at: new Date().toISOString(),
    latest_message_truncated: null,
    image_url: null,
    avatar_urls: null,
    project_id: null,
    remote_call_room_id: null
  };

  const mockCall = {
    id: "1",
    created_at: new Date().toISOString(),
    started_at: new Date().toISOString(),
    stopped_at: null,
    duration: "1h 30m",
    active: true,
    title: "Test Call",
    summary_html: "<p>Test summary</p>",
    recordings: [],
    peers: []
  };

  const mockMessage = {
    id: "1",
    content: "Started a call",
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
    call: mockCall,
    reply: null,
    sender: {
      id: "1",
      role: "admin",
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      status: null,
      user: {
        id: "1",
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
        email: "test@example.com",
        username: "testuser",
        display_name: "Test User",
        system: false,
        integration: false,
        notifications_paused: false,
        notification_pause_expires_at: null,
        timezone: "UTC",
        logged_in: true,
        type_name: "user"
      }
    }
  };

  return (
    <ScopeProvider>
      <MessageCallBubble
        thread={mockThread}
        call={mockCall}
        message={mockMessage}
        className={state.className.value}
      />
    </ScopeProvider>
  );
}