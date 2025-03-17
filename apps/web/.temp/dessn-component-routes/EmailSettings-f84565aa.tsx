import React from 'react';
import { useParentState } from '../useIframeState';
import { EmailSettings } from '../../components/UserSettings/Notifications/Email';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import toast from 'react-hot-toast';

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Create mock hooks directly
const mockCurrentUser = {
  data: {
    preferences: {
      email_notifications: 'enabled'
    }
  }
};

// Mock the hooks at the module level where the component is imported from
// @ts-ignore
global.useGetCurrentUser = () => mockCurrentUser;
// @ts-ignore
global.useUpdatePreference = () => ({
  mutate: (params: any, options?: any) => {
    if (options?.onSuccess) {
      options.onSuccess();
    }
  },
  isPending: false
});

// Override the imports in the EmailSettings component scope
const ModifiedEmailSettings = () => {
  // @ts-ignore
  const currentUser = global.useGetCurrentUser();
  // @ts-ignore
  const updatePreference = global.useUpdatePreference();
  const emailEnabled = currentUser?.data?.preferences?.email_notifications !== 'disabled';

  function handleEnableDisable(checked: boolean) {
    updatePreference.mutate(
      {
        preference: 'email_notifications',
        value: checked ? 'enabled' : 'disabled'
      },
      {
        onSuccess: () => {
          toast(`Post notifications ${checked ? 'enabled' : 'disabled'}`);
        },
        onError: (error: any) => {
          toast.error('An error occurred');
        }
      }
    );
  }

  return <EmailSettings />;
};

export default function ComponentPreview() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModifiedEmailSettings />
    </QueryClientProvider>
  );
}