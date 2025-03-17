import React from 'react';
import { useParentState } from '../useIframeState';
import { ToggleGroup } from '../../../../packages/ui/src/ToggleGroup/ToggleGroup';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    ariaLabel: {
      type: "string",
      value: "Toggle Group Example",
      label: "Aria Label"
    },
    value: {
      type: "string",
      value: "option1",
      label: "Selected Value"
    },
    items: {
      type: "object",
      value: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" }
      ],
      label: "Toggle Items"
    }
  });

  return (
    <ToggleGroup
      ariaLabel={state.ariaLabel.value}
      value={state.value.value}
      items={state.items.value}
      onValueChange={(newValue) => setState('value', newValue)}
    />
  );
}