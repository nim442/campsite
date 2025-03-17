import React from 'react';
import { useParentState } from '../useIframeState';
import { FollowUpListItem } from '../../components/InboxItems/FollowUpListItem';
export default function ComponentPreview() {
  const [state] = useParentState({
    followUp: {
      type: "object",
      value: {
        id: "123",
        show_at: new Date().toISOString(),
        inbox_key: "inbox1",
        organization_slug: "org1",
        member: {
          id: "member1",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "user1",
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
            username: "testuser",
            display_name: "Test User",
            system: false,
            integration: false,
            notifications_paused: false,
            notification_pause_expires_at: null,
            timezone: "UTC",
            logged_in: true,
            type_name: "user"
          },
          status: null
        },
        subject: {
          id: "subject1",
          type: "Call",
          body_preview: "This is a preview of the follow-up message content",
          member: null,
          title: "Follow-up Meeting"
        },
        target: {
          id: "target1",
          type: "meeting",
          title: "Team Sync",
          project: null,
          resolved: false
        },
        summary_blocks: [
          {
            text: {
              content: "Follow up with ",
              bold: false
            }
          },
          {
            text: {
              content: "Test User",
              bold: true
            }
          },
          {
            text: {
              content: " about the meeting",
              bold: false
            }
          }
        ],
        belongs_to_viewer: true,
        type_name: "follow_up"
      },
      label: "Follow Up Data"
    }
  });

  return <FollowUpListItem followUp={state.followUp.value} />;
}