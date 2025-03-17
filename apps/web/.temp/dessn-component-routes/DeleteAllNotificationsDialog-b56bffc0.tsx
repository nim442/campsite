import React from 'react';
import { useParentState } from '../useIframeState';
import { DeleteAllNotificationsDialog } from '../../components/InboxItems/DeleteAllNotificationsDialog';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    mode: {
      type: "dropdown",
      value: "all",
      options: ["all", "read", "closed"],
      label: "Mode"
    },
    homeOnly: {
      type: "boolean",
      value: false,
      label: "Home Only"
    },
    organization: {
      type: "object",
      value: {
        id: "org-123",
        avatar_url: "https://placeholder.com/avatar",
        avatar_urls: {
          xs: "https://placeholder.com/xs",
          sm: "https://placeholder.com/sm",
          base: "https://placeholder.com/base",
          lg: "https://placeholder.com/lg",
          xl: "https://placeholder.com/xl",
          xxl: "https://placeholder.com/xxl"
        },
        name: "Sample Organization",
        slug: "sample-org",
        viewer_is_admin: true,
        viewer_can_leave: true
      },
      label: "Organization"
    }
  });

  return (
    <ScopeProvider>
      <DeleteAllNotificationsDialog
        mode={state.mode.value as 'all' | 'read' | 'closed'}
        onClose={() => console.log('Dialog closed')}
        organization={state.organization.value}
        homeOnly={state.homeOnly.value}
      />
    </ScopeProvider>
  );
}