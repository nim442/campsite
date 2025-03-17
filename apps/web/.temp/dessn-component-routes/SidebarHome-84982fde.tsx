import React from 'react';
import { useParentState } from '../useIframeState';
import { SidebarHome } from '../../components/Sidebar/SidebarMyWorkGroup';
import { ScopeProvider } from '@/contexts/scope';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  const [state] = useParentState({
    scope: {
      type: "string",
      value: "test-org",
      label: "Scope"
    }
  });

  const mockScope = {
    scope: state.scope.value,
    setScopeId: () => {},
    isLoading: false
  };

  return (
    <Provider>
      <ScopeProvider value={mockScope}>
        <SidebarHome />
      </ScopeProvider>
    </Provider>
  );
}