import React, { createContext } from 'react';
import { useParentState } from '../useIframeState';
import { DeleteCustomReaction } from '../../components/OrgSettings/OrganizationReactions/DeleteCustomReaction';
import { ScopeProvider } from '../../contexts/scope';

// Create a mock router context
const MockRouterContext = createContext({});

// Mock Next.js router
const mockRouter = {
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

export default function ComponentPreview() {
  const [state] = useParentState({
    customReaction: {
      type: "object",
      value: {
        id: "123",
        name: "Sample Reaction",
        file_url: "https://example.com/reaction.gif",
        created_at: new Date().toISOString(),
        creator: {
          id: "user123",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "user123",
            avatar_url: "https://example.com/avatar.jpg",
            avatar_urls: {
              xs: "https://example.com/avatar-xs.jpg",
              sm: "https://example.com/avatar-sm.jpg",
              base: "https://example.com/avatar-base.jpg",
              lg: "https://example.com/avatar-lg.jpg",
              xl: "https://example.com/avatar-xl.jpg",
              xxl: "https://example.com/avatar-xxl.jpg"
            },
            cover_photo_url: null,
            email: "user@example.com",
            username: "sampleuser",
            display_name: "Sample User",
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
      },
      label: "Custom Reaction"
    }
  });

  return (
    <MockRouterContext.Provider value={mockRouter}>
      <ScopeProvider>
        <DeleteCustomReaction customReaction={state.customReaction.value} />
      </ScopeProvider>
    </MockRouterContext.Provider>
  );
}