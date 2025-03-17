import React from 'react';
import { useParentState } from '../useIframeState';
import { RadioGroup } from '../../../../packages/ui/src/Radio/RadioGroup';
import { RadioGroupItem } from '@radix-ui/react-radio-group';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Select an option",
      label: "Label Text"
    },
    defaultValue: {
      type: "string",
      value: "option1",
      label: "Default Selected Value"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  return (
    <RadioGroup 
      label={state.label.value}
      defaultValue={state.defaultValue.value}
      disabled={state.disabled.value}
    >
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option2" id="option2" />
          <label htmlFor="option2">Option 2</label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option3" id="option3" />
          <label htmlFor="option3">Option 3</label>
        </div>
      </div>
    </RadioGroup>
  );
}