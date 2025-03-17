import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/auth/desktop';
import AppProviders from '@/components/Providers/AppProviders';

export default function ComponentPreview() {
  const [state] = useParentState({
    email: {
      type: "string",
      value: "test@example.com",
      label: "Email"
    },
    token: {
      type: "string",
      value: "sample-token-123",
      label: "Token"
    }
  });

  // Mock router
  const mockRouter = {
    query: {
      email: state.email.value,
      token: state.token.value
    },
    push: () => {}
  };

  // Mock next/router
  const RouterContext = React.createContext({});
  const RouterProvider = RouterContext.Provider;

  return (
    <RouterProvider value={mockRouter}>
      <AppProviders>
        <ImportedComponent />
      </AppProviders>
    </RouterProvider>
  );
}