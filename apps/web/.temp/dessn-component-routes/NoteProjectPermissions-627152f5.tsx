import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteProjectPermissions } from '../../components/NoteSharePopover/NoteProjectPermissions';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  const [state] = useParentState({
    note: {
      type: "object",
      value: {
        id: "note-1",
        title: "Sample Note",
        created_at: new Date().toISOString(),
        last_activity_at: new Date().toISOString(),
        content_updated_at: new Date().toISOString(),
        comments_count: 5,
        resolved_comments_count: 2,
        channel_name: "general",
        presence_channel_name: "presence-general",
        description_thumbnail_base_url: null,
        public_visibility: true,
        non_member_views_count: 10,
        description_html: "<p>Sample note content</p>",
        description_state: null,
        project: {
          id: "project-1",
          name: "Sample Project",
          description: "A sample project",
          accessory: "📝",
          private: false,
          archived: false,
          viewer_is_member: true,
          viewer_can_archive: true,
          viewer_can_destroy: true,
          viewer_can_update: true,
          viewer_can_unarchive: true,
        },
        project_permission: "edit",
        viewer_can_edit: true,
        viewer_is_author: true,
        viewer_can_comment: true,
        viewer_can_delete: true,
        viewer_has_favorited: false,
        latest_commenters: [],
        permitted_users: [],
        follow_ups: [],
        resource_mentions: [],
        type_name: "Note",
        url: "https://example.com/note",
        public_share_url: "https://example.com/share/note",
        project_pin_id: null,
        member: {
          id: "member-1",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          status: null,
          user: {
            id: "user-1",
            avatar_url: "https://example.com/avatar.jpg",
            avatar_urls: {
              xs: "https://example.com/avatar-xs.jpg",
              sm: "https://example.com/avatar-sm.jpg",
              base: "https://example.com/avatar-base.jpg",
              lg: "https://example.com/avatar-lg.jpg",
              xl: "https://example.com/avatar-xl.jpg",
              xxl: "https://example.com/avatar-xxl.jpg"
            },
            cover_photo_url: null,
            email: "user@example.com",
            username: "sampleuser",
            display_name: "Sample User",
            system: false,
            integration: false,
            notifications_paused: false,
            notification_pause_expires_at: null,
            timezone: "UTC",
            logged_in: true,
            type_name: "User"
          }
        }
      },
      label: "Note Data"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <NoteProjectPermissions note={state.note.value} />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}