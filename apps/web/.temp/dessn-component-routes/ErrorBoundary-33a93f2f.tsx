import React from 'react';
import { useParentState } from '../useIframeState';
import { ErrorBoundary } from '../../../../packages/ui/src/ErrorBoundary';
const BuggyComponent = () => {
  throw new Error("This is a test error");
  return <div>This won't render</div>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showError: {
      type: "boolean",
      value: true,
      label: "Show Error"
    }
  });

  return (
    <ErrorBoundary
      fallback={<div>Something went wrong. This is the fallback UI.</div>}
    >
      {state.showError.value && <BuggyComponent />}
    </ErrorBoundary>
  );
}