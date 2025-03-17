import React from 'react';
import { useParentState } from '../useIframeState';
import { ScreenShareWithPeers } from '../../components/Call/ScreenShareWithPeers';
import { HMSRoomProvider } from '@100mslive/react-sdk';

export default function ComponentPreview() {
  // Since this component doesn't take any props and relies on HMS context,
  // we'll just wrap it in the required provider
  return (
    <HMSRoomProvider>
      <ScreenShareWithPeers />
    </HMSRoomProvider>
  );
}