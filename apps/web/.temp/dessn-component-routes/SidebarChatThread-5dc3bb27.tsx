import React from 'react';
import { useParentState } from '../useIframeState';
import { SidebarChatThread } from '../../components/Sidebar/SidebarChatThread';
import { ScopeProvider } from '../../contexts/scope';
import { HMSRoomProvider } from '@100mslive/react-sdk';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';

export default function ComponentPreview() {
  const [queryClient] = React.useState(() => new QueryClient());
  
  const [state, setState] = useParentState({
    location: {
      type: "dropdown",
      value: "chats",
      options: ["favorites", "chats"],
      label: "Location"
    },
    isDragging: {
      type: "boolean",
      value: false,
      label: "Is Dragging"
    },
    removeTooltip: {
      type: "string",
      value: "Remove from favorites",
      label: "Remove Tooltip"
    }
  });

  const mockThread = {
    id: "123",
    title: "Sample Chat Thread",
    last_message_at: new Date().toISOString(),
    latest_message_truncated: "Hello there!",
    image_url: null,
    avatar_urls: {
      xs: "https://placekitten.com/50/50",
      sm: "https://placekitten.com/100/100",
      base: "https://placekitten.com/200/200",
      lg: "https://placekitten.com/300/300",
      xl: "https://placekitten.com/400/400",
      xxl: "https://placekitten.com/500/500"
    },
    group: true,
    channel_name: "general",
    organization_slug: "sample-org",
    path: "/chat/123",
    call_room_url: null,
    remote_call_room_id: null,
    integration_dm: false,
    active_call: null,
    deactivated_members: [],
    type_name: "thread",
    project_id: null,
    unread_count: 3,
    manually_marked_unread: false,
    viewer_has_favorited: true,
    other_members: [{
      id: "user1",
      role: "member",
      created_at: new Date().toISOString(),
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
        email: "user@example.com",
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
    }],
    viewer_is_thread_member: true,
    viewer_can_manage_integrations: true,
    viewer_can_delete: true,
    viewer_can_force_notification: true
  };

  return (
    <QueryClientProvider client={queryClient}>
      <QueryNormalizerProvider queryClient={queryClient}>
        <HMSRoomProvider>
          <ScopeProvider>
            <SidebarChatThread
              thread={mockThread}
              location={state.location.value as "favorites" | "chats"}
              isDragging={state.isDragging.value}
              removeTooltip={state.removeTooltip.value}
              onRemove={() => console.log('Remove clicked')}
              onPeek={(id) => console.log('Peek', id)}
            />
          </ScopeProvider>
        </HMSRoomProvider>
      </QueryNormalizerProvider>
    </QueryClientProvider>
  );
}