import React from 'react';
import { useParentState } from '../useIframeState';
import { Popover, PopoverElementAnchor, PopoverContent } from '../../../../packages/ui/src/Popover/Popover';

export default function ComponentPreview() {
  const [state] = useParentState({
    asChild: {
      type: "boolean",
      value: false,
      label: "As Child"
    }
  });

  // Create a mock element for demonstration
  const mockElement = typeof window !== 'undefined' ? document.createElement('div') : null;
  if (mockElement) {
    mockElement.textContent = "Anchor Element";
  }

  return (
    <Popover>
      <PopoverElementAnchor 
        element={mockElement}
        asChild={state.asChild.value}
      />
      <PopoverContent>
        <div className="p-4">
          Popover Content
        </div>
      </PopoverContent>
    </Popover>
  );
}