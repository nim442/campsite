import React from 'react';
import { useParentState } from '../useIframeState';
import { StopScreensharingButton } from '../../components/Call/StopScreensharingButton';
import { HMSRoomProvider } from '@100mslive/react-sdk';

const mockPeer = {
  id: 'local-peer',
  name: 'Local Peer',
  isLocal: true,
  auxiliaryTracks: new Set([]),
  videoTrack: null,
  audioTrack: null,
};

// Mock HMS context values with required methods
const mockHMSContext = {
  actions: {
    setScreenShareEnabled: () => {},
    setFrameworkInfo: () => {},
    setAppData: () => {},
    setInitEndpoint: () => {},
  },
  store: {
    getState: () => ({
      peers: new Map([[mockPeer.id, mockPeer]]),
      room: {
        isConnected: true,
        roomState: {
          connectionState: 'connected'
        },
        peers: new Map([[mockPeer.id, mockPeer]]),
      },
      tracks: new Map(),
      localPeer: mockPeer,
      auxiliaryTracks: new Map(),
      settings: {
        isAudioMuted: false,
        isVideoMuted: false
      },
      screenSharing: {
        isScreenShareEnabled: true
      }
    }),
    subscribe: () => () => {},
    getActions: () => mockHMSContext.actions,
  }
};

export default function ComponentPreview() {
  return (
    <HMSRoomProvider actions={mockHMSContext.actions} store={mockHMSContext.store}>
      <StopScreensharingButton />
    </HMSRoomProvider>
  );
}