import React from 'react';
import { useParentState } from '../useIframeState';
import { DraftOverflowMenu } from '../../components/Drafts/DraftOverflowMenu';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    type: {
      type: "dropdown",
      value: "dropdown",
      options: ["dropdown", "context"],
      label: "Menu Type"
    },
    draftPost: {
      type: "object",
      value: {
        id: "123",
        title: "Sample Draft Post",
        created_at: new Date().toISOString(),
        published: false,
        last_activity_at: new Date().toISOString(),
        comments_count: 0,
        resolved_comments_count: 0,
        version: 1,
        path: "/drafts/123",
        channel_name: "general",
        views_count: 0,
        non_member_views_count: 0,
        status: "none",
        visibility: "default",
        description_html: "<p>Sample description</p>",
        truncated_description_html: "<p>Sample description</p>",
        is_text_content_truncated: false,
        truncated_description_text: "Sample description",
        url: "/drafts/123",
        type_name: "post",
        attachments: [],
        links: [],
        tags: [],
        feedback_requests: [],
        follow_ups: [],
        grouped_reactions: [],
        viewer_feedback_status: "none",
        viewer_is_organization_member: true,
        viewer_is_author: true,
        viewer_has_commented: false,
        viewer_has_subscribed: false,
        viewer_has_viewed: false,
        viewer_has_favorited: false,
        unseen_comments_count: 0,
        viewer_can_resolve: true,
        viewer_can_favorite: true,
        viewer_can_edit: true,
        viewer_can_delete: true,
        viewer_can_create_issue: true,
        organization: {
          id: "org123",
          name: "Test Organization",
          slug: "test-org",
          avatar_url: "",
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
          status: null,
          user: {
            id: "user123",
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
            email: "test@example.com",
            username: "testuser",
            display_name: "Test User",
            system: false,
            integration: false,
            notifications_paused: false,
            notification_pause_expires_at: null,
            timezone: "UTC",
            logged_in: true,
            type_name: "user"
          }
        },
        project: {
          id: "project123",
          name: "Test Project",
          accessory: null,
          private: false,
          archived: false,
          message_thread_id: null
        },
        has_parent: false,
        has_iterations: false,
        preview_commenters: {
          latest_commenters: []
        },
        poll: null,
        resolved_comment: null,
        resolution: null,
        latest_comment_preview: null,
        latest_comment_path: null,
        viewer_is_latest_comment_author: false,
        project_pin_id: null,
        resource_mentions: []
      },
      label: "Draft Post Data"
    }
  });

  return (
    <ScopeProvider>
      <DraftOverflowMenu 
        type={state.type.value as 'dropdown' | 'context'} 
        draftPost={state.draftPost.value}
      >
        {state.type.value === 'context' && (
          <div>Right click me to open context menu</div>
        )}
      </DraftOverflowMenu>
    </ScopeProvider>
  );
}