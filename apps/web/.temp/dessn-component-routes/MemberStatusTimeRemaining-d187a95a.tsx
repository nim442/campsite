import React from 'react';
import { useParentState } from '../useIframeState';
import { MemberStatusTimeRemaining } from '../../components/MemberStatus';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    status: {
      type: "object",
      value: {
        message: "In a meeting",
        emoji: "💼",
        expiration_setting: "4h",
        expires_at: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(),
        pause_notifications: false,
        expires_in: "4h"
      },
      label: "Status"
    }
  });

  return (
    <MemberStatusTimeRemaining status={state.status.value} />
  );
}