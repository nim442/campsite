import React from 'react';
import { useParentState } from '../useIframeState';
import { DesktopDropdownMenu } from '../../../../packages/ui/src/DropdownMenu/DesktopDropdownMenu';
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
    open: {
      type: "boolean",
      value: false,
      label: "Open"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    width: {
      type: "string",
      value: "w-[220px]",
      label: "Width"
    },
    modal: {
      type: "boolean",
      value: false,
      label: "Modal"
    }
  });

  const sampleItems = [
    {
      type: 'item',
      label: 'Menu Item 1',
      onSelect: () => console.log('selected 1')
    },
    {
      type: 'separator'
    },
    {
      type: 'item',
      label: 'Menu Item 2',
      kbd: '⌘K',
      onSelect: () => console.log('selected 2')
    },
    {
      type: 'sub',
      label: 'Submenu',
      items: [
        {
          type: 'item',
          label: 'Submenu Item 1',
          onSelect: () => console.log('selected submenu 1')
        }
      ]
    }
  ];

  return (
    <DesktopDropdownMenu
      align={state.align.value as 'start' | 'end' | 'center'}
      side={state.side.value as 'top' | 'bottom'}
      sideOffset={state.sideOffset.value}
      open={state.open.value}
      onOpenChange={(open) => setState('open', open)}
      disabled={state.disabled.value}
      width={state.width.value as `w-[${number}px]` | `w-${number}`}
      modal={state.modal.value}
      items={sampleItems}
      trigger={<button>Click me</button>}
    />
  );
}