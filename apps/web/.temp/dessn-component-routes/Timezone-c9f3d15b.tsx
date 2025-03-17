import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Timezone } from '../../components/UserSettings/Timezone';

// Create a new module for the hooks
const hooks = {
  useGetCurrentUser: function useGetCurrentUser() {
    return {
      data: { timezone: 'America/New_York' }
    };
  },
  useCreateUserTimezone: function useCreateUserTimezone() {
    return {
      mutate: (params: { timezone: string }, options: any) => {
        console.log('Timezone updated:', params.timezone);
        if (options?.onSuccess) {
          options.onSuccess();
        }
      }
    };
  }
};

// Override the module imports
import('@/hooks/useGetCurrentUser').then(module => {
  Object.defineProperty(module, 'useGetCurrentUser', {
    value: hooks.useGetCurrentUser
  });
});

import('@/hooks/useCreateUserTimezone').then(module => {
  Object.defineProperty(module, 'useCreateUserTimezone', {
    value: hooks.useCreateUserTimezone
  });
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  return (
    <QueryClientProvider client={queryClient}>
      <Timezone />
    </QueryClientProvider>
  );
}