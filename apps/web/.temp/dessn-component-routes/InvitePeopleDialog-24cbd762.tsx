import React from 'react';
import { useParentState } from '../useIframeState';
import { InvitePeopleDialog } from '../../components/People/InvitePeopleDialog';
import { Provider } from 'jotai';
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
    <Provider>
      <ScopeProvider>
        <InvitePeopleDialog 
          open={state.open.value}
          onOpenChange={(open) => setState('open', open)}
        />
      </ScopeProvider>
    </Provider>
  );
}