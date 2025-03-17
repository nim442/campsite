import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/digests/[digestId]/index';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';
import { AppLayout } from '@/components/Layout/AppLayout';

export default function ComponentPreview() {
  const [state] = useParentState({
    org: {
      type: "string",
      value: "test-org",
      label: "Organization"
    },
    digestId: {
      type: "string",
      value: "test-digest",
      label: "Digest ID"
    }
  });

  return (
    <AuthAppProviders>
      <AppLayout>
        <ImportedComponent />
      </AppLayout>
    </AuthAppProviders>
  );
}