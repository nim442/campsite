import React from 'react';
import { useParentState } from '../useIframeState';
import { MutationError } from '../../../../packages/ui/src/FormError/FormError';
export default function ComponentPreview() {
  const [state] = useParentState({
    mutation: {
      type: "object",
      value: {
        isError: true,
        error: new Error("Something went wrong. Please try again."),
      },
      label: "Mutation Object",
    },
  });

  return <MutationError mutation={state.mutation.value} />;
}