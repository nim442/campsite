import React from 'react';
import { useParentState } from '../useIframeState';
import { InvitationForm } from '../../components/OrgSettings/InvitationForm';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    defaultCount: {
      type: "number",
      value: 2,
      label: "Default Number of Invitation Fields"
    }
  });

  return (
    <ScopeProvider>
      <InvitationForm 
        defaultCount={state.defaultCount.value}
        onInvitationsSent={() => console.log('Invitations sent!')}
      />
    </ScopeProvider>
  );
}