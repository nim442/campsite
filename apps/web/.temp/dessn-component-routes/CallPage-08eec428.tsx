import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/calls/[callId]/index';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';
import { AppLayout } from '@/components/Layout/AppLayout';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    callId: {
      type: "string",
      value: "example-call-123",
      label: "Call ID"
    }
  });

  const mockPageProps = {
    user: {
      id: "user-123",
      name: "Test User",
      email: "test@example.com"
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