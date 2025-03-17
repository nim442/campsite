import React from 'react';
import { useParentState } from '../useIframeState';
import { MobileTabBar } from '../../components/NavigationBar/index';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

// Create a mock router context
const RouterContext = React.createContext({
  query: { org: 'demo-org' },
  isReady: true,
  asPath: '/demo-org/dashboard',
  pathname: '/demo-org/dashboard',
  route: '/demo-org/dashboard',
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
});

// Override the useRouter implementation
import Router from 'next/router';
Router.useRouter = () => React.useContext(RouterContext);

// Create a new QueryClient instance
const queryClient = new QueryClient();

export default function ComponentPreview() {
  const [state] = useParentState({
    // No props needed since component doesn't accept any props
  });

  return (
    <RouterContext.Provider value={RouterContext._currentValue}>
      <QueryNormalizerProvider 
        queryClient={queryClient}
        normalizerConfig={{
          normalize: true
        }}
      >
        <ScopeProvider>
          <MobileTabBar />
        </ScopeProvider>
      </QueryNormalizerProvider>
    </RouterContext.Provider>
  );
}