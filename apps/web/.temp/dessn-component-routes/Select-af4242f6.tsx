import React from 'react';
import { useParentState } from '../useIframeState';
import { Select } from '../../../../packages/ui/src/Select/Select';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: "string",
      value: "option1",
      label: "Selected Value"
    },
    size: {
      type: "dropdown",
      value: "md",
      options: ["xs", "sm", "md", "lg", "xl", "base"],
      label: "Size"
    },
    variant: {
      type: "dropdown",
      value: "base",
      options: ["base", "primary", "secondary", "ghost", "destructive"],
      label: "Variant"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    typeAhead: {
      type: "boolean",
      value: true,
      label: "Type Ahead"
    },
    placeholder: {
      type: "string",
      value: "Select an option...",
      label: "Placeholder"
    },
    showCheckmark: {
      type: "boolean",
      value: true,
      label: "Show Checkmark"
    },
    showChevron: {
      type: "boolean",
      value: true,
      label: "Show Chevron"
    },
    side: {
      type: "dropdown",
      value: "bottom",
      options: ["top", "bottom", "left", "right"],
      label: "Side"
    },
    align: {
      type: "dropdown",
      value: "start",
      options: ["start", "center", "end"],
      label: "Align"
    },
    dark: {
      type: "boolean",
      value: false,
      label: "Dark Mode"
    }
  });

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
    { label: "Option 4", value: "option4" }
  ];

  return (
    <Select
      value={state.value.value}
      onChange={(value) => setState("value", value)}
      options={options}
      size={state.size.value}
      variant={state.variant.value}
      disabled={state.disabled.value}
      typeAhead={state.typeAhead.value}
      placeholder={state.placeholder.value}
      showCheckmark={state.showCheckmark.value}
      showChevron={state.showChevron.value}
      side={state.side.value}
      align={state.align.value}
      dark={state.dark.value}
    />
  );
}