import React from 'react';
import { useParentState } from '../useIframeState';
import { NotesHoverList } from '../../components/NotesIndex/NotesHoverCard';
import { ScopeProvider } from '../../contexts/scope';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

// Mock router with org query param
const mockRouter = {
  pathname: '/[org]/notes',
  route: '/[org]/notes',
  query: { org: 'demo-org' },
  asPath: '/demo-org/notes',
  basePath: '',
  isLocaleDomain: false,
  isFallback: false,
  isReady: true,
  isPreview: false,
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  prefetch: () => Promise.resolve(),
  beforePopState: () => {},
  isSsr: false,
};

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
    <RouterContext.Provider value={mockRouter}>
      <ScopeProvider>
        <NotesHoverList
          side={state.side.value}
          align={state.align.value}
          sideOffset={state.sideOffset.value}
          alignOffset={state.alignOffset.value}
          disabled={state.disabled.value}
        >
          <button>Hover over me</button>
        </NotesHoverList>
      </ScopeProvider>
    </RouterContext.Provider>
  );
}