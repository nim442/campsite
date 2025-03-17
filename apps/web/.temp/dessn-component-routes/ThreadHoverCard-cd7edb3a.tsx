import React from 'react';
import { useParentState } from '../useIframeState';
import { ThreadHoverCard } from '../../components/ThreadView/ThreadHoverCard';
import { ScopeProvider } from '../../contexts/scope';
import { NextRouter } from 'next/router';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

// Create a mock router that implements NextRouter interface
const mockRouter: NextRouter = {
  query: { org: 'sample-org' },
  isReady: true,
  asPath: '/sample-org/chat',
  basePath: '',
  pathname: '',
  route: '',
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  forward: () => {},
  prefetch: () => Promise.resolve(),
  beforePopState: () => true,
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  isFallback: false,
  isLocaleDomain: false,
  isPreview: false
};

// Create a RouterContext manually since we can't import it directly
const RouterContext = React.createContext<NextRouter>(mockRouter);

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    thread: {
      type: "object",
      value: {
        id: "123",
        title: "Sample Thread",
        last_message_at: new Date().toISOString(),
        latest_message_truncated: "Hello world",
        image_url: null,
        avatar_urls: null,
        group: false,
        channel_name: "general",
        organization_slug: "sample-org",
        path: "/chat/123",
        call_room_url: null,
        remote_call_room_id: null,
        integration_dm: false,
        active_call: null,
        deactivated_members: [],
        type_name: "thread",
        project_id: null,
        unread_count: 0,
        manually_marked_unread: false,
        viewer_has_favorited: false,
        other_members: [{
          id: "user1",
          role: "member",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "user1",
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
            email: "user@example.com",
            username: "user1",
            display_name: "User One",
            system: false,
            integration: false,
            notifications_paused: false,
            notification_pause_expires_at: null,
            timezone: "UTC",
            logged_in: true,
            type_name: "user"
          },
          status: null
        }],
        viewer_is_thread_member: true,
        viewer_can_manage_integrations: true,
        viewer_can_delete: true,
        viewer_can_force_notification: true
      },
      label: "Thread Data"
    }
  });

  return (
    <RouterContext.Provider value={mockRouter}>
      <QueryNormalizerProvider queryClient={queryClient}>
        <ScopeProvider>
          <ThreadHoverCard
            thread={state.thread.value}
            onOpenChange={(val) => console.log('Open changed:', val)}
            disabled={state.disabled.value}
          >
            <div>Hover over me</div>
          </ThreadHoverCard>
        </ScopeProvider>
      </QueryNormalizerProvider>
    </RouterContext.Provider>
  );
}