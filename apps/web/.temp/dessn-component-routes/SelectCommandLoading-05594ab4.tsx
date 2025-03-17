import React from 'react';
import { useParentState } from '../useIframeState';
import { SelectCommandLoading } from '../../../../packages/ui/src/Select/SelectCommand';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-loading-class",
      label: "Class Name"
    }
  });

  return (
    <SelectCommandLoading className={state.className.value} />
  );
}