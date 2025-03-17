import React from 'react';
import { useParentState } from '../useIframeState';
import { InlinePostByline } from '../../components/InlinePost/InlinePostByline';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state, setState] = useParentState({
    display: {
      type: "dropdown",
      value: "feed",
      options: ["feed", "feed-compact", "page", "preview"],
      label: "Display Type"
    },
    timestamp: {
      type: "boolean",
      value: true,
      label: "Show Timestamp"
    },
    overflowMenu: {
      type: "boolean",
      value: true,
      label: "Show Overflow Menu"
    },
    hideProject: {
      type: "boolean",
      value: false,
      label: "Hide Project"
    }
  });

  const mockPost = {
    id: "1",
    title: "Sample Post",
    created_at: new Date().toISOString(),
    published_at: new Date().toISOString(),
    published: true,
    viewer_is_organization_member: true,
    viewer_has_favorited: false,
    viewer_has_subscribed: false,
    viewer_is_author: true,
    viewer_can_favorite: true,
    viewer_can_edit: true,
    viewer_can_delete: true,
    viewer_can_resolve: true,
    viewer_can_create_issue: true,
    url: "https://example.com/post/1",
    follow_ups: [],
    resolution: null,
    project_pin_id: null,
    project: {
      id: "proj-1",
      name: "Sample Project",
      accessory: "📱",
      private: false,
    },
    member: {
      role: "member",
      user: {
        display_name: "John Doe",
        username: "johndoe",
        integration: false,
        avatar_url: "https://placekitten.com/100/100",
        avatar_urls: {
          xs: "https://placekitten.com/50/50",
          sm: "https://placekitten.com/75/75",
          base: "https://placekitten.com/100/100",
          lg: "https://placekitten.com/150/150",
          xl: "https://placekitten.com/200/200",
          xxl: "https://placekitten.com/300/300"
        }
      }
    },
    organization: {
      id: "org-1",
      name: "Sample Org",
      slug: "sample-org",
      avatar_url: "https://placekitten.com/100/100",
      avatar_urls: {
        xs: "https://placekitten.com/50/50",
        sm: "https://placekitten.com/75/75",
        base: "https://placekitten.com/100/100",
        lg: "https://placekitten.com/150/150",
        xl: "https://placekitten.com/200/200",
        xxl: "https://placekitten.com/300/300"
      },
      viewer_is_admin: true,
      viewer_can_leave: true
    }
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider value={{ scope: "sample-scope" }}>
        <InlinePostByline
          post={mockPost}
          display={state.display.value as "feed" | "feed-compact" | "page" | "preview"}
          timestamp={state.timestamp.value}
          overflowMenu={state.overflowMenu.value}
          hideProject={state.hideProject.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}