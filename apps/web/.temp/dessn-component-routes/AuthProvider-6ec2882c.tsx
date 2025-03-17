import React from 'react';
import { useParentState } from '../useIframeState';
import { AuthProvider } from '../../components/Providers/AuthProvider';
import { ScopeProvider } from '../../contexts/scope';

// Create a simple router context
const routerContext = React.createContext({});

// Mock Next.js router for preview
const MockNextRouter = ({ children }) => {
  const mockRouter = {
    query: { org: 'test-org' },
    isReady: true,
    asPath: '/test-org',
    pathname: '/test-org',
    route: '/test-org',
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
    isFallback: false
  };

  return <routerContext.Provider value={mockRouter}>{children}</routerContext.Provider>;
};

// Override the useRouter implementation for our preview
import Router from 'next/router';
Router.useRouter = () => {
  return {
    query: { org: 'test-org' },
    isReady: true,
    asPath: '/test-org',
    pathname: '/test-org',
    route: '/test-org',
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
    isFallback: false
  };
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    allowLoggedOut: {
      type: "boolean",
      value: false,
      label: "Allow Logged Out"
    }
  });

  return (
    <ScopeProvider>
      <AuthProvider allowLoggedOut={state.allowLoggedOut.value}>
        <div>Sample Child Content</div>
      </AuthProvider>
    </ScopeProvider>
  );
}