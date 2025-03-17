import React from 'react';
import { useParentState } from '../useIframeState';
import { TimelineEventMemberActor } from '../../components/TimelineEvent/TimelineEventMemberActor';
import { ScopeProvider } from '../../contexts/scope';
import { NextRouter } from 'next/router';

// Create a mock router context
const MockRouterContext = React.createContext<NextRouter>({} as NextRouter);

// Mock router object
const mockRouter: NextRouter = {
  query: { org: 'test-org' },
  isReady: true,
  asPath: '/test-org/posts',
  basePath: '',
  pathname: '',
  route: '',
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
  isReady: true,
  defaultLocale: undefined,
  domainLocales: undefined,
  isLocaleDomain: false,
  locale: undefined,
  locales: undefined,
};

export default function ComponentPreview() {
  const [state] = useParentState({
    timelineEvent: {
      type: "object",
      value: {
        id: "1",
        created_at: "2023-01-01T00:00:00Z",
        action: "post_resolved",
        member_actor: {
          user: {
            id: "1",
            username: "johndoe",
            display_name: "John Doe",
            avatar_url: "https://placekitten.com/100/100",
            avatar_urls: {
              xs: "https://placekitten.com/50/50",
              sm: "https://placekitten.com/75/75",
              base: "https://placekitten.com/100/100",
              lg: "https://placekitten.com/150/150",
              xl: "https://placekitten.com/200/200",
              xxl: "https://placekitten.com/300/300"
            },
            email: "john@example.com",
            cover_photo_url: null,
            system: false,
            integration: false,
            notifications_paused: false,
            notification_pause_expires_at: null,
            timezone: "UTC",
            logged_in: true,
            type_name: "User"
          }
        }
      },
      label: "Timeline Event"
    }
  });

  return (
    <MockRouterContext.Provider value={mockRouter}>
      <ScopeProvider>
        <TimelineEventMemberActor timelineEvent={state.timelineEvent.value} />
      </ScopeProvider>
    </MockRouterContext.Provider>
  );
}