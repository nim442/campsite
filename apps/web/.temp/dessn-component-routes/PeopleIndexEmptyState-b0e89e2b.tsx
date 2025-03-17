import React from 'react';
import { useParentState } from '../useIframeState';
import { PeopleIndexEmptyState } from '../../components/People/PeopleIndexEmptyState';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    description: {
      type: "string",
      value: "Custom description for the empty state",
      label: "Description"
    }
  });

  return (
    <Provider>
      <ScopeProvider>
        <PeopleIndexEmptyState description={state.description.value} />
      </ScopeProvider>
    </Provider>
  );
}