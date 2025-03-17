import React from 'react';
import { useParentState } from '../useIframeState';
import { FloatingNewCallButton } from '../../components/FloatingButtons/NewCall';
import { ScopeProvider } from '../../contexts/scope';
import Router from 'next/router';

// Create a mock router context
const MockRouterContext = React.createContext({});
const mockRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/calls',
  pathname: '/test-org/calls',
  route: '/test-org/calls',
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

// Override the router before rendering
if (typeof window !== 'undefined') {
  (Router as any).router = mockRouter;
}

export default function ComponentPreview() {
  return (
    <MockRouterContext.Provider value={mockRouter}>
      <ScopeProvider>
        <FloatingNewCallButton />
      </ScopeProvider>
    </MockRouterContext.Provider>
  );
}