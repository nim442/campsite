import React from 'react';
import { useParentState } from '../useIframeState';
import { MultiUserAvatar } from '../../components/ThreadAvatar/index';
export default function ComponentPreview() {
  const [state, setState] = useParentState({
    size: {
      type: "dropdown",
      value: "lg",
      options: ["base", "lg"],
      label: "Size"
    },
    showOnlineIndicator: {
      type: "boolean",
      value: true,
      label: "Show Online Indicator"
    },
    members: {
      type: "object",
      value: [
        {
          id: "1",
          role: "admin",
          created_at: "2023-01-01T00:00:00Z",
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
            email: "user1@example.com",
            username: "user1",
            display_name: "User One",
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
        {
          id: "2",
          role: "member",
          created_at: "2023-01-02T00:00:00Z",
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "user2",
            avatar_url: "https://placekitten.com/201/201",
            avatar_urls: {
              xs: "https://placekitten.com/51/51",
              sm: "https://placekitten.com/101/101",
              base: "https://placekitten.com/201/201",
              lg: "https://placekitten.com/301/301",
              xl: "https://placekitten.com/401/401",
              xxl: "https://placekitten.com/501/501"
            },
            cover_photo_url: null,
            email: "user2@example.com",
            username: "user2",
            display_name: "User Two",
            system: false,
            integration: false,
            notifications_paused: false,
            notification_pause_expires_at: null,
            timezone: "UTC",
            logged_in: true,
            type_name: "user"
          },
          status: null
        }
      ],
      label: "Members"
    }
  });

  return (
    <MultiUserAvatar 
      members={state.members.value}
      size={state.size.value as 'base' | 'lg'}
      showOnlineIndicator={state.showOnlineIndicator.value}
    />
  );
}