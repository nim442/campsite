import React from 'react';
import { useParentState } from '../useIframeState';
import { PostInlineIssues } from '../../components/Post/PostInlineIssues';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScopeProvider } from '../../contexts/scope';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock process.env
process.env.NODE_ENV = 'development';

export default function ComponentPreview() {
  const [state] = useParentState({
    post: {
      type: "object",
      label: "Post",
      value: {
        id: "1",
        title: "Sample Post",
        created_at: new Date().toISOString(),
        published: true,
        published_at: new Date().toISOString(),
        last_activity_at: new Date().toISOString(),
        comments_count: 5,
        resolved_comments_count: 2,
        version: 1,
        path: "/post/1",
        channel_name: "general",
        views_count: 100,
        non_member_views_count: 50,
        status: "none",
        visibility: "default",
        description_html: "<p>Sample description</p>",
        truncated_description_html: "<p>Sample description</p>",
        is_text_content_truncated: false,
        truncated_description_text: "Sample description",
        url: "/post/1",
        type_name: "post",
        viewer_can_create_issue: true,
        organization: {
          id: "1",
          name: "Sample Org",
          slug: "sample-org",
          avatar_url: "https://placeholder.com/avatar",
          avatar_urls: {
            xs: "https://placeholder.com/xs",
            sm: "https://placeholder.com/sm",
            base: "https://placeholder.com/base",
            lg: "https://placeholder.com/lg",
            xl: "https://placeholder.com/xl",
            xxl: "https://placeholder.com/xxl"
          },
          viewer_is_admin: true,
          viewer_can_leave: true
        },
        attachments: [],
        links: [],
        tags: [],
        poll: null,
        feedback_requests: [],
        follow_ups: [],
        member: {
          id: "1",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "1",
            avatar_url: "https://placeholder.com/avatar",
            avatar_urls: {
              xs: "https://placeholder.com/xs",
              sm: "https://placeholder.com/sm",
              base: "https://placeholder.com/base",
              lg: "https://placeholder.com/lg",
              xl: "https://placeholder.com/xl",
              xxl: "https://placeholder.com/xxl"
            },
            cover_photo_url: null,
            email: "user@example.com",
            username: "user",
            display_name: "User",
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
        resolved_comment: null,
        grouped_reactions: [],
        project: {
          id: "1",
          name: "Sample Project",
          accessory: null,
          private: false,
          archived: false,
          message_thread_id: null
        },
        has_parent: false,
        has_iterations: false,
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
        viewer_can_favorite: true,
        viewer_can_edit: true,
        viewer_can_delete: true,
        resolution: null,
        latest_comment_preview: null,
        latest_comment_path: null,
        viewer_is_latest_comment_author: false,
        project_pin_id: null
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        <PostInlineIssues post={state.post.value} />
      </ScopeProvider>
    </QueryClientProvider>
  );
}