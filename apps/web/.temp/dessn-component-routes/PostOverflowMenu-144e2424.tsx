import React from 'react';
import { useParentState } from '../useIframeState';
import { PostOverflowMenu } from '../../components/Post/PostOverflowMenu';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  
  const [state] = useParentState({
    type: {
      type: "dropdown",
      value: "dropdown",
      label: "Menu Type",
      options: ["dropdown", "context"]
    },
    align: {
      type: "dropdown",
      value: "start",
      label: "Alignment",
      options: ["start", "end", "center"]
    },
    post: {
      type: "object",
      value: {
        id: "123",
        title: "Sample Post",
        description_html: "<p>Sample description</p>",
        truncated_description_html: "<p>Sample description</p>",
        truncated_description_text: "Sample description",
        is_text_content_truncated: false,
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
        non_member_views_count: 50,
        status: "none",
        visibility: "default",
        url: "https://example.com/post",
        type_name: "post",
        viewer_is_organization_member: true,
        viewer_is_author: true,
        viewer_has_commented: false,
        viewer_feedback_status: "none",
        viewer_has_subscribed: false,
        viewer_has_viewed: true,
        viewer_has_favorited: false,
        viewer_can_resolve: true,
        viewer_can_favorite: true,
        viewer_can_edit: true,
        viewer_can_delete: true,
        viewer_can_create_issue: true,
        unseen_comments_count: 0,
        follow_ups: [],
        attachments: [],
        links: [],
        tags: [],
        grouped_reactions: [],
        organization: {
          id: "org123",
          name: "Sample Org",
          slug: "sample-org",
          avatar_url: "https://example.com/avatar",
          avatar_urls: {
            xs: "",
            sm: "",
            base: "",
            lg: "",
            xl: "",
            xxl: ""
          },
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
        project: {
          id: "project123",
          name: "Sample Project",
          accessory: null,
          private: false,
          archived: false,
          message_thread_id: null
        },
        resource_mentions: [],
        preview_commenters: {
          latest_commenters: []
        }
      },
      label: "Post Data"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <PostOverflowMenu 
          type={state.type.value as 'dropdown' | 'context'}
          align={state.align.value as 'start' | 'end' | 'center'}
          post={state.post.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}