import React from 'react';
import { useParentState } from '../useIframeState';
import { RelativeTime } from '../../../../packages/ui/src/RelativeTime/RelativeTime';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    time: {
      type: "string",
      value: new Date().toISOString(),
      label: "Time"
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    }
  });

  return (
    <RelativeTime 
      time={state.time.value}
      className={state.className.value}
    />
  );
}