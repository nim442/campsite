import React from 'react';
import { useParentState } from '../useIframeState';
import { ConnectionIndicator } from '../../components/Call/ConnectionIndicator';
import { HMSRoomProvider } from '@100mslive/react-sdk';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    peerId: {
      type: "string",
      value: "test-peer-123",
      label: "Peer ID"
    }
  });

  return (
    <HMSRoomProvider>
      <ConnectionIndicator peerId={state.peerId.value} />
    </HMSRoomProvider>
  );
}