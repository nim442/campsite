import React from 'react';
import { useParentState } from '../useIframeState';
import { PostFavoriteButton } from '../../components/Post/PostFavoriteButton';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import * as nextRouter from 'next/router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Mock router values
const mockRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/posts',
};

// Override useRouter
// @ts-ignore - we know this mock is not complete
nextRouter.useRouter = () => mockRouter;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    shortcutEnabled: {
      type: "boolean",
      value: false,
      label: "Shortcut Enabled"
    },
    viewerHasFavorited: {
      type: "boolean",
      value: false,
      label: "Viewer Has Favorited"
    }
  });

  const mockPost = {
    id: "123",
    title: "Sample Post",
    created_at: new Date().toISOString(),
    published_at: new Date().toISOString(),
    published: true,
    last_activity_at: new Date().toISOString(),
    comments_count: 0,
    resolved_comments_count: 0,
    version: 1,
    path: "/sample",
    channel_name: "general",
    views_count: 0,
    non_member_views_count: 0,
    status: "none",
    visibility: "default",
    description_html: "<p>Sample description</p>",
    truncated_description_html: "<p>Sample description</p>",
    is_text_content_truncated: false,
    truncated_description_text: "Sample description",
    url: "https://example.com",
    type_name: "post",
    viewer_has_favorited: state.viewerHasFavorited.value,
    viewer_can_favorite: true,
    organization: {
      id: "org123",
      avatar_url: "https://example.com/avatar",
      avatar_urls: {
        xs: "",
        sm: "",
        base: "",
        lg: "",
        xl: "",
        xxl: ""
      },
      name: "Sample Org",
      slug: "sample-org",
      viewer_is_admin: false,
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
      role: "member",
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      user: {
        id: "user123",
        avatar_url: "https://example.com/avatar",
        avatar_urls: {
          xs: "",
          sm: "",
          base: "",
          lg: "",
          xl: "",
          xxl: ""
        },
        cover_photo_url: null,
        email: "user@example.com",
        username: "user",
        display_name: "User",
        system: false,
        integration: false,
        notifications_paused: false,
        notification_pause_expires_at: null,
        timezone: null,
        logged_in: true,
        type_name: "user"
      },
      status: null
    },
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
    viewer_is_author: false,
    viewer_has_commented: false,
    preview_commenters: {
      latest_commenters: []
    },
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
    resource_mentions: []
  };

  return (
    <QueryClientProvider client={queryClient}>
      <QueryNormalizerProvider 
        queryClient={queryClient}
        normalizerConfig={{
          normalize: true
        }}
      >
        <ScopeProvider>
          <PostFavoriteButton
            post={mockPost}
            shortcutEnabled={state.shortcutEnabled.value}
          />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </QueryClientProvider>
  );
}