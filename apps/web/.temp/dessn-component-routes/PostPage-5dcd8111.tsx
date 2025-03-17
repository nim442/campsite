import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/posts/[postId]/versions/index';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';
import { AppLayout } from '@/components/Layout/AppLayout';

export default function ComponentPreview() {
  // Since the component doesn't take any direct props, we don't need state management
  // But we need to wrap it in its required providers

  return (
    <AuthAppProviders>
      <AppLayout>
        <ImportedComponent />
      </AppLayout>
    </AuthAppProviders>
  );
}