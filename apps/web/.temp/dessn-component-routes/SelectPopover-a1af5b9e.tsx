import React from 'react';
import { useParentState } from '../useIframeState';
import { SelectPopover } from '../../../../packages/ui/src/Select/SelectPopover';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: false,
      label: "Open"
    },
    value: {
      type: "string",
      value: "option1",
      label: "Selected Value"
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
    width: {
      type: "number",
      value: 250,
      label: "Width"
    },
    dark: {
      type: "boolean",
      value: false,
      label: "Dark Mode"
    },
    loading: {
      type: "boolean",
      value: false,
      label: "Loading"
    },
    typeAhead: {
      type: "boolean",
      value: true,
      label: "Type Ahead"
    }
  });

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
    { label: "Option 4", value: "option4" }
  ];

  return (
    <SelectPopover
      open={state.open.value}
      setOpen={(open) => setState("open", open)}
      options={options}
      value={state.value.value}
      onChange={(value) => setState("value", value)}
      side={state.side.value as 'top' | 'bottom' | 'left' | 'right'}
      align={state.align.value as 'start' | 'center' | 'end'}
      width={state.width.value}
      dark={state.dark.value}
      loading={state.loading.value}
      typeAhead={state.typeAhead.value}
    >
      <button>Click to open select</button>
    </SelectPopover>
  );
}