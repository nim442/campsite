import React from 'react';
import { useParentState } from '../useIframeState';
import { PostView } from '../../components/Post/PostView';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { useQueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = useQueryClient();
  const [state, setState] = useParentState({
    postId: {
      type: "string",
      value: "example-post-123",
      label: "Post ID"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <PostView postId={state.postId.value} />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}