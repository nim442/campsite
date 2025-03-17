import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizationReactions } from '../../components/OrgSettings/OrganizationReactions/index';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    type: {
      type: "dropdown",
      value: "library",
      options: ["library", "packs"],
      label: "View Type"
    }
  });

  // Mock the scope context
  const mockScope = {
    scope: "demo-org",
    setScope: () => {}
  };

  return (
    <ScopeProvider value={mockScope}>
      <OrganizationReactions type={state.type.value as 'library' | 'packs'} />
    </ScopeProvider>
  );
}