import React from 'react';
import { useParentState } from '../useIframeState';
import { PersonalCallLinkDialog } from '../../components/Calls/PersonalCallLinkDialog';
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
      <PersonalCallLinkDialog 
        open={state.open.value}
        onOpenChange={(open) => setState('open', open)}
      />
    </ScopeProvider>
  );
}