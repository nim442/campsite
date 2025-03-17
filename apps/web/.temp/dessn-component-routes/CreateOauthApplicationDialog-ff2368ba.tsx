import React from 'react';
import { useParentState } from '../useIframeState';
import { CreateOauthApplicationDialog } from '../../components/OrgSettings/OauthApplications/OauthApplicationFormDialog';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    }
  });

  return (
    <ScopeProvider>
      <CreateOauthApplicationDialog 
        open={state.open.value}
        onOpenChange={(open) => setState('open', open)}
      />
    </ScopeProvider>
  );
}