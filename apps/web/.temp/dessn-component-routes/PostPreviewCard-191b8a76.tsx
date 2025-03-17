import React from 'react';
import { useParentState } from '../useIframeState';
import { PostPreviewCard } from '../../components/PreviewCards/PostPreviewCard';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    postId: {
      type: "string",
      value: "post-123",
      label: "Post ID"
    },
    className: {
      type: "string",
      value: "",
      label: "CSS Class Name"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <PostPreviewCard 
          postId={state.postId.value}
          className={state.className.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}