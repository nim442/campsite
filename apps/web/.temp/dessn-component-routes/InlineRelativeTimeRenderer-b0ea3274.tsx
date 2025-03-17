import React from 'react';
import { useParentState } from '../useIframeState';
import { InlineRelativeTimeRenderer } from '../../components/RichTextRenderer/handlers/RelativeTime';
import { Editor } from '@tiptap/core';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    timestamp: {
      type: "string",
      value: new Date().toISOString(),
      label: "Timestamp"
    },
    originalTz: {
      type: "string",
      value: "America/New_York",
      label: "Original Timezone"
    },
    selected: {
      type: "boolean",
      value: false,
      label: "Selected"
    }
  });

  // Create a mock editor with event handling capabilities
  const mockEditor = {
    options: {
      editable: true
    },
    isFocused: true,
    on: (event: string, callback: () => void) => {
      // Mock event subscription
      return mockEditor;
    },
    off: (event: string, callback: () => void) => {
      // Mock event unsubscription
      return mockEditor;
    }
  } as unknown as Editor;

  const mockNodeViewProps = {
    editor: mockEditor,
    node: {
      attrs: {
        timestamp: state.timestamp.value,
        originalTz: state.originalTz.value
      }
    },
    selected: state.selected.value,
    draggable: false,
    getDraggableElement: () => null,
    contentRef: () => null
  };

  return <InlineRelativeTimeRenderer {...mockNodeViewProps} />;
}