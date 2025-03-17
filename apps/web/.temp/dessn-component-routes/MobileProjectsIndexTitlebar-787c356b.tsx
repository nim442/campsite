import React from 'react';
import { useParentState } from '../useIframeState';
import { MobileProjectsIndexTitlebar } from '../../components/Projects/ProjectsIndexTitlebar';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    scope: {
      type: "string",
      value: "org-123",
      label: "Scope"
    }
  });

  // Mock the router context that the component expects
  const mockRouter = {
    pathname: '/[org]/projects',
    push: () => {},
    query: { org: 'test-org' }
  };

  return (
    <ScopeProvider initialScope={state.scope.value}>
      <MobileProjectsIndexTitlebar />
    </ScopeProvider>
  );
}