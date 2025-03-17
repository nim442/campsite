import React from 'react';
import { useParentState } from '../useIframeState';
import { SidebarOrgSwitcher } from '../../components/Sidebar/SidebarOrgSwitcher';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    collapsed: {
      type: "boolean",
      value: false,
      label: "Collapsed"
    }
  });

  // Mock the necessary providers and data
  const mockScope = {
    scope: "test-org",
    setScope: () => {}
  };

  return (
    <Provider>
      <ScopeProvider value={mockScope}>
        <div className="h-screen">
          <SidebarOrgSwitcher />
        </div>
      </ScopeProvider>
    </Provider>
  );
}