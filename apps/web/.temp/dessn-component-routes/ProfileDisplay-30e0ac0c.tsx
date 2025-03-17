import React from 'react';
import { useParentState } from '../useIframeState';
import { ProfileDisplay } from '../../components/OrgSettings/ProfileDisplay';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    scope: {
      type: "string",
      value: "my-organization",
      label: "Organization Scope"
    },
    isAdmin: {
      type: "boolean",
      value: true,
      label: "Is Admin"
    }
  });

  // Mock the necessary context and hooks
  const mockRouter = {
    push: async () => {},
  };

  // Mock the hooks used in the component
  const mockHooks = {
    useGetCurrentOrganization: () => ({
      data: {
        name: "Test Organization",
        avatar_url: "https://placekitten.com/200/200",
      }
    }),
    useUpdateOrganization: () => ({
      mutate: async () => {},
      isPending: false,
      isError: false,
    }),
    useViewerIsAdmin: () => state.isAdmin.value,
  };

  return (
    <ScopeProvider initialScope={state.scope.value}>
      <ProfileDisplay />
    </ScopeProvider>
  );
}