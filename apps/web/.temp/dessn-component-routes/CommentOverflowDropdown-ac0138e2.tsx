import React from 'react';
import { useParentState } from '../useIframeState';
import { CommentOverflowDropdown } from '../../components/Comments/CommentOverflowDropdown';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  const [state, setState] = useParentState({
    comment: {
      type: "object",
      value: {
        id: "123",
        created_at: "2023-01-01T00:00:00Z",
        body_html: "<p>Test comment</p>",
        resolved_at: null,
        viewer_can_resolve: true,
        viewer_can_edit: true,
        viewer_can_delete: true,
        viewer_can_create_issue: true,
        viewer_can_follow_up: true,
        viewer_can_react: true,
        viewer_is_author: true,
        url: "https://example.com/comment/123",
        member: {
          id: "user1",
          role: "admin",
          user: {
            id: "user1",
            username: "testuser",
            display_name: "Test User",
            avatar_url: "https://example.com/avatar.jpg",
            email: "test@example.com"
          }
        },
        attachments: [],
        grouped_reactions: [],
        replies: [],
        follow_ups: [],
        timeline_events: [],
        resource_mentions: []
      },
      label: "Comment"
    },
    subjectId: {
      type: "string",
      value: "post123",
      label: "Subject ID"
    },
    subjectType: {
      type: "dropdown",
      value: "post",
      options: ["post", "note"],
      label: "Subject Type"
    },
    isEditing: {
      type: "boolean",
      value: false,
      label: "Is Editing"
    },
    canResolvePost: {
      type: "boolean",
      value: true,
      label: "Can Resolve Post"
    },
    canUnresolvePost: {
      type: "boolean",
      value: false,
      label: "Can Unresolve Post"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <CommentOverflowDropdown
          comment={state.comment.value}
          subjectId={state.subjectId.value}
          subjectType={state.subjectType.value as 'post' | 'note'}
          isEditing={state.isEditing.value}
          canResolvePost={state.canResolvePost.value}
          canUnresolvePost={state.canUnresolvePost.value}
          setIsEditing={(isEditing) => setState('isEditing', isEditing)}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}