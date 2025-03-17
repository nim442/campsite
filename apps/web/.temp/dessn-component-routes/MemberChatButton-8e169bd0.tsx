import React from 'react';
import { useParentState } from '../useIframeState';
import { MemberChatButton } from '../../components/Chat/MemberChatButton';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    fullWidth: {
      type: "boolean",
      value: false,
      label: "Full Width"
    },
    member: {
      type: "object",
      value: {
        id: "123",
        role: "member",
        created_at: new Date().toISOString(),
        deactivated: false,
        is_organization_member: true,
        user: {
          id: "user123",
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
        status: {
          message: "Working remotely",
          emoji: "🏠",
          expiration_setting: "today",
          expires_at: null,
          pause_notifications: false,
          expires_in: "today"
        }
      },
      label: "Member Data"
    }
  });

  return (
    <ScopeProvider initialScope="test-scope">
      <MemberChatButton 
        member={state.member.value}
        fullWidth={state.fullWidth.value}
      />
    </ScopeProvider>
  );
}