import React from 'react';
import { useParentState } from '../useIframeState';
import { InlinePostPoll } from '../../components/InlinePost/InlinePostPoll';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  const [state] = useParentState({
    post: {
      type: "object",
      value: {
        id: "123",
        title: "Sample Post",
        viewer_is_author: true,
        viewer_is_organization_member: true,
        poll: {
          id: "poll1",
          description: "Sample Poll",
          votes_count: 10,
          viewer_voted: false,
          options: [
            {
              id: "opt1",
              description: "Option 1",
              votes_count: 5,
              votes_percent: 50,
              viewer_voted: false
            },
            {
              id: "opt2",
              description: "Option 2",
              votes_count: 5,
              votes_percent: 50,
              viewer_voted: false
            }
          ]
        },
        organization: {
          id: "org1",
          name: "Test Org",
          slug: "test-org",
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
        }
      },
      label: "Post Data"
    },
    editable: {
      type: "boolean",
      value: true,
      label: "Editable"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <InlinePostPoll 
          post={state.post.value}
          editable={state.editable.value}
          onEdit={() => console.log('Edit clicked')}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}