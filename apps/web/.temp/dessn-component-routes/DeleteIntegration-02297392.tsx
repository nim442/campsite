import React from 'react';
import { useParentState } from '../useIframeState';
import { DeleteIntegration } from '../../components/OrgSettings/OauthApplications/DeleteIntegration';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    oauthApplication: {
      type: "object",
      value: {
        id: "123",
        name: "Test Integration",
        redirect_uri: "https://example.com/callback",
        avatar_path: "/avatar.png",
        avatar_url: "https://example.com/avatar.png",
        avatar_urls: {
          xs: "https://example.com/avatar-xs.png",
          sm: "https://example.com/avatar-sm.png",
          base: "https://example.com/avatar-base.png",
          lg: "https://example.com/avatar-lg.png",
          xl: "https://example.com/avatar-xl.png",
          xxl: "https://example.com/avatar-xxl.png"
        },
        client_id: "client_123",
        last_copied_secret_at: "2023-01-01T00:00:00Z",
        client_secret: "secret_123",
        mentionable: true,
        direct_messageable: true,
        webhooks: [
          {
            id: "webhook_123",
            url: "https://example.com/webhook",
            state: "active",
            secret: "webhook_secret",
            event_types: ["message.created", "message.updated"]
          }
        ]
      },
      label: "OAuth Application"
    }
  });

  return (
    <ScopeProvider>
      <DeleteIntegration oauthApplication={state.oauthApplication.value} />
    </ScopeProvider>
  );
}