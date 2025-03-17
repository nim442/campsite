import React from 'react';
import { useParentState } from '../useIframeState';
import { Popover, PopoverPortal } from '../../../../packages/ui/src/Popover/Popover';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    forceMount: {
      type: "boolean",
      value: false,
      label: "Force Mount"
    },
    container: {
      type: "string",
      value: "body",
      label: "Container"
    }
  });

  return (
    <Popover>
      <PopoverPortal 
        forceMount={state.forceMount.value}
        container={state.container.value}
      />
    </Popover>
  );
}