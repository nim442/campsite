import React from 'react';
import { useParentState } from '../useIframeState';
import { CompactFeed } from '../../components/Feed/CompactFeed';
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
    }
  });

  // Mock useInfiniteQuery return value
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
              truncated_description_text: "Sample description",
              comments_count: 0,
              unseen_comments_count: 0,
              latest_comment_preview: null,
              latest_comment_path: null,
              path: "/sample-post",
              project: {
                id: "proj-1",
                name: "Sample Project",
                private: false,
                accessory: "📝"
              },
              member: {
                id: "1",
                user: {
                  id: "1",
                  display_name: "John Doe",
                  username: "johndoe",
                  avatar_url: "https://placeholder.com/150",
                  avatar_urls: {
                    xs: "https://placeholder.com/32",
                    sm: "https://placeholder.com/64",
                    base: "https://placeholder.com/96",
                    lg: "https://placeholder.com/128",
                    xl: "https://placeholder.com/156",
                    xxl: "https://placeholder.com/312"
                  },
                  integration: false
                }
              },
              organization: {
                id: "1",
                name: "Sample Org",
                avatar_url: "https://placeholder.com/150",
                avatar_urls: {
                  xs: "https://placeholder.com/32",
                  sm: "https://placeholder.com/64",
                  base: "https://placeholder.com/96",
                  lg: "https://placeholder.com/128",
                  xl: "https://placeholder.com/156",
                  xxl: "https://placeholder.com/312"
                }
              },
              status: "published",
              labels: [],
              reactions: [],
              type: "post",
              url: "/sample-post",
              can_edit: true,
              can_delete: true,
              viewer_has_viewed: true,
              viewer_is_author: false,
              viewer_is_latest_comment_author: false,
              viewer_is_organization_member: true,
              viewer_feedback_status: null,
              viewer_has_commented: false,
              has_parent: false,
              version: 1,
              resolution: null,
              follow_ups: []
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
    fetchNextPage: () => Promise.resolve()
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient} normalizerConfig={{}}>
      <ScopeProvider>
        <CompactFeed
          getPosts={mockGetPosts}
          group={state.group.value as "last_activity_at" | "published_at"}
          hideProject={state.hideProject.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}