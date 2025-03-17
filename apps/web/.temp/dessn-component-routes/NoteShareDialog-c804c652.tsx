import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteShareDialog } from '../../components/NoteSharePopover/NoteShareDialog';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
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
        project: null,
        follow_ups: [],
        type_name: "Note",
        url: "https://example.com/note",
        public_share_url: "https://example.com/share/note",
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
          id: "member-1",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "user-1",
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
          },
          status: null
        }
      },
      label: "Note Data"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <NoteShareDialog
          note={state.note.value}
          open={state.open.value}
          onOpenChange={(open) => setState('open', open)}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}