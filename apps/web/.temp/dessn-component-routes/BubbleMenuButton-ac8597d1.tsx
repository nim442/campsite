import React from 'react';
import { useParentState } from '../useIframeState';
import { BubbleMenuButton } from '../../components/EditorBubbleMenu/BubbleMenuButton';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isActive: {
      type: "boolean",
      value: false,
      label: "Is Active"
    },
    title: {
      type: "string",
      value: "Format Text",
      label: "Title"
    },
    tooltip: {
      type: "string",
      value: "Format your text",
      label: "Tooltip"
    },
    shortcut: {
      type: "string",
      value: "⌘B",
      label: "Shortcut"
    },
    dropdown: {
      type: "boolean",
      value: false,
      label: "Show Dropdown"
    }
  });

  return (
    <BubbleMenuButton
      icon={<span>📝</span>}
      isActive={state.isActive.value}
      title={state.title.value}
      tooltip={state.tooltip.value}
      shortcut={state.shortcut.value}
      dropdown={state.dropdown.value}
      onClick={() => console.log('clicked')}
    />
  );
}