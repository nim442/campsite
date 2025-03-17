import React from 'react';
import { useParentState } from '../useIframeState';
import { PostInlineSummary } from '../../components/Post/TLDR';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient, useQueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = useQueryClient();
  const [state, setState] = useParentState({
    postId: {
      type: "string",
      value: "post123",
      label: "Post ID"
    },
    source: {
      type: "string",
      value: "preview",
      label: "Source"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <PostInlineSummary 
          postId={state.postId.value} 
          source={state.source.value} 
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}