import React from 'react';
import { useParentState } from '../useIframeState';
import { NewNoteButton } from '../../components/NotesIndex/NewNoteButton';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    size: {
      type: "dropdown",
      value: "base",
      options: ["sm", "base", "large"],
      label: "Size"
    }
  });

  return (
    <ScopeProvider>
      <NewNoteButton size={state.size.value} />
    </ScopeProvider>
  );
}