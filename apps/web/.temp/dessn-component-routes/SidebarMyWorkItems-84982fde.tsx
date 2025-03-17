import React from 'react';
import { useParentState } from '../useIframeState';
import { SidebarMyWorkItems } from '../../components/Sidebar/SidebarMyWorkGroup';
import { Provider } from 'jotai';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    scope: {
      type: "string",
      value: "test-org",
      label: "Organization Scope"
    }
  });

  // Mock the necessary context values
  const mockScopeContext = {
    scope: state.scope.value,
    setScopeId: () => {},
    organization: { id: 'test-org', name: 'Test Org' },
    isLoading: false
  };

  return (
    <Provider>
      <ScopeProvider value={mockScopeContext}>
        <div style={{ width: '280px', background: '#f5f5f5', padding: '16px' }}>
          <SidebarMyWorkItems />
        </div>
      </ScopeProvider>
    </Provider>
  );
}