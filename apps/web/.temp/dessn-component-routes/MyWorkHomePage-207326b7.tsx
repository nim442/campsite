import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/home/index';
// Mock required providers and contexts
const MockRouter = {
  push: () => {},
  query: { org: 'test-org' }
};

const MockScope = {
  scope: 'test-org'
};

// Mock context providers
const ScopeContext = React.createContext(MockScope);
const RouterContext = React.createContext(MockRouter);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isRefetching: {
      type: "boolean",
      value: false,
      label: "Is Refetching"
    },
    organizationName: {
      type: "string",
      value: "Test Organization",
      label: "Organization Name"
    },
    hasDrafts: {
      type: "boolean",
      value: true,
      label: "Has Draft Posts"
    }
  });

  // Mock providers wrapper
  const MockProviders = ({ children }) => (
    <RouterContext.Provider value={MockRouter}>
      <ScopeContext.Provider value={MockScope}>
        {children}
      </ScopeContext.Provider>
    </RouterContext.Provider>
  );

  return (
    <MockProviders>
      <ImportedComponent />
    </MockProviders>
  );
}