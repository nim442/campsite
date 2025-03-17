import React from 'react';
import { useParentState } from '../useIframeState';
import { ThreadDetail } from '../../components/ThreadDetail/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    threadId: {
      type: "string",
      value: "example-thread-123",
      label: "Thread ID"
    },
    focus: {
      type: "boolean",
      value: false,
      label: "Focus Mode"
    }
  });

  // Mock router context that the component expects
  const RouterContext = React.createContext({});
  const mockRouter = {
    query: {
      threadId: state.threadId.value,
      focus: state.focus.value.toString()
    }
  };

  return (
    <RouterContext.Provider value={{ router: mockRouter }}>
      <div className="h-screen w-full">
        <ThreadDetail />
      </div>
    </RouterContext.Provider>
  );
}