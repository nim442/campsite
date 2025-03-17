import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizationSwitchHoverCard } from '../../components/InboxItems/OrganizationSwitchHoverCard';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    alignOffset: {
      type: "number",
      value: -44,
      label: "Align Offset"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    shortcut: {
      type: "string",
      value: "⌘+K",
      label: "Shortcut"
    },
    organization: {
      type: "object",
      value: {
        id: "123",
        avatar_url: "https://placekitten.com/200/200",
        avatar_urls: {
          xs: "https://placekitten.com/50/50",
          sm: "https://placekitten.com/100/100",
          base: "https://placekitten.com/200/200",
          lg: "https://placekitten.com/300/300",
          xl: "https://placekitten.com/400/400",
          xxl: "https://placekitten.com/500/500"
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
      <OrganizationSwitchHoverCard
        organization={state.organization.value}
        shortcut={state.shortcut.value}
        alignOffset={state.alignOffset.value}
        disabled={state.disabled.value}
      >
        <button>Hover over me</button>
      </OrganizationSwitchHoverCard>
    </ScopeProvider>
  );
}