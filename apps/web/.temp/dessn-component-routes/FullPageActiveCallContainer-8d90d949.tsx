import React from 'react';
import { useParentState } from '../useIframeState';
import { FullPageActiveCallContainer } from '../../components/Call/ActiveCall';
import { HMSRoomProvider } from '@100mslive/react-sdk';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    // Since this component doesn't take any props, we don't need to define any state
  });

  return (
    <Provider>
      <ScopeProvider>
        <HMSRoomProvider>
          <FullPageActiveCallContainer />
        </HMSRoomProvider>
      </ScopeProvider>
    </Provider>
  );
}