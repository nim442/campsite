import React from 'react';
import { useParentState } from '../useIframeState';
import { StartOfThread } from '../../components/Thread/StartOfThread';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    thread: {
      type: "object",
      value: {
        id: "123",
        last_message_at: "2023-01-01T00:00:00Z",
        latest_message_truncated: "Hello world",
        image_url: null,
        avatar_urls: null,
        group: false,
        channel_name: "general",
        organization_slug: "test-org",
        path: "/messages/123",
        call_room_url: null,
        remote_call_room_id: null,
        integration_dm: false,
        active_call: null,
        deactivated_members: [],
        type_name: "MessageThread",
        title: "Test Thread",
        project_id: null,
        unread_count: 0,
        manually_marked_unread: false,
        viewer_has_favorited: false,
        other_members: [],
        viewer_is_thread_member: true,
        viewer_can_manage_integrations: false,
        viewer_can_delete: false,
        viewer_can_force_notification: false
      },
      label: "Thread"
    }
  });

  return (
    <ScopeProvider>
      <StartOfThread thread={state.thread.value} />
    </ScopeProvider>
  );
}