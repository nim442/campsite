import React from 'react';
import { useParentState } from '../useIframeState';
import { CommentDeleteDialog } from '../../components/Comments/CommentDeleteDialog';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    subjectId: {
      type: "string",
      value: "123",
      label: "Subject ID"
    },
    comment: {
      type: "object",
      value: {
        id: "1",
        created_at: "2023-01-01T00:00:00Z",
        body_html: "<p>Test comment</p>",
        member: {
          id: "user1",
          role: "admin",
          created_at: "2023-01-01T00:00:00Z",
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "user1",
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
        },
        replies: [],
        attachments: [],
        grouped_reactions: [],
        follow_ups: [],
        parent_id: null,
        is_optimistic: false,
        optimistic_id: null,
        timeline_events: [],
        resource_mentions: [],
        viewer_can_resolve: true,
        viewer_can_create_issue: true,
        viewer_is_author: true,
        viewer_can_edit: true,
        viewer_can_follow_up: true,
        viewer_can_react: true,
        viewer_can_delete: true,
        type_name: "Comment",
        subject_type: "Post",
        subject_id: "123",
        url: "https://example.com/comment/1",
        timestamp: null,
        x: null,
        y: null,
        note_highlight: null,
        resolved_at: null,
        resolved_by: null,
        attachment_id: null,
        canvas_preview_url: null,
        attachment_thumbnail_url: null
      },
      label: "Comment"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <CommentDeleteDialog
          comment={state.comment.value}
          subjectId={state.subjectId.value}
          open={state.open.value}
          onOpenChange={(open) => setState('open', open)}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}