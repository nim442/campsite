import React from 'react';
import { useParentState } from '../useIframeState';
import { SidebarProjectsGroup } from '../../components/Sidebar/SidebarProjectsGroup';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    scope: {
      type: "string",
      value: "default-scope",
      label: "Scope"
    }
  });

  return (
    <ScopeProvider initialScope={state.scope.value}>
      <div className="w-64 bg-gray-100 h-screen">
        <SidebarProjectsGroup />
      </div>
    </ScopeProvider>
  );
}