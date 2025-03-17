import React from 'react';
import { useParentState } from '../useIframeState';
import { CompactCallRow } from '../../components/Calls/index';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Command } from '@campsite/ui/Command';
import { LayeredHotkeys } from '@campsite/ui/DismissibleLayer';

const queryClient = new QueryClient();

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    display: {
      type: "dropdown",
      value: "default",
      options: ["default", "search", "pinned"],
      label: "Display Mode"
    },
    hideProject: {
      type: "boolean",
      value: false,
      label: "Hide Project"
    },
    call: {
      type: "object",
      value: {
        id: "123",
        title: "Weekly Team Sync",
        summary_html: "<p>Discussed project updates and next steps</p>",
        is_edited: false,
        created_at: new Date().toISOString(),
        started_at: new Date().toISOString(),
        stopped_at: null,
        duration: "1h 30m",
        recordings_duration: "1:30:00",
        active: false,
        project_permission: "edit",
        channel_name: "team-sync",
        peers: [],
        project: {
          id: "proj-123",
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
        url: "https://example.com/call/123"
      },
      label: "Call Data"
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <QueryNormalizerProvider queryClient={queryClient}>
        <Command>
          <LayeredHotkeys>
            <ScopeProvider>
              <CompactCallRow 
                call={state.call.value}
                display={state.display.value as "default" | "search" | "pinned"}
                hideProject={state.hideProject.value}
              />
            </ScopeProvider>
          </LayeredHotkeys>
        </Command>
      </QueryNormalizerProvider>
    </QueryClientProvider>
  );
}