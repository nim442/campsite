import React from 'react';
import { useParentState } from '../useIframeState';
import { DeleteAllCallRecordingsDialog } from '../../components/Calls/DeleteAllCallRecordingsDialog';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    }
  });

  const mockCall = {
    id: "call-123",
    title: "Sample Call",
    summary_html: "<p>Sample summary</p>",
    is_edited: false,
    created_at: "2024-01-01T00:00:00Z",
    started_at: "2024-01-01T00:00:00Z",
    stopped_at: "2024-01-01T01:00:00Z",
    duration: "1h",
    recordings_duration: "1h",
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
    url: "https://example.com/call"
  } as const;

  return (
    <ScopeProvider>
      <DeleteAllCallRecordingsDialog
        call={mockCall}
        open={state.open.value}
        onOpenChange={(open) => setState("open", open)}
        onDelete={() => console.log("Delete called")}
      />
    </ScopeProvider>
  );
}