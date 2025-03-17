import React from 'react';
import { useParentState } from '../useIframeState';
import { CallsContent } from '../../components/Calls/index';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  
  const [state] = useParentState({
    isSearching: {
      type: "boolean",
      value: false,
      label: "Is Searching"
    }
  });

  const mockGetCalls = {
    data: {
      pages: [
        {
          data: [
            {
              id: "1",
              title: "Sample Call",
              summary_html: "<p>This is a sample call summary</p>",
              is_edited: false,
              created_at: new Date().toISOString(),
              started_at: new Date().toISOString(),
              stopped_at: null,
              duration: "1h 30m",
              recordings_duration: "1h 30m",
              active: false,
              project_permission: "edit",
              channel_name: "sample-channel",
              peers: [],
              project: null,
              follow_ups: [],
              type_name: "call",
              viewer_can_edit: true,
              viewer_can_destroy_all_recordings: true,
              viewer_has_favorited: false,
              processing_generated_title: false,
              processing_generated_summary: false,
              project_pin_id: null,
              url: "https://example.com/call/1"
            }
          ],
          next_cursor: null,
          prev_cursor: null
        }
      ]
    },
    isLoading: false,
    isFetching: false,
    isError: false,
    hasNextPage: false,
    fetchNextPage: () => Promise.resolve(),
    isFetchingNextPage: false
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <CallsContent 
          getCalls={mockGetCalls}
          isSearching={state.isSearching.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}