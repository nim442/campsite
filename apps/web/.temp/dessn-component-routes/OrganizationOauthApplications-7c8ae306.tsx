import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useParentState } from '../useIframeState';
import { OrganizationOauthApplications } from '../../components/OrgSettings/OauthApplications/index';
import * as SettingsSection from '@/components/SettingsSection';
import { ScopeProvider } from '@/contexts/scope';

// Create a client
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
      <ScopeProvider>
        <OrganizationOauthApplications />
      </ScopeProvider>
    </QueryClientProvider>
  );
}