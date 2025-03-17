import React from 'react';
import { useParentState } from '../useIframeState';
import { RemoveInvitationDialog } from '../../components/People/RemoveInvitationDialog';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    invitation: {
      type: "object",
      value: {
        id: "inv_123",
        email: "user@example.com",
        role: "member",
        expired: false,
        organization: {
          avatar_url: "https://placekitten.com/200/200",
          avatar_urls: {
            xs: "https://placekitten.com/50/50",
            sm: "https://placekitten.com/100/100",
            base: "https://placekitten.com/200/200",
            lg: "https://placekitten.com/300/300",
            xl: "https://placekitten.com/400/400",
            xxl: "https://placekitten.com/500/500"
          },
          name: "Example Organization",
          slug: "example-org"
        },
        projects: [
          {
            id: "proj_123",
            name: "Example Project",
            description: "A sample project",
            created_at: "2023-01-01T00:00:00Z",
            archived_at: null,
            accessory: null,
            private: false,
            is_general: true,
            is_default: false
          }
        ]
      },
      label: "Invitation Data"
    }
  });

  return (
    <ScopeProvider>
      <RemoveInvitationDialog
        invitation={state.invitation.value}
        open={state.open.value}
        onOpenChange={(open) => setState('open', open)}
      />
    </ScopeProvider>
  );
}