import React from 'react';
import { useParentState } from '../useIframeState';
import { PostCommentComposer } from '../../components/Comments/PostCommentComposer';
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
    open: {
      type: "boolean",
      value: true,
      label: "Open"
    },
    display: {
      type: "dropdown",
      value: "block",
      options: ["block", "inline", "inline-refresh", "inline-edit"],
      label: "Display Mode"
    },
    maxHeight: {
      type: "string",
      value: "300px",
      label: "Max Height"
    },
    placeholder: {
      type: "string",
      value: "Write a comment...",
      label: "Placeholder"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    autoFocus: {
      type: "boolean",
      value: true,
      label: "Auto Focus"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <PostCommentComposer
          postId={state.postId.value}
          open={state.open.value}
          display={state.display.value as "block" | "inline" | "inline-refresh" | "inline-edit"}
          maxHeight={state.maxHeight.value}
          placeholder={state.placeholder.value}
          disabled={state.disabled.value}
          autoFocus={state.autoFocus.value}
          onCreated={(comment) => console.log('Comment created:', comment)}
          onSubmitting={() => console.log('Submitting comment')}
          onOptimisticCreate={() => console.log('Optimistic create')}
          onEmptyChange={(isEmpty) => console.log('Empty changed:', isEmpty)}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}