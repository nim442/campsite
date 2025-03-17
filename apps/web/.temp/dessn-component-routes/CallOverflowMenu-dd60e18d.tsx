import React from 'react';
import { useParentState } from '../useIframeState';
import { CallOverflowMenu } from '../../components/Calls/CallOverflowMenu';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { useQueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = useQueryClient();
  const [state, setState] = useParentState({
    type: {
      type: "dropdown",
      value: "dropdown",
      options: ["dropdown", "context"],
      label: "Menu Type"
    }
  });

  const mockCall = {
    id: "123",
    title: "Sample Call",
    summary_html: "<p>Test summary</p>",
    is_edited: false,
    created_at: "2023-01-01T00:00:00Z",
    started_at: "2023-01-01T00:00:00Z",
    stopped_at: null,
    duration: "1h",
    recordings_duration: "1h",
    active: false,
    project_permission: "edit",
    channel_name: "general",
    peers: [],
    project: {
      id: "proj1",
      name: "Test Project",
      accessory: null,
      private: false,
      archived: false,
      message_thread_id: null
    },
    follow_ups: [],
    type_name: "call",
    viewer_can_edit: true,
    viewer_can_destroy_all_recordings: true,
    viewer_has_favorited: false,
    processing_generated_title: false,
    processing_generated_summary: false,
    project_pin_id: null,
    url: "https://example.com/call/123"
  };

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <CallOverflowMenu 
          type={state.type.value as 'dropdown' | 'context'} 
          call={mockCall}
        >
          {state.type.value === 'context' && <div>Right click me</div>}
        </CallOverflowMenu>
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}