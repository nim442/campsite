import React from 'react';
import { useParentState } from '../useIframeState';
import { TwoFactorAuthentication } from '../../components/UserSettings/TwoFactorAuthentication/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Mock modules directly instead of using Jest
const mockCurrentUser = {
  two_factor_enabled: false,
  managed: false,
};

// Create mock modules
const mockModules = {
  'hooks/useGetCurrentUser': {
    useGetCurrentUser: () => ({
      data: mockCurrentUser,
    }),
  },
  '@/hooks/useCreateTwoFactorAuthenticationUri': {
    useCreateTwoFactorAuthenticationUri: () => ({
      mutate: (_, { onSuccess }) => {
        onSuccess({ two_factor_provisioning_uri: 'mock-uri' });
      },
    }),
  },
};

// Add mocks to window for module resolution
window.__mocks__ = mockModules;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    twoFactorEnabled: {
      type: 'boolean',
      value: false,
      label: 'Two Factor Enabled',
    },
    managed: {
      type: 'boolean',
      value: false,
      label: 'Is Managed User',
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <TwoFactorAuthentication />
    </QueryClientProvider>
  );
}