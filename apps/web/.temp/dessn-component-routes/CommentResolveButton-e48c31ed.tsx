import React from 'react';
import { useParentState } from '../useIframeState';
import { CommentResolveButton } from '../../components/Comments/CommentResolveButton';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state] = useParentState({
    subjectId: {
      type: "string",
      value: "123",
      label: "Subject ID"
    },
    subjectType: {
      type: "dropdown",
      value: "post",
      options: ["post", "note"],
      label: "Subject Type"
    },
    isResolved: {
      type: "boolean",
      value: false,
      label: "Is Resolved"
    },
    canResolve: {
      type: "boolean",
      value: true,
      label: "Can Resolve"
    }
  });

  const mockComment = {
    id: "comment-123",
    viewer_can_resolve: state.canResolve.value,
    resolved_at: state.isResolved.value ? new Date().toISOString() : null,
    resolved_by: state.isResolved.value ? {
      user: {
        display_name: "John Doe"
      }
    } : null
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient} normalizerConfig={{ normalize: true }}>
      <ScopeProvider>
        <CommentResolveButton
          subjectId={state.subjectId.value}
          subjectType={state.subjectType.value as 'post' | 'note'}
          comment={mockComment as any}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}