import React from 'react';
import { useParentState } from '../useIframeState';
import { Root } from '../../../../packages/ui/src/Dialog/Dialog';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Open"
    },
    size: {
      type: "dropdown",
      value: "base",
      options: ['xs', 'sm', 'base', 'medium', 'lg', 'xl', '2xl', '3xl', 'fit', 'full', 'cover'],
      label: "Size"
    },
    fillHeight: {
      type: "boolean",
      value: false,
      label: "Fill Height"
    },
    align: {
      type: "dropdown",
      value: "center",
      options: ['center', 'top'],
      label: "Align"
    },
    visuallyHiddenTitle: {
      type: "string",
      value: "Dialog Title",
      label: "Visually Hidden Title"
    },
    disableDescribedBy: {
      type: "boolean",
      value: false,
      label: "Disable Described By"
    }
  });

  return (
    <Root
      open={state.open.value}
      onOpenChange={(open) => setState('open', open)}
      size={state.size.value}
      fillHeight={state.fillHeight.value}
      align={state.align.value}
      visuallyHiddenTitle={state.visuallyHiddenTitle.value}
      disableDescribedBy={state.disableDescribedBy.value}
    >
      <div className="p-4">
        <h2>Dialog Content</h2>
        <p>This is an example dialog content.</p>
      </div>
    </Root>
  );
}