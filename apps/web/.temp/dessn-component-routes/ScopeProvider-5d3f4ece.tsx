import React from 'react';
import { useParentState } from '../useIframeState';
import { ScopeProvider } from '../../contexts/scope';
export default function ComponentPreview() {
  const [state] = useParentState({
    children: {
      type: "string",
      value: "Sample Child Content",
      label: "Children Content"
    }
  });

  return (
    <ScopeProvider>
      {state.children.value}
    </ScopeProvider>
  );
}