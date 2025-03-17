import React from 'react';
import { useParentState } from '../useIframeState';
import { ChatFavoriteButton } from '../../components/Thread/ChatFavoriteButton';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state, setState] = useParentState({
    shortcutEnabled: {
      type: "boolean",
      value: false,
      label: "Shortcut Enabled"
    },
    thread: {
      type: "object",
      value: {
        id: "123",
        last_message_at: "2024-01-20T12:00:00Z",
        latest_message_truncated: "Hello world",
        image_url: null,
        avatar_urls: null,
        group: false,
        channel_name: "general",
        organization_slug: "test-org",
        path: "/chat/123",
        call_room_url: null,
        remote_call_room_id: null,
        integration_dm: false,
        active_call: null,
        deactivated_members: [],
        type_name: "thread",
        title: "Test Thread",
        project_id: null,
        unread_count: 0,
        manually_marked_unread: false,
        viewer_has_favorited: true,
        other_members: [],
        viewer_is_thread_member: true,
        viewer_can_manage_integrations: false,
        viewer_can_delete: false,
        viewer_can_force_notification: false
      },
      label: "Thread Data"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <ChatFavoriteButton 
          thread={state.thread.value}
          shortcutEnabled={state.shortcutEnabled.value}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}