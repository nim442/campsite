import React from 'react';
import { useParentState } from '../useIframeState';
import { LinkUnfurlRenderer } from '../../components/Post/LinkUnfurlRenderer';
import { Editor } from '@tiptap/core';
import { Node } from '@tiptap/pm/model';
import { 
  Document,
  Text,
  Paragraph,
  Link
} from '@campsite/editor';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    selected: {
      type: "boolean",
      value: false,
      label: "Selected"
    },
    href: {
      type: "string",
      value: "https://example.com",
      label: "URL"
    }
  });

  // Create editor with required extensions
  const mockEditor = new Editor({
    extensions: [
      Document,
      Text,
      Paragraph,
      Link
    ],
    content: '<p>Link preview</p>',
    editable: true
  });

  const mockNode = {
    attrs: {
      href: state.href.value
    }
  } as Node;

  const mockProps = {
    editor: mockEditor,
    node: mockNode,
    getPos: () => 0,
    deleteNode: () => console.log('delete node'),
    selected: state.selected.value
  };

  // Mock the Next.js router context that ScopeProvider needs
  const mockRouter = {
    query: { org: 'demo' },
    isReady: true,
    asPath: '/demo/notes'
  };

  // @ts-ignore - Mocking the router context
  return (
    <ScopeProvider router={mockRouter}>
      <LinkUnfurlRenderer {...mockProps} />
    </ScopeProvider>
  );
}