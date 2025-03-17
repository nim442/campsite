import React from 'react';
import { useParentState } from '../useIframeState';
import { DeleteAttachmentsDialog } from '../../components/Thread/Bubble/DeleteAttachmentsDialog';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    }
  });

  const mockMessage = {
    id: "msg1",
    content: "Test message",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    has_content: true,
    viewer_is_sender: true,
    viewer_can_delete: true,
    attachments: [
      {
        id: "att1",
        file_type: "image/jpeg",
        name: "test-image.jpg",
        url: "https://example.com/image.jpg",
        app_url: "https://example.com/image.jpg",
        download_url: "https://example.com/image.jpg",
        preview_url: "https://example.com/image.jpg",
        image: true,
        video: false,
        audio: false,
        width: 800,
        height: 600,
        size: 1024,
        optimistic_ready: true,
        type_name: "image"
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
          base: "https://example.com/avatar.jpg",
          lg: "https://example.com/avatar-lg.jpg",
          xl: "https://example.com/avatar-xl.jpg",
          xxl: "https://example.com/avatar-xxl.jpg"
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
        type_name: "user"
      },
      status: null
    },
    grouped_reactions: [],
    shared_post_url: null,
    optimistic_id: null,
    unfurled_link: null,
    discarded_at: null,
    reply: null,
    call: null
  };

  const mockThread = {
    id: "thread1",
    title: "Test Thread",
    last_message_at: new Date().toISOString(),
    group: false,
    channel_name: "general",
    organization_slug: "test-org",
    path: "/thread/1",
    integration_dm: false,
    type_name: "thread",
    project_id: null,
    unread_count: 0,
    manually_marked_unread: false,
    viewer_has_favorited: false,
    viewer_is_thread_member: true,
    viewer_can_manage_integrations: true,
    viewer_can_delete: true,
    viewer_can_force_notification: true,
    other_members: [],
    deactivated_members: [],
    latest_message_truncated: null,
    image_url: null,
    avatar_urls: null,
    call_room_url: null,
    remote_call_room_id: null,
    active_call: null
  };

  return (
    <ScopeProvider>
      <DeleteAttachmentsDialog
        message={mockMessage}
        thread={mockThread}
        open={state.open.value}
        setOpen={(value) => setState("open", value)}
      />
    </ScopeProvider>
  );
}