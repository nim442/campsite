import React from 'react';
import { useParentState } from '../useIframeState';
import { OauthSettings } from '../../components/OrgSettings/OauthApplications/OauthSettings';
import { ScopeProvider } from '../../contexts/scope';
import { NextRouter } from 'next/router';

// Create a custom router context
const RouterContext = React.createContext<NextRouter | null>(null);

// Create a custom useRouter hook that uses our context
const useRouter = () => {
  const router = React.useContext(RouterContext);
  if (!router) {
    throw new Error('useRouter must be used within a RouterContext.Provider');
  }
  return router;
};

// Mock the router
const mockRouter: NextRouter = {
  route: '/',
  pathname: '/',
  query: { org: 'test-org' },
  asPath: '/',
  basePath: '',
  isReady: true,
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  forward: () => {},
  prefetch: () => Promise.resolve(),
  beforePopState: () => {},
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  isFallback: false,
  isLocaleDomain: false,
  isPreview: false,
};

// Override the next/router module
(global as any).Router = mockRouter;
(global as any).useRouter = useRouter;

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
            event_types: ["user.created", "user.updated"]
          }
        ]
      }
    }
  });

  return (
    <RouterContext.Provider value={mockRouter}>
      <ScopeProvider>
        <OauthSettings oauthApplication={state.oauthApplication.value} />
      </ScopeProvider>
    </RouterContext.Provider>
  );
}