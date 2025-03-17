import React from 'react';
import { useParentState } from '../useIframeState';
import { CopySecretDialog } from '../../components/OrgSettings/OauthApplications/CopySecretDialog';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    secret: {
      type: "string",
      value: "sk_test_123456789abcdefghijklmnopqrstuvwxyz",
      label: "Secret Value"
    },
    keyType: {
      type: "dropdown",
      value: "client_secret",
      options: ["api_key", "client_secret"],
      label: "Key Type"
    }
  });

  return (
    <CopySecretDialog
      open={state.open.value}
      onOpenChange={(open) => setState("open", open)}
      secret={state.secret.value}
      keyType={state.keyType.value as 'api_key' | 'client_secret'}
    />
  );
}