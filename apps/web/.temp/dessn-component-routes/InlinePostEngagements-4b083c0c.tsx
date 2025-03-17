import React from 'react';
import { useParentState } from '../useIframeState';
import { InlinePostEngagements } from '../../components/InlinePost/InlinePostEngagements';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
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
        views_count: 10,
        non_member_views_count: 2,
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
          avatar_url: "https://placeholder.com/avatar",
          avatar_urls: {
            xs: "https://placeholder.com/xs",
            sm: "https://placeholder.com/sm",
            base: "https://placeholder.com/base",
            lg: "https://placeholder.com/lg",
            xl: "https://placeholder.com/xl",
            xxl: "https://placeholder.com/xxl"
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
          id: "1",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "1",
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
            username: "user",
            display_name: "User",
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
        preview_commenters: {
          latest_commenters: [
            {
              user: {
                id: "2",
                avatar_url: "https://placeholder.com/avatar2",
                avatar_urls: {
                  xs: "https://placeholder.com/xs",
                  sm: "https://placeholder.com/sm",
                  base: "https://placeholder.com/base",
                  lg: "https://placeholder.com/lg",
                  xl: "https://placeholder.com/xl",
                  xxl: "https://placeholder.com/xxl"
                },
                display_name: "Commenter 1",
                username: "commenter1",
                type_name: "user"
              }
            }
          ]
        },
        grouped_reactions: [
          {
            reaction: "👍",
            reactions_count: 2
          }
        ],
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
        viewer_feedback_status: "none",
        viewer_has_subscribed: false,
        viewer_has_viewed: true,
        viewer_has_favorited: false,
        unseen_comments_count: 2,
        viewer_can_resolve: true,
        viewer_can_favorite: true,
        viewer_can_edit: true,
        viewer_can_delete: true,
        viewer_can_create_issue: true,
        resolution: null,
        latest_comment_preview: null
      }
    }
  });

  return (
    <ScopeProvider>
      <InlinePostEngagements 
        display={state.display.value} 
        post={state.post.value}
      />
    </ScopeProvider>
  );
}