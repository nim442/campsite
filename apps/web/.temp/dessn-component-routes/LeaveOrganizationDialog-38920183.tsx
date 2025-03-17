import React from 'react';
import { useParentState } from '../useIframeState';
import { LeaveOrganizationDialog } from '../../components/UserSettings/OrganizationsTable/LeaveOrganizationDialog';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    organizationName: {
      type: "string",
      value: "Acme Corp",
      label: "Organization Name"
    },
    organizationSlug: {
      type: "string",
      value: "acme-corp",
      label: "Organization Slug"
    },
    canLeave: {
      type: "boolean",
      value: true,
      label: "Can Leave Organization"
    }
  });

  const mockOrganization = {
    id: "123",
    name: state.organizationName.value,
    slug: state.organizationSlug.value,
    viewer_can_leave: state.canLeave.value,
    viewer_is_admin: false,
    avatar_url: "https://placekitten.com/200/200",
    avatar_urls: {
      xs: "https://placekitten.com/50/50",
      sm: "https://placekitten.com/100/100",
      base: "https://placekitten.com/200/200",
      lg: "https://placekitten.com/300/300",
      xl: "https://placekitten.com/400/400",
      xxl: "https://placekitten.com/500/500"
    }
  };

  return (
    <ScopeProvider>
      <LeaveOrganizationDialog
        organization={mockOrganization}
        open={state.open.value}
        onOpenChange={(open) => setState('open', open)}
      />
    </ScopeProvider>
  );
}