import React from 'react';
import { useParentState } from '../useIframeState';
import { DisableSSODialog } from '../../components/OrgSettings/SingleSignOn/DisableSSODialog';
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
      <DisableSSODialog 
        open={state.open.value}
        onOpenChange={(bool) => setState('open', bool)}
        onComplete={() => console.log('Dialog completed')}
      />
    </ScopeProvider>
  );
}