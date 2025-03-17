import React from 'react';
import { useParentState } from '../useIframeState';
import { ToggleCallChatButton } from '../../components/Call/ToggleCallChatButton';
import { HMSRoomProvider } from '@100mslive/react-sdk';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  // Since this component doesn't take any props, we don't need state management
  // But we need to wrap it in the required providers

  // Mock HMS room provider to prevent errors
  const mockConfig = {
    authToken: "mock-token",
    endpoint: "mock-endpoint"
  };

  return (
    <Provider>
      <HMSRoomProvider config={mockConfig}>
        <ToggleCallChatButton />
      </HMSRoomProvider>
    </Provider>
  );
}