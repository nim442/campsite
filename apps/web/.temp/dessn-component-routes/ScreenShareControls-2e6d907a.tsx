import React from 'react';
import { useParentState } from '../useIframeState';
import { ScreenShareControls } from '../../components/Call/ScreenShareControls';
import { HMSRoomProvider } from '@100mslive/react-sdk';

export default function ComponentPreview() {
  // Since this component doesn't take any props and relies on HMS context,
  // we'll just need to wrap it in the HMS provider
  
  const mockHMSStore = {
    roomState: {
      isConnected: true
    }
  };

  return (
    <HMSRoomProvider initialValues={mockHMSStore}>
      <ScreenShareControls />
    </HMSRoomProvider>
  );
}