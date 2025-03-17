import React from 'react';
import { useParentState } from '../useIframeState';
import { EnableSSODialog } from '../../components/OrgSettings/SingleSignOn/EnableSSODialog';
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
      <EnableSSODialog 
        open={state.open.value}
        onOpenChange={(bool) => setState("open", bool)}
        onComplete={() => console.log("SSO Enable completed")}
      />
    </ScopeProvider>
  );
}