import React from 'react';
import { useParentState } from '../useIframeState';
import { InviteMembersForm } from '../../components/Call/InviteMembersForm';
import { HMSRoomProvider } from '@100mslive/react-sdk';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    onSuccess: {
      type: "object",
      value: () => {
        console.log("Success callback triggered");
      },
      label: "On Success Callback"
    }
  });

  // Mock HMSRoomProvider context
  const mockStore = {
    selectPeers: () => [],
    actions: {},
    notifications: [],
    store: {}
  };

  return (
    <ScopeProvider>
      <HMSRoomProvider actions={mockStore}>
        <InviteMembersForm onSuccess={state.onSuccess.value} />
      </HMSRoomProvider>
    </ScopeProvider>
  );
}