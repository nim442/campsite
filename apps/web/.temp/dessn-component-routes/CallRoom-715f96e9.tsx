import React from 'react';
import { useParentState } from '../useIframeState';
import { CallRoom } from '../../components/CallRoom/index';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';
import { HMSRoomProvider } from '@100mslive/react-sdk';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    callRoomId: {
      type: "string",
      value: "call-123-456",
      label: "Call Room ID"
    }
  });

  return (
    <Provider>
      <ScopeProvider>
        <HMSRoomProvider>
          <CallRoom callRoomId={state.callRoomId.value} />
        </HMSRoomProvider>
      </ScopeProvider>
    </Provider>
  );
}