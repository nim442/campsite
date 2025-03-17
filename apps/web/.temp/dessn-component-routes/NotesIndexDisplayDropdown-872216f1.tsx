import React from 'react';
import { useParentState } from '../useIframeState';
import { NotesIndexDisplayDropdown } from '../../components/NotesIndex/NotesIndexDisplayDropdown';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    iconOnly: {
      type: "boolean",
      value: false,
      label: "Icon Only"
    }
  });

  return (
    <ScopeProvider>
      <Provider>
        <NotesIndexDisplayDropdown iconOnly={state.iconOnly.value} />
      </Provider>
    </ScopeProvider>
  );
}