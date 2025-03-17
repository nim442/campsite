import React from 'react';
import { useParentState } from '../useIframeState';
import { HighlightedCommandItem } from '../../../../packages/ui/src/Command/HighlightedCommandItem';
import { Command } from '../../../../packages/ui/src/Command';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name"
    },
    value: {
      type: "string",
      value: "Sample Item",
      label: "Content"
    }
  });

  return (
    <Command>
      <HighlightedCommandItem 
        className={state.className.value}
        value={state.value.value}
      >
        {state.value.value}
      </HighlightedCommandItem>
    </Command>
  );
}