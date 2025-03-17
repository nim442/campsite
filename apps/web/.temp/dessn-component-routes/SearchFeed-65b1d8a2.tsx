import React from 'react';
import { useParentState } from '../useIframeState';
import { SearchFeed } from '../../components/Feed/SearchFeed';
export default function ComponentPreview() {
  const [state] = useParentState({
    hideProject: {
      type: "boolean",
      value: false,
      label: "Hide Project"
    }
  });

  const mockGetPosts = {
    data: {
      pages: [
        {
          data: [],
          next_cursor: null,
          prev_cursor: null
        }
      ]
    },
    isLoading: false,
    isError: false,
    isFetching: false,
    isFetchingNextPage: false,
    hasNextPage: false,
    fetchNextPage: () => Promise.resolve(),
    fetchPreviousPage: () => Promise.resolve(),
    hasPreviousPage: false,
    status: 'success',
    error: null,
    refetch: () => Promise.resolve({ data: null, error: null }),
  };

  return (
    <SearchFeed 
      getPosts={mockGetPosts}
      hideProject={state.hideProject.value}
    />
  );
}