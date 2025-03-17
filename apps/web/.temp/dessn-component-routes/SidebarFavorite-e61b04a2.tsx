import React from 'react';
import { useParentState } from '../useIframeState';
import { SidebarFavorite } from '../../components/Sidebar/SidebarFavorite';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  
  const [state, setState] = useParentState({
    isDragging: {
      type: "boolean",
      value: false,
      label: "Is Dragging"
    },
    favoriteType: {
      type: "dropdown",
      value: "Project",
      options: ["Project", "MessageThread", "Note", "Post", "Call"],
      label: "Favorite Type"
    }
  });

  const mockFavorite = {
    id: "1",
    position: 1,
    favoritable_type: state.favoriteType.value,
    favoritable_id: "123",
    accessory: null,
    name: "Sample Favorite",
    url: "/sample-url",
    private: false,
    project: state.favoriteType.value === "Project" ? {
      id: "1",
      name: "Sample Project",
      description: "A sample project",
      created_at: new Date().toISOString(),
      archived_at: null,
      archived: false,
      last_activity_at: new Date().toISOString(),
      slack_channel_id: null,
      posts_count: 0,
      cover_photo_url: null,
      url: "/sample-project",
      accessory: null,
      private: false,
      personal: false,
      is_general: false,
      is_default: false,
      contributors_count: 1,
      members_and_guests_count: 1,
      members_count: 1,
      guests_count: 0,
      call_room_url: null,
      message_thread_id: null,
      organization_id: "1",
      viewer_has_favorited: true,
      viewer_can_archive: true,
      viewer_can_destroy: true,
      viewer_can_unarchive: true,
      viewer_can_update: true,
      viewer_has_subscribed: true,
      viewer_subscription: 'posts_and_comments',
      viewer_is_member: true,
      unread_for_viewer: false,
      slack_channel: null,
      type_name: "Project",
      viewer_display_preferences: null,
      display_preferences: {
        display_reactions: true,
        display_attachments: true,
        display_comments: true,
        display_resolved: true
      }
    } : null,
    message_thread: state.favoriteType.value === "MessageThread" ? {
      id: "1",
      last_message_at: new Date().toISOString(),
      latest_message_truncated: "Sample message",
      image_url: null,
      avatar_urls: null,
      group: false,
      channel_name: "general",
      organization_slug: "org",
      path: "/path",
      call_room_url: null,
      remote_call_room_id: null,
      integration_dm: false,
      active_call: null,
      deactivated_members: [],
      type_name: "MessageThread",
      title: "Sample Thread",
      project_id: null,
      unread_count: 0,
      manually_marked_unread: false,
      viewer_has_favorited: true,
      other_members: [],
      viewer_is_thread_member: true,
      viewer_can_manage_integrations: true,
      viewer_can_delete: true,
      viewer_can_force_notification: true
    } : null
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <SidebarFavorite
          favorite={mockFavorite}
          isDragging={state.isDragging.value}
          onPeek={(id) => console.log('Peek:', id)}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}