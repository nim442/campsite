import React from 'react';
import { useParentState } from '../useIframeState';
import { ReplyPreview } from '../../components/Thread/Bubble/ReplyPreview';
export default function ComponentPreview() {
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
    content: "<p>This is a reply message</p>",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    has_content: true,
    viewer_is_sender: true,
    discarded_at: null,
    unfurled_link: null,
    viewer_can_delete: true,
    grouped_reactions: [],
    shared_post_url: null,
    optimistic_id: null,
    attachments: [],
    call: null,
    reply: {
      id: "2",
      content: "<p>Original message being replied to</p>",
      has_content: true,
      sender_display_name: "John Doe",
      viewer_is_sender: false,
      last_attachment: null
    },
    sender: {
      id: "1",
      role: "member",
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
        email: "john@example.com",
        username: "johndoe",
        display_name: "John Doe",
        system: false,
        integration: false,
        notifications_paused: false,
        notification_pause_expires_at: null,
        timezone: "UTC",
        logged_in: true,
        type_name: "User"
      }
    }
  };

  const mockThread = {
    id: "1",
    last_message_at: new Date().toISOString(),
    latest_message_truncated: null,
    image_url: null,
    avatar_urls: null,
    group: false,
    channel_name: "General",
    organization_slug: "test-org",
    path: "/messages/1",
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
    viewer_can_delete: false,
    viewer_can_force_notification: false
  };

  return (
    <ReplyPreview
      message={mockMessage}
      position={state.position.value as 'first' | 'middle' | 'last' | 'only'}
      thread={mockThread}
    />
  );
}