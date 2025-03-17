import React from 'react';
import { useParentState } from '../useIframeState';
import { PostComposer } from '../../components/PostComposer/PostComposer';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';

// Create a mock router context
const RouterContext = React.createContext({});

const mockRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/posts',
  pathname: '/test-org/posts',
  route: '/test-org/posts',
  basePath: '',
  push: async () => true,
  replace: async () => true,
  reload: () => {},
  back: () => {},
  prefetch: async () => {},
  beforePopState: () => {},
  events: {
    on: () => {},
    off: () => {},
    emit: () => {}
  }
};

export default function ComponentPreview() {
  const [state] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Open"
    }
  });

  return (
    <RouterContext.Provider value={mockRouter}>
      <ScopeProvider>
        <Provider>
          <PostComposer />
        </Provider>
      </ScopeProvider>
    </RouterContext.Provider>
  );
}

// Override the useRouter hook
import * as nextRouter from 'next/router';
Object.defineProperty(nextRouter, 'useRouter', {
  configurable: true,
  value: () => mockRouter
});