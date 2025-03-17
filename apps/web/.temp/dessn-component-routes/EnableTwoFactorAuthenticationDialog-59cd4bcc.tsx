import React from 'react';
import { useParentState } from '../useIframeState';
import { EnableTwoFactorAuthenticationDialog } from '../../components/UserSettings/TwoFactorAuthentication/EnableTwoFactorAuthenticationDialog';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    provisioningUri: {
      type: "string",
      value: "otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP&issuer=Example",
      label: "Provisioning URI"
    }
  });

  return (
    <EnableTwoFactorAuthenticationDialog
      open={state.open.value}
      onOpenChange={(value) => setState("open", value)}
      onComplete={(value) => console.log("Complete:", value)}
      provisioningUri={state.provisioningUri.value}
    />
  );
}