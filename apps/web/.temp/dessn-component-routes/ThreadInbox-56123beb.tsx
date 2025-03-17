import React from 'react';
import { useParentState } from '../useIframeState';
import { ThreadInbox } from '../../components/ThreadInbox/ThreadInbox';
import { Provider, atom } from 'jotai';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScopeProvider } from '../../contexts/scope';

// Create a mock refetchingChatAtom
const refetchingChatAtom = atom(false);

// Mock next/router
const mockRouter = {
  query: { org: 'test-org', threadId: '1' },
  push: () => Promise.resolve(true),
  pathname: '',
  asPath: '/test-org/chat',
  basePath: '',
  route: '',
  events: {
    on: () => {},
    off: () => {},
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  isPreview: false,
};

// Create a new QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Prefetch the mock data
queryClient.setQueryData(['threads'], {
  threads: [
    {
      id: '1',
      title: 'Sample Thread 1',
      lastMessage: { content: 'Hello there!', createdAt: new Date().toISOString() },
      participants: [{ id: '1', name: 'User 1' }],
      unreadCount: 2,
      updatedAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Sample Thread 2',
      lastMessage: { content: 'How are you?', createdAt: new Date().toISOString() },
      participants: [{ id: '2', name: 'User 2' }],
      unreadCount: 0,
      updatedAt: new Date().toISOString(),
    }
  ]
});

export default function ComponentPreview() {
  const [state] = useParentState({
    isRefetching: {
      type: "boolean",
      value: false,
      label: "Is Refetching"
    }
  });

  // Override the router context using window object
  React.useEffect(() => {
    // @ts-ignore
    window.next = {
      router: mockRouter
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <ScopeProvider>
          <div className="h-screen w-screen">
            <ThreadInbox />
          </div>
        </ScopeProvider>
      </Provider>
    </QueryClientProvider>
  );
}