import React from 'react';
import { useParentState } from '../useIframeState';
import { SearchIndex } from '../../components/SearchIndex/SearchIndex';
import { Provider } from 'jotai';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    query: {
      type: "string",
      value: "test search",
      label: "Search Query"
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Loading State"
    }
  });

  return (
    <Provider>
      <ScopeProvider>
        <SearchIndex />
      </ScopeProvider>
    </Provider>
  );
}