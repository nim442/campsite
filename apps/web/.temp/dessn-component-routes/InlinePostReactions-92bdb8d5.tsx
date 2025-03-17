import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useParentState } from '../useIframeState';
import { InlinePostReactions } from '../../components/InlinePost/InlinePostReactions';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';

const queryClient = new QueryClient();

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
        path: "/sample-post",
        channel_name: "general",
        views_count: 100,
        non_member_views_count: 20,
        status: "none",
        visibility: "default",
        description_html: "<p>Sample description</p>",
        truncated_description_html: "<p>Sample description</p>",
        is_text_content_truncated: false,
        truncated_description_text: "Sample description",
        url: "/sample-post",
        type_name: "post",
        viewer_is_organization_member: true,
        viewer_is_author: false,
        viewer_has_commented: false,
        unseen_comments_count: 0,
        viewer_can_resolve: true,
        viewer_can_favorite: true,
        viewer_can_edit: true,
        viewer_can_delete: true,
        viewer_can_create_issue: true,
        grouped_reactions: [
          {
            viewer_reaction_id: "1",
            emoji: "👍",
            tooltip: "Thumbs up",
            reactions_count: 3,
            custom_content: null
          }
        ],
        organization: {
          id: "org1",
          avatar_url: "https://placeholder.com/avatar",
          avatar_urls: {
            xs: "https://placeholder.com/xs",
            sm: "https://placeholder.com/sm",
            base: "https://placeholder.com/base",
            lg: "https://placeholder.com/lg",
            xl: "https://placeholder.com/xl",
            xxl: "https://placeholder.com/xxl"
          },
          name: "Sample Organization",
          slug: "sample-org",
          viewer_is_admin: true,
          viewer_can_leave: true
        },
        member: {
          id: "member1",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "user1",
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
            type_name: "user"
          },
          status: null
        },
        attachments: [],
        links: [],
        tags: [],
        poll: null,
        feedback_requests: [],
        follow_ups: [],
        preview_commenters: {
          latest_commenters: []
        },
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
        resolution: null,
        resource_mentions: [],
        viewer_feedback_status: "none",
        viewer_has_subscribed: false,
        viewer_has_viewed: true,
        viewer_reaction_id: null
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <InlinePostReactions post={state.post.value} />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </QueryClientProvider>
  );
}