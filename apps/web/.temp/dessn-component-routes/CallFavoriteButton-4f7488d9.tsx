import React from 'react';
import { useParentState } from '../useIframeState';
import { CallFavoriteButton } from '../../components/CallView/CallFavoriteButton';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  
  const [state, setState] = useParentState({
    shortcutEnabled: {
      type: "boolean",
      value: true,
      label: "Shortcut Enabled"
    },
    call: {
      type: "object",
      value: {
        id: "123",
        title: "Example Call",
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
        <CallFavoriteButton 
          call={state.call.value}
          shortcutEnabled={state.shortcutEnabled.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}