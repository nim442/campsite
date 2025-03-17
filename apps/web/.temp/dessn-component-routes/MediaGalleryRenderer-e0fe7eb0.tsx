import React from 'react';
import { useParentState } from '../useIframeState';
import { MediaGalleryRenderer } from '../../components/Post/MediaGalleryRenderer';
import { NodeViewWrapperProps } from '@tiptap/react';
import { Editor } from '@tiptap/core';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state] = useParentState({
    selected: {
      type: "boolean",
      value: false,
      label: "Selected"
    }
  });

  const queryClient = new QueryClient();

  // Create event handlers map to track subscribed events
  const eventHandlers: Record<string, Set<Function>> = {
    blur: new Set(),
    focus: new Set()
  };

  const mockEditor = {
    options: {
      editable: true
    },
    commands: {
      updateGalleryOrder: () => {},
      removeGalleryItem: () => {}
    },
    on: (event: string, handler: Function) => {
      if (!eventHandlers[event]) {
        eventHandlers[event] = new Set();
      }
      eventHandlers[event].add(handler);
      return mockEditor;
    },
    off: (event: string, handler: Function) => {
      if (eventHandlers[event]) {
        eventHandlers[event].delete(handler);
      }
      return mockEditor;
    }
  } as unknown as Editor;

  const mockNode = {
    attrs: {
      id: "gallery-1"
    },
    content: {
      content: [
        {
          attrs: {
            id: "attachment-1",
            url: "https://picsum.photos/200/300",
            type: "image"
          }
        },
        {
          attrs: {
            id: "attachment-2",
            url: "https://picsum.photos/200/300",
            type: "image"
          }
        }
      ]
    }
  };

  const mockProps: NodeViewWrapperProps = {
    editor: mockEditor,
    node: mockNode,
    deleteNode: () => {},
    selected: state.selected.value,
    extension: {
      options: {
        onOpenAttachment: () => {}
      }
    },
    getPos: () => 0,
    decorations: [],
    updateAttributes: () => {}
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <MediaGalleryRenderer {...mockProps} />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}