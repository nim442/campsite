import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizationInviteLinkField } from '../../components/People/OrganizationInviteLinkField';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createContext } from 'react';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Create mock Next Router Context
const NextRouterContext = createContext({});
const mockRouterValue = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/people',
  pathname: '/[org]/people',
  route: '/[org]/people',
  basePath: '',
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  }
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    onboarding: {
      type: "boolean",
      value: false,
      label: "Onboarding Mode"
    }
  });

  // Mock the API response
  React.useEffect(() => {
    queryClient.setQueryData(
      ['organizations', 'test-org', 'invitation-url'],
      {
        invitation_url: 'https://example.com/invite/test-org'
      }
    );
  }, []);

  return (
    <NextRouterContext.Provider value={mockRouterValue}>
      <QueryClientProvider client={queryClient}>
        <ScopeProvider>
          <OrganizationInviteLinkField 
            onboarding={state.onboarding.value}
          />
        </ScopeProvider>
      </QueryClientProvider>
    </NextRouterContext.Provider>
  );
}

// Mock the Next.js useRouter hook
import Router from 'next/router';
if (!global.Router) {
  global.Router = {
    router: mockRouterValue,
    readyCallbacks: [],
    ready(cb) {
      if (this.router) return cb();
      this.readyCallbacks.push(cb);
    },
  };
}