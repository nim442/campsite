import React from 'react';
import { useParentState } from '../useIframeState';
import { OauthAppsTable } from '../../components/OrgSettings/OauthApplications/OauthAppsTable';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    scope: {
      type: "string",
      value: "test-org",
      label: "Scope"
    }
  });

  return (
    <ScopeProvider initialScope={state.scope.value}>
      <OauthAppsTable />
    </ScopeProvider>
  );
}