import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteComments } from '../../components/NoteComments/index';
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
        title: "Example Note",
        created_at: new Date().toISOString(),
        last_activity_at: new Date().toISOString(),
        content_updated_at: new Date().toISOString(),
        comments_count: 5,
        resolved_comments_count: 2,
        channel_name: "general",
        presence_channel_name: "presence-channel",
        description_thumbnail_base_url: null,
        public_visibility: true,
        non_member_views_count: 0,
        description_html: "<p>Example note content</p>",
        description_state: null,
        project: null,
        follow_ups: [],
        type_name: "Note",
        url: "https://example.com/note",
        public_share_url: "https://example.com/share",
        project_permission: "edit",
        member: {
          id: "member-1",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
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
            username: "exampleuser",
            display_name: "Example User",
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
        viewer_has_favorited: false,
        latest_commenters: [],
        permitted_users: [],
        project_pin_id: null,
        resource_mentions: []
      },
      label: "Note Data"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <NoteComments note={state.note.value} />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}