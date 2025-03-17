import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteSharePermissionsRow } from '../../components/NoteSharePopover/NoteSharePermissions';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    permission: {
      type: "object",
      value: {
        id: "123",
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
          username: "testuser",
          display_name: "Test User",
          system: false,
          integration: false,
          notifications_paused: false,
          notification_pause_expires_at: null,
          timezone: "UTC",
          logged_in: true,
          type_name: "User"
        },
        action: "view"
      },
      label: "Permission"
    },
    note: {
      type: "object",
      value: {
        id: "note1",
        title: "Test Note",
        created_at: new Date().toISOString(),
        last_activity_at: new Date().toISOString(),
        content_updated_at: new Date().toISOString(),
        comments_count: 0,
        resolved_comments_count: 0,
        channel_name: "test-channel",
        presence_channel_name: "presence-channel",
        description_thumbnail_base_url: null,
        public_visibility: false,
        non_member_views_count: 0,
        description_html: "<p>Test description</p>",
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
          id: "member1",
          role: "admin",
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
            username: "testuser",
            display_name: "Test User",
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
      },
      label: "Note"
    }
  });

  return (
    <ScopeProvider>
      <NoteSharePermissionsRow 
        permission={state.permission.value}
        note={state.note.value}
      />
    </ScopeProvider>
  );
}