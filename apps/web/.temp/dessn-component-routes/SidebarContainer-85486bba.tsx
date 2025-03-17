import React from 'react';
import { useParentState } from '../useIframeState';
import { SidebarContainer } from '../../components/Sidebar/index';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';

// Create a mock router context
const RouterContext = React.createContext({
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org',
  pathname: '/[org]',
  route: '/[org]',
  basePath: '',
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  prefetch: () => Promise.resolve(),
  beforePopState: () => {},
  events: {
    on: () => {},
    off: () => {},
    emit: () => {}
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  isPreview: false
});

export default function ComponentPreview() {
  const [state] = useParentState({
    collapsed: {
      type: "boolean",
      value: false,
      label: "Sidebar Collapsed"
    }
  });

  return (
    <RouterContext.Provider value={RouterContext._currentValue}>
      <Provider>
        <ScopeProvider>
          <div className="h-screen w-screen">
            <SidebarContainer />
          </div>
        </ScopeProvider>
      </Provider>
    </RouterContext.Provider>
  );
}