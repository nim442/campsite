import React from 'react';
import { useParentState } from '../useIframeState';
import { DeleteCustomReactionDialog } from '../../components/OrgSettings/OrganizationReactions/DeleteCustomReactionDialog';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    customReaction: {
      type: "object",
      value: {
        id: "123",
        name: "Sample Reaction",
        file_url: "https://example.com/reaction.gif",
        created_at: new Date().toISOString(),
        creator: {
          id: "user123",
          role: "admin",
          created_at: new Date().toISOString(),
          deactivated: false,
          is_organization_member: true,
          user: {
            id: "user123",
            avatar_url: "https://example.com/avatar.jpg",
            avatar_urls: {
              xs: "https://example.com/avatar-xs.jpg",
              sm: "https://example.com/avatar-sm.jpg",
              base: "https://example.com/avatar-base.jpg",
              lg: "https://example.com/avatar-lg.jpg",
              xl: "https://example.com/avatar-xl.jpg",
              xxl: "https://example.com/avatar-xxl.jpg"
            },
            cover_photo_url: null,
            email: "user@example.com",
            username: "testuser",
            display_name: "Test User",
            system: false,
            integration: false,
            notifications_paused: false,
            notification_pause_expires_at: null,
            timezone: "UTC",
            logged_in: true,
            type_name: "user"
          },
          status: null
        }
      },
      label: "Custom Reaction"
    }
  });

  return (
    <ScopeProvider>
      <DeleteCustomReactionDialog
        open={state.open.value}
        onOpenChange={(open) => setState('open', open)}
        customReaction={state.customReaction.value}
      />
    </ScopeProvider>
  );
}