import React from 'react';
import { useParentState } from '../useIframeState';
import { DropdownMenu } from '../../../../packages/ui/src/DropdownMenu/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    align: {
      type: "dropdown",
      value: "start",
      options: ["start", "end", "center"],
      label: "Align"
    },
    side: {
      type: "dropdown",
      value: "bottom",
      options: ["top", "bottom"],
      label: "Side"
    },
    sideOffset: {
      type: "number",
      value: 8,
      label: "Side Offset"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    defaultOpen: {
      type: "boolean",
      value: false,
      label: "Default Open"
    }
  });

  const items = [
    {
      type: 'item',
      label: 'Menu Item 1',
      onSelect: () => console.log('Selected item 1')
    },
    {
      type: 'separator'
    },
    {
      type: 'item',
      label: 'Menu Item 2',
      onSelect: () => console.log('Selected item 2')
    },
    {
      type: 'heading',
      label: 'Heading'
    },
    {
      type: 'sub',
      label: 'Submenu',
      items: [
        {
          type: 'item',
          label: 'Submenu Item 1'
        }
      ]
    }
  ];

  return (
    <DropdownMenu
      align={state.align.value as 'start' | 'end' | 'center'}
      side={state.side.value as 'top' | 'bottom'}
      sideOffset={state.sideOffset.value}
      disabled={state.disabled.value}
      defaultOpen={state.defaultOpen.value}
      items={items}
      trigger={<button>Click me</button>}
      desktop={{
        width: 'w-[200px]',
        modal: false
      }}
    />
  );
}