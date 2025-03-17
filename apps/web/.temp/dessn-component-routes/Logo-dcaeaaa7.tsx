import React from 'react';
import { useParentState } from '../useIframeState';
import { Logo } from '../../../../packages/ui/src/Logo/Logo';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "text-black",
      label: "Class Name"
    }
  });

  return <Logo className={state.className.value} />;
}