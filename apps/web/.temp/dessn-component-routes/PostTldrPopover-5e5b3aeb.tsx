import React from 'react';
import { useParentState } from '../useIframeState';
import { PostTldrPopover } from '../../components/Post/PostTldrPopover';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  }), []);

  const [state, setState] = useParentState({
    postId: {
      type: "string",
      value: "post-123",
      label: "Post ID"
    },
    open: {
      type: "boolean",
      value: true,
      label: "Popover Open"
    }
  });

  return (
    <QueryNormalizerProvider 
      queryClient={queryClient}
      normalizerConfig={{
        normalize: true
      }}
    >
      <ScopeProvider>
        <PostTldrPopover
          postId={state.postId.value}
          open={state.open.value}
          onOpenChange={(open) => setState('open', open)}
        >
          <button>Click to toggle TLDR</button>
        </PostTldrPopover>
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}