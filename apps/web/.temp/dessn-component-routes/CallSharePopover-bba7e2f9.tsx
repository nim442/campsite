import React from 'react';
import { useParentState } from '../useIframeState';
import { CallSharePopover } from '../../components/CallSharePopover/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    side: {
      type: "dropdown",
      value: "bottom",
      options: ["top", "right", "bottom", "left"],
      label: "Side"
    },
    align: {
      type: "dropdown",
      value: "end",
      options: ["start", "center", "end"],
      label: "Align"
    },
    modal: {
      type: "boolean",
      value: true,
      label: "Modal"
    }
  });

  const mockCall = {
    id: "123",
    title: "Sample Call",
    summary_html: "<p>Test summary</p>",
    is_edited: false,
    created_at: new Date().toISOString(),
    started_at: new Date().toISOString(),
    stopped_at: null,
    duration: "1h",
    recordings_duration: "1h",
    active: true,
    project_permission: "edit",
    channel_name: "test-channel",
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
    url: "https://example.com/call/123"
  };

  return (
    <CallSharePopover 
      call={mockCall}
      side={state.side.value as 'top' | 'right' | 'bottom' | 'left'}
      align={state.align.value as 'start' | 'center' | 'end'}
      modal={state.modal.value}
    >
      <button>Share Call</button>
    </CallSharePopover>
  );
}