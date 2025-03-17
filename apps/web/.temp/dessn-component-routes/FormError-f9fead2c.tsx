import React from 'react';
import { useParentState } from '../useIframeState';
import { FormError } from '../../../../packages/ui/src/FormError/FormError';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    errorMessage: {
      type: "string",
      value: "This field is required",
      label: "Error Message"
    },
    showError: {
      type: "boolean",
      value: true,
      label: "Show Error"
    }
  });

  return (
    <FormError>
      {state.showError.value ? state.errorMessage.value : null}
    </FormError>
  );
}