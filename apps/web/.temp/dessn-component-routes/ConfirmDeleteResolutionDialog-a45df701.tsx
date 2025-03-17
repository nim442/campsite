import React from 'react';
import { useParentState } from '../useIframeState';
import { ConfirmDeleteResolutionDialog } from '../../components/InlinePost/ConfirmDeleteResolutionDialog';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    postId: {
      type: "string",
      value: "post-123",
      label: "Post ID"
    }
  });

  return (
    <ScopeProvider>
      <ConfirmDeleteResolutionDialog
        open={state.open.value}
        onOpenChange={(open) => setState("open", open)}
        postId={state.postId.value}
      />
    </ScopeProvider>
  );
}