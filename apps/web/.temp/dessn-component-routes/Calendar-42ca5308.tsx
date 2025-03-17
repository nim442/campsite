import React from 'react';
import { useParentState } from '../useIframeState';
import { Calendar } from '../../../../packages/ui/src/Calendar/Calendar';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    mode: {
      type: "dropdown",
      value: "single",
      options: ["single", "multiple", "range"],
      label: "Mode"
    },
    selected: {
      type: "string",
      value: new Date().toISOString(),
      label: "Selected Date"
    },
    showOutsideDays: {
      type: "boolean",
      value: true,
      label: "Show Outside Days"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  return (
    <Calendar
      mode={state.mode.value as "single" | "multiple" | "range"}
      selected={new Date(state.selected.value)}
      showOutsideDays={state.showOutsideDays.value}
      disabled={state.disabled.value}
      className="w-full"
    />
  );
}