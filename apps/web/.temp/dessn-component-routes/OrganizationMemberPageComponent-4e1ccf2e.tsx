import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizationMemberPageComponent } from '../../components/OrganizationMember/OrganizationMemberPageComponent';
import { ScopeProvider } from '@/contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Mock data
const mockMemberData = {
  user: {
    id: '1',
    display_name: 'John Doe',
    email: 'john@example.com',
    username: 'johndoe',
    cover_photo_url: null,
    status: null
  },
  role: 'member',
  deactivated: false,
  status: null
};

const mockCurrentUser = {
  id: '2',
  username: 'currentuser',
  display_name: 'Current User',
  email: 'current@example.com'
};

// Mock next/router
import * as nextRouter from 'next/router';
const mockRouter = {
  route: '/',
  pathname: '/',
  query: { username: 'johndoe' },
  asPath: '/',
  basePath: '',
  isLocaleDomain: false,
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  prefetch: () => Promise.resolve(),
  beforePopState: () => {},
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  isFallback: false,
  isReady: true,
  isPreview: false
};

// Override the useRouter hook
Object.defineProperty(nextRouter, 'useRouter', {
  value: () => mockRouter,
  writable: true
});

// Create a wrapper component that sets up all the necessary data
function MockDataProvider({ children }) {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    // Set up all the query data
    const setupQueries = async () => {
      // Set data for organization member
      await queryClient.prefetchQuery(
        ['organization_member', 'organization', 'johndoe'],
        () => Promise.resolve(mockMemberData)
      );

      // Set data for current user
      await queryClient.prefetchQuery(
        ['currentUser'],
        () => Promise.resolve(mockCurrentUser)
      );

      // Set data for member posts
      await queryClient.prefetchQuery(
        ['memberPosts', { username: 'johndoe' }],
        () => Promise.resolve({ pages: [], pageParams: [] })
      );

      // Set data for features
      await queryClient.prefetchQuery(
        ['features'],
        () => Promise.resolve({ comfy_compact_layout: false })
      );

      // Set data for community check
      await queryClient.prefetchQuery(
        ['organizations', 'organization', 'isCommunity'],
        () => Promise.resolve(false)
      );

      // Also try alternative query key formats
      await queryClient.prefetchQuery(
        ['organizations', 'organization', 'members', 'johndoe'],
        () => Promise.resolve(mockMemberData)
      );

      setIsReady(true);
    };

    setupQueries();
  }, []);

  if (!isReady) {
    return null;
  }

  return children;
}

// Create the query client with specific configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: Infinity,
      cacheTime: Infinity,
      suspense: false,
    },
  },
});

export default function ComponentPreview() {
  const [state] = useParentState({
    scope: {
      type: "string",
      value: "organization",
      label: "Scope"
    }
  });

  // Create a mock scope context
  const mockScopeContext = {
    scope: state.scope.value,
    setScope: () => {},
    organization: {
      id: '1',
      name: 'Test Organization'
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <MockDataProvider>
        <ScopeProvider value={mockScopeContext}>
          <OrganizationMemberPageComponent />
        </ScopeProvider>
      </MockDataProvider>
    </QueryClientProvider>
  );
}