import React from 'react';
import { useParentState } from '../useIframeState';
import { SelectCommandSeparator } from '../../../../packages/ui/src/Select/SelectCommand';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "my-custom-separator",
      label: "Class Name"
    }
  });

  return <SelectCommandSeparator className={state.className.value} />;
}