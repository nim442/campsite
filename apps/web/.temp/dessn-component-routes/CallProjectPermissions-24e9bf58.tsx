import React from 'react';
import { useParentState } from '../useIframeState';
import { CallProjectPermissions } from '../../components/CallSharePopover/CallProjectPermissions';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state] = useParentState({
    call: {
      type: "object",
      label: "Call",
      value: {
        id: "call-1",
        title: "Weekly Team Sync",
        summary_html: "<p>Team sync discussion</p>",
        is_edited: false,
        created_at: new Date().toISOString(),
        started_at: new Date().toISOString(),
        stopped_at: null,
        duration: "1h",
        recordings_duration: "55m",
        active: true,
        project_permission: "edit",
        channel_name: "team-sync",
        peers: [],
        project: {
          id: "project-1",
          name: "Main Project",
          accessory: null,
          private: false,
          archived: false,
          message_thread_id: null
        },
        follow_ups: [],
        type_name: "call",
        viewer_can_edit: true,
        viewer_can_destroy_all_recordings: false,
        viewer_has_favorited: false,
        processing_generated_title: false,
        processing_generated_summary: false,
        project_pin_id: null,
        url: "https://example.com/call/1"
      }
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <CallProjectPermissions call={state.call.value} />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}