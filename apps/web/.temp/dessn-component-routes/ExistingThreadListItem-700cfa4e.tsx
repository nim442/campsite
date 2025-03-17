import React from 'react';
import { useParentState } from '../useIframeState';
import { ExistingThreadListItem } from '../../components/Chat/ExistingThreadListItem';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

// Override the useRouter hook
import Router from 'next/router';

const mockRouter = {
  query: { org: 'demo-org' },
  isReady: true,
  asPath: '/demo-org/chat',
  pathname: '/demo-org/chat',
  route: '/demo-org/chat',
  basePath: '',
  events: {
    emit: () => {},
    off: () => {},
    on: () => {}
  },
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => {},
  back: () => {},
  prefetch: () => Promise.resolve(),
  beforePopState: () => {},
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  isPreview: false
};

// Override the useRouter implementation
const useRouter = () => mockRouter;
Router.useRouter = useRouter;

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
  const [state] = useParentState({
    isSelected: {
      type: "boolean",
      value: false,
      label: "Is Selected"
    },
    thread: {
      type: "object",
      value: {
        id: "123",
        title: "Example Thread",
        organization_slug: "demo-org",
        latest_message_truncated: "This is the latest message in the thread...",
        last_message_at: new Date().toISOString(),
        unread_count: 2,
        avatar_urls: {
          xs: "https://placekitten.com/32/32",
          sm: "https://placekitten.com/64/64",
          base: "https://placekitten.com/128/128",
          lg: "https://placekitten.com/256/256",
          xl: "https://placekitten.com/512/512",
          xxl: "https://placekitten.com/1024/1024"
        },
        group: false,
        channel_name: "general",
        path: "/demo-org/chat/123",
        call_room_url: null,
        remote_call_room_id: null,
        integration_dm: false,
        active_call: null,
        deactivated_members: [],
        type_name: "thread",
        project_id: null,
        manually_marked_unread: false,
        viewer_has_favorited: false,
        other_members: [],
        viewer_is_thread_member: true,
        viewer_can_manage_integrations: false,
        viewer_can_delete: false,
        viewer_can_force_notification: false,
        image_url: null
      },
      label: "Thread Data"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient} normalizerConfig={{ normalize: true }}>
      <ScopeProvider>
        <ExistingThreadListItem 
          thread={state.thread.value}
          isSelected={state.isSelected.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}