import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizationInvitationsTable } from '../../components/UserSettings/OrganizationInvitationsTable';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Mock data for the hooks
const mockInvitations = [
  {
    id: '1',
    token: 'mock-token-1',
    organization: {
      name: 'Test Organization 1',
      slug: 'test-org-1',
      avatar_urls: ['https://via.placeholder.com/150'],
    },
  },
  {
    id: '2',
    token: 'mock-token-2',
    organization: {
      name: 'Test Organization 2',
      slug: 'test-org-2',
      avatar_urls: ['https://via.placeholder.com/150'],
    },
  },
];

// Create mock hooks
const useGetCurrentUserOrganizationInvitations = () => ({
  data: mockInvitations,
  isLoading: false,
  error: null,
});

const useAcceptOrganizationInvitation = () => ({
  mutate: (params: any) => console.log('Accept invitation:', params),
  isLoading: false,
});

const useDeclineOrganizationInvitation = () => ({
  mutate: (params: any) => console.log('Decline invitation:', params),
  isLoading: false,
});

// Create a mock context for the hooks
const MockHooksContext = React.createContext({
  useGetCurrentUserOrganizationInvitations,
  useAcceptOrganizationInvitation,
  useDeclineOrganizationInvitation,
});

// Wrap the component with the mock context
const OrganizationInvitationsTableWithMocks = () => {
  return (
    <MockHooksContext.Provider
      value={{
        useGetCurrentUserOrganizationInvitations,
        useAcceptOrganizationInvitation,
        useDeclineOrganizationInvitation,
      }}
    >
      <OrganizationInvitationsTable />
    </MockHooksContext.Provider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showInvitations: {
      type: 'boolean',
      value: true,
      label: 'Show Invitations',
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <OrganizationInvitationsTableWithMocks />
    </QueryClientProvider>
  );
}