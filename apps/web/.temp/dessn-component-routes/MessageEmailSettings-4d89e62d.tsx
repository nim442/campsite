import React from 'react';
import { useParentState } from '../useIframeState';
import { MessageEmailSettings } from '../../components/UserSettings/Notifications/MessageEmailSettings';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a mock QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Mock hooks directly
const mockCurrentUser = {
  data: {
    preferences: {
      message_email_notifications: 'enabled'
    }
  }
};

const mockUpdatePreference = {
  mutate: (params, options) => {
    if (options?.onSuccess) {
      options.onSuccess();
    }
  },
  isPending: false
};

// Create mock implementations
export const useGetCurrentUser = () => mockCurrentUser;
export const useUpdatePreference = () => mockUpdatePreference;

// Make the mocks available globally
window.__mocks = {
  useGetCurrentUser,
  useUpdatePreference
};

export default function ComponentPreview() {
  return (
    <QueryClientProvider client={queryClient}>
      <MessageEmailSettings />
    </QueryClientProvider>
  );
}