import React from 'react';
import { useParentState } from '../useIframeState';
import { DisableTwoFactorAuthenticationDialog } from '../../components/UserSettings/TwoFactorAuthentication/DisableTwoFactorAuthenticationDialog';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    }
  });

  return (
    <DisableTwoFactorAuthenticationDialog 
      open={state.open.value}
      onOpenChange={(open) => setState('open', open)}
      onComplete={(bool) => console.log('Complete:', bool)}
    />
  );
}