import React from 'react';
import { useParentState } from '../useIframeState';
import { Dialog } from '../../../../packages/ui/src/Dialog/Dialog';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-title-class",
      label: "Class Name"
    },
    asChild: {
      type: "boolean",
      value: false,
      label: "As Child"
    }
  });

  const [open, setOpen] = React.useState(true);

  return (
    <Dialog.Root 
      open={open} 
      onOpenChange={setOpen}
    >
      <Dialog.Header>
        <Dialog.Title 
          className={state.className.value}
          asChild={state.asChild.value}
        >
          Dialog Title Example
        </Dialog.Title>
      </Dialog.Header>
      <Dialog.Content>
        Dialog content goes here
      </Dialog.Content>
    </Dialog.Root>
  );
}