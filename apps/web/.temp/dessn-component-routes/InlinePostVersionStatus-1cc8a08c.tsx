import React from 'react';
import { useParentState } from '../useIframeState';
import { InlinePostVersionStatus } from '../../components/InlinePost/InlinePostVersionStatus';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    display: {
      type: "dropdown",
      value: "feed",
      options: ["feed", "feed-compact", "page", "preview"],
      label: "Display Type"
    }
  });

  const mockPost = {
    id: "123",
    version: 2,
    has_iterations: true,
    has_parent: false,
    title: "Sample Post",
    is_title_from_description: false,
    created_at: "2023-01-01T00:00:00Z",
    published_at: null,
    published: true,
    last_activity_at: "2023-01-01T00:00:00Z",
    comments_count: 0,
    resolved_comments_count: 0,
    path: "/sample",
    channel_name: "general",
    views_count: 0,
    non_member_views_count: 0,
    status: "none",
    visibility: "default",
    open_graph_image_url: null,
    thumbnail_url: null,
    unfurled_link: null,
    description_html: "",
    truncated_description_html: "",
    is_text_content_truncated: false,
    truncated_description_text: "",
    url: "",
    type_name: "post",
    organization: {
      id: "org1",
      avatar_url: "",
      avatar_urls: {
        xs: "",
        sm: "",
        base: "",
        lg: "",
        xl: "",
        xxl: ""
      },
      name: "Test Org",
      slug: "test-org",
      viewer_is_admin: false,
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
      role: "member",
      created_at: "2023-01-01T00:00:00Z",
      deactivated: false,
      is_organization_member: true,
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
        email: "test@test.com",
        username: "testuser",
        display_name: "Test User",
        system: false,
        integration: false,
        notifications_paused: false,
        notification_pause_expires_at: null,
        timezone: null,
        logged_in: true,
        type_name: "user"
      },
      status: null
    },
    resolved_comment: null,
    grouped_reactions: [],
    project: {
      id: "project1",
      name: "Test Project",
      accessory: null,
      private: false,
      archived: false,
      message_thread_id: null
    },
    preview_commenters: {
      latest_commenters: []
    },
    viewer_feedback_status: "none",
    viewer_has_subscribed: false,
    viewer_has_viewed: false,
    viewer_has_favorited: false,
    unseen_comments_count: 0,
    viewer_can_resolve: false,
    viewer_can_favorite: true,
    viewer_can_edit: true,
    viewer_can_delete: true,
    viewer_can_create_issue: false,
    resolution: null,
    latest_comment_preview: null,
    latest_comment_path: null,
    viewer_is_latest_comment_author: false,
    project_pin_id: null,
    resource_mentions: [],
    viewer_is_organization_member: true,
    viewer_is_author: true,
    viewer_has_commented: false
  };

  return (
    <ScopeProvider initialScope="test-org">
      <div className="p-4">
        <InlinePostVersionStatus 
          post={mockPost}
          display={state.display.value}
        />
      </div>
    </ScopeProvider>
  );
}