import React from 'react';
import { useParentState } from '../useIframeState';
import { TimelineEventComment } from '../../components/TimelineEvent/TimelineEventComment';
export default function ComponentPreview() {
  const [state] = useParentState({
    timelineEvent: {
      type: "object",
      value: {
        id: "1",
        created_at: "2024-01-20T12:00:00Z",
        action: "comment_referenced_in_external_record",
        external_reference: {
          created_at: "2024-01-20T12:00:00Z",
          remote_record_id: "LIN-123",
          remote_record_title: "Sample Linear Issue",
          remote_record_url: "https://linear.app/company/issue/LIN-123",
          service: "linear",
          type: "issue",
          linear_issue_identifier: "LIN-123",
          linear_issue_state: {
            name: "In Progress",
            type: "started",
            color: "#0066FF"
          },
          linear_identifier: "LIN-123",
          linear_state: {
            name: "In Progress",
            type: "started",
            color: "#0066FF"
          }
        },
        member_actor: {
          id: "user1",
          role: "admin",
          created_at: "2024-01-01T00:00:00Z",
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "user1",
            avatar_url: "https://placekitten.com/100/100",
            avatar_urls: {
              xs: "https://placekitten.com/50/50",
              sm: "https://placekitten.com/75/75",
              base: "https://placekitten.com/100/100",
              lg: "https://placekitten.com/150/150",
              xl: "https://placekitten.com/200/200",
              xxl: "https://placekitten.com/300/300"
            },
            cover_photo_url: null,
            email: "user@example.com",
            username: "user1",
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
        }
      },
      label: "Timeline Event"
    }
  });

  return <TimelineEventComment timelineEvent={state.timelineEvent.value} />;
}