import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/notes/index';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';
import { AppLayout } from '@/components/Layout/AppLayout';

export default function ComponentPreview() {
  const mockPageProps = {
    org: 'demo-org',
    user: {
      id: '1',
      name: 'Demo User',
      email: 'demo@example.com'
    }
  };

  return (
    <AuthAppProviders {...mockPageProps}>
      <AppLayout {...mockPageProps}>
        <ImportedComponent />
      </AppLayout>
    </AuthAppProviders>
  );
}