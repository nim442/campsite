import React from 'react';
import { useParentState } from '../useIframeState';
import { InlinePostTitle } from '../../components/InlinePost/InlinePostTitle';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    display: {
      type: "dropdown",
      value: "feed",
      options: ["feed", "feed-compact", "page", "preview"],
      label: "Display Type"
    },
    title: {
      type: "string",
      value: "Example Post Title",
      label: "Post Title"
    },
    isTitleFromDescription: {
      type: "boolean",
      value: false,
      label: "Is Title From Description"
    }
  });

  const mockPost = {
    id: "1",
    title: state.title.value,
    is_title_from_description: state.isTitleFromDescription.value,
    created_at: new Date().toISOString(),
    published_at: new Date().toISOString(),
    published: true,
    last_activity_at: new Date().toISOString(),
    comments_count: 0,
    resolved_comments_count: 0,
    version: 1,
    path: "/",
    channel_name: "general",
    views_count: 0,
    non_member_views_count: 0,
    status: "none",
    visibility: "default",
    description_html: "",
    truncated_description_html: "",
    is_text_content_truncated: false,
    truncated_description_text: "",
    url: "/",
    type_name: "post",
    organization: {
      id: "1",
      avatar_url: "",
      avatar_urls: {
        xs: "",
        sm: "",
        base: "",
        lg: "",
        xl: "",
        xxl: ""
      },
      name: "Organization",
      slug: "org",
      viewer_is_admin: false,
      viewer_can_leave: false
    },
    attachments: [],
    links: [],
    tags: [],
    poll: null,
    feedback_requests: null,
    follow_ups: [],
    member: {
      id: "1",
      role: "member",
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      user: {
        id: "1",
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
        email: "user@example.com",
        username: "user",
        display_name: "User",
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
      id: "1",
      name: "Project",
      accessory: null,
      private: false,
      archived: false,
      message_thread_id: null
    },
    has_parent: false,
    has_iterations: false,
    viewer_is_organization_member: true,
    viewer_is_author: false,
    viewer_has_commented: false,
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
    viewer_can_edit: false,
    viewer_can_delete: false,
    viewer_can_create_issue: false,
    resolution: null,
    latest_comment_preview: null,
    latest_comment_path: null,
    viewer_is_latest_comment_author: false,
    project_pin_id: null,
    resource_mentions: [],
    open_graph_image_url: null
  };

  return (
    <InlinePostTitle 
      post={mockPost} 
      display={state.display.value}
    />
  );
}