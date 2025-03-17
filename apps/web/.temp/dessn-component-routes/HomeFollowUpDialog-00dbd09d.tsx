import React from 'react';
import { useParentState } from '../useIframeState';
import { HomeFollowUpDialog } from '../../components/Home/HomeFollowUpDialog';
import { ScopeProvider } from '../../contexts/scope';
import { QueryNormalizerProvider } from '../../utils/normy/QueryNormalizerProvider';
import { QueryClient } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Follow Up Example",
      label: "Title"
    },
    id: {
      type: "string",
      value: "123",
      label: "ID"
    },
    type: {
      type: "string",
      value: "task",
      label: "Type"
    },
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    hasViewerFollowUp: {
      type: "boolean",
      value: false,
      label: "Has Viewer Follow Up"
    }
  });

  const mockViewerFollowUp = state.hasViewerFollowUp.value ? {
    id: "follow-up-1",
    show_at: new Date().toISOString(),
    belongs_to_viewer: true,
    member: {
      id: "member-1",
      role: "admin",
      created_at: new Date().toISOString(),
      deactivated: false,
      is_organization_member: true,
      user: {
        id: "user-1",
        avatar_url: "https://placeholder.com/150",
        avatar_urls: {
          xs: "https://placeholder.com/32",
          sm: "https://placeholder.com/64",
          base: "https://placeholder.com/96",
          lg: "https://placeholder.com/128",
          xl: "https://placeholder.com/192",
          xxl: "https://placeholder.com/256"
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
        type_name: "User"
      },
      status: null
    }
  } : null;

  return (
    <QueryNormalizerProvider 
      queryClient={queryClient}
      normalizerConfig={{
        normalize: true
      }}
    >
      <ScopeProvider>
        <HomeFollowUpDialog
          title={state.title.value}
          id={state.id.value}
          type={state.type.value}
          viewerFollowUp={mockViewerFollowUp}
          open={state.open.value}
          onOpenChange={(open) => setState("open", open)}
          onBeforeCreate={() => console.log("Before create")}
        />
      </ScopeProvider>
    </QueryNormalizerProvider>
  );
}