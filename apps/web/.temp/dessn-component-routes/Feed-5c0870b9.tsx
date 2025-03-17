import React from 'react';
import { useParentState } from '../useIframeState';
import { Feed } from '../../components/Feed/index';
import { useInfiniteQuery } from '@tanstack/react-query';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isWriteableForViewer: {
      type: "boolean",
      value: true,
      label: "Is Writeable For Viewer"
    },
    forceLayout: {
      type: "dropdown",
      value: "feed",
      options: ["grid", "feed", "note"],
      label: "Force Layout"
    },
    group: {
      type: "dropdown",
      value: "last_activity_at",
      options: ["last_activity_at", "published_at"],
      label: "Group"
    },
    searching: {
      type: "boolean",
      value: false,
      label: "Searching"
    },
    hideProject: {
      type: "boolean",
      value: false,
      label: "Hide Project"
    },
    hideReactions: {
      type: "boolean",
      value: false,
      label: "Hide Reactions"
    },
    hideAttachments: {
      type: "boolean",
      value: false,
      label: "Hide Attachments"
    },
    hideComments: {
      type: "boolean",
      value: false,
      label: "Hide Comments"
    }
  });

  const mockGetPosts = {
    data: {
      pages: [{
        data: [],
        next_cursor: null,
        prev_cursor: null
      }]
    },
    fetchNextPage: () => Promise.resolve(),
    fetchPreviousPage: () => Promise.resolve(),
    hasNextPage: false,
    hasPreviousPage: false,
    isFetchingNextPage: false,
    isFetchingPreviousPage: false,
    isLoading: false,
    isError: false,
    error: null,
    status: 'success',
    isFetching: false,
    refetch: () => Promise.resolve({
      data: {
        pages: [{
          data: [],
          next_cursor: null,
          prev_cursor: null
        }]
      }
    })
  } as any;

  return (
    <ScopeProvider>
      <Feed
        getPosts={mockGetPosts}
        isWriteableForViewer={state.isWriteableForViewer.value}
        forceLayout={state.forceLayout.value as 'grid' | 'feed' | 'note'}
        group={state.group.value as 'last_activity_at' | 'published_at'}
        searching={state.searching.value}
        hideProject={state.hideProject.value}
        hideReactions={state.hideReactions.value}
        hideAttachments={state.hideAttachments.value}
        hideComments={state.hideComments.value}
      />
    </ScopeProvider>
  );
}