import React from 'react';
import { useParentState } from '../useIframeState';
import { MoveNoteProjectDialog } from '../../components/Projects/MoveNoteProjectDialog';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    }
  });

  const queryClient = new QueryClient();

  const mockNote = {
    id: "1",
    title: "Sample Note",
    created_at: new Date().toISOString(),
    last_activity_at: new Date().toISOString(),
    content_updated_at: new Date().toISOString(),
    comments_count: 0,
    resolved_comments_count: 0,
    channel_name: "general",
    presence_channel_name: "presence-general",
    description_thumbnail_base_url: null,
    public_visibility: true,
    non_member_views_count: 0,
    description_html: "<p>Sample description</p>",
    description_state: null,
    project: {
      id: "1",
      name: "General",
      private: false,
      archived: false,
      slack_channel_id: null,
      viewer_is_member: true,
      viewer_can_archive: true,
      viewer_can_destroy: true,
      viewer_can_unarchive: true,
      viewer_can_update: true,
      viewer_has_subscribed: true,
      viewer_subscription: "posts_and_comments",
      unread_for_viewer: false,
      description: null,
      created_at: new Date().toISOString(),
      archived_at: null,
      last_activity_at: new Date().toISOString(),
      posts_count: 0,
      cover_photo_url: null,
      url: "",
      accessory: null,
      personal: false,
      is_general: true,
      is_default: true,
      contributors_count: 1,
      members_and_guests_count: 1,
      members_count: 1,
      guests_count: 0,
      call_room_url: null,
      message_thread_id: null,
      organization_id: "1",
      viewer_has_favorited: false,
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
    url: "",
    public_share_url: "",
    project_permission: "edit",
    member: {
      id: "1",
      role: "admin",
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      user: {
        id: "1",
        avatar_url: "",
        avatar_urls: {
          xs: "",
          sm: "",
          base: "",
          lg: "",
          xl: "",
          xxl: ""
        },
        cover_photo_url: null,
        email: "user@example.com",
        username: "user",
        display_name: "User",
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
    viewer_is_author: true,
    viewer_can_comment: true,
    viewer_can_edit: true,
    viewer_can_delete: true,
    viewer_has_favorited: false,
    latest_commenters: [],
    permitted_users: [],
    project_pin_id: null,
    resource_mentions: []
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <MoveNoteProjectDialog 
          note={mockNote}
          open={state.open.value}
          onOpenChange={(open) => setState('open', open)}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}