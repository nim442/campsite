import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/search/index';
import { AuthAppProviders } from '@/components/Providers/AuthAppProviders';
import { AppLayout } from '@/components/Layout/AppLayout';

export default function ComponentPreview() {
  const mockPageProps = {
    organization: {
      id: '123',
      name: 'Test Organization',
      slug: 'test-org'
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