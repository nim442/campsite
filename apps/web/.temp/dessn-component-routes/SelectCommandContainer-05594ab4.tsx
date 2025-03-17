import React from 'react';
import { useParentState } from '../useIframeState';
import { SelectCommandContainer } from '../../../../packages/ui/src/Select/SelectCommand';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "w-[200px]",
      label: "Class Name"
    }
  });

  return (
    <SelectCommandContainer className={state.className.value}>
      <div>Example Content</div>
    </SelectCommandContainer>
  );
}