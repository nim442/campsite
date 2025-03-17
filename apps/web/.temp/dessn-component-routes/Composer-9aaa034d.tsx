import React from 'react';
import { useParentState } from '../useIframeState';
import { Composer } from '../../components/Thread/Composer';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    canSend: {
      type: "boolean",
      value: true,
      label: "Can Send"
    },
    autoFocus: {
      type: "boolean",
      value: true,
      label: "Auto Focus"
    },
    id: {
      type: "string",
      value: "composer-1",
      label: "ID"
    }
  });

  // Mock Next.js router context that ScopeProvider needs
  const mockRouter = {
    query: { org: 'test-org' },
    isReady: true,
    asPath: '/test-org/chat',
  };

  // Provide the router context
  (global as any).Router = {
    asPath: '/test-org/chat',
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        <Composer
          canSend={state.canSend.value}
          autoFocus={state.autoFocus.value}
          id={state.id.value}
          onMessage={(message) => console.log('Message:', message)}
          onPaste={(e) => console.log('Paste:', e)}
          onUpload={(files) => console.log('Upload:', files)}
          dropzone={{
            getInputProps: () => ({}),
            isDragActive: false,
            open: () => {},
          }}
          onFocus={() => console.log('Focus')}
          onBlur={() => console.log('Blur')}
          onScrollToBottom={() => console.log('Scroll to bottom')}
          onEditLastMessage={() => console.log('Edit last message')}
        />
      </ScopeProvider>
    </QueryClientProvider>
  );
}