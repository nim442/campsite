import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteShareContent } from '../../components/NoteSharePopover/NoteShareContent';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Open"
    },
    note: {
      type: "object",
      value: {
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
        description_html: "<p>Sample note content</p>",
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
          id: "1",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "1",
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
            username: "user",
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
      label: "Note Data"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <NoteShareContent 
          note={state.note.value}
          open={state.open.value}
          onOpenChange={(open) => setState('open', open)}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}