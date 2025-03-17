import React from 'react';
import { useParentState } from '../useIframeState';
import { ThreadIntegrationsDialog } from '../../components/Thread/ThreadIntegrationsDialog';
import { ScopeProvider } from '../../contexts/scope';

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
        id: "thread-1",
        last_message_at: new Date().toISOString(),
        latest_message_truncated: "Latest message",
        image_url: null,
        avatar_urls: {
          xs: "https://placekitten.com/50/50",
          sm: "https://placekitten.com/100/100",
          base: "https://placekitten.com/200/200",
          lg: "https://placekitten.com/300/300",
          xl: "https://placekitten.com/400/400",
          xxl: "https://placekitten.com/500/500"
        },
        group: false,
        channel_name: "general",
        organization_slug: "test-org",
        path: "/test-org/general",
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
    <ScopeProvider>
      <ThreadIntegrationsDialog
        open={state.open.value}
        onOpenChange={(open) => setState('open', open)}
        thread={state.thread.value}
      />
    </ScopeProvider>
  );
}