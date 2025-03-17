import React from 'react';
import { useParentState } from '../useIframeState';
import { PeopleTitlebar } from '../../components/People/PeopleTitlebar';
import { ScopeProvider } from '@/contexts/scope';
import { Provider } from 'jotai';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    scope: {
      type: "string",
      value: "organization",
      label: "Scope"
    }
  });

  return (
    <Provider>
      <ScopeProvider scope={state.scope.value}>
        <PeopleTitlebar />
      </ScopeProvider>
    </Provider>
  );
}