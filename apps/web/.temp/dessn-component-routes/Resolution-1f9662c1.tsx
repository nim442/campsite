import React from 'react';
import { useParentState } from '../useIframeState';
import { Resolution } from '../../components/InlinePost/Resolution';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ScopeProvider } from '../../contexts/scope';

// Create a client
const queryClient = new QueryClient();

// Create a mock router context
const MockRouterContext = React.createContext({
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/posts/1',
  pathname: '/test-org/posts/1',
  route: '/test-org/posts/1',
  basePath: '',
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => Promise.resolve(true),
  back: () => Promise.resolve(true),
  prefetch: () => Promise.resolve(),
  beforePopState: () => Promise.resolve(),
  events: {
    on: () => {},
    off: () => {},
    emit: () => {}
  },
  isFallback: false,
  isLocaleDomain: false,
  isPreview: false
});

// Mock the useRouter hook
React.createContext = (defaultValue) => {
  if (defaultValue && 'pathname' in defaultValue) {
    return MockRouterContext;
  }
  return React.createContext(defaultValue);
};

export default function ComponentPreview() {
  const [state] = useParentState({
    display: {
      type: "dropdown",
      value: "page",
      options: ["hovercard", "page", "feed"],
      label: "Display Mode"
    }
  });

  const mockPost = {
    id: "1",
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
    url: "/sample",
    type_name: "post",
    viewer_can_resolve: true,
    resolution: {
      resolved_at: new Date().toISOString(),
      resolved_by: {
        id: "user1",
        user: {
          display_name: "John Doe",
          id: "user1",
          avatar_url: "",
          avatar_urls: {
            xs: "",
            sm: "",
            base: "",
            lg: "",
            xl: "",
            xxl: ""
          },
          email: "john@example.com",
          username: "johndoe",
          system: false,
          integration: false,
          notifications_paused: false,
          notification_pause_expires_at: null,
          timezone: "UTC",
          logged_in: true,
          type_name: "user"
        },
        role: "admin",
        created_at: new Date().toISOString(),
        deactivated: false,
        is_organization_member: true,
        status: null
      },
      resolved_html: "<p>This issue has been resolved</p>",
      resolved_comment: null
    },
    organization: {
      id: "org1",
      name: "Sample Org",
      avatar_url: "",
      avatar_urls: {
        xs: "",
        sm: "",
        base: "",
        lg: "",
        xl: "",
        xxl: ""
      },
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
      id: "member1",
      role: "admin",
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      status: null,
      user: {
        id: "user1",
        avatar_url: "",
        avatar_urls: {
          xs: "",
          sm: "",
          base: "",
          lg: "",
          xl: "",
          xxl: ""
        },
        cover_photo_url: null,
        email: "john@example.com",
        username: "johndoe",
        display_name: "John Doe",
        system: false,
        integration: false,
        notifications_paused: false,
        notification_pause_expires_at: null,
        timezone: "UTC",
        logged_in: true,
        type_name: "user"
      }
    },
    grouped_reactions: [],
    project: {
      id: "project1",
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
    preview_url: "/sample/preview"
  };

  return (
    <MockRouterContext.Provider value={MockRouterContext._currentValue}>
      <QueryClientProvider client={queryClient}>
        <ScopeProvider>
          <Resolution post={mockPost} display={state.display.value as 'hovercard' | 'page' | 'feed'} />
        </ScopeProvider>
      </QueryClientProvider>
    </MockRouterContext.Provider>
  );
}