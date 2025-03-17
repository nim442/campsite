import React from 'react';
import { useParentState } from '../useIframeState';
import { Checkbox } from '../../../../packages/ui/src/Checkbox/Checkbox';
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
    id: {
      type: "string",
      value: "checkbox-1",
      label: "ID"
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    }
  });

  return (
    <Checkbox
      checked={state.checked.value}
      onChange={(checked) => setState("checked", checked)}
      disabled={state.disabled.value}
      id={state.id.value}
      className={state.className.value}
    />
  );
}