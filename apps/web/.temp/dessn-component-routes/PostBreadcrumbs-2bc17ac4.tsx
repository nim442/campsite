import React from 'react';
import { useParentState } from '../useIframeState';
import { PostBreadcrumbs } from '../../components/Post/PostBreadcrumbs';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

// Mock the useRouter hook directly
import * as nextRouter from 'next/router';

// Override the useRouter implementation
(nextRouter as any).useRouter = () => ({
  pathname: '/[org]/posts/[postId]',
  push: () => Promise.resolve(true),
  prefetch: () => Promise.resolve(),
  route: '',
  query: {},
  asPath: '',
  basePath: '',
  isLocaleDomain: false,
  isReady: true,
  isPreview: false,
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
});

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state] = useParentState({
    post: {
      type: "object",
      label: "Post",
      value: {
        id: "123",
        title: "Example Post Title",
        project: {
          id: "proj-123",
          name: "Project Name",
          private: true,
          archived: false,
          accessory: null,
          message_thread_id: null
        },
        viewer_is_organization_member: true,
        viewer_has_favorited: false,
        viewer_can_favorite: true,
        organization: {
          id: "org-123",
          name: "Organization Name",
          slug: "org-slug",
          avatar_url: "https://example.com/avatar.jpg",
          avatar_urls: {
            xs: "https://example.com/avatar-xs.jpg",
            sm: "https://example.com/avatar-sm.jpg",
            base: "https://example.com/avatar-base.jpg",
            lg: "https://example.com/avatar-lg.jpg",
            xl: "https://example.com/avatar-xl.jpg",
            xxl: "https://example.com/avatar-xxl.jpg"
          },
          viewer_is_admin: false,
          viewer_can_leave: true
        },
        follow_ups: [],
        attachments: [],
        links: [],
        tags: [],
        feedback_requests: [],
        grouped_reactions: [],
        resource_mentions: [],
        preview_commenters: {
          latest_commenters: []
        },
        created_at: new Date().toISOString(),
        published_at: null,
        published: false,
        last_activity_at: new Date().toISOString(),
        comments_count: 0,
        resolved_comments_count: 0,
        version: 1,
        path: "/example-path",
        channel_name: "general",
        views_count: 0,
        non_member_views_count: 0,
        status: "none",
        visibility: "default",
        description_html: "<p>Example description</p>",
        truncated_description_html: "<p>Example description</p>",
        is_text_content_truncated: false,
        truncated_description_text: "Example description",
        url: "/example-url",
        type_name: "post",
        poll: null,
        resolved_comment: null,
        has_parent: false,
        has_iterations: false,
        viewer_is_author: false,
        viewer_has_commented: false,
        viewer_feedback_status: "none",
        viewer_has_subscribed: false,
        viewer_has_viewed: false,
        unseen_comments_count: 0,
        viewer_can_resolve: false,
        viewer_can_edit: false,
        viewer_can_delete: false,
        viewer_can_create_issue: false,
        resolution: null,
        latest_comment_preview: null,
        latest_comment_path: null,
        viewer_is_latest_comment_author: false,
        project_pin_id: null,
        open_graph_image_url: null,
        thumbnail_url: null,
        unfurled_link: null,
        member: {
          id: "member-123",
          role: "member",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "user-123",
            avatar_url: "https://example.com/user-avatar.jpg",
            avatar_urls: {
              xs: "https://example.com/avatar-xs.jpg",
              sm: "https://example.com/avatar-sm.jpg",
              base: "https://example.com/avatar-base.jpg",
              lg: "https://example.com/avatar-lg.jpg",
              xl: "https://example.com/avatar-xl.jpg",
              xxl: "https://example.com/avatar-xxl.jpg"
            },
            cover_photo_url: null,
            name: "Example User",
            email: "user@example.com",
            username: "exampleuser"
          }
        }
      }
    }
  });

  return (
    <QueryNormalizerProvider 
      queryClient={queryClient}
      normalizerConfig={{
        normalize: true
      }}
    >
      <ScopeProvider initialScope="org-slug">
        <PostBreadcrumbs post={state.post.value} />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}