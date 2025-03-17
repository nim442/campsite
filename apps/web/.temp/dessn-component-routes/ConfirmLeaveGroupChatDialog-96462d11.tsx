import React from 'react';
import { useParentState } from '../useIframeState';
import { ConfirmLeaveGroupChatDialog } from '../../components/Thread/ConfirmLeaveGroupChatDialog';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
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
        title: "Example Group Chat",
        channel_name: "general",
        organization_slug: "example-org",
        group: true,
        integration_dm: false,
        path: "/example/path",
        call_room_url: null,
        remote_call_room_id: null,
        active_call: null,
        last_message_at: new Date().toISOString(),
        latest_message_truncated: "Latest message preview",
        image_url: null,
        avatar_urls: null,
        unread_count: 0,
        manually_marked_unread: false,
        viewer_has_favorited: false,
        viewer_is_thread_member: true,
        viewer_can_manage_integrations: false,
        viewer_can_delete: false,
        viewer_can_force_notification: false,
        project_id: null,
        type_name: "group_chat",
        other_members: [],
        deactivated_members: []
      },
      label: "Thread Data"
    }
  });

  return (
    <QueryNormalizerProvider queryClient={queryClient}>
      <ScopeProvider>
        <ConfirmLeaveGroupChatDialog 
          thread={state.thread.value}
          open={state.open.value}
          onOpenChange={(open) => setState('open', open)}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}