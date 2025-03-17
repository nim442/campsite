import React from 'react';
import { useParentState } from '../useIframeState';
import { EmbedContainer } from '../../components/Post/Notes/EmbedContainer';
import { Editor } from '@tiptap/core';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    draggable: {
      type: "boolean",
      value: true,
      label: "Draggable"
    },
    selected: {
      type: "boolean",
      value: false,
      label: "Selected"
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name"
    }
  });

  // Create a mock Editor instance with event handling capabilities
  const mockEditor = {
    options: {
      editable: true
    },
    isFocused: true,
    commands: () => ({}),
    chain: () => ({}),
    can: () => true,
    on: (event: string, callback: () => void) => {
      // Return a function to satisfy the event emitter interface
      return mockEditor;
    },
    off: (event: string, callback: () => void) => {
      // Return a function to satisfy the event emitter interface
      return mockEditor;
    }
  } as Editor;

  return (
    <EmbedContainer
      draggable={state.draggable.value}
      selected={state.selected.value}
      className={state.className.value}
      editor={mockEditor}
    >
      <div className="p-4 bg-gray-100">Sample Embed Content</div>
    </EmbedContainer>
  );
}