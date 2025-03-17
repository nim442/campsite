import React from 'react';
import { useParentState } from '../useIframeState';
import { TextFieldLabel } from '../../../../packages/ui/src/TextField/TextField';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    labelHidden: {
      type: "boolean",
      value: false,
      label: "Label Hidden"
    },
    htmlFor: {
      type: "string",
      value: "example-input",
      label: "HTML For Attribute"
    }
  });

  return (
    <TextFieldLabel 
      labelHidden={state.labelHidden.value} 
      htmlFor={state.htmlFor.value}
    >
      Example Label
    </TextFieldLabel>
  );
}