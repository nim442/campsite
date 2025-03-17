import React from 'react';
import { useParentState } from '../useIframeState';
import { CustomReactionsPacks } from '../../components/OrgSettings/OrganizationReactions/CustomReactionsPacks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScopeProvider } from '../../contexts/scope';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const mockPacks = [
  {
    name: "Sample Pack 1",
    installed: false,
    items: [
      {
        name: "emoji1",
        file_url: "https://placekitten.com/32/32",
      },
      {
        name: "emoji2",
        file_url: "https://placekitten.com/32/32",
      }
    ]
  },
  {
    name: "Sample Pack 2",
    installed: true,
    items: [
      {
        name: "emoji3",
        file_url: "https://placekitten.com/32/32",
      },
      {
        name: "emoji4",
        file_url: "https://placekitten.com/32/32",
      }
    ]
  }
];

// Mock router object
const mockRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/settings',
  pathname: '/test-org/settings',
  route: '/test-org/settings',
  basePath: '',
  events: {
    on: () => {},
    off: () => {},
    emit: () => {}
  },
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  prefetch: () => Promise.resolve(),
  beforePopState: () => {},
  isFallback: false,
  isLocaleDomain: false,
  isPreview: false
};

// Mock the useRouter hook
const useRouter = () => mockRouter;

// Override the useRouter import
React.useRouter = useRouter;

export default function ComponentPreview() {
  const [state] = useParentState({
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading"
    }
  });

  // Mock the hooks used in the component
  const useGetCustomReactionsPacks = () => ({
    data: mockPacks,
    isLoading: state.isLoading.value
  });

  const useCreateCustomReactionsPack = () => ({
    mutate: () => {},
    isPending: false
  });

  const useDeleteCustomReactionsPack = () => ({
    mutate: () => {},
    isPending: false
  });

  // Mock the hooks
  React.mock = {
    useGetCustomReactionsPacks,
    useCreateCustomReactionsPack,
    useDeleteCustomReactionsPack
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        <CustomReactionsPacks />
      </ScopeProvider>
    </QueryClientProvider>
  );
}