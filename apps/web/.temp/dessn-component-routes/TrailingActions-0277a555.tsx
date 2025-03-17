import React from 'react';
import { useParentState } from '../useIframeState';
import { TrailingActions } from '../../../../packages/ui/src/Dialog/Dialog';
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
    <TrailingActions 
      className={state.className.value}
      asChild={state.asChild.value}
    >
      <button>Action 1</button>
      <button>Action 2</button>
    </TrailingActions>
  );
}