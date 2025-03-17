import React from 'react';
import { useParentState } from '../useIframeState';
import { MobileDrawerMenu } from '../../../../packages/ui/src/Menu/MobileDrawerMenu';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: false,
      label: "Open"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  const items = [
    {
      type: 'heading',
      label: 'Menu Section'
    },
    {
      type: 'item',
      label: 'Menu Item 1',
      onSelect: () => console.log('selected item 1')
    },
    {
      type: 'separator'
    },
    {
      type: 'item',
      label: 'Menu Item 2',
      url: 'https://example.com',
      external: true
    },
    {
      type: 'sub',
      label: 'Submenu',
      items: [
        {
          type: 'item',
          label: 'Submenu Item 1'
        },
        {
          type: 'item',
          label: 'Submenu Item 2'
        }
      ]
    },
    {
      type: 'text',
      label: 'Some descriptive text'
    }
  ];

  return (
    <MobileDrawerMenu
      open={state.open.value}
      onOpenChange={(open) => setState('open', open)}
      disabled={state.disabled.value}
      trigger={<button>Open Menu</button>}
      items={items}
      header={<div className="p-4">Header Content</div>}
    />
  );
}