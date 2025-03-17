import React from 'react';
import { useParentState } from '../useIframeState';
import { CommentDiscardDraftDialog } from '../../components/Comments/CommentDiscardDraftDialog';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    enabled: {
      type: "boolean",
      value: true,
      label: "Enable Confirmation Dialog"
    }
  });

  return (
    <CommentDiscardDraftDialog 
      enabled={state.enabled.value}
      onDiscard={() => {
        console.log('Discard action triggered');
      }}
    />
  );
}