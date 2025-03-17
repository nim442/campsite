import React from 'react';
import { useParentState } from '../useIframeState';
import { ComfyCompactPost } from '../../components/CompactPost/ComfyCompactPost';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { Command } from '@campsite/ui';

export default function ComponentPreview() {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  }));

  const [state, setState] = useParentState({
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
    },
    post: {
      type: "object",
      value: {
        id: "1",
        title: "Sample Post Title",
        created_at: new Date().toISOString(),
        published_at: new Date().toISOString(),
        published: true,
        description_html: "<p>Sample description</p>",
        truncated_description_text: "Sample description",
        path: "/post/1",
        comments_count: 5,
        viewer_has_viewed: false,
        viewer_is_author: false,
        viewer_is_organization_member: true,
        viewer_has_subscribed: false,
        viewer_has_favorited: false,
        viewer_can_favorite: true,
        viewer_can_edit: false,
        viewer_can_delete: false,
        viewer_can_resolve: true,
        viewer_can_create_issue: true,
        resolution: null,
        url: "https://example.com/post/1",
        project_pin_id: null,
        follow_ups: [],
        grouped_reactions: [],
        attachments: [],
        member: {
          user: {
            id: "1",
            display_name: "John Doe",
            avatar_url: "https://placekitten.com/100/100",
            username: "johndoe",
            integration: false,
            avatar_urls: {
              xs: "https://placekitten.com/50/50",
              sm: "https://placekitten.com/100/100",
              base: "https://placekitten.com/200/200",
              lg: "https://placekitten.com/300/300",
              xl: "https://placekitten.com/400/400",
              xxl: "https://placekitten.com/500/500"
            }
          }
        },
        project: {
          id: "1",
          name: "Sample Project",
          private: false
        },
        organization: {
          id: "1",
          name: "Sample Org",
          slug: "sample-org",
          avatar_url: "https://placekitten.com/100/100",
          viewer_is_admin: false,
          viewer_can_leave: true,
          avatar_urls: {
            xs: "https://placekitten.com/50/50",
            sm: "https://placekitten.com/100/100",
            base: "https://placekitten.com/200/200",
            lg: "https://placekitten.com/300/300",
            xl: "https://placekitten.com/400/400",
            xxl: "https://placekitten.com/500/500"
          }
        }
      },
      label: "Post Data"
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <QueryNormalizerProvider queryClient={queryClient}>
        <Command shouldFilter={false}>
          <ScopeProvider>
            <ComfyCompactPost
              post={state.post.value}
              hideProject={state.hideProject.value}
              hideReactions={state.hideReactions.value}
              hideAttachments={state.hideAttachments.value}
              hideComments={state.hideComments.value}
            />
          </ScopeProvider>
        </Command>
      </QueryNormalizerProvider>
    </QueryClientProvider>
  );
}