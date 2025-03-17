import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/new/index';
import AuthAppProviders from '@/components/Providers/AuthAppProviders';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    suggestedOrganizations: {
      type: "object",
      value: [{
        id: "1",
        name: "Example Org",
        slug: "example-org",
        avatar_urls: [],
        requested: false
      }],
      label: "Suggested Organizations"
    },
    organizationInvitations: {
      type: "object",
      value: [{
        id: "1",
        organization: {
          name: "Invited Org",
          slug: "invited-org",
          avatar_urls: []
        },
        token: "example-token"
      }],
      label: "Organization Invitations"
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Loading State"
    }
  });

  return (
    <AuthAppProviders>
      <ImportedComponent />
    </AuthAppProviders>
  );
}