import React from 'react';
import { useParentState } from '../useIframeState';
import { KeyboardShortcut } from '../../../../packages/ui/src/KeyboardShortcut/KeyboardShortcut';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    shortcut: {
      type: "dropdown",
      value: "mod+k",
      options: ["mod+k", "shift+a", "alt+s", "mod+shift+p", "return", "backspace"],
      label: "Keyboard Shortcut"
    }
  });

  return <KeyboardShortcut shortcut={state.shortcut.value} />;
}