import React from 'react';
import { useParentState } from '../useIframeState';
import { CodeBlockLanguagePicker } from '../../components/CodeBlockLanguagePicker';
import { Editor } from '@tiptap/core';

export default function ComponentPreview() {
  const [state] = useParentState({
    editorEnabled: {
      type: "boolean",
      value: true,
      label: "Editor Enabled"
    }
  });

  // Create a mock Editor instance
  const mockEditor = {
    isDestroyed: false,
    options: {
      element: document.createElement('div')
    },
    chain: () => ({
      focus: () => ({
        updateAttributes: () => ({
          scrollIntoView: () => ({
            run: () => {}
          })
        })
      })
    }),
    view: {
      state: {
        selection: {
          $anchor: {
            pos: 0,
            parentOffset: 0,
            parent: {
              type: { name: 'codeBlock' },
              attrs: { language: 'javascript' }
            }
          }
        }
      },
      editable: true,
      nodeDOM: () => document.createElement('div')
    },
    registerPlugin: () => {},
    unregisterPlugin: () => {},
    on: () => {},
    off: () => {}
  } as unknown as Editor;

  return (
    <div className="relative min-h-[200px] bg-gray-100 p-4">
      <CodeBlockLanguagePicker editor={state.editorEnabled.value ? mockEditor : null} />
    </div>
  );
}