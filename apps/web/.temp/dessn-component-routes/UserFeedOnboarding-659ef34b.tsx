import React from 'react';
import { useParentState } from '../useIframeState';
import { UserFeedOnboarding } from '../../components/Onboarding/UserFeedOnboarding';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a mock router
const mockRouter = {
  query: { org: 'test-org' },
  asPath: '/test-org/dashboard',
  isReady: true,
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  prefetch: () => Promise.resolve(),
  route: '/test-org/dashboard',
  pathname: '/test-org/dashboard',
  basePath: '',
  events: {
    on: () => {},
    off: () => {},
    emit: () => {}
  }
};

// Create the router context
const RouterContext = React.createContext(mockRouter);

// Create a hook to use the router context
const useRouter = () => React.useContext(RouterContext);

// Override the next/router module
window.__mocks = {
  'next/router': {
    useRouter
  },
  '@/hooks/useIsPWA': () => false,
  '@/hooks/useUpdatePreference': () => ({ mutate: () => {} }),
  '@/hooks/useGetCurrentUser': () => ({
    data: {
      preferences: {
        feature_tip_onboard_install_apps: 'false'
      }
    }
  }),
  '@/hooks/useGetCurrentOrganization': () => ({
    data: {
      viewer_is_admin: false
    }
  })
};

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOpen: {
      type: "boolean",
      value: true,
      label: "Is Open"
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RouterContext.Provider value={mockRouter}>
        <ScopeProvider>
          <UserFeedOnboarding />
        </ScopeProvider>
      </RouterContext.Provider>
    </QueryClientProvider>
  );
}