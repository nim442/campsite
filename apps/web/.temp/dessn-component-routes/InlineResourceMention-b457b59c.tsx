import React from 'react';
import { useParentState } from '../useIframeState';
import { InlineResourceMention } from '../../components/RichTextRenderer/handlers/InlineResourceMention';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    href: {
      type: "string",
      value: "/resources/example",
      label: "Resource URL"
    }
  });

  const mockNode = {
    type: 'resourceMention',
    attrs: {
      href: state.href.value
    }
  };

  // Create a new QueryClient instance
  const queryClient = new QueryClient();

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <InlineResourceMention 
          node={mockNode}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}