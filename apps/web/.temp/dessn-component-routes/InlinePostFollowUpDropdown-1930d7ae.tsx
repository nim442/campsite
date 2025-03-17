import React from 'react';
import { useParentState } from '../useIframeState';
import { InlinePostFollowUpDropdown } from '../../components/InlinePost/InlinePostFollowUpDropdown';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';

// Create a mock router context
const mockRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/posts',
  pathname: '/test-org/posts',
  route: '/[org]/posts',
  basePath: '',
  locale: 'en',
  locales: ['en'],
  defaultLocale: 'en'
};

// Mock the useRouter hook
const RouterContext = React.createContext({});

// Mock the useRouter hook by providing the mock router through context
const MockRouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <RouterContext.Provider value={mockRouter}>
      {children}
    </RouterContext.Provider>
  );
};

// Override the useRouter hook
const useRouter = () => React.useContext(RouterContext);
(global as any).useRouter = useRouter;

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
      value: {
        id: "123",
        title: "Sample Post",
        created_at: new Date().toISOString(),
        published_at: new Date().toISOString(),
        published: true,
        last_activity_at: new Date().toISOString(),
        comments_count: 5,
        resolved_comments_count: 2,
        version: 1,
        path: "/sample-path",
        channel_name: "general",
        views_count: 100,
        non_member_views_count: 20,
        status: "none",
        visibility: "default",
        description_html: "<p>Sample description</p>",
        truncated_description_html: "<p>Sample description</p>",
        is_text_content_truncated: false,
        truncated_description_text: "Sample description",
        url: "https://example.com",
        type_name: "post",
        follow_ups: [],
        attachments: [],
        links: [],
        tags: [],
        feedback_requests: [],
        grouped_reactions: [],
        organization: {
          id: "org123",
          avatar_url: "https://example.com/avatar",
          avatar_urls: {
            xs: "https://example.com/xs",
            sm: "https://example.com/sm",
            base: "https://example.com/base",
            lg: "https://example.com/lg",
            xl: "https://example.com/xl",
            xxl: "https://example.com/xxl"
          },
          name: "Sample Org",
          slug: "sample-org",
          viewer_is_admin: true,
          viewer_can_leave: true
        },
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
              xs: "https://example.com/xs",
              sm: "https://example.com/sm",
              base: "https://example.com/base",
              lg: "https://example.com/lg",
              xl: "https://example.com/xl",
              xxl: "https://example.com/xxl"
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
        project_pin_id: null,
        resource_mentions: [],
        poll: null
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <QueryNormalizerProvider 
        queryClient={queryClient}
        normalizerConfig={{
          normalize: true,
          cacheTime: 1000 * 60 * 5, // 5 minutes
        }}
      >
        <MockRouterProvider>
          <ScopeProvider>
            <Toaster />
            <div className="p-4">
              <InlinePostFollowUpDropdown post={state.post.value}>
                <button className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium bg-primary text-white hover:bg-primary/90">
                  Follow Up
                </button>
              </InlinePostFollowUpDropdown>
            </div>
          </ScopeProvider>
        </MockRouterProvider>
      </QueryNormalizerProvider>
    </QueryClientProvider>
  );
}