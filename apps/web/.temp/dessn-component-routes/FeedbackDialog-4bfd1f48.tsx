import React from 'react';
import { useParentState } from '../useIframeState';
import { FeedbackDialog } from '../../components/Feedback/FeedbackDialog';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';
import { NextRouter } from 'next/router';

// Create a mock router context
const RouterContext = React.createContext<NextRouter>({} as NextRouter);

// Create a mock router
const mockRouter: NextRouter = {
  asPath: '/test-org/dashboard',
  pathname: '',
  query: { org: 'test-org' },
  route: '',
  basePath: '',
  isReady: true,
  isLocaleDomain: false,
  isPreview: false,
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
};

// Override the useRouter implementation
import Router from 'next/router';
(Router as any).useRouter = () => mockRouter;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    }
  });

  return (
    <RouterContext.Provider value={mockRouter}>
      <ScopeProvider>
        <Provider>
          <FeedbackDialog />
        </Provider>
      </ScopeProvider>
    </RouterContext.Provider>
  );
}