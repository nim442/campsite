import React from 'react';
import { useParentState } from '../useIframeState';
import { TextFieldError } from '../../../../packages/ui/src/TextField/TextField';
export default function ComponentPreview() {
  const [state] = useParentState({
    errorMessage: {
      type: "string",
      value: "This is an error message",
      label: "Error Message"
    }
  });

  return (
    <TextFieldError>
      {state.errorMessage.value}
    </TextFieldError>
  );
}