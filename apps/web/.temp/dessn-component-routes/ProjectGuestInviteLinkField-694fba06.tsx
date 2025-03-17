import React from 'react';
import { useParentState } from '../useIframeState';
import { ProjectGuestInviteLinkField } from '../../components/Projects/ProjectGuestInviteLinkField';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    projectId: {
      type: "string",
      value: "project-123",
      label: "Project ID"
    }
  });

  return (
    <ScopeProvider>
      <ProjectGuestInviteLinkField projectId={state.projectId.value} />
    </ScopeProvider>
  );
}