import React from 'react';
import { useParentState } from '../useIframeState';
import { CompactPost } from '../../components/CompactPost/CompactPost';
import { ScopeProvider } from '../../contexts/scope';
import { Provider as JotaiProvider } from 'jotai';
import { QueryClient } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { CommandRoot } from '@campsite/ui';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    display: {
      type: "dropdown",
      value: "default",
      options: ["default", "pinned", "search"],
      label: "Display Mode"
    },
    hideProject: {
      type: "boolean",
      value: false,
      label: "Hide Project"
    }
  });

  // Create a new QueryClient instance
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  const mockPost = {
    id: "1",
    title: "Sample Post Title",
    created_at: new Date().toISOString(),
    published_at: new Date().toISOString(),
    published: true,
    last_activity_at: new Date().toISOString(),
    comments_count: 5,
    resolved_comments_count: 2,
    version: 1,
    path: "/post/1",
    latest_comment_path: "/post/1#comment-1",
    latest_comment_preview: "Latest comment preview",
    channel_name: "general",
    views_count: 100,
    non_member_views_count: 50,
    status: "none",
    visibility: "default",
    description_html: "<p>Sample description</p>",
    truncated_description_html: "<p>Sample description</p>",
    is_text_content_truncated: false,
    truncated_description_text: "Sample description",
    url: "/post/1",
    type_name: "post",
    viewer_has_viewed: true,
    viewer_is_author: false,
    unseen_comments_count: 2,
    viewer_can_resolve: true,
    viewer_can_favorite: true,
    viewer_can_edit: true,
    viewer_can_delete: true,
    viewer_can_create_issue: true,
    viewer_has_commented: false,
    viewer_feedback_status: "none",
    viewer_has_subscribed: false,
    viewer_has_favorited: false,
    viewer_is_organization_member: true,
    viewer_is_latest_comment_author: false,
    has_parent: true,
    has_iterations: false,
    resolution: null,
    organization: {
      id: "1",
      name: "Sample Org",
      slug: "sample-org",
      avatar_url: "https://placeholder.com/avatar",
      avatar_urls: {
        xs: "https://placeholder.com/xs",
        sm: "https://placeholder.com/sm",
        base: "https://placeholder.com/base",
        lg: "https://placeholder.com/lg",
        xl: "https://placeholder.com/xl",
        xxl: "https://placeholder.com/xxl"
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
      status: null,
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
        username: "sampleuser",
        display_name: "Sample User",
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
      id: "1",
      name: "Sample Project",
      accessory: null,
      private: false,
      archived: false,
      message_thread_id: null
    },
    attachments: [],
    links: [],
    tags: [],
    poll: null,
    feedback_requests: [],
    follow_ups: []
  };

  return (
    <JotaiProvider>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <CommandRoot>
            <CompactPost 
              post={mockPost} 
              display={state.display.value as 'default' | 'pinned' | 'search'} 
              hideProject={state.hideProject.value}
            />
          </CommandRoot>
        </ScopeProvider>
      </QueryNormalizerProvider>
    </JotaiProvider>
  );
}