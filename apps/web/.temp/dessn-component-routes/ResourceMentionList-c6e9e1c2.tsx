import React from 'react';
import { useParentState } from '../useIframeState';
import { ResourceMentionList } from '../../components/MarkdownEditor/ResourceMentionList';
import { Editor } from '@tiptap/core';
import { getMarkdownExtensions } from '@campsite/editor';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    modal: {
      type: "boolean",
      value: false,
      label: "Modal"
    }
  });

  // Create an editor instance with required extensions
  const editor = new Editor({
    extensions: getMarkdownExtensions({
      resourceMention: {
        addNodeView() {
          return null; // We don't need the node view for the mention list
        }
      }
    }),
    content: '<p></p>',
    editable: true
  });

  return (
    <ResourceMentionList 
      editor={editor}
      modal={state.modal.value}
    />
  );
}