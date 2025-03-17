import React from 'react';
import { useParentState } from '../useIframeState';
import { CommentMobileReplyComposer } from '../../components/Comments/CommentMobileReplyComposer';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    replyingToCommentId: {
      type: "string",
      value: "comment-123",
      label: "Replying To Comment ID"
    }
  });

  const mockPost = {
    id: "post-123",
    viewer_is_organization_member: true,
    title: "Sample Post",
    organization: {
      id: "org-1",
      name: "Test Org",
      slug: "test-org",
      avatar_url: "https://placekitten.com/100/100",
      avatar_urls: {
        xs: "https://placekitten.com/50/50",
        sm: "https://placekitten.com/100/100",
        base: "https://placekitten.com/200/200",
        lg: "https://placekitten.com/300/300",
        xl: "https://placekitten.com/400/400",
        xxl: "https://placekitten.com/500/500"
      },
      viewer_is_admin: false,
      viewer_can_leave: true
    }
  };

  const mockComment = {
    id: "comment-123",
    created_at: new Date().toISOString(),
    body_html: "<p>Test comment</p>",
    is_optimistic: false,
    parent_id: null,
    member: {
      id: "member-1",
      role: "member",
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      user: {
        id: "user-1",
        avatar_url: "https://placekitten.com/100/100",
        avatar_urls: {
          xs: "https://placekitten.com/50/50",
          sm: "https://placekitten.com/100/100",
          base: "https://placekitten.com/200/200",
          lg: "https://placekitten.com/300/300",
          xl: "https://placekitten.com/400/400",
          xxl: "https://placekitten.com/500/500"
        },
        email: "test@example.com",
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
  };

  return (
    <CommentMobileReplyComposer
      post={mockPost as any}
      comment={mockComment as any}
      replyingToCommentId={state.replyingToCommentId.value}
      setReplyingToCommentId={(id) => setState('replyingToCommentId', id)}
    />
  );
}