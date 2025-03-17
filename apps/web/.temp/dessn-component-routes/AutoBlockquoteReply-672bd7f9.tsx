import React from 'react';
import { useParentState } from '../useIframeState';
import { AutoBlockquoteReply } from '../../components/InlinePost/AutoBlockquoteReply';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    enabled: {
      type: "boolean",
      value: true,
      label: "Enabled"
    },
    className: {
      type: "string",
      value: "w-full",
      label: "Class Name"
    },
    replyingToCommentId: {
      type: "string",
      value: "comment-123",
      label: "Replying To Comment ID"
    },
    post: {
      type: "object",
      value: {
        id: "post-123",
        title: "Sample Post",
        created_at: new Date().toISOString(),
        published_at: new Date().toISOString(),
        published: true,
        last_activity_at: new Date().toISOString(),
        comments_count: 5,
        resolved_comments_count: 2,
        version: 1,
        path: "/sample-post",
        channel_name: "general",
        views_count: 100,
        non_member_views_count: 50,
        status: "none",
        visibility: "default",
        description_html: "<p>Sample description</p>",
        truncated_description_html: "<p>Sample description</p>",
        is_text_content_truncated: false,
        truncated_description_text: "Sample description",
        url: "/sample-post",
        type_name: "post",
        organization: {
          id: "org-123",
          avatar_url: "https://placekitten.com/200/200",
          avatar_urls: {
            xs: "https://placekitten.com/50/50",
            sm: "https://placekitten.com/100/100",
            base: "https://placekitten.com/200/200",
            lg: "https://placekitten.com/300/300",
            xl: "https://placekitten.com/400/400",
            xxl: "https://placekitten.com/500/500"
          },
          name: "Sample Organization",
          slug: "sample-org",
          viewer_is_admin: true,
          viewer_can_leave: true
        },
        attachments: [],
        links: [],
        tags: [],
        poll: null,
        feedback_requests: null,
        follow_ups: [],
        member: {
          id: "member-123",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "user-123",
            avatar_url: "https://placekitten.com/200/200",
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
            username: "sampleuser",
            display_name: "Sample User",
            system: false,
            integration: false,
            notifications_paused: false,
            notification_pause_expires_at: null,
            timezone: "UTC",
            logged_in: true,
            type_name: "user"
          },
          status: null
        },
        viewer_is_organization_member: true,
        viewer_is_author: true,
        viewer_has_commented: false,
        preview_commenters: {
          latest_commenters: []
        },
        viewer_feedback_status: "none",
        viewer_has_subscribed: false,
        viewer_has_viewed: true,
        viewer_has_favorited: false,
        unseen_comments_count: 0,
        viewer_can_resolve: true,
        viewer_can_edit: true,
        viewer_can_delete: true,
        viewer_can_move: true,
        viewer_can_pin: true,
        viewer_can_unpin: true,
        viewer_can_change_visibility: true
      },
      label: "Post"
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-4">
        <AutoBlockquoteReply
          enabled={state.enabled.value}
          className={state.className.value}
          replyingToCommentId={state.replyingToCommentId.value}
          post={state.post.value}
        >
          <div className="prose dark:prose-invert">
            <p>This is some sample content that can be selected and quoted.</p>
            <p>Try selecting this text and use the quote feature!</p>
          </div>
        </AutoBlockquoteReply>
      </div>
    </QueryClientProvider>
  );
}