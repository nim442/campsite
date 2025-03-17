import React from 'react';
import { useParentState } from '../useIframeState';
import { Webhooks } from '../../components/OrgSettings/OauthApplications/Webhooks';
import { ScopeProvider } from '../../contexts/scope';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

const mockRouter = {
  pathname: '/[org]/settings',
  route: '/[org]/settings',
  query: { org: 'test-org' },
  asPath: '/test-org/settings',
  basePath: '',
  isLocaleDomain: false,
  isFallback: false,
  isReady: true,
  isPreview: false,
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  prefetch: () => Promise.resolve(),
  beforePopState: () => {},
  isSsr: false,
  locale: 'en',
  locales: ['en'],
  defaultLocale: 'en'
};

export default function ComponentPreview() {
  const [state] = useParentState({
    oauthApplication: {
      type: "object",
      label: "OAuth Application",
      value: {
        id: "123",
        name: "Test App",
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
        last_copied_secret_at: null,
        client_secret: "secret_123",
        mentionable: true,
        direct_messageable: true,
        webhooks: [
          {
            id: "webhook_1",
            url: "https://example.com/webhook",
            state: "active",
            secret: "webhook_secret_123",
            event_types: ["post.created", "comment.created"]
          }
        ]
      }
    }
  });

  return (
    <RouterContext.Provider value={mockRouter}>
      <ScopeProvider>
        <Webhooks oauthApplication={state.oauthApplication.value} />
      </ScopeProvider>
    </RouterContext.Provider>
  );
}