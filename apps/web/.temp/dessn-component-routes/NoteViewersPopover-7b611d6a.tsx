import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteViewersPopover } from '../../components/NoteView/NoteViewersPopover';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScopeProvider } from '../../contexts/scope';

const queryClient = new QueryClient();

export default function ComponentPreview() {
  const [state] = useParentState({
    note: {
      type: "object",
      label: "Note",
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
        non_member_views_count: 3,
        description_html: "<p>Example note content</p>",
        description_state: null,
        project: null,
        follow_ups: [{
          id: "followup-1",
          show_at: new Date().toISOString(),
          inbox_key: "inbox-1",
          organization_slug: "org-1",
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
              username: "example_user",
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
          subject: {
            id: "subject-1",
            type: "note",
            body_preview: "Example preview",
            member: null,
            title: "Example Subject"
          },
          target: {
            id: "target-1",
            type: "note",
            title: "Example Target",
            project: null,
            resolved: false
          },
          summary_blocks: [],
          belongs_to_viewer: true,
          type_name: "FollowUp"
        }],
        type_name: "Note",
        url: "https://example.com/note",
        public_share_url: "https://example.com/share/note",
        project_permission: "edit",
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
            username: "example_user",
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
        }
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        <div className="p-4">
          <NoteViewersPopover note={state.note.value} />
        </div>
      </ScopeProvider>
    </QueryClientProvider>
  );
}