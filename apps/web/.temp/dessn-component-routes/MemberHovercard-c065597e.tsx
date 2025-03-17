import React from 'react';
import { useParentState } from '../useIframeState';
import { MemberHovercard } from '../../components/InlinePost/MemberHovercard';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    username: {
      type: "string",
      value: "johndoe",
      label: "Username"
    },
    role: {
      type: "dropdown",
      value: "member",
      options: ["member", "admin", "guest", "app"],
      label: "Role"
    },
    side: {
      type: "dropdown",
      value: "bottom",
      options: ["left", "top", "right", "bottom"],
      label: "Side"
    },
    align: {
      type: "dropdown",
      value: "start",
      options: ["center", "end", "start"],
      label: "Align"
    },
    forceOpen: {
      type: "boolean",
      value: true,
      label: "Force Open"
    }
  });

  // Mock scope context value
  const scopeValue = {
    scope: "demo-org",
    setScope: (scope: string) => console.log('Setting scope:', scope)
  };

  return (
    <ScopeProvider>
      <MemberHovercard
        username={state.username.value}
        role={state.role.value}
        side={state.side.value}
        align={state.align.value}
        forceOpen={state.forceOpen.value}
        onMouseOver={() => console.log('Mouse over')}
        onMouseOut={() => console.log('Mouse out')}
      >
        <span>Hover over me</span>
      </MemberHovercard>
    </ScopeProvider>
  );
}