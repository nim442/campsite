import React from 'react';
import { useParentState } from '../useIframeState';
import { AppBadge } from '../../components/AppBadge';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    size: {
      type: "dropdown",
      value: "sm",
      options: ["xs", "sm"],
      label: "Size"
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    }
  });

  return (
    <AppBadge 
      size={state.size.value as "xs" | "sm"}
      className={state.className.value}
    />
  );
}