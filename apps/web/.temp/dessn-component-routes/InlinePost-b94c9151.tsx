import React from 'react';
import { useParentState } from '../useIframeState';
import { InlinePost } from '../../components/InlinePost/index';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
    display: {
      type: "dropdown",
      value: "feed",
      options: ["feed", "feed-compact", "page", "preview"],
      label: "Display Type"
    },
    hideProject: {
      type: "boolean",
      value: false,
      label: "Hide Project"
    },
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
        path: "/sample",
        channel_name: "General",
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
        organization: {
          id: "org1",
          avatar_url: "https://placekitten.com/100/100",
          avatar_urls: {
            xs: "https://placekitten.com/50/50",
            sm: "https://placekitten.com/75/75",
            base: "https://placekitten.com/100/100",
            lg: "https://placekitten.com/150/150",
            xl: "https://placekitten.com/200/200",
            xxl: "https://placekitten.com/300/300"
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
        feedback_requests: [],
        follow_ups: [],
        member: {
          id: "member1",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "user1",
            avatar_url: "https://placekitten.com/100/100",
            avatar_urls: {
              xs: "https://placekitten.com/50/50",
              sm: "https://placekitten.com/75/75",
              base: "https://placekitten.com/100/100",
              lg: "https://placekitten.com/150/150",
              xl: "https://placekitten.com/200/200",
              xxl: "https://placekitten.com/300/300"
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
        grouped_reactions: [],
        project: {
          id: "proj1",
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
        unfurled_link: null
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <InlinePost 
            post={state.post.value}
            display={state.display.value}
            hideProject={state.hideProject.value}
          />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </QueryClientProvider>
  );
}