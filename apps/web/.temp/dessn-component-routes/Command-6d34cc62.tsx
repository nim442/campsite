import React from 'react';
import { useParentState } from '../useIframeState';
import { Command } from '../../../../packages/ui/src/Command/Command';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Command Menu",
      label: "Label"
    },
    shouldFilter: {
      type: "boolean", 
      value: true,
      label: "Should Filter"
    },
    loop: {
      type: "boolean",
      value: false,
      label: "Loop Navigation"
    },
    vimBindings: {
      type: "boolean",
      value: true,
      label: "Vim Bindings"
    },
    disablePointerSelection: {
      type: "boolean",
      value: false,
      label: "Disable Pointer Selection"
    }
  });

  return (
    <Command
      label={state.label.value}
      shouldFilter={state.shouldFilter.value}
      loop={state.loop.value}
      vimBindings={state.vimBindings.value}
      disablePointerSelection={state.disablePointerSelection.value}
    >
      <Command.Input placeholder="Search..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Fruits">
          <Command.Item value="apple">Apple</Command.Item>
          <Command.Item value="banana">Banana</Command.Item>
          <Command.Item value="orange">Orange</Command.Item>
        </Command.Group>
        <Command.Separator />
        <Command.Group heading="Vegetables">
          <Command.Item value="carrot">Carrot</Command.Item>
          <Command.Item value="broccoli">Broccoli</Command.Item>
          <Command.Item value="spinach">Spinach</Command.Item>
        </Command.Group>
      </Command.List>
    </Command>
  );
}