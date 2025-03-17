import React from 'react';
import { useParentState } from '../useIframeState';
import { CallFollowUps } from '../../components/CallView/CallFollowUps';
export default function ComponentPreview() {
  const [state] = useParentState({
    call: {
      type: "object",
      label: "Call",
      value: {
        id: "123",
        title: "Example Call",
        summary_html: "<p>Test summary</p>",
        is_edited: false,
        created_at: "2023-01-01T00:00:00Z",
        started_at: "2023-01-01T00:00:00Z",
        stopped_at: null,
        duration: "1h",
        recordings_duration: "1h",
        active: true,
        project_permission: "edit",
        channel_name: "test-channel",
        project: null,
        follow_ups: [
          {
            id: "1",
            member: {
              id: "member1",
              role: "admin",
              created_at: "2023-01-01T00:00:00Z",
              deactivated: false,
              is_organization_member: true,
              user: {
                id: "user1",
                avatar_url: "https://example.com/avatar.jpg",
                avatar_urls: {
                  xs: "https://example.com/avatar-xs.jpg",
                  sm: "https://example.com/avatar-sm.jpg",
                  base: "https://example.com/avatar-base.jpg",
                  lg: "https://example.com/avatar-lg.jpg",
                  xl: "https://example.com/avatar-xl.jpg",
                  xxl: "https://example.com/avatar-xxl.jpg"
                },
                cover_photo_url: null,
                email: "user@example.com",
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
            show_at: "2023-01-02T00:00:00Z",
            belongs_to_viewer: true
          }
        ],
        peers: [],
        type_name: "Call",
        viewer_can_edit: true,
        viewer_can_destroy_all_recordings: true,
        viewer_has_favorited: false,
        processing_generated_title: false,
        processing_generated_summary: false,
        project_pin_id: null,
        url: "https://example.com/call/123"
      }
    }
  });

  return <CallFollowUps call={state.call.value} />;
}