import React from 'react';
import { useParentState } from '../useIframeState';
import { CommentListHeader } from '../../components/Comments/CommentListHeader';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { createQueryNormalizer } from '../../utils/normy/react-query/create-query-normalizer';

// Mock Next.js router
const mockRouter = {
  query: { org: 'demo-org' },
  isReady: true,
  asPath: '/demo-org/posts',
  push: () => Promise.resolve(true),
  prefetch: () => Promise.resolve(),
  replace: () => Promise.resolve(true)
};

// Mock window.history
if (typeof window !== 'undefined') {
  window.history.pushState = () => {};
  window.history.replaceState = () => {};
}

// Mock next/router module
import Router from 'next/router';
Router.router = mockRouter;

// Create QueryClient with default options
const mockQueryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false
    },
    queries: {
      retry: false
    }
  }
});

// Create normalizer config
const normalizerConfig = {
  normalize: true,
  cacheTime: 1000 * 60 * 5 // 5 minutes
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isSubscribed: {
      type: "boolean",
      value: true,
      label: "Is Subscribed"
    },
    isOrgMember: {
      type: "boolean",
      value: true,
      label: "Is Organization Member"
    }
  });

  const mockPost = {
    id: "123",
    viewer_has_subscribed: state.isSubscribed.value,
    viewer_is_organization_member: state.isOrgMember.value,
    title: "Sample Post",
    created_at: new Date().toISOString(),
    published: true,
    last_activity_at: new Date().toISOString(),
    comments_count: 5,
    resolved_comments_count: 2,
    version: 1,
    path: "/sample",
    channel_name: "general",
    views_count: 100,
    non_member_views_count: 10,
    status: "none",
    visibility: "default",
    description_html: "<p>Sample description</p>",
    truncated_description_html: "<p>Sample description</p>",
    is_text_content_truncated: false,
    truncated_description_text: "Sample description",
    url: "https://example.com",
    type_name: "post",
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
        username: "username",
        display_name: "Display Name",
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
    viewer_is_organization_member: state.isOrgMember.value,
    viewer_is_author: false,
    viewer_has_commented: false,
    preview_commenters: {
      latest_commenters: []
    },
    viewer_feedback_status: "none",
    viewer_has_subscribed: state.isSubscribed.value,
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
    resource_mentions: []
  };

  return (
    <QueryClientProvider client={mockQueryClient}>
      <ScopeProvider>
        <QueryNormalizerProvider queryClient={mockQueryClient} normalizerConfig={normalizerConfig}>
          <div className="p-4">
            <CommentListHeader post={mockPost} />
            <Toaster />
          </div>
        </QueryNormalizerProvider>
      </ScopeProvider>
    </QueryClientProvider>
  );
}

// Mock next/router for the ScopeProvider
const useRouter = () => mockRouter;
export { useRouter };