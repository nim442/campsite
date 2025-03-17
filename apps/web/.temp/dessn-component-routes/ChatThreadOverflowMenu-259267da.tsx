import React from 'react';
import { useParentState } from '../useIframeState';
import { ChatThreadOverflowMenu } from '../../components/Thread/ChatThreadOverflowMenu';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();
  const [state] = useParentState({
    thread: {
      type: "object",
      label: "Message Thread",
      value: {
        id: "thread-1",
        last_message_at: new Date().toISOString(),
        latest_message_truncated: "Hello world",
        image_url: "https://placekitten.com/200/200",
        avatar_urls: {
          xs: "https://placekitten.com/50/50",
          sm: "https://placekitten.com/100/100",
          base: "https://placekitten.com/200/200",
          lg: "https://placekitten.com/300/300",
          xl: "https://placekitten.com/400/400",
          xxl: "https://placekitten.com/500/500"
        },
        group: true,
        channel_name: "general",
        organization_slug: "campsite",
        path: "/chat/thread-1",
        call_room_url: null,
        remote_call_room_id: null,
        integration_dm: false,
        active_call: null,
        deactivated_members: [],
        type_name: "thread",
        title: "General Chat",
        project_id: null,
        unread_count: 2,
        manually_marked_unread: false,
        viewer_has_favorited: false,
        other_members: [],
        viewer_is_thread_member: true,
        viewer_can_manage_integrations: true,
        viewer_can_delete: true,
        viewer_can_force_notification: true
      }
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <ChatThreadOverflowMenu thread={state.thread.value} />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}