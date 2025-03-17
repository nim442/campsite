import React from 'react';
import { useParentState } from '../useIframeState';
import { EditorBubbleMenu } from '../../components/EditorBubbleMenu/EditorBubbleMenu';
import { useEditor } from '@tiptap/react';
import { Extension, Node } from '@tiptap/core';

// Create document node with proper schema
const Document = Node.create({
  name: 'doc',
  topNode: true,
  content: 'block+'
});

// Create paragraph node with proper schema
const Paragraph = Node.create({
  name: 'paragraph',
  group: 'block',
  content: 'inline*',
  parseHTML() {
    return [{ tag: 'p' }];
  },
  renderHTML({ HTMLAttributes }) {
    return ['p', HTMLAttributes, 0];
  }
});

// Create text node with proper schema
const Text = Node.create({
  name: 'text',
  group: 'inline'
});

// Create other extensions
const createExtension = (name: string, options = {}) => {
  return Extension.create({
    name,
    addOptions() {
      return options;
    }
  });
};

const Bold = createExtension('bold');
const Italic = createExtension('italic');
const Strike = createExtension('strike');
const Heading = createExtension('heading');
const BulletList = createExtension('bulletList');
const OrderedList = createExtension('orderedList');
const ListItem = createExtension('listItem');
const Code = createExtension('code');
const CodeBlock = createExtension('codeBlock');
const Blockquote = createExtension('blockquote');
const Link = createExtension('link', {
  openOnClick: false,
  HTMLAttributes: {
    class: 'cursor-pointer text-blue-500 hover:text-blue-600'
  }
});
const Underline = createExtension('underline');
const TaskList = createExtension('taskList');
const TaskItem = createExtension('taskItem', {
  nested: true
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    canComment: {
      type: "boolean",
      value: true,
      label: "Can Comment"
    },
    enableHeaders: {
      type: "boolean",
      value: true,
      label: "Enable Headers"
    },
    enableLists: {
      type: "boolean",
      value: true,
      label: "Enable Lists"
    },
    enableBlockquote: {
      type: "boolean",
      value: true,
      label: "Enable Blockquote"
    },
    enableUnderline: {
      type: "boolean",
      value: true,
      label: "Enable Underline"
    },
    enableCodeBlock: {
      type: "boolean",
      value: true,
      label: "Enable Code Block"
    }
  });

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Bold,
      Italic,
      Strike,
      Heading,
      BulletList,
      OrderedList,
      ListItem,
      Code,
      CodeBlock,
      Blockquote,
      Link,
      Underline,
      TaskList,
      TaskItem
    ],
    content: '<p>Select this text to see the bubble menu</p>',
    editable: true
  });

  return (
    <EditorBubbleMenu
      editor={editor}
      canComment={state.canComment.value}
      enableHeaders={state.enableHeaders.value}
      enableLists={state.enableLists.value}
      enableBlockquote={state.enableBlockquote.value}
      enableUnderline={state.enableUnderline.value}
      enableCodeBlock={state.enableCodeBlock.value}
    />
  );
}