import React from 'react';
import { useParentState } from '../useIframeState';
import { WeeklySummarySettings } from '../../components/UserSettings/Notifications/WeeklySummary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state] = useParentState({
    timezone: {
      type: "string",
      value: "America/New_York",
      label: "Timezone",
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <WeeklySummarySettings tz={state.timezone.value} />
    </QueryClientProvider>
  );
}