import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizationMember404 } from '../../components/OrganizationMember/Member404';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    scope: {
      type: "string",
      value: "organization-123",
      label: "Scope ID"
    }
  });

  return (
    <ScopeProvider initialScope={state.scope.value}>
      <OrganizationMember404 />
    </ScopeProvider>
  );
}