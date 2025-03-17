import React from 'react';
import { useParentState } from '../useIframeState';
import { MentionList } from '../../components/MarkdownEditor/MentionList';
import { Editor, Node } from '@tiptap/core';
import { Document } from '@campsite/editor/extensions/Document';
import { Text } from '@campsite/editor/extensions/Text';
import { Paragraph } from '@campsite/editor/extensions/Paragraph';

// Create a basic Mention extension for the preview
const Mention = Node.create({
  name: 'mention',
  group: 'inline',
  inline: true,
  selectable: false,
  atom: true,

  addAttributes() {
    return {
      id: { default: null },
      label: { default: null },
      username: { default: null },
      role: { default: 'member' },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-mention]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', { 'data-mention': '', ...HTMLAttributes }, '@' + (HTMLAttributes.label || HTMLAttributes.username)];
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    modal: {
      type: "boolean",
      value: false,
      label: "Modal"
    },
    defaultMentions: {
      type: "object",
      value: [{
        id: "1",
        role: "member",
        user: {
          id: "1",
          display_name: "John Doe",
          username: "johndoe",
          avatar_urls: {
            xs: "https://placeholder.com/30x30",
            sm: "https://placeholder.com/40x40",
            base: "https://placeholder.com/50x50",
            lg: "https://placeholder.com/60x60",
            xl: "https://placeholder.com/70x70",
            xxl: "https://placeholder.com/80x80"
          },
          integration: false,
          notifications_paused: false,
          email: "john@example.com"
        }
      }],
      label: "Default Mentions"
    }
  });

  // Create editor instance with required extensions
  const editor = new Editor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Mention,
    ],
    content: '<p></p>',
  });

  return (
    <MentionList 
      editor={editor}
      modal={state.modal.value}
      defaultMentions={state.defaultMentions.value}
    />
  );
}