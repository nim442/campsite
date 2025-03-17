import React from 'react';
import { useParentState } from '../useIframeState';
import { SelectTrigger } from '../../../../packages/ui/src/Select/Select';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    size: {
      type: "dropdown",
      value: "md",
      options: ["xs", "sm", "md", "lg", "xl"],
      label: "Size"
    },
    variant: {
      type: "dropdown",
      value: "base",
      options: ["base", "primary", "secondary", "ghost", "destructive"],
      label: "Variant"
    },
    leftSlot: {
      type: "string",
      value: "🔍",
      label: "Left Slot"
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name"
    },
    chevron: {
      type: "boolean",
      value: true,
      label: "Show Chevron"
    }
  });

  return (
    <SelectTrigger
      size={state.size.value}
      variant={state.variant.value}
      leftSlot={state.leftSlot.value}
      className={state.className.value}
      chevron={state.chevron.value}
    >
      Select an option
    </SelectTrigger>
  );
}