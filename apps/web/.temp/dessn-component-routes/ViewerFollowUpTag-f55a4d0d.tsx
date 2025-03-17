import React from 'react';
import { useParentState } from '../useIframeState';
import { ViewerFollowUpTag } from '../../components/ViewerFollowUpTag';
export default function ComponentPreview() {
  const [state] = useParentState({
    followUps: {
      type: "object",
      value: [{
        id: "1",
        belongs_to_viewer: true,
        show_at: new Date().toISOString(),
        member: {
          id: "member1",
          role: "member",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "user1",
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
        }
      }],
      label: "Follow Ups"
    }
  });

  return <ViewerFollowUpTag followUps={state.followUps.value} />;
}