import React from 'react';
import { useParentState } from '../useIframeState';
import { DeletePostDialog } from '../../components/Post/DeletePostDialog';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScopeProvider } from '../../contexts/scope';

const queryClient = new QueryClient();

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    hasIterations: {
      type: "boolean",
      value: true,
      label: "Has Iterations"
    },
    hasParent: {
      type: "boolean",
      value: false,
      label: "Has Parent"
    }
  });

  const mockPost = {
    id: "1",
    title: "Sample Post",
    has_iterations: state.hasIterations.value,
    has_parent: state.hasParent.value,
    viewer_can_delete: true,
    organization: {
      id: "1",
      name: "Test Org",
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
    created_at: new Date().toISOString(),
    published: true,
    published_at: new Date().toISOString(),
    last_activity_at: new Date().toISOString(),
    comments_count: 0,
    resolved_comments_count: 0,
    version: 1,
    path: "/test",
    channel_name: "general",
    views_count: 0,
    non_member_views_count: 0,
    status: "none",
    visibility: "default",
    description_html: "",
    truncated_description_html: "",
    is_text_content_truncated: false,
    truncated_description_text: "",
    url: "",
    type_name: "post",
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
        username: "test",
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
      id: "1",
      name: "Test Project",
      accessory: null,
      private: false,
      archived: false,
      message_thread_id: null
    },
    viewer_is_organization_member: true,
    viewer_is_author: true,
    viewer_has_commented: false,
    preview_commenters: {
      latest_commenters: []
    },
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
    project_pin_id: null,
    resource_mentions: [],
    open_graph_image_url: null,
    thumbnail_url: null,
    unfurled_link: null
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        <DeletePostDialog
          post={mockPost}
          open={state.open.value}
          onOpenChange={(open) => {
            setState(prev => ({
              ...prev,
              open: {
                ...prev.open,
                value: open
              }
            }));
          }}
        />
      </ScopeProvider>
    </QueryClientProvider>
  );
}