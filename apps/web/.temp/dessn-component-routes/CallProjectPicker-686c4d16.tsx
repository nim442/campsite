import React from 'react';
import { useParentState } from '../useIframeState';
import { CallProjectPicker } from '../../components/CallSharePopover/CallProjectPicker';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state] = useParentState({
    call: {
      type: "object",
      value: {
        id: "123",
        title: "Test Call",
        summary_html: "<p>Test summary</p>",
        is_edited: false,
        created_at: new Date().toISOString(),
        started_at: new Date().toISOString(),
        stopped_at: null,
        duration: "1h",
        recordings_duration: "30m",
        active: true,
        project_permission: "edit",
        channel_name: "test-channel",
        peers: [],
        project: {
          id: "project-1",
          name: "Test Project",
          accessory: "TP",
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
      },
      label: "Call Data"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <CallProjectPicker call={state.call.value} />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}