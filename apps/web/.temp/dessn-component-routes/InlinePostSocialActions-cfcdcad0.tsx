import React from 'react';
import { useParentState } from '../useIframeState';
import { InlinePostSocialActions } from '../../components/InlinePost/InlinePostSocialActions';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  const [state] = useParentState({
    display: {
      type: "dropdown",
      value: "feed",
      options: ["feed", "feed-compact", "page", "preview"],
      label: "Display Type"
    },
    post: {
      type: "object",
      value: {
        id: "1",
        title: "Sample Post",
        created_at: new Date().toISOString(),
        published_at: new Date().toISOString(),
        published: true,
        last_activity_at: new Date().toISOString(),
        comments_count: 5,
        resolved_comments_count: 0,
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
        organization: {
          id: "1",
          avatar_url: "https://placekitten.com/100/100",
          avatar_urls: {
            xs: "https://placekitten.com/50/50",
            sm: "https://placekitten.com/100/100",
            base: "https://placekitten.com/200/200",
            lg: "https://placekitten.com/300/300",
            xl: "https://placekitten.com/400/400",
            xxl: "https://placekitten.com/500/500"
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
          id: "1",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "1",
            avatar_url: "https://placekitten.com/100/100",
            avatar_urls: {
              xs: "https://placekitten.com/50/50",
              sm: "https://placekitten.com/100/100",
              base: "https://placekitten.com/200/200",
              lg: "https://placekitten.com/300/300",
              xl: "https://placekitten.com/400/400",
              xxl: "https://placekitten.com/500/500"
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
          id: "1",
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
        viewer_has_viewed: true,
        viewer_has_favorited: false,
        unseen_comments_count: 0
      }
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <InlinePostSocialActions 
          post={state.post.value}
          display={state.display.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}