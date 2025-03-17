import React from 'react';
import { useParentState } from '../useIframeState';
import { SuggestionRoot } from '../../components/SuggestionList';
import { Editor } from '@tiptap/core';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    char: {
      type: "string",
      value: "@",
      label: "Trigger Character"
    },
    startOfLine: {
      type: "boolean",
      value: false,
      label: "Start of Line Only"
    },
    allowSpaces: {
      type: "boolean",
      value: false,
      label: "Allow Spaces"
    },
    side: {
      type: "dropdown",
      value: "bottom",
      options: ["top", "bottom", "left", "right"],
      label: "Popover Side"
    },
    align: {
      type: "dropdown",
      value: "start",
      options: ["start", "center", "end"],
      label: "Popover Alignment"
    },
    modal: {
      type: "boolean",
      value: true,
      label: "Modal Mode"
    }
  });

  // Create a mock editor instance
  const editor = React.useMemo(() => {
    return {
      isDestroyed: false,
      state: {},
      commands: {
        focus: () => {}
      },
      registerPlugin: () => {},
      unregisterPlugin: () => {}
    } as unknown as Editor;
  }, []);

  return (
    <SuggestionRoot
      editor={editor}
      char={state.char.value}
      startOfLine={state.startOfLine.value}
      allowSpaces={state.allowSpaces.value}
      side={state.side.value}
      align={state.align.value}
      modal={state.modal.value}
    >
      <div>Suggestion Content</div>
    </SuggestionRoot>
  );
}