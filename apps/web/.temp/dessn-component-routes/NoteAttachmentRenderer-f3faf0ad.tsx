import React from 'react';
import { useParentState } from '../useIframeState';
import { NoteAttachmentRenderer } from '../../components/Post/Notes/Attachments/NoteAttachmentRenderer';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  
  const [state, setState] = useParentState({
    selected: {
      type: "boolean",
      value: false,
      label: "Selected"
    },
    id: {
      type: "string",
      value: "attachment-123",
      label: "Attachment ID"
    },
    optimistic_id: {
      type: "string",
      value: "opt-123",
      label: "Optimistic ID"
    },
    error: {
      type: "string",
      value: "",
      label: "Error Message"
    },
    width: {
      type: "number",
      value: 300,
      label: "Width"
    },
    height: {
      type: "number",
      value: 200,
      label: "Height"
    }
  });

  // Create a mock editor with required event handling methods
  const mockEditor = {
    options: {
      editable: true
    },
    on: (event: string, callback: () => void) => {
      // Mock event subscription
      return mockEditor;
    },
    off: (event: string, callback: () => void) => {
      // Mock event unsubscription
      return mockEditor;
    },
    commands: {},
    state: {},
    view: {},
    schema: {},
    storage: {}
  };

  // Mock the minimum required props for NodeViewWrapperProps
  const mockProps = {
    node: {
      attrs: {
        id: state.id.value,
        optimistic_id: state.optimistic_id.value,
        error: state.error.value,
        width: state.width.value,
        height: state.height.value
      }
    },
    editor: mockEditor,
    extension: {
      options: {
        onOpenAttachment: () => console.log('open attachment'),
        disableComments: false
      }
    },
    deleteNode: () => console.log('delete node'),
    selected: state.selected.value
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <NoteAttachmentRenderer {...mockProps} />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}