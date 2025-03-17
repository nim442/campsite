import React from 'react';
import { useParentState } from '../useIframeState';
import { AuthorLink } from '../../components/AuthorLink';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    username: {
      type: "string",
      value: "johndoe",
      label: "Username"
    },
    integration: {
      type: "boolean",
      value: false,
      label: "Is Integration"
    },
    displayName: {
      type: "string",
      value: "John Doe",
      label: "Display Name"
    }
  });

  const mockUser = {
    id: "123",
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
    email: "john@example.com",
    username: state.username.value,
    display_name: state.displayName.value,
    system: false,
    integration: state.integration.value,
    notifications_paused: false,
    notification_pause_expires_at: null,
    timezone: "UTC",
    logged_in: true,
    type_name: "user"
  };

  return (
    <ScopeProvider initialScope="team">
      <AuthorLink user={mockUser}>
        {state.displayName.value}
      </AuthorLink>
    </ScopeProvider>
  );
}