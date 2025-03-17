import React from 'react';
import { useParentState } from '../useIframeState';
import { LinearCommentIssueComposerDialog } from '../../components/LinearIssueComposerDialog';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    commentId: {
      type: "string",
      value: "comment-123",
      label: "Comment ID"
    },
    defaultValues: {
      type: "object",
      value: {
        title: "Sample Issue",
        description: "This is a sample issue description"
      },
      label: "Default Values"
    }
  });

  return (
    <ScopeProvider>
      <LinearCommentIssueComposerDialog
        open={state.open.value}
        onOpenChange={(open) => setState("open", open)}
        commentId={state.commentId.value}
        defaultValues={state.defaultValues.value}
      />
    </ScopeProvider>
  );
}