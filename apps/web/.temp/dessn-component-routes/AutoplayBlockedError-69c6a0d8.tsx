import React from 'react';
import { useParentState } from '../useIframeState';
import { AutoplayBlockedError } from '../../components/Call/AutoplayBlockedError';
import { HMSRoomProvider } from '@100mslive/react-sdk';

export default function ComponentPreview() {
  // This component doesn't take any props, but we need to wrap it in the HMS Room Provider
  // since it uses hooks from @100mslive/react-sdk
  return (
    <HMSRoomProvider>
      <AutoplayBlockedError />
    </HMSRoomProvider>
  );
}