import React from 'react';
import { useParentState } from '../useIframeState';
import { ComfortableFeed } from '../../components/Feed/ComfortableFeed';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isWriteableForViewer: {
      type: "boolean",
      value: true,
      label: "Is Writeable For Viewer"
    },
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
    <ScopeProvider>
      <ComfortableFeed 
        getPosts={mockGetPosts}
        isWriteableForViewer={state.isWriteableForViewer.value}
        hideProject={state.hideProject.value}
      />
    </ScopeProvider>
  );
}