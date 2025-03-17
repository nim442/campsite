import React from 'react';
import { useParentState } from '../useIframeState';
import { IndexSearchInput } from '../../components/IndexPages/components';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    query: {
      type: "string",
      value: "",
      label: "Search Query"
    },
    isSearchLoading: {
      type: "boolean",
      value: false,
      label: "Loading State"
    }
  });

  return (
    <IndexSearchInput 
      query={state.query.value}
      setQuery={(query) => setState("query", query)}
      isSearchLoading={state.isSearchLoading.value}
    />
  );
}