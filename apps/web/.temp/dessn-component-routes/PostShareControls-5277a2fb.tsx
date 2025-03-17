import React from 'react';
import { useParentState } from '../useIframeState';
import { PostShareControls } from '../../components/Post/PostShareControls';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  
  const [state, setState] = useParentState({
    isOpen: {
      type: "boolean",
      value: true,
      label: "Is Open"
    },
    source: {
      type: "string",
      value: "preview",
      label: "Source"
    },
    post: {
      type: "object",
      value: {
        id: "1",
        title: "Sample Post",
        visibility: "default",
        url: "https://example.com/post",
        project: {
          id: "proj1",
          name: "Sample Project",
          private: false,
          accessory: "📝",
          archived: false,
          message_thread_id: null
        },
        viewer_is_author: true,
        organization: {
          id: "org1",
          name: "Sample Organization",
          avatar_url: "https://placekitten.com/100/100",
          avatar_urls: {
            xs: "https://placekitten.com/50/50",
            sm: "https://placekitten.com/100/100",
            base: "https://placekitten.com/200/200",
            lg: "https://placekitten.com/300/300",
            xl: "https://placekitten.com/400/400",
            xxl: "https://placekitten.com/500/500"
          },
          slug: "sample-org",
          viewer_is_admin: true,
          viewer_can_leave: true
        }
      },
      label: "Post Data"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <PostShareControls 
          isOpen={state.isOpen.value}
          source={state.source.value}
          post={state.post.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}