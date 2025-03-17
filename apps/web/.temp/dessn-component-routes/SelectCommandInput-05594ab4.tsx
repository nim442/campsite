import React from 'react';
import { useParentState } from '../useIframeState';
import { SelectCommandContainer, SelectCommandInput } from '../../../../packages/ui/src/Select/SelectCommand';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    placeholder: {
      type: "string",
      value: "Search...",
      label: "Placeholder"
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  return (
    <SelectCommandContainer>
      <SelectCommandInput
        placeholder={state.placeholder.value}
        className={state.className.value}
        disabled={state.disabled.value}
        onChange={(e) => console.log('Input changed:', e.target.value)}
      />
    </SelectCommandContainer>
  );
}