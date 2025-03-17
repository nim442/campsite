import React from 'react';
import { useParentState } from '../useIframeState';
import { SlackNotificationSettings } from '../../components/UserSettings/SlackNotificationSettings';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  return (
    <QueryClientProvider client={queryClient}>
      <SlackNotificationSettings />
    </QueryClientProvider>
  );
}