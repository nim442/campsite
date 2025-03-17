import React from 'react';
import { useParentState } from '../useIframeState';
import { LazyLoadingSpinner } from '../../../../packages/ui/src/Spinner/Spinner';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    delay: {
      type: "number",
      value: 500,
      label: "Delay (ms)"
    },
    showFallback: {
      type: "boolean",
      value: false,
      label: "Show Fallback"
    },
    showCustomElement: {
      type: "boolean",
      value: false,
      label: "Show Custom Element"
    }
  });

  const fallback = state.showFallback.value ? <div>Loading...</div> : undefined;
  const element = state.showCustomElement.value ? (
    <div className="animate-spin text-blue-500">⭐</div>
  ) : undefined;

  return (
    <LazyLoadingSpinner 
      delay={state.delay.value}
      fallback={fallback}
      element={element}
    />
  );
}