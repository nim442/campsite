import React from 'react';
import { useParentState } from '../useIframeState';
import { NewCallButton } from '../../components/Calls/NewCallButton';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    alignMenu: {
      type: "dropdown",
      value: "end",
      options: ["start", "end", "center"],
      label: "Menu Alignment"
    }
  });

  return (
    <ScopeProvider>
      <NewCallButton alignMenu={state.alignMenu.value as 'start' | 'end' | 'center'} />
    </ScopeProvider>
  );
}