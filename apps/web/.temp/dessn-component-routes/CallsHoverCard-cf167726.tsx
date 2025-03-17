import React from 'react';
import { useParentState } from '../useIframeState';
import { CallsHoverCard } from '../../components/Calls/CallsHoverCard';
import { ScopeProvider } from '../../contexts/scope';
import { createContext, useContext } from 'react';

// Create a mock router context
const RouterContext = createContext({
  query: { org: 'demo-org' },
  isReady: true,
  asPath: '/demo-org/calls',
  pathname: '/[org]/calls'
});

// Create a mock useRouter hook
const useRouter = () => useContext(RouterContext);

// Override the useRouter import in the scope context
(global as any).useRouter = useRouter;

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

  const mockRouterValue = {
    query: { org: 'demo-org' },
    isReady: true,
    asPath: '/demo-org/calls',
    pathname: '/[org]/calls'
  };

  return (
    <RouterContext.Provider value={mockRouterValue}>
      <ScopeProvider>
        <CallsHoverCard
          side={state.side.value}
          align={state.align.value}
          sideOffset={state.sideOffset.value}
          alignOffset={state.alignOffset.value}
          disabled={state.disabled.value}
        >
          <button>Hover over me</button>
        </CallsHoverCard>
      </ScopeProvider>
    </RouterContext.Provider>
  );
}