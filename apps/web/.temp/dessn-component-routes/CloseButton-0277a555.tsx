import React from 'react';
import { useParentState } from '../useIframeState';
import { CloseButton } from '../../../../packages/ui/src/Dialog/Dialog';
import * as Dialog from '@radix-ui/react-dialog';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
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
      <Dialog.Portal>
        <Dialog.Content>
          <CloseButton 
            className={state.className.value}
            asChild={state.asChild.value}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}