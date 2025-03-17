import React from 'react';
import { useParentState } from '../useIframeState';
import { ViewLink } from '../../components/Post/PostViewersPopover';
import { ScopeProvider } from '../../contexts/scope';

// Simple data URL for a gray avatar placeholder
const AVATAR_DATA_URL = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23E5E7EB'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='40' fill='%236B7280' text-anchor='middle' dy='.3em'%3EJD%3C/text%3E%3C/svg%3E";

export default function ComponentPreview() {
  const [state] = useParentState({
    member: {
      type: "object",
      value: {
        id: "1",
        role: "member",
        created_at: new Date().toISOString(),
        deactivated: false,
        is_organization_member: true,
        user: {
          id: "user1",
          avatar_url: AVATAR_DATA_URL,
          avatar_urls: {
            xs: AVATAR_DATA_URL,
            sm: AVATAR_DATA_URL,
            base: AVATAR_DATA_URL,
            lg: AVATAR_DATA_URL,
            xl: AVATAR_DATA_URL,
            xxl: AVATAR_DATA_URL
          },
          cover_photo_url: null,
          email: "user@example.com",
          username: "johndoe",
          display_name: "John Doe",
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
      label: "Member"
    },
    time: {
      type: "string",
      value: new Date().toISOString(),
      label: "Time"
    }
  });

  return (
    <ScopeProvider>
      <ViewLink 
        member={state.member.value}
        time={state.time.value}
      />
    </ScopeProvider>
  );
}