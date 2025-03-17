import React from 'react';
import { useParentState } from '../useIframeState';
import { ReactionList } from '../../components/MarkdownEditor/ReactionList';
import { Editor } from '@tiptap/core';
import { 
  Document,
  Paragraph,
  Text,
  Reaction
} from '@campsite/editor';
import { ScopeProvider } from '../../contexts/scope';

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
    content: '',
    extensions: [
      Document,
      Paragraph,
      Text,
      Reaction
    ]
  });

  return (
    <ScopeProvider>
      <ReactionList 
        editor={editor}
        modal={state.modal.value}
      />
    </ScopeProvider>
  );
}