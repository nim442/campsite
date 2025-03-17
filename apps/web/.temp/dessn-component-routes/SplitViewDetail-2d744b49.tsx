import React from 'react';
import { useParentState } from '../useIframeState';
import { SplitViewDetail } from '../../components/SplitView/SplitViewDetail';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';
import { NextRouter } from 'next/router';

// Create a mock router context with the shape of NextRouter
const RouterContext = React.createContext<NextRouter>({} as NextRouter);

// Mock router for the ScopeProvider
const mockRouter: Partial<NextRouter> = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/dashboard',
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
  const [state, setState] = useParentState({
    fallbackWidth: {
      type: "string",
      value: "300px",
      label: "Fallback Width"
    },
    showFallback: {
      type: "boolean",
      value: true,
      label: "Show Fallback"
    }
  });

  return (
    <RouterContext.Provider value={mockRouter as NextRouter}>
      <ScopeProvider>
        <Provider>
          <SplitViewDetail 
            fallbackWidth={state.fallbackWidth.value as `${number}px`}
            fallback={state.showFallback.value ? <div className="p-4">Fallback Content</div> : undefined}
          />
        </Provider>
      </ScopeProvider>
    </RouterContext.Provider>
  );
}