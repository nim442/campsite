import React from 'react';
import { useParentState } from '../useIframeState';
import { DeleteThreadDialog } from '../../components/Thread/DeleteThreadDialog';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    thread: {
      type: "object",
      value: {
        id: "123",
        title: "Example Chat",
        last_message_at: new Date().toISOString(),
        latest_message_truncated: "Hello world",
        image_url: null,
        avatar_urls: null,
        group: false,
        channel_name: "general",
        organization_slug: "example-org",
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
        other_members: [],
        viewer_is_thread_member: true,
        viewer_can_manage_integrations: true,
        viewer_can_delete: true,
        viewer_can_force_notification: true
      },
      label: "Thread Data"
    }
  });

  return (
    <ScopeProvider value={{ scope: "test-scope" }}>
      <DeleteThreadDialog 
        thread={state.thread.value}
        open={state.open.value}
        onOpenChange={(open) => setState('open', open)}
      />
    </ScopeProvider>
  );
}