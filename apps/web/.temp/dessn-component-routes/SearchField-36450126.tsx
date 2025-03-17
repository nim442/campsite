import React from 'react';
import { useParentState } from '../useIframeState';
import { SearchField } from '../../components/SearchIndex/SearchIndex';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    query: {
      type: "string",
      value: "Search term",
      label: "Search Query"
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Loading State"
    },
    mobile: {
      type: "boolean",
      value: false,
      label: "Mobile View"
    }
  });

  return (
    <ScopeProvider>
      <SearchField 
        query={state.query.value}
        isLoading={state.isLoading.value}
        mobile={state.mobile.value}
      />
    </ScopeProvider>
  );
}