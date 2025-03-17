import React from 'react';
import { useParentState } from '../useIframeState';
import { SelectCommandItem, SelectCommandContainer } from '../../../../packages/ui/src/Select/SelectCommand';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name"
    },
    children: {
      type: "string",
      value: "Select Item",
      label: "Content"
    }
  });

  return (
    <SelectCommandContainer>
      <SelectCommandItem 
        className={state.className.value}
      >
        {state.children.value}
      </SelectCommandItem>
    </SelectCommandContainer>
  );
}