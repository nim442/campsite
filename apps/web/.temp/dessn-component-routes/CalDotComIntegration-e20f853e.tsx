import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CalDotComIntegration } from '../../components/UserSettings/CalDotComIntegration';

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock hooks directly
const useGetOrganizationMemberships = () => ({
  data: [
    {
      organization: {
        id: '1',
        name: 'Organization 1'
      }
    },
    {
      organization: {
        id: '2',
        name: 'Organization 2'
      }
    }
  ]
});

const useGetCalDotComIntegration = () => ({
  data: {
    installed: true,
    organization: {
      id: '1',
      name: 'Organization 1'
    }
  }
});

const useUpdateCalDotComOrganization = () => ({
  mutate: (org: any) => console.log('Update organization:', org)
});

// Override the imports
import('@/hooks/useGetOrganizationMemberships').then(module => {
  Object.defineProperty(module, 'useGetOrganizationMemberships', {
    value: useGetOrganizationMemberships
  });
});

import('@/hooks/useGetCalDotComIntegration').then(module => {
  Object.defineProperty(module, 'useGetCalDotComIntegration', {
    value: useGetCalDotComIntegration
  });
});

import('@/hooks/useUpdateCalDotComOrganization').then(module => {
  Object.defineProperty(module, 'useUpdateCalDotComOrganization', {
    value: useUpdateCalDotComOrganization
  });
});

// Mock CAL_DOT_COM_APP_URL
(window as any).CAL_DOT_COM_APP_URL = 'https://cal.com/apps/campsite';

export default function ComponentPreview() {
  return (
    <QueryClientProvider client={queryClient}>
      <CalDotComIntegration />
    </QueryClientProvider>
  );
}