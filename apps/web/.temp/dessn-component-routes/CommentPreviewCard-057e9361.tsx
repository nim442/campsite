import React from 'react';
import { useParentState } from '../useIframeState';
import { CommentPreviewCard } from '../../components/PreviewCards/CommentPreviewCard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    commentId: {
      type: "string",
      value: "comment-123",
      label: "Comment ID"
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    }
  });

  // Mock Next.js router for ScopeProvider
  const mockRouter = {
    query: { org: 'test-org' },
    isReady: true,
    asPath: '/test-org/comments',
  };

  return (
    <QueryClientProvider client={queryClient}>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <CommentPreviewCard 
            commentId={state.commentId.value}
            className={state.className.value}
          />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </QueryClientProvider>
  );
}