import React from 'react';
import { useParentState } from '../useIframeState';
import { PostComposerHeaderActions } from '../../components/PostComposer/PostComposerHeaderActions';
import { Provider } from 'jotai';
import { Dialog } from '@campsite/ui/src/Dialog';

export default function ComponentPreview() {
  const [state] = useParentState({
    onDeleteDraft: {
      type: "object",
      value: () => {
        console.log("Draft deleted");
      },
      label: "Delete Draft Handler"
    }
  });

  return (
    <Provider>
      <Dialog.Root open={true} onOpenChange={() => {}}>
        <PostComposerHeaderActions 
          onDeleteDraft={state.onDeleteDraft.value}
        />
      </Dialog.Root>
    </Provider>
  );
}