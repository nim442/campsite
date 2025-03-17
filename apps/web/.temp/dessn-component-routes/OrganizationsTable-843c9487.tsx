import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizationsTable } from '../../components/UserSettings/OrganizationsTable/OrganizationsTable';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create the mock data
const mockData = [
  {
    organization: {
      id: '1',
      name: 'Acme Corp',
      slug: 'acme',
      avatar_urls: ['https://placekitten.com/100/100'],
      viewer_is_admin: true,
      viewer_can_leave: true,
    },
  },
  {
    organization: {
      id: '2',
      name: 'Startup Inc',
      slug: 'startup',
      avatar_urls: ['https://placekitten.com/100/100'],
      viewer_is_admin: false,
      viewer_can_leave: true,
    },
  },
];

// Mock the API client and query
const mockQuery = {
  requestKey: () => ['organizationMemberships'],
  request: () => Promise.resolve(mockData),
};

// Create a new QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity,
      gcTime: Infinity,
    },
  },
});

// Prefetch the data using the same query key
queryClient.setQueryData(mockQuery.requestKey(), mockData);

// Mock the current user
const mockCurrentUser = {
  logged_in: true,
};

// Set the current user data
queryClient.setQueryData(['currentUser'], mockCurrentUser);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isLoading: {
      type: 'boolean',
      value: false,
      label: 'Is Loading',
    },
    showEmpty: {
      type: 'boolean',
      value: false,
      label: 'Show Empty State',
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-4">
        <OrganizationsTable />
      </div>
    </QueryClientProvider>
  );
}