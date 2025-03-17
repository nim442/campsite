import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/projects/archived';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';
import { AppLayout } from '@/components/Layout/AppLayout';

export default function ComponentPreview() {
  // Since the component doesn't take any props, we don't need any state
  // But we'll wrap it in its required providers
  
  const pageProps = {
    // Minimal pageProps needed for providers
    org: 'demo-org'
  };

  return (
    <AuthAppProviders {...pageProps}>
      <AppLayout {...pageProps}>
        <ImportedComponent />
      </AppLayout>
    </AuthAppProviders>
  );
}