import React from 'react';
import { useParentState } from '../useIframeState';
import { PostViewersFacepilePopover } from '../../components/Post/PostViewersFacepilePopover';
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

// Mock the next/router module
const mockRouter = {
  useRouter: () => ({
    query: { org: 'sample-org' },
    isReady: true,
    asPath: '/sample-org/posts/123',
    pathname: '/[org]/posts/[id]',
    route: '/[org]/posts/[id]',
    basePath: '',
    events: {
      on: () => {},
      off: () => {},
      emit: () => {},
    },
    push: () => Promise.resolve(true),
    replace: () => Promise.resolve(true),
    reload: () => {},
    back: () => {},
    prefetch: () => Promise.resolve(),
    beforePopState: () => {},
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    isPreview: false,
  })
};

// Mock the module
if (typeof window !== 'undefined') {
  (window as any).require = () => mockRouter;
}

export default function ComponentPreview() {
  const [state] = useParentState({
    post: {
      type: "object",
      label: "Post",
      value: {
        id: "123",
        title: "Sample Post",
        views_count: 42,
        non_member_views_count: 10,
        viewer_is_organization_member: true,
        follow_ups: [
          {
            member: {
              user: {
                id: "user1",
                avatar_url: "https://placekitten.com/100/100",
                display_name: "User 1",
                email: "user1@example.com",
                username: "user1",
                system: false,
                integration: false,
                notifications_paused: false,
                notification_pause_expires_at: null,
                timezone: "UTC",
                logged_in: true,
                type_name: "User",
                avatar_urls: {
                  xs: "https://placekitten.com/50/50",
                  sm: "https://placekitten.com/100/100",
                  base: "https://placekitten.com/200/200",
                  lg: "https://placekitten.com/300/300",
                  xl: "https://placekitten.com/400/400",
                  xxl: "https://placekitten.com/500/500"
                },
                cover_photo_url: null
              }
            }
          }
        ],
        created_at: new Date().toISOString(),
        published_at: null,
        published: true,
        last_activity_at: new Date().toISOString(),
        comments_count: 5,
        resolved_comments_count: 2,
        version: 1,
        path: "/sample",
        channel_name: "general",
        status: "none",
        visibility: "default",
        description_html: "<p>Sample description</p>",
        truncated_description_html: "<p>Sample description</p>",
        is_text_content_truncated: false,
        truncated_description_text: "Sample description",
        url: "/sample",
        type_name: "Post",
        attachments: [],
        links: [],
        tags: [],
        poll: null,
        feedback_requests: null,
        viewer_is_author: false,
        viewer_has_commented: false,
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
        project_pin_id: null,
        resource_mentions: [],
        grouped_reactions: [],
        has_parent: false,
        has_iterations: false,
        preview_commenters: {
          latest_commenters: []
        },
        organization: {
          id: "org1",
          avatar_url: "https://placekitten.com/200/200",
          name: "Sample Org",
          slug: "sample-org",
          viewer_is_admin: true,
          viewer_can_leave: true,
          avatar_urls: {
            xs: "https://placekitten.com/50/50",
            sm: "https://placekitten.com/100/100",
            base: "https://placekitten.com/200/200",
            lg: "https://placekitten.com/300/300",
            xl: "https://placekitten.com/400/400",
            xxl: "https://placekitten.com/500/500"
          }
        },
        project: {
          id: "proj1",
          name: "Sample Project",
          slug: "sample-project",
          description: "Sample project description",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          archived: false,
          viewer_is_member: true,
          viewer_is_admin: true,
          type_name: "Project"
        }
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        <PostViewersFacepilePopover post={state.post.value} />
      </ScopeProvider>
    </QueryClientProvider>
  );
}