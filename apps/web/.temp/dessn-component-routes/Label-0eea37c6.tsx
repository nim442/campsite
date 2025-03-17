import React from 'react';
import { useParentState } from '../useIframeState';
import { Label } from '../../../../packages/ui/src/Switch/Switch';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    htmlFor: {
      type: "string",
      value: "example-input",
      label: "HTML For Attribute"
    },
    label: {
      type: "string",
      value: "Example Label",
      label: "Label Text"
    }
  });

  return (
    <Label 
      htmlFor={state.htmlFor.value}
      label={state.label.value}
      onClick={() => console.log('Label clicked')}
    />
  );
}