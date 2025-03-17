import React from 'react';
import { useParentState } from '../useIframeState';
import { RichTextRenderer } from '../../components/RichTextRenderer/index';
import { Extensions } from '@tiptap/core';
import { Node } from '@tiptap/core';

// Create basic document structure
const Doc = Node.create({
  name: 'doc',
  topNode: true,
  content: 'block+'
});

const Paragraph = Node.create({
  name: 'paragraph',
  group: 'block',
  content: 'inline*'
});

const Text = Node.create({
  name: 'text',
  group: 'inline'
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    content: {
      type: "string",
      value: "Hello **world**! This is a sample content with *formatting*.",
      label: "Content"
    },
    hasMediaGalleryHandler: {
      type: "boolean",
      value: false,
      label: "Enable Media Gallery Handler"
    },
    hasPostNoteHandler: {
      type: "boolean",
      value: false,
      label: "Enable Post Note Handler"
    },
    hasTaskItemHandler: {
      type: "boolean",
      value: false,
      label: "Enable Task Item Handler"
    }
  });

  const extensions: Extensions = [
    Doc,
    Paragraph,
    Text
  ];

  const options = {
    mediaGallery: state.hasMediaGalleryHandler.value ? {
      onOpenAttachment: (attachmentId: string, galleryId?: string) => {
        console.log('Opening attachment', { attachmentId, galleryId });
      }
    } : undefined,
    postNoteAttachment: state.hasPostNoteHandler.value ? {
      onOpenAttachment: (attachmentId: string) => {
        console.log('Opening post note attachment', attachmentId);
      }
    } : undefined,
    taskItem: state.hasTaskItemHandler.value ? {
      onCheckboxClick: ({ index, checked }: { index: number; checked: boolean }) => {
        console.log('Checkbox clicked', { index, checked });
      }
    } : undefined
  };

  return (
    <RichTextRenderer
      content={state.content.value}
      extensions={extensions}
      options={options}
    />
  );
}