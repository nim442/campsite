import React from 'react';
import { useParentState } from '../useIframeState';
import { InlinePostContent } from '../../components/InlinePost/InlinePostContent';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state] = useParentState({
    display: {
      type: "dropdown",
      value: "feed",
      options: ["feed", "feed-compact", "page", "preview"],
      label: "Display Type"
    },
    postData: {
      type: "object",
      value: {
        id: "1",
        title: "Sample Post",
        description_html: "<p>This is a sample post content with <strong>formatted text</strong></p>",
        truncated_description_html: "<p>This is a sample post content...</p>",
        is_text_content_truncated: true,
        created_at: new Date().toISOString(),
        published_at: new Date().toISOString(),
        published: true,
        comments_count: 5,
        resolved_comments_count: 2,
        version: 1,
        path: "/post/1",
        channel_name: "general",
        views_count: 100,
        status: "none",
        visibility: "default",
        url: "/post/1",
        type_name: "post",
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
          viewer_is_admin: false,
          viewer_can_leave: true
        },
        member: {
          id: "1",
          role: "member",
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
            email: "user@example.com",
            username: "user1",
            display_name: "User One",
            system: false,
            integration: false,
            notifications_paused: false,
            notification_pause_expires_at: null,
            timezone: "UTC",
            logged_in: true,
            type_name: "user",
            cover_photo_url: null
          },
          status: null
        },
        attachments: [],
        links: [],
        tags: [],
        poll: null,
        feedback_requests: null,
        follow_ups: [],
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
        viewer_is_author: false,
        viewer_has_commented: false,
        preview_commenters: { latest_commenters: [] },
        viewer_feedback_status: "none",
        viewer_has_subscribed: false,
        viewer_has_viewed: true,
        viewer_has_favorited: false,
        unseen_comments_count: 0,
        viewer_can_resolve: true,
        viewer_can_favorite: true,
        viewer_can_edit: true,
        viewer_can_delete: true,
        viewer_can_create_issue: true,
        resolution: null,
        latest_comment_preview: null,
        latest_comment_path: null,
        viewer_is_latest_comment_author: false,
        project_id: "1"
      }
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <InlinePostContent 
          post={state.postData.value} 
          display={state.display.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}