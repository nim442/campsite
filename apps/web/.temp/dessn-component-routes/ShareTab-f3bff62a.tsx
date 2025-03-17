import React from 'react';
import { useParentState } from '../useIframeState';
import { ShareTab } from '../../components/NoteSharePopover/ShareTab';
import { ScopeProvider } from '../../contexts/scope';
import * as Tabs from '@radix-ui/react-tabs';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Open"
    },
    note: {
      type: "object",
      value: {
        id: "123",
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
        description_html: "<p>Sample content</p>",
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
          id: "user1",
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
        }
      },
      label: "Note"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient} normalizerConfig={{ normalize: true }}>
      <ScopeProvider>
        <Tabs.Root defaultValue="share">
          <ShareTab
            note={state.note.value}
            open={state.open.value}
            onOpenChange={(open) => setState("open", open)}
            onCompose={() => console.log("compose clicked")}
          />
        </Tabs.Root>
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}