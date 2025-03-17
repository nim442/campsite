import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/tags/index';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';
import { AppLayout } from '@/components/Layout/AppLayout';

export default function ComponentPreview() {
  const pageProps = {
    org: 'demo-org',
    user: {
      id: '1',
      email: 'test@example.com',
      name: 'Test User'
    }
  };

  return (
    <AuthAppProviders {...pageProps}>
      <AppLayout {...pageProps}>
        <ImportedComponent />
      </AppLayout>
    </AuthAppProviders>
  );
}