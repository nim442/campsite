import React from 'react';
import { useParentState } from '../useIframeState';
import { NotesIndex } from '../../components/NotesIndex/index';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    scope: {
      type: "string",
      value: "default-scope",
      label: "Scope"
    },
    isRefetching: {
      type: "boolean",
      value: false,
      label: "Is Refetching"
    },
    layout: {
      type: "dropdown",
      value: "list",
      options: ["list", "grid"],
      label: "Layout"
    }
  });

  // Mock the Next.js router context that ScopeProvider expects
  const mockRouter = {
    query: { org: state.scope.value },
    isReady: true,
    asPath: `/${state.scope.value}/notes`
  };

  return (
    <Provider>
      <ScopeProvider>
        <NotesIndex />
      </ScopeProvider>
    </Provider>
  );
}