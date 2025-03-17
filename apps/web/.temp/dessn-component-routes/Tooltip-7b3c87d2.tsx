import React from 'react';
import { useParentState } from '../useIframeState';
import { Tooltip } from '../../../../packages/ui/src/Tooltip/Tooltip';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Tooltip Label",
      label: "Label"
    },
    shortcut: {
      type: "string",
      value: "⌘+K",
      label: "Shortcut"
    },
    side: {
      type: "dropdown",
      value: "top",
      options: ["top", "right", "bottom", "left"],
      label: "Side"
    },
    align: {
      type: "dropdown",
      value: "center",
      options: ["start", "center", "end"],
      label: "Align"
    },
    asChild: {
      type: "boolean",
      value: false,
      label: "As Child"
    },
    disableHoverableContent: {
      type: "boolean",
      value: false,
      label: "Disable Hoverable Content"
    },
    delayDuration: {
      type: "number",
      value: 400,
      label: "Delay Duration"
    },
    hideWhenDetached: {
      type: "boolean",
      value: true,
      label: "Hide When Detached"
    },
    hideOnKeyboardFocus: {
      type: "boolean",
      value: true,
      label: "Hide On Keyboard Focus"
    },
    sideOffset: {
      type: "number",
      value: 5,
      label: "Side Offset"
    },
    alignOffset: {
      type: "number",
      value: 5,
      label: "Align Offset"
    }
  });

  return (
    <Tooltip
      label={state.label.value}
      shortcut={state.shortcut.value}
      side={state.side.value as 'top' | 'right' | 'bottom' | 'left'}
      align={state.align.value as 'start' | 'center' | 'end'}
      asChild={state.asChild.value}
      disableHoverableContent={state.disableHoverableContent.value}
      delayDuration={state.delayDuration.value}
      hideWhenDetached={state.hideWhenDetached.value}
      hideOnKeyboardFocus={state.hideOnKeyboardFocus.value}
      sideOffset={state.sideOffset.value}
      alignOffset={state.alignOffset.value}
    >
      <button>Hover me</button>
    </Tooltip>
  );
}