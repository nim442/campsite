import React from 'react';
import { useParentState } from '../useIframeState';
import { SquircleIconContainer } from '../../../../packages/ui/src/Squircle/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    size: {
      type: "dropdown",
      value: "large",
      options: ["large", "small"],
      label: "Size"
    },
    className: {
      type: "string",
      value: "bg-blue-500 text-white",
      label: "Class Name"
    }
  });

  return (
    <SquircleIconContainer 
      size={state.size.value as "large" | "small"} 
      className={state.className.value}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        <path d="M8 0L14.9282 4V12L8 16L1.07179 12V4L8 0Z" />
      </svg>
    </SquircleIconContainer>
  );
}