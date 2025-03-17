import React from 'react';
import { useParentState } from '../useIframeState';
import { CreateChatThreadDialog } from '../../components/Chat/CreateChatThreadDialog';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    }
  });

  return (
    <ScopeProvider>
      <CreateChatThreadDialog 
        open={state.open.value}
        onOpenChange={(open) => setState('open', open)}
        onCreate={(thread) => console.log('Thread created:', thread)}
      />
    </ScopeProvider>
  );
}