import React from 'react';
import { useParentState } from '../useIframeState';
import { InboundRequests } from '../../components/People/InboundRequests';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function ComponentPreview() {
  const [state] = useParentState({
    requests: {
      type: "object",
      value: [
        {
          id: "1",
          user: {
            display_name: "John Doe",
            email: "john@example.com",
            avatar_urls: ["https://via.placeholder.com/150"],
          }
        },
        {
          id: "2",
          user: {
            display_name: "Jane Smith",
            email: "jane@example.com",
            avatar_urls: ["https://via.placeholder.com/150"],
          }
        }
      ],
      label: "Membership Requests"
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        <InboundRequests />
      </ScopeProvider>
    </QueryClientProvider>
  );
}