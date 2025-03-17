import React from 'react';
import { useParentState } from '../useIframeState';
import { CreateCustomReaction } from '../../components/OrgSettings/OrganizationReactions/CreateCustomReaction';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  return (
    <ScopeProvider>
      <CreateCustomReaction />
    </ScopeProvider>
  );
}