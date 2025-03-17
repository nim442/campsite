import React from 'react';
import { useParentState } from '../useIframeState';
import { PersonalCallLinks } from '../../components/UserSettings/PersonalCallLinks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function ComponentPreview() {
  return (
    <QueryClientProvider client={queryClient}>
      <PersonalCallLinks />
    </QueryClientProvider>
  );
}