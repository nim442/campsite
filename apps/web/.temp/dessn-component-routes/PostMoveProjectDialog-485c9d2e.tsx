import React from 'react';
import { useParentState } from '../useIframeState';
import { PostMoveProjectDialog } from '../../components/Post/PostMoveProjectDialog';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    }
  });

  const queryClient = new QueryClient();

  const mockPost = {
    id: "1",
    title: "Sample Post",
    project: {
      id: "project-1",
      name: "Sample Project",
      accessory: "📝",
      private: false,
      archived: false,
      message_thread_id: null
    },
    project_pin_id: null,
    organization: {
      id: "org-1",
      name: "Sample Org",
      slug: "sample-org",
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
      id: "member-1",
      role: "admin",
      created_at: "2024-01-01",
      deactivated: false,
      is_organization_member: true,
      user: {
        id: "user-1",
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
        display_name: "Test User",
        system: false,
        integration: false,
        notifications_paused: false,
        notification_pause_expires_at: null,
        timezone: null,
        logged_in: true,
        type_name: "User"
      },
      status: null
    },
    created_at: "2024-01-01",
    published_at: null,
    published: true,
    last_activity_at: "2024-01-01",
    comments_count: 0,
    resolved_comments_count: 0,
    version: 1,
    path: "/post/1",
    channel_name: "general",
    views_count: 0,
    non_member_views_count: 0,
    status: "none",
    visibility: "default",
    open_graph_image_url: null,
    thumbnail_url: null,
    unfurled_link: null,
    description_html: "<p>Sample description</p>",
    truncated_description_html: "<p>Sample description</p>",
    is_text_content_truncated: false,
    truncated_description_text: "Sample description",
    url: "/post/1",
    type_name: "Post",
    attachments: [],
    links: [],
    tags: [],
    poll: null,
    feedback_requests: null,
    follow_ups: [],
    resolved_comment: null,
    grouped_reactions: [],
    has_parent: false,
    has_iterations: false,
    viewer_is_organization_member: true,
    viewer_is_author: true,
    viewer_has_commented: false,
    preview_commenters: { latest_commenters: [] },
    viewer_feedback_status: "none",
    viewer_has_subscribed: false,
    viewer_has_viewed: false,
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
    resource_mentions: []
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <PostMoveProjectDialog 
          post={mockPost}
          open={state.open.value}
          onOpenChange={(open) => setState('open', open)}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}