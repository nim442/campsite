import React from 'react';
import { useParentState } from '../useIframeState';
import { PopoverTrigger } from '../../../../packages/ui/src/Popover/Popover';
import * as PopoverPrimitive from '@radix-ui/react-popover';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    className: {
      type: "string",
      value: "px-4 py-2 bg-blue-500 text-white rounded",
      label: "Class Name"
    }
  });

  return (
    <PopoverPrimitive.Root>
      <PopoverTrigger 
        disabled={state.disabled.value}
        className={state.className.value}
      >
        Click me
      </PopoverTrigger>
    </PopoverPrimitive.Root>
  );
}