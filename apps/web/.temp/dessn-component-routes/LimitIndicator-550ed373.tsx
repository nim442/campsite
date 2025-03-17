import React from 'react';
import { useParentState } from '../useIframeState';
import { LimitIndicator } from '../../../../packages/ui/src/TextField/LimitIndicator';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    maxLength: {
      type: "number",
      value: 100,
      label: "Maximum Length"
    },
    currentLength: {
      type: "number",
      value: 80,
      label: "Current Length"
    },
    charThreshold: {
      type: "number",
      value: 20,
      label: "Character Threshold"
    }
  });

  return (
    <LimitIndicator 
      maxLength={state.maxLength.value}
      currentLength={state.currentLength.value}
      charThreshold={state.charThreshold.value}
    />
  );
}