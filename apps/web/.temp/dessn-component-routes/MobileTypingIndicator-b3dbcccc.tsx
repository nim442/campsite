import React from 'react';
import { useParentState } from '../useIframeState';
import { MobileTypingIndicator } from '../../components/Thread/TypingIndicator';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    threadId: {
      type: "string",
      value: "thread-123",
      label: "Thread ID"
    },
    channelName: {
      type: "string",
      value: "general",
      label: "Channel Name"
    }
  });

  return (
    <Provider>
      <MobileTypingIndicator 
        threadId={state.threadId.value}
        channelName={state.channelName.value}
      />
    </Provider>
  );
}