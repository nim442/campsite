import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/people/[username]';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScopeProvider } from '../../contexts/scope';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const mockMemberData = {
  id: '123',
  user: {
    display_name: 'John Doe',
  },
};

export default function ComponentPreview() {
  const [state] = useParentState({
    username: {
      type: "string",
      value: "johndoe",
      label: "Username"
    }
  });

  // Mock the next/router
  const mockRouter = {
    query: { 
      username: state.username.value,
      org: 'test-org' // Added org parameter which is required by ScopeProvider
    },
    push: () => {},
    pathname: '',
    asPath: '',
    isReady: true, // Added isReady flag which is used by ScopeProvider
    events: {
      on: () => {},
      off: () => {},
    },
  };

  // Mock useGetOrganizationMember hook
  const mockUseGetOrganizationMember = () => ({
    data: mockMemberData,
    isLoading: false,
    isError: false,
  });

  // Override the actual hooks with mocked versions
  React.useRouter = () => mockRouter;
  React.useGetOrganizationMember = mockUseGetOrganizationMember;

  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        <ImportedComponent />
      </ScopeProvider>
    </QueryClientProvider>
  );
}