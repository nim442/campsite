import React from 'react';
import { useParentState } from '../useIframeState';
import { PeopleList } from '../../components/People/PeopleList';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';
import { NextRouter } from 'next/router';

// Create mock router context
const RouterContext = React.createContext<NextRouter>({} as NextRouter);

// Create mock router object
const mockRouter: NextRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/people',
  basePath: '',
  pathname: '/test-org/people',
  route: '/test-org/people',
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  forward: () => {},
  prefetch: () => Promise.resolve(),
  beforePopState: () => {},
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  isFallback: false,
  isLocaleDomain: false,
  isPreview: false,
  isReady: true
};

export default function ComponentPreview() {
  const [state] = useParentState({
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading"
    }
  });

  return (
    <RouterContext.Provider value={mockRouter}>
      <Provider>
        <ScopeProvider>
          <div className="p-4">
            <PeopleList />
          </div>
        </ScopeProvider>
      </Provider>
    </RouterContext.Provider>
  );
}