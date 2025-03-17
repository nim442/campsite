import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteFavoriteButton } from '../../components/NotesIndex/NoteFavoriteButton';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  
  const [state, setState] = useParentState({
    shortcutEnabled: {
      type: "boolean",
      value: true,
      label: "Shortcut Enabled"
    },
    noteId: {
      type: "string",
      value: "note-123",
      label: "Note ID"
    }
  });

  const mockNote = {
    id: state.noteId.value,
    title: "Sample Note",
    created_at: new Date().toISOString(),
    last_activity_at: new Date().toISOString(),
    content_updated_at: new Date().toISOString(),
    comments_count: 0,
    resolved_comments_count: 0,
    channel_name: "general",
    presence_channel_name: "presence-channel",
    description_thumbnail_base_url: null,
    public_visibility: true,
    non_member_views_count: 0,
    description_html: "<p>Sample description</p>",
    description_state: null,
    project: null,
    follow_ups: [],
    type_name: "Note",
    url: "https://example.com/note",
    public_share_url: "https://example.com/share",
    project_permission: "edit",
    viewer_is_author: true,
    viewer_can_comment: true,
    viewer_can_edit: true,
    viewer_can_delete: true,
    viewer_has_favorited: false,
    latest_commenters: [],
    permitted_users: [],
    project_pin_id: null,
    resource_mentions: [],
    member: {
      id: "member-123",
      role: "admin",
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      user: {
        id: "user-123",
        avatar_url: "https://example.com/avatar",
        avatar_urls: {
          xs: "https://example.com/avatar-xs",
          sm: "https://example.com/avatar-sm",
          base: "https://example.com/avatar-base",
          lg: "https://example.com/avatar-lg",
          xl: "https://example.com/avatar-xl",
          xxl: "https://example.com/avatar-xxl"
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
    }
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <NoteFavoriteButton 
          note={mockNote}
          shortcutEnabled={state.shortcutEnabled.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}