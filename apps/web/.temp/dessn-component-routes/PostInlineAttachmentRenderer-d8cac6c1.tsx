import React from 'react';
import { useParentState } from '../useIframeState';
import { PostInlineAttachmentRenderer } from '../../components/Post/PostInlineAttachmentRenderer';
import { Editor } from '@tiptap/core';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    selected: {
      type: "boolean",
      value: false,
      label: "Selected"
    },
    postId: {
      type: "string",
      value: "post-123",
      label: "Post ID"
    }
  });

  // Create a new QueryClient instance
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  // Create a more complete editor mock with event handling
  const mockEditor = {
    options: {
      editable: true
    },
    on: (event: string, callback: () => void) => {
      // Return a handler ID or similar if needed
      return callback;
    },
    off: (event: string, callback: () => void) => {
      // Cleanup handler
    },
    commands: {},
    state: {},
    view: {
      state: {
        selection: {}
      }
    }
  } as unknown as Editor;

  const mockNode = {
    attrs: {
      id: "attachment-123",
      optimistic_id: "opt-123",
      error: null,
      width: 300,
      height: 200
    }
  };

  const mockExtension = {
    options: {
      postId: state.postId.value
    }
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <PostInlineAttachmentRenderer
          editor={mockEditor}
          node={mockNode}
          extension={mockExtension}
          selected={state.selected.value}
          getPos={() => 0}
          updateAttributes={() => {}}
          deleteNode={() => {}}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}