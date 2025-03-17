import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/posts/index';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';
import { AppLayout } from '@/components/Layout/AppLayout';

export default function ComponentPreview() {
  const [state] = useParentState({
    organizationName: {
      type: "string",
      value: "Demo Organization",
      label: "Organization Name"
    }
  });

  // Mock the useGetCurrentOrganization hook
  const mockOrganization = {
    name: state.organizationName.value
  };

  // Mock the hook
  const useGetCurrentOrganization = () => ({
    data: mockOrganization
  });

  // Override the global hook
  (global as any).useGetCurrentOrganization = useGetCurrentOrganization;

  const pageProps = {};

  return (
    <AuthAppProviders {...pageProps}>
      <AppLayout {...pageProps}>
        <ImportedComponent />
      </AppLayout>
    </AuthAppProviders>
  );
}