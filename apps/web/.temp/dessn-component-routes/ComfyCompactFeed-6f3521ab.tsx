import React from 'react';
import { useParentState } from '../useIframeState';
import { ComfyCompactFeed } from '../../components/Feed/ComfyCompactFeed';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  
  const [state, setState] = useParentState({
    group: {
      type: "dropdown",
      value: "last_activity_at",
      options: ["last_activity_at", "published_at"],
      label: "Group Type"
    },
    hideProject: {
      type: "boolean",
      value: false,
      label: "Hide Project"
    },
    hideReactions: {
      type: "boolean",
      value: false,
      label: "Hide Reactions"
    },
    hideAttachments: {
      type: "boolean",
      value: false,
      label: "Hide Attachments"
    },
    hideComments: {
      type: "boolean",
      value: false,
      label: "Hide Comments"
    }
  });

  const mockGetPosts = {
    data: {
      pages: [
        {
          data: [
            {
              id: "1",
              title: "Sample Post",
              created_at: new Date().toISOString(),
              published_at: new Date().toISOString(),
              last_activity_at: new Date().toISOString(),
              description_html: "<p>Sample description</p>",
              truncated_description_html: "<p>Sample description</p>",
              comments_count: 5,
              url: "#",
              member: {
                id: "1",
                user: {
                  id: "1",
                  avatar_url: "https://placekitten.com/100/100",
                  display_name: "John Doe",
                  avatar_urls: {
                    xs: "https://placekitten.com/50/50",
                    sm: "https://placekitten.com/75/75",
                    base: "https://placekitten.com/100/100",
                    lg: "https://placekitten.com/150/150",
                    xl: "https://placekitten.com/200/200",
                    xxl: "https://placekitten.com/300/300"
                  },
                  email: "john@example.com",
                  username: "johndoe",
                  system: false,
                  integration: false,
                  notifications_paused: false,
                  notification_pause_expires_at: null,
                  timezone: "UTC",
                  logged_in: true,
                  type_name: "User"
                },
                role: "admin",
                created_at: new Date().toISOString(),
                deactivated: false,
                is_organization_member: true,
                status: null
              },
              organization: {
                id: "1",
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
              },
              project: {
                id: "1",
                name: "Sample Project",
                slug: "sample-project",
                color: "#FF0000",
                icon: "📦",
                description: "A sample project",
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
                organization_id: "1",
                archived: false,
                private: false
              },
              attachments: [],
              links: [],
              tags: [],
              grouped_reactions: [],
              preview_commenters: { latest_commenters: [] },
              resource_mentions: [],
              viewer_can_update: true,
              viewer_can_delete: true,
              viewer_has_subscribed: false,
              viewer_subscription_id: null,
              viewer_has_bookmarked: false,
              viewer_bookmark_id: null,
              viewer_reactions: [],
              viewer_is_author: true,
              viewer_is_organization_member: true,
              viewer_can_favorite: true,
              viewer_has_favorited: false,
              viewer_can_edit: true,
              viewer_can_create_issue: true,
              viewer_can_resolve: true,
              project_pin_id: null,
              resolution: null,
              follow_ups: [],
              url: "https://example.com/post/1"
            }
          ]
        }
      ]
    },
    hasNextPage: false,
    isLoading: false,
    isError: false,
    isFetching: false,
    isFetchingNextPage: false,
    fetchNextPage: () => Promise.resolve(),
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <ComfyCompactFeed
          getPosts={mockGetPosts}
          group={state.group.value as "last_activity_at" | "published_at"}
          hideProject={state.hideProject.value}
          hideReactions={state.hideReactions.value}
          hideAttachments={state.hideAttachments.value}
          hideComments={state.hideComments.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}