import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/chat/new';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';
import { AppLayout } from '@/components/Layout/AppLayout';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    username: {
      type: "string",
      value: "testuser",
      label: "Username"
    },
    oauthApplicationId: {
      type: "string",
      value: "oauth123",
      label: "OAuth Application ID"
    },
    showIntegration: {
      type: "boolean",
      value: false,
      label: "Show Integration Thread"
    }
  });

  const mockRouter = {
    query: {
      username: state.showIntegration.value ? undefined : state.username.value,
      oauth_application_id: state.showIntegration.value ? state.oauthApplicationId.value : undefined
    }
  };

  return (
    <AuthAppProviders>
      <AppLayout>
        <ImportedComponent router={mockRouter} />
      </AppLayout>
    </AuthAppProviders>
  );
}