import React from 'react';
import { useParentState } from '../useIframeState';
import { Popover, PopoverContent, PopoverTrigger } from '../../../../packages/ui/src/Popover/Popover';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    align: {
      type: "dropdown",
      value: "center",
      options: ["start", "center", "end"],
      label: "Align"
    },
    sideOffset: {
      type: "number",
      value: 4,
      label: "Side Offset"
    },
    collisionPadding: {
      type: "number",
      value: 8,
      label: "Collision Padding"
    },
    addDismissibleLayer: {
      type: "boolean",
      value: false,
      label: "Add Dismissible Layer"
    },
    className: {
      type: "string",
      value: "bg-white p-4 rounded-lg shadow-lg",
      label: "Class Name"
    }
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Click me</button>
      </PopoverTrigger>
      <PopoverContent
        align={state.align.value as "start" | "center" | "end"}
        sideOffset={state.sideOffset.value}
        collisionPadding={state.collisionPadding.value}
        addDismissibleLayer={state.addDismissibleLayer.value}
        className={state.className.value}
      >
        <div>This is the popover content</div>
      </PopoverContent>
    </Popover>
  );
}