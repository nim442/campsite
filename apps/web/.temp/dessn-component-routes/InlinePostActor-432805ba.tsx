import React from 'react';
import { useParentState } from '../useIframeState';
import { InlinePostActor } from '../../components/InlinePost/InlinePostActor';
import { ScopeProvider } from '../../contexts/scope';

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
    id: "1",
    title: "Sample Post",
    created_at: new Date().toISOString(),
    published_at: new Date().toISOString(),
    published: true,
    last_activity_at: new Date().toISOString(),
    comments_count: 0,
    resolved_comments_count: 0,
    version: 1,
    path: "/sample",
    channel_name: "general",
    views_count: 0,
    non_member_views_count: 0,
    status: "none",
    visibility: "default",
    description_html: "<p>Sample description</p>",
    truncated_description_html: "<p>Sample description</p>",
    is_text_content_truncated: false,
    truncated_description_text: "Sample description",
    url: "/sample",
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
    viewer_feedback_status: "none",
    viewer_has_subscribed: false,
    viewer_has_viewed: false,
    viewer_has_favorited: false,
    organization: {
      id: "1",
      name: "Sample Org",
      slug: "sample-org",
      avatar_url: "https://placekitten.com/100/100",
      avatar_urls: {
        xs: "https://placekitten.com/50/50",
        sm: "https://placekitten.com/100/100",
        base: "https://placekitten.com/200/200",
        lg: "https://placekitten.com/300/300",
        xl: "https://placekitten.com/400/400",
        xxl: "https://placekitten.com/500/500"
      },
      viewer_is_admin: true,
      viewer_can_leave: true
    },
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
    attachments: [],
    links: [],
    tags: [],
    poll: null,
    feedback_requests: null,
    follow_ups: [],
    grouped_reactions: [],
    preview_commenters: { latest_commenters: [] },
    resource_mentions: [],
    project: {
      id: "1",
      name: "Sample Project",
      slug: "sample-project",
      description: "A sample project",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      color: "#000000",
      icon: "📁",
      viewer_role: "admin",
      type_name: "project"
    }
  };

  return (
    <ScopeProvider>
      <div className="p-4">
        <InlinePostActor 
          post={mockPost}
          display={state.display.value}
        />
      </div>
    </ScopeProvider>
  );
}