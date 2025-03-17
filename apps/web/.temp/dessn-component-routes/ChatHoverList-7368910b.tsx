import React from 'react';
import { useParentState } from '../useIframeState';
import { ChatHoverList } from '../../components/Chat/ChatHoverCard';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    side: {
      type: "dropdown",
      value: "right",
      options: ["left", "right", "top", "bottom"],
      label: "Side"
    },
    align: {
      type: "dropdown",
      value: "start",
      options: ["start", "end", "center"],
      label: "Align"
    },
    sideOffset: {
      type: "number",
      value: 0,
      label: "Side Offset"
    },
    alignOffset: {
      type: "number",
      value: 0,
      label: "Align Offset"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  return (
    <Provider>
      <ScopeProvider>
        <ChatHoverList
          side={state.side.value}
          align={state.align.value}
          sideOffset={state.sideOffset.value}
          alignOffset={state.alignOffset.value}
          disabled={state.disabled.value}
        >
          <button>Hover me</button>
        </ChatHoverList>
      </ScopeProvider>
    </Provider>
  );
}