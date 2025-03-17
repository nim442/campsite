import React from 'react';
import { useParentState } from '../useIframeState';
import { CommentDescription } from '../../components/Comments/CommentDescription';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isEditing: {
      type: "boolean",
      value: false,
      label: "Is Editing"
    },
    isReply: {
      type: "boolean",
      value: false,
      label: "Is Reply"
    },
    subjectType: {
      type: "dropdown",
      value: "Post",
      options: ["Post", "Note"],
      label: "Subject Type"
    },
    comment: {
      type: "object",
      value: {
        id: "123",
        created_at: new Date().toISOString(),
        body_html: "<p>This is a sample comment</p>",
        url: "https://example.com",
        viewer_is_author: true,
        viewer_can_edit: true,
        viewer_can_follow_up: true,
        viewer_can_react: true,
        viewer_can_delete: true,
        viewer_can_resolve: true,
        viewer_can_create_issue: true,
        member: {
          id: "user1",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "user1",
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
        attachments: [],
        grouped_reactions: [],
        replies: [],
        follow_ups: [],
        parent_id: null,
        is_optimistic: false,
        optimistic_id: null,
        timeline_events: [],
        resource_mentions: []
      },
      label: "Comment"
    }
  });

  return (
    <ScopeProvider>
      <CommentDescription
        comment={state.comment.value}
        isEditing={state.isEditing.value}
        isReply={state.isReply.value}
        setIsEditing={(value) => setState('isEditing', value)}
        subjectId="sample-subject-id"
        subjectType={state.subjectType.value as 'Post' | 'Note'}
      />
    </ScopeProvider>
  );
}