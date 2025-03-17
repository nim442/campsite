import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useParentState } from '../useIframeState';
import { ThreadNotificationsSettingsSelect } from '../../components/Thread/ThreadNotificationsSettingsSelect';
import { ScopeProvider } from '../../contexts/scope';
import * as NextRouter from 'next/router';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Override the router context
const mockRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/chat',
};

// Override the useRouter hook
(NextRouter as any).useRouter = () => mockRouter;

// Pre-populate the query cache with mock data
queryClient.setQueryData(
  ['thread-membership'],
  {
    notification_level: 'all'
  }
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    threadId: {
      type: "string",
      value: "thread-123",
      label: "Thread ID"
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        <ThreadNotificationsSettingsSelect 
          threadId={state.threadId.value}
        />
      </ScopeProvider>
    </QueryClientProvider>
  );
}