import React from 'react';
import { useParentState } from '../useIframeState';
import { Project404 } from '../../components/Projects/Project404';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    scope: {
      type: "string",
      value: "demo-org",
      label: "Scope"
    }
  });

  // Mock the organization data that would normally come from useGetCurrentOrganization
  const mockOrganization = {
    viewer_can_see_projects_index: true
  };

  return (
    <ScopeProvider initialScope={state.scope.value}>
      <Project404 />
    </ScopeProvider>
  );
}