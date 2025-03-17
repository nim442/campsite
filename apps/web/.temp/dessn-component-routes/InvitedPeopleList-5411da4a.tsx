import React from 'react';
import { useParentState } from '../useIframeState';
import { InvitedPeopleList } from '../../components/People/InvitedPeopleList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScopeProvider } from '../../contexts/scope';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock data for the component
const mockInvitations = [
  {
    id: '1',
    email: 'user1@example.com',
    role: 'Admin',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    email: 'user2@example.com',
    role: 'Member',
    createdAt: new Date().toISOString(),
  },
];

// Mock the hooks
const mockUseGetOrganizationInvitations = () => ({
  data: { pages: [mockInvitations] },
  isLoading: false,
  isError: false,
  isFetching: false,
  isFetchingNextPage: false,
  hasNextPage: false,
  fetchNextPage: () => Promise.resolve(),
});

// Create a mock context provider
const MockProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        {children}
      </ScopeProvider>
    </QueryClientProvider>
  );
};

export default function ComponentPreview() {
  const [state] = useParentState({
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading"
    }
  });

  // Mock the required hooks
  React.mock = {
    useGetOrganizationInvitations: mockUseGetOrganizationInvitations,
    useViewerIsAdmin: () => true,
    useCanHover: () => true,
    useListNavigation: () => ({ selectItem: () => {} })
  };

  return (
    <MockProvider>
      <div className="p-4">
        <InvitedPeopleList />
      </div>
    </MockProvider>
  );
}