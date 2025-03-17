import React from 'react';
import { useParentState } from '../useIframeState';
import { RecordingButton } from '../../components/Call/RecordingButton';
import { HMSRoomProvider } from '@100mslive/react-sdk';

const mockHMSActions = {
  startRTMPOrRecording: () => Promise.resolve(),
  stopRTMPAndRecording: () => Promise.resolve(),
  sendBroadcastMessage: () => Promise.resolve(),
};

// Mock the HMS context
const MockHMSContext = ({ children }) => {
  return (
    <HMSRoomProvider actions={mockHMSActions}>
      {children}
    </HMSRoomProvider>
  );
};

export default function ComponentPreview() {
  const [state] = useParentState({
    isRecording: {
      type: "boolean",
      value: false,
      label: "Is Recording"
    }
  });

  return (
    <MockHMSContext>
      <div className="p-4">
        <RecordingButton />
      </div>
    </MockHMSContext>
  );
}