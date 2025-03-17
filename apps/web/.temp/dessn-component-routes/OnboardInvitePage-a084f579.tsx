import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/[org]/onboard/invite';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    projectId: {
      type: "string",
      value: "project-123",
      label: "Project ID"
    },
    showEmailInvites: {
      type: "boolean",
      value: false,
      label: "Show Email Invites"
    }
  });

  // Mock the next/router functionality
  const mockRouter = {
    query: { projectId: state.projectId.value },
    push: () => {}
  };

  // Mock the required context values
  const mockScope = {
    scope: "demo-org"
  };

  // Wrap with required providers and mock contexts
  return (
    <AuthAppProviders>
      <ImportedComponent />
    </AuthAppProviders>
  );
}