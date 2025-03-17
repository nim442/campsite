import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteRow } from '../../components/NotesIndex/NoteRow';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { Command } from '@campsite/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    display: {
      type: "dropdown",
      value: "default",
      options: ["default", "pinned", "search"],
      label: "Display Mode"
    },
    hideProject: {
      type: "boolean",
      value: false,
      label: "Hide Project"
    }
  });

  const queryClient = React.useMemo(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  }), []);

  const mockNote = {
    id: "1",
    title: "Sample Note Title",
    created_at: new Date().toISOString(),
    last_activity_at: new Date().toISOString(),
    content_updated_at: new Date().toISOString(),
    comments_count: 5,
    resolved_comments_count: 2,
    channel_name: "general",
    presence_channel_name: "presence-channel",
    description_thumbnail_base_url: null,
    public_visibility: true,
    non_member_views_count: 10,
    description_html: "<p>Sample description</p>",
    description_state: null,
    permitted_users: [],
    project: {
      id: "proj1",
      name: "Sample Project",
      description: "Project description",
      created_at: new Date().toISOString(),
      archived_at: null,
      archived: false,
      last_activity_at: new Date().toISOString(),
      slack_channel_id: null,
      posts_count: 0,
      cover_photo_url: null,
      url: "https://example.com",
      accessory: null,
      private: false,
      personal: false,
      is_general: true,
      is_default: false,
      contributors_count: 5,
      members_and_guests_count: 10,
      members_count: 8,
      guests_count: 2,
      call_room_url: null,
      message_thread_id: null,
      organization_id: "org1",
      viewer_has_favorited: false,
      viewer_can_archive: true,
      viewer_can_destroy: false,
      viewer_can_unarchive: false,
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
    },
    follow_ups: [],
    type_name: "Note",
    url: "https://example.com/note",
    public_share_url: "https://example.com/share",
    project_permission: "edit",
    member: {
      id: "member1",
      role: "admin",
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      user: {
        id: "user1",
        avatar_url: "https://example.com/avatar",
        avatar_urls: {
          xs: "https://example.com/xs",
          sm: "https://example.com/sm",
          base: "https://example.com/base",
          lg: "https://example.com/lg",
          xl: "https://example.com/xl",
          xxl: "https://example.com/xxl"
        },
        cover_photo_url: null,
        email: "user@example.com",
        username: "username",
        display_name: "Display Name",
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
    viewer_is_author: true,
    viewer_can_comment: true,
    viewer_can_edit: true,
    viewer_can_delete: true,
    project_pin_id: null
  };

  return (
    <QueryClientProvider client={queryClient}>
      <QueryNormalizerProvider queryClient={queryClient}>
        <Command>
          <ScopeProvider value={{ scope: 'default' }}>
            <NoteRow 
              note={mockNote}
              display={state.display.value as 'default' | 'pinned' | 'search'}
              hideProject={state.hideProject.value}
            />
          </ScopeProvider>
        </Command>
      </QueryNormalizerProvider>
    </QueryClientProvider>
  );
}