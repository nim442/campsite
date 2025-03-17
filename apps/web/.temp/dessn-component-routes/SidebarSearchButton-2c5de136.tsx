import React from 'react';
import { useParentState } from '../useIframeState';
import { SidebarSearchButton } from '../../components/SidebarSearchButton/SidebarSearchButton';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    scope: {
      type: "string",
      value: "default",
      label: "Scope"
    }
  });

  return (
    <ScopeProvider initialScope={state.scope.value}>
      <SidebarSearchButton />
    </ScopeProvider>
  );
}