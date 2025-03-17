import React from 'react';
import { useParentState } from '../useIframeState';
import { CallFollowUpDropdown } from '../../components/CallView/CallFollowUpDropdown';
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
        title: "Sample Call",
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
        project: null,
        follow_ups: [
          {
            id: "follow-1",
            member: {
              id: "member-1",
              role: "admin",
              created_at: new Date().toISOString(),
              deactivated: false,
              is_organization_member: true,
              user: {
                id: "user-1",
                avatar_url: "https://placeholder.com/avatar",
                avatar_urls: {
                  xs: "https://placeholder.com/xs",
                  sm: "https://placeholder.com/sm",
                  base: "https://placeholder.com/base",
                  lg: "https://placeholder.com/lg",
                  xl: "https://placeholder.com/xl",
                  xxl: "https://placeholder.com/xxl"
                },
                cover_photo_url: null,
                email: "test@example.com",
                username: "testuser",
                display_name: "Test User",
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
            show_at: new Date().toISOString(),
            belongs_to_viewer: true
          }
        ],
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
        <CallFollowUpDropdown call={state.call.value}>
          <button>Follow Up</button>
        </CallFollowUpDropdown>
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}