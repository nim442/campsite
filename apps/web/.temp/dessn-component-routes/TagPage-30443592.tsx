import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/tags/[tagName]';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScopeProvider } from '../../contexts/scope';
import AuthAppProviders from '../../components/Providers/AuthAppProviders';
import { AppLayout } from '../../components/Layout/AppLayout';
import * as ReactQuery from '@tanstack/react-query';

// Create a mock function
const createMockFunction = (implementation) => {
  const fn = (...args) => implementation(...args);
  return fn;
};

// Mock useQuery hook
const originalUseQuery = ReactQuery.useQuery;
ReactQuery.useQuery = createMockFunction((options) => {
  // Return mock data based on the query key
  const queryKey = Array.isArray(options.queryKey) ? options.queryKey : [options.queryKey];
  
  if (queryKey[0] === 'users' && queryKey[1] === 'me') {
    return {
      data: {
        id: '1',
        email: 'example@example.com',
        name: 'Example User',
        username: 'example',
        avatar_url: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        preferences: {},
        role: 'member',
        logged_in: true,
      },
      isLoading: false,
      isError: false,
      error: null,
    };
  }

  if (queryKey[0] === 'organizations' && queryKey[2] === 'tags') {
    return {
      data: {
        id: '1',
        name: 'example-tag',
        description: 'Example tag description',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      isLoading: false,
      isError: false,
      error: null,
    };
  }

  if (queryKey[0] === 'organizations' && queryKey[1] === 'example-org') {
    return {
      data: {
        id: '1',
        name: 'Example Org',
        slug: 'example-org',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      isLoading: false,
      isError: false,
      error: null,
    };
  }

  if (queryKey[0] === 'organizations' && queryKey[1] === 'memberships') {
    return {
      data: {
        items: [{
          id: '1',
          organization_id: '1',
          user_id: '1',
          role: 'member',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          organization: {
            id: '1',
            name: 'Example Org',
            slug: 'example-org',
          }
        }],
        total_count: 1,
      },
      isLoading: false,
      isError: false,
      error: null,
    };
  }

  // Default fallback for other queries
  return {
    data: null,
    isLoading: false,
    isError: false,
    error: null,
  };
});

// Mock the next/router
const mockRouter = {
  query: { tagName: 'example-tag', org: 'example-org' },
  push: () => {},
  pathname: '/example-org/tags/example-tag',
  asPath: '/example-org/tags/example-tag',
  isReady: true,
  events: {
    on: () => {},
    off: () => {},
  },
};

// Create a new QueryClient
const queryClientInstance = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      gcTime: Infinity,
      suspense: false,
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    tagName: {
      type: "string",
      value: "example-tag",
      label: "Tag Name"
    }
  });

  React.useEffect(() => {
    // Save original replace function
    const originalReplace = window.location.replace;
    
    // Mock replace function
    window.location.replace = function(url) {
      console.log('Redirect prevented:', url);
      return undefined;
    };

    // Cleanup
    return () => {
      window.location.replace = originalReplace;
      ReactQuery.useQuery = originalUseQuery;
    };
  }, []);

  // Mock the useRouter hook
  React.useState = () => [mockRouter];

  return (
    <QueryClientProvider client={queryClientInstance}>
      <AuthAppProviders allowLoggedOut={false}>
        <ScopeProvider>
          <AppLayout>
            <ImportedComponent />
          </AppLayout>
        </ScopeProvider>
      </AuthAppProviders>
    </QueryClientProvider>
  );
}