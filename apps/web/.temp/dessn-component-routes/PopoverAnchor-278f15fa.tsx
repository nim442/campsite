import React from 'react';
import { useParentState } from '../useIframeState';
import { Popover, PopoverAnchor } from '../../../../packages/ui/src/Popover/Popover';

export default function ComponentPreview() {
  const [state] = useParentState({
    asChild: {
      type: "boolean",
      value: false,
      label: "As Child"
    }
  });

  return (
    <Popover>
      <PopoverAnchor asChild={state.asChild.value}>
        <div>Anchor Content</div>
      </PopoverAnchor>
    </Popover>
  );
}