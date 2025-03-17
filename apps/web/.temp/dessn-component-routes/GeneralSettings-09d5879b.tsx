import React from 'react';
import { useParentState } from '../useIframeState';
import { GeneralSettings } from '../../components/OrgSettings/OauthApplications/GeneralSettings';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    oauthApplication: {
      type: "object",
      value: {
        id: "123",
        name: "Test Application",
        redirect_uri: "https://example.com/callback",
        avatar_path: "/images/avatar-placeholder.png",
        avatar_url: "/images/avatar-placeholder.png",
        avatar_urls: {
          xs: "/images/avatar-placeholder.png",
          sm: "/images/avatar-placeholder.png",
          base: "/images/avatar-placeholder.png",
          lg: "/images/avatar-placeholder.png",
          xl: "/images/avatar-placeholder.png",
          xxl: "/images/avatar-placeholder.png"
        },
        client_id: "client_123",
        last_copied_secret_at: "2024-01-01T00:00:00Z",
        client_secret: "secret_123",
        mentionable: true,
        direct_messageable: true,
        webhooks: [
          {
            id: "webhook_123",
            url: "https://example.com/webhook",
            state: "active",
            secret: "webhook_secret",
            event_types: ["created", "updated"]
          }
        ]
      },
      label: "OAuth Application"
    }
  });

  return (
    <ScopeProvider>
      <GeneralSettings oauthApplication={state.oauthApplication.value} />
    </ScopeProvider>
  );
}