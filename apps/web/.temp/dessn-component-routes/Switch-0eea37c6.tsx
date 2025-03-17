import React from 'react';
import { useParentState } from '../useIframeState';
import { Switch } from '../../../../packages/ui/src/Switch/Switch';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    checked: {
      type: "boolean",
      value: false,
      label: "Checked"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading"
    },
    label: {
      type: "string",
      value: "Toggle Switch",
      label: "Label Text"
    },
    labelSide: {
      type: "dropdown",
      value: "left",
      options: ["left", "right"],
      label: "Label Side"
    },
    required: {
      type: "boolean",
      value: false,
      label: "Required"
    },
    value: {
      type: "string",
      value: "switch-value",
      label: "Value"
    },
    size: {
      type: "dropdown",
      value: "base",
      options: ["base", "lg"],
      label: "Size"
    }
  });

  return (
    <Switch
      checked={state.checked.value}
      disabled={state.disabled.value}
      isLoading={state.isLoading.value}
      label={state.label.value}
      labelSide={state.labelSide.value as 'left' | 'right'}
      required={state.required.value}
      value={state.value.value}
      size={state.size.value as 'base' | 'lg'}
      onChange={(isChecked) => setState('checked', isChecked)}
    />
  );
}