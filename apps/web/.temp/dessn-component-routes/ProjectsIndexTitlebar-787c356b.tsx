import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectsIndexTitlebar } from '../../components/Projects/ProjectsIndexTitlebar';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    scope: {
      type: "string",
      value: "org-123",
      label: "Scope"
    }
  });

  // Mock the organization data context
  const mockOrganization = {
    viewer_can_see_new_project_button: true
  };

  // Mock the useGetCurrentOrganization hook
  const useGetCurrentOrganization = () => ({
    data: mockOrganization
  });

  return (
    <ScopeProvider initialScope={state.scope.value}>
      <ProjectsIndexTitlebar />
    </ScopeProvider>
  );
}