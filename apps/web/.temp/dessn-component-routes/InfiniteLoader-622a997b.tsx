import React from 'react';
import { useParentState } from '../useIframeState';
import { InfiniteLoader } from '../../components/InfiniteLoader';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    hasNextPage: {
      type: "boolean",
      value: true,
      label: "Has Next Page"
    },
    isError: {
      type: "boolean",
      value: false,
      label: "Is Error"
    },
    isFetching: {
      type: "boolean",
      value: false,
      label: "Is Fetching"
    },
    isFetchingNextPage: {
      type: "boolean",
      value: false,
      label: "Is Fetching Next Page"
    }
  });

  return (
    <InfiniteLoader
      hasNextPage={state.hasNextPage.value}
      isError={state.isError.value}
      isFetching={state.isFetching.value}
      isFetchingNextPage={state.isFetchingNextPage.value}
      fetchNextPage={() => {
        console.log('Fetching next page...');
      }}
    />
  );
}