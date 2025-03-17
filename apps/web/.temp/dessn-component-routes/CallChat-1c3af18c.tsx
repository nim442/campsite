import React from 'react';
import { useParentState } from '../useIframeState';
import { CallChat } from '../../components/Call/CallChat';
import { HMSRoomProvider } from '@100mslive/react-sdk';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  // Mock HMS room provider with minimal setup
  const mockHMSConfig = {
    authToken: 'mock-token',
    initEndpoint: 'https://mock.endpoint'
  };

  return (
    <Provider>
      <HMSRoomProvider>
        <CallChat />
      </HMSRoomProvider>
    </Provider>
  );
}