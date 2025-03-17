import React from 'react';
import { useParentState } from '../useIframeState';
import { FollowUpPopover } from '../../components/FollowUp/FollowUpPopover';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    side: {
      type: "dropdown",
      value: "bottom",
      options: ["top", "left", "right", "bottom"],
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
      value: false,
      label: "Modal"
    },
    followUps: {
      type: "object",
      value: [{
        id: "1",
        member: {
          id: "member1",
          role: "admin",
          created_at: "2023-01-01T00:00:00Z",
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
          status: {
            message: "Working on project",
            emoji: "💻",
            expiration_setting: "4h",
            expires_at: "2024-01-01T04:00:00Z",
            pause_notifications: false,
            expires_in: "4h"
          }
        },
        show_at: "2024-01-01T00:00:00Z",
        belongs_to_viewer: true
      }],
      label: "Follow Ups"
    }
  });

  return (
    <FollowUpPopover
      followUps={state.followUps.value}
      side={state.side.value as 'top' | 'left' | 'right' | 'bottom'}
      align={state.align.value as 'start' | 'center' | 'end'}
      modal={state.modal.value}
    >
      <button>Click to open popover</button>
    </FollowUpPopover>
  );
}