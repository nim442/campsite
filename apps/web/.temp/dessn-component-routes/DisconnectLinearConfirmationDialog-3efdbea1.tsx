import React from 'react';
import { useParentState } from '../useIframeState';
import { DisconnectLinearConfirmationDialog } from '../../components/OrgSettings/DisconnectLinearIntegrationDialog';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScopeProvider } from '../../contexts/scope';
import { createContext } from 'react';

const queryClient = new QueryClient();

// Create a mock router context
const MockRouterContext = createContext<any>(null);

// Mock router for the preview
const mockRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/settings',
  pathname: '',
  route: '',
  basePath: '',
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  prefetch: () => Promise.resolve(),
  beforePopState: () => {},
  isFallback: false,
};

export default function ComponentPreview() {
  return (
    <MockRouterContext.Provider value={mockRouter}>
      <QueryClientProvider client={queryClient}>
        <ScopeProvider>
          <DisconnectLinearConfirmationDialog />
        </ScopeProvider>
      </QueryClientProvider>
    </MockRouterContext.Provider>
  );
}