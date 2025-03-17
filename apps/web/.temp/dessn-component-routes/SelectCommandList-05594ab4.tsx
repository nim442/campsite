import React from 'react';
import { useParentState } from '../useIframeState';
import { 
  SelectCommandContainer,
  SelectCommandList,
  SelectCommandItem 
} from '../../../../packages/ui/src/Select/SelectCommand';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name"
    }
  });

  return (
    <SelectCommandContainer>
      <SelectCommandList className={state.className.value}>
        <SelectCommandItem value="item1">List Item 1</SelectCommandItem>
        <SelectCommandItem value="item2">List Item 2</SelectCommandItem>
        <SelectCommandItem value="item3">List Item 3</SelectCommandItem>
      </SelectCommandList>
    </SelectCommandContainer>
  );
}