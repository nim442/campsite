import React from 'react';
import { useParentState } from '../useIframeState';
import { SlashCommand } from '../../components/Post/Notes/SlashCommand';
import { Editor, Node } from '@tiptap/core';
import { useEditor } from '@tiptap/react';

// Create minimal required node types
const Doc = Node.create({
  name: 'doc',
  topNode: true,
  content: 'paragraph+',
});

const Paragraph = Node.create({
  name: 'paragraph',
  content: 'text*',
  group: 'block',
  parseHTML() {
    return [{ tag: 'p' }];
  },
  renderHTML({ HTMLAttributes }) {
    return ['p', HTMLAttributes, 0];
  },
});

const Text = Node.create({
  name: 'text',
  group: 'inline',
});

export default function ComponentPreview() {
  const editor = useEditor({
    extensions: [
      Doc,
      Paragraph,
      Text,
    ],
    content: '<p>Type / to see commands</p>',
    editorProps: {
      attributes: {
        class: 'prose select-text focus:outline-none w-full relative'
      }
    }
  });

  const mockUpload = ({ files, editor }: { files: File[], editor: Editor }) => {
    console.log('Mock upload files:', files);
  };

  if (!editor) {
    return null;
  }

  return (
    <SlashCommand 
      editor={editor}
      upload={mockUpload}
    />
  );
}