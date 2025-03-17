import React from 'react';
import { useParentState } from '../useIframeState';
import { SelectCommandEmpty } from '../../../../packages/ui/src/Select/SelectCommand';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name"
    }
  });

  return (
    <SelectCommandEmpty className={state.className.value}>
      No results found
    </SelectCommandEmpty>
  );
}