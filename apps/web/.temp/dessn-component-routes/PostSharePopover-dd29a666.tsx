import React from 'react';
import { useParentState } from '../useIframeState';
import { PostSharePopover } from '../../components/Post/PostSharePopover';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';

// Create a mock router context
const RouterContext = React.createContext({
  query: { org: 'sample-org' },
  isReady: true,
  asPath: '/sample-org/posts'
});

// Mock useRouter hook that ScopeProvider uses internally
const useRouter = () => React.useContext(RouterContext);

// Override the module import
const originalModule = require('next/router');
originalModule.useRouter = useRouter;

// Create QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Open"
    },
    side: {
      type: "dropdown",
      value: "bottom",
      options: ["top", "right", "bottom", "left"],
      label: "Side"
    },
    align: {
      type: "dropdown",
      value: "end",
      options: ["start", "center", "end"],
      label: "Align"
    },
    source: {
      type: "string",
      value: "preview",
      label: "Source"
    }
  });

  const mockPost = {
    id: "1",
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
    viewer_is_organization_member: true,
    viewer_is_author: true,
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
    project: {
      id: "1",
      name: "Sample Project",
      private: false,
      accessory: "📚",
      slack_channel: null
    },
    organization: {
      id: "1",
      name: "Sample Org",
      slug: "sample-org",
      avatar_url: "https://example.com/avatar.jpg",
      avatar_urls: {
        xs: "https://example.com/avatar-xs.jpg",
        sm: "https://example.com/avatar-sm.jpg",
        base: "https://example.com/avatar-base.jpg",
        lg: "https://example.com/avatar-lg.jpg",
        xl: "https://example.com/avatar-xl.jpg",
        xxl: "https://example.com/avatar-xxl.jpg"
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
    grouped_reactions: [],
    preview_commenters: { latest_commenters: [] },
    resource_mentions: [],
    member: {
      id: "1",
      role: "admin",
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      status: null,
      user: {
        id: "1",
        avatar_url: "https://example.com/avatar.jpg",
        avatar_urls: {
          xs: "https://example.com/avatar-xs.jpg",
          sm: "https://example.com/avatar-sm.jpg",
          base: "https://example.com/avatar-base.jpg",
          lg: "https://example.com/avatar-lg.jpg",
          xl: "https://example.com/avatar-xl.jpg",
          xxl: "https://example.com/avatar-xxl.jpg"
        },
        cover_photo_url: null,
        email: "user@example.com",
        username: "user",
        display_name: "User"
      }
    }
  };

  return (
    <RouterContext.Provider value={{
      query: { org: 'sample-org' },
      isReady: true,
      asPath: '/sample-org/posts'
    }}>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <div style={{ padding: '20px' }}>
            <PostSharePopover
              post={mockPost}
              open={state.open.value}
              onOpenChange={(open) => setState({ ...state, open: { ...state.open, value: open } })}
              side={state.side.value}
              align={state.align.value}
              source={state.source.value}
            >
              <button>Share Post</button>
            </PostSharePopover>
          </div>
        </ScopeProvider>
      </QueryNormalizerProvider>
    </RouterContext.Provider>
  );
}