import React from 'react';
import { useParentState } from '../useIframeState';
import { InlineResourceMentionRenderer } from '../../components/InlineResourceMentionRenderer';
import { NodeViewWrapperProps } from '@tiptap/react';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state] = useParentState({
    selected: {
      type: "boolean",
      value: false,
      label: "Selected"
    },
    href: {
      type: "string",
      value: "https://example.com/resource/123",
      label: "Resource URL"
    }
  });

  const mockEditor = {
    options: {
      editable: true
    },
    isFocused: true,
    // Add event handling methods that TipTap expects
    on: (event: string, callback: () => void) => {
      // Return some value to represent the event listener
      return { event, callback };
    },
    off: (event: string, callback: () => void) => {
      // Clean up event listener
    },
    commands: {},
    chain: () => ({
      focus: () => ({ run: () => {} }),
    }),
  };

  const mockNode = {
    attrs: {
      href: state.href.value
    }
  };

  const props: NodeViewWrapperProps = {
    editor: mockEditor as any,
    node: mockNode as any,
    selected: state.selected.value,
    decorations: [],
    getPos: () => 0,
    updateAttributes: () => {},
    deleteNode: () => {}
  };

  // Create a new QueryClient instance
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  // Mock router context that ScopeProvider needs
  const mockRouter = {
    query: { org: 'test-org' },
    isReady: true,
    asPath: '/test-org/path'
  };

  return (
    <QueryNormalizerProvider 
      queryClient={queryClient}
      normalizerConfig={{
        normalize: true
      }}
    >
      <ScopeProvider>
        <InlineResourceMentionRenderer {...props} />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}