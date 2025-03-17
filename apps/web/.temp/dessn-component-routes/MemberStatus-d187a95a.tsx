import React from 'react';
import { useParentState } from '../useIframeState';
import { MemberStatus } from '../../components/MemberStatus';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    asTrigger: {
      type: "boolean",
      value: false,
      label: "As Trigger"
    },
    size: {
      type: "dropdown",
      value: "base",
      options: ["sm", "base", "lg", "xl"],
      label: "Size"
    },
    status: {
      type: "object",
      value: {
        message: "Working on a new feature",
        emoji: "💻",
        expiration_setting: "4h",
        expires_at: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(),
        pause_notifications: false,
        expires_in: "4h"
      },
      label: "Status"
    }
  });

  return (
    <MemberStatus
      disabled={state.disabled.value}
      asTrigger={state.asTrigger.value}
      size={state.size.value as "sm" | "base" | "lg" | "xl"}
      status={state.status.value}
    />
  );
}