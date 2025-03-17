import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/settings/integrations';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Prefetch the data
queryClient.setQueryData(['currentOrganization'], {
  name: "Test Organization"
});

queryClient.setQueryData(['oauthApplications'], []);

export default function ComponentPreview() {
  const [state] = useParentState({
    organizationName: {
      type: "string",
      value: "Test Organization",
      label: "Organization Name"
    },
    isAdmin: {
      type: "boolean",
      value: true,
      label: "Is Admin"
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AuthAppProviders>
        <ImportedComponent />
      </AuthAppProviders>
    </QueryClientProvider>
  );
}