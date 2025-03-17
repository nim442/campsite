import React from 'react';
import { useParentState } from '../useIframeState';
import { InvitationConfirmationDialog } from '../../components/OrgSettings/InvitationConfirmationDialog';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    invitations: {
      type: "object",
      value: [
        {
          id: "1",
          email: "john@example.com",
          role: "admin",
          projects: [
            {
              id: "proj1",
              name: "Project Alpha",
              accessory: "🚀",
              private: false,
              is_general: true,
              archived: false,
              guests_count: 5,
              message_thread_id: "thread1",
              recent_posts_count: 10
            },
            {
              id: "proj2",
              name: "Project Beta",
              accessory: "💻",
              private: true,
              is_general: false,
              archived: false,
              guests_count: 3,
              message_thread_id: "thread2",
              recent_posts_count: 5
            }
          ]
        },
        {
          id: "2",
          email: "jane@example.com",
          role: "member",
          projects: [
            {
              id: "proj1",
              name: "Project Alpha",
              accessory: "🚀",
              private: false,
              is_general: true,
              archived: false,
              guests_count: 5,
              message_thread_id: "thread1",
              recent_posts_count: 10
            }
          ]
        }
      ],
      label: "Invitations"
    }
  });

  return (
    <ScopeProvider>
      <InvitationConfirmationDialog
        invitations={state.invitations.value}
        open={state.open.value}
        onCancel={() => console.log('Dialog cancelled')}
        onSuccess={() => console.log('Invitations sent successfully')}
      />
    </ScopeProvider>
  );
}