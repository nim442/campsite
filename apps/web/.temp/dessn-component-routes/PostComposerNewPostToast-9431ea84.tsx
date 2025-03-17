import React from 'react';
import { useParentState } from '../useIframeState';
import { PostComposerNewPostToast } from '../../components/PostComposer/PostComposerNewPostToast';
import { ScopeProvider } from '@/contexts/scope';

// Mock Next.js Router
const mockRouter = {
  prefetch: () => Promise.resolve(),
};

// Override the Next.js Router import
import Router from 'next/router';
Object.defineProperty(Router, 'prefetch', {
  value: () => Promise.resolve(),
  writable: true,
});

export default function ComponentPreview() {
  const [state] = useParentState({
    post: {
      type: "object",
      value: {
        id: "123",
        title: "Sample Post",
        url: "/sample-post",
        created_at: new Date().toISOString(),
        published_at: null,
        published: true,
        last_activity_at: new Date().toISOString(),
        comments_count: 0,
        resolved_comments_count: 0,
        version: 1,
        path: "/sample-path",
        channel_name: "general",
        views_count: 0,
        non_member_views_count: 0,
        status: "none",
        visibility: "default",
        open_graph_image_url: null,
        thumbnail_url: null,
        unfurled_link: null,
        description_html: "<p>Sample description</p>",
        truncated_description_html: "<p>Sample description</p>",
        is_text_content_truncated: false,
        truncated_description_text: "Sample description",
        type_name: "Post",
        organization: {
          id: "org123",
          avatar_url: "https://placeholder.com/avatar",
          avatar_urls: {
            xs: "https://placeholder.com/xs",
            sm: "https://placeholder.com/sm",
            base: "https://placeholder.com/base",
            lg: "https://placeholder.com/lg",
            xl: "https://placeholder.com/xl",
            xxl: "https://placeholder.com/xxl"
          },
          name: "Sample Org",
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
          id: "member123",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "user123",
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
            username: "sampleuser",
            display_name: "Sample User",
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
        resolved_comment: null,
        grouped_reactions: [],
        project: {
          id: "project123",
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
        viewer_has_viewed: false,
        viewer_has_favorited: false,
        unseen_comments_count: 0,
        viewer_can_resolve: true,
        viewer_can_favorite: true,
        viewer_can_edit: true,
        viewer_can_delete: true,
        viewer_can_create_issue: true,
        resolution: null,
        latest_comment: null,
        latest_activity: null
      }
    }
  });

  // Ensure Router.prefetch is mocked before component mounts
  React.useEffect(() => {
    if (typeof Router.prefetch !== 'function') {
      Object.defineProperty(Router, 'prefetch', {
        value: () => Promise.resolve(),
        writable: true,
      });
    }
  }, []);

  return (
    <ScopeProvider initialScope="sample-org">
      <PostComposerNewPostToast post={state.post.value} />
    </ScopeProvider>
  );
}