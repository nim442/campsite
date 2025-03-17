import React from 'react';
import { useParentState } from '../useIframeState';
import { CallShareDialog } from '../../components/CallSharePopover/CallShareDialog';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    call: {
      type: "object",
      value: {
        id: "123",
        title: "Sample Call",
        summary_html: "<p>Sample summary</p>",
        is_edited: false,
        created_at: new Date().toISOString(),
        started_at: new Date().toISOString(),
        stopped_at: null,
        duration: "1h 30m",
        recordings_duration: "1h 30m",
        active: true,
        project_permission: "edit",
        channel_name: "sample-channel",
        peers: [{
          member: {
            id: "1",
            role: "admin",
            created_at: new Date().toISOString(),
            deactivated: false,
            is_organization_member: true,
            user: {
              id: "1",
              avatar_url: "https://placekitten.com/200/200",
              avatar_urls: {
                xs: "https://placekitten.com/50/50",
                sm: "https://placekitten.com/100/100",
                base: "https://placekitten.com/200/200",
                lg: "https://placekitten.com/300/300",
                xl: "https://placekitten.com/400/400",
                xxl: "https://placekitten.com/500/500"
              },
              cover_photo_url: null,
              email: "user@example.com",
              username: "sampleuser",
              display_name: "Sample User",
              system: false,
              integration: false,
              notifications_paused: false,
              notification_pause_expires_at: null,
              timezone: "UTC",
              logged_in: true,
              type_name: "User"
            },
            status: null
          },
          active: true,
          remote_peer_id: "peer1"
        }],
        project: null,
        follow_ups: [],
        type_name: "Call",
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
        <CallShareDialog
          call={state.call.value}
          open={state.open.value}
          onOpenChange={(open) => setState('open', open)}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}