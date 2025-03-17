import React from 'react';
import { useParentState } from '../useIframeState';
import { Dialog } from '../../../../packages/ui/src/Dialog/Dialog';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "text-secondary",
      label: "Class Name"
    },
    asChild: {
      type: "boolean",
      value: false,
      label: "As Child"
    }
  });

  return (
    <Dialog.Root open={true} onOpenChange={() => {}}>
      <Dialog.Content>
        <Dialog.Description 
          className={state.className.value}
          asChild={state.asChild.value}
        >
          This is a sample description text
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Root>
  );
}