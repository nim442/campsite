import React from 'react';
import { useParentState } from '../useIframeState';
import { RadioGroupItem } from '../../../../packages/ui/src/Radio/RadioGroupItem';
import * as RadioGroup from '@radix-ui/react-radio-group';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: "string",
      value: "option1",
      label: "Value"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    id: {
      type: "string",
      value: "radio1",
      label: "ID"
    }
  });

  return (
    <RadioGroup.Root defaultValue={state.value.value}>
      <RadioGroupItem 
        value={state.value.value}
        disabled={state.disabled.value}
        id={state.id.value}
      >
        Radio Option Label
      </RadioGroupItem>
    </RadioGroup.Root>
  );
}