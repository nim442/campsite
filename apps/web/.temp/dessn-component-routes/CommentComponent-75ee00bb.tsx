import React from 'react';
import { useParentState } from '../useIframeState';
import { CommentComponent } from '../../components/Comments/Comment';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  
  const [state] = useParentState({
    comment: {
      type: "object",
      value: {
        id: "123",
        created_at: new Date().toISOString(),
        body_html: "<p>This is a test comment</p>",
        member: {
          user: {
            display_name: "John Doe",
            username: "johndoe",
            avatar_url: "https://placekitten.com/100/100"
          },
          role: "admin"
        },
        attachments: [],
        grouped_reactions: [],
        replies: [],
        follow_ups: [],
        timeline_events: [],
        viewer_is_author: true,
        viewer_can_edit: true,
        viewer_can_delete: true,
        viewer_can_resolve: true,
        viewer_can_react: true,
        viewer_can_follow_up: true,
        viewer_can_create_issue: true
      },
      label: "Comment"
    },
    post: {
      type: "object",
      value: {
        id: "456",
        title: "Test Post",
        viewer_is_organization_member: true,
        viewer_can_resolve: true,
        attachments: [],
        resolution: null,
        viewer_is_author: true,
        viewer_can_edit: true,
        viewer_can_delete: true,
        viewer_can_create_issue: true
      },
      label: "Post"
    },
    isCanvas: {
      type: "boolean",
      value: false,
      label: "Is Canvas"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <CommentComponent 
          comment={state.comment.value}
          post={state.post.value}
          isCanvas={state.isCanvas.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}