import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/drafts/index';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';
import { AppLayout } from '@/components/Layout/AppLayout';

export default function ComponentPreview() {
  const pageProps = {
    org: 'demo-org',
    user: {
      id: '1',
      name: 'Test User',
      email: 'test@example.com'
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