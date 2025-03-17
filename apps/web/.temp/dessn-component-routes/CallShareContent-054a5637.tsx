import React from 'react';
import { useParentState } from '../useIframeState';
import { CallShareContent } from '../../components/CallSharePopover/CallShareContent';
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
        id: "123",
        title: "Demo Call",
        summary_html: "<p>Test summary</p>",
        is_edited: false,
        created_at: new Date().toISOString(),
        started_at: new Date().toISOString(),
        stopped_at: null,
        duration: "1h",
        recordings_duration: "30m",
        active: true,
        project_permission: "edit",
        channel_name: "general",
        peers: [],
        project: null,
        follow_ups: [],
        type_name: "call",
        viewer_can_edit: true,
        viewer_can_destroy_all_recordings: false,
        viewer_has_favorited: false,
        processing_generated_title: false,
        processing_generated_summary: false,
        project_pin_id: null,
        url: "https://example.com/call/123"
      }
    },
    isOpen: {
      type: "boolean",
      label: "Is Open",
      value: true
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <CallShareContent 
          call={state.call.value}
          onOpenChange={(open) => console.log('Open changed:', open)}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}