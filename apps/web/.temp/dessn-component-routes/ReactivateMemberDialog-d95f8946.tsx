import React from 'react';
import { useParentState } from '../useIframeState';
import { ReactivateMemberDialog } from '../../components/People/ReactivateMemberDialog';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    memberData: {
      type: "object",
      value: {
        id: "123",
        role: "member",
        deactivated: true,
        last_seen_at: "2024-01-01T00:00:00Z",
        user: {
          id: "user123",
          avatar_urls: {
            xs: "https://placekitten.com/32/32",
            sm: "https://placekitten.com/64/64",
            base: "https://placekitten.com/128/128",
            lg: "https://placekitten.com/256/256",
            xl: "https://placekitten.com/512/512",
            xxl: "https://placekitten.com/1024/1024"
          },
          display_name: "John Doe",
          username: "johndoe",
          email: "john@example.com",
          integration: false,
          notifications_paused: false
        }
      },
      label: "Member Data"
    }
  });

  return (
    <ScopeProvider>
      <ReactivateMemberDialog
        member={state.memberData.value}
        open={state.open.value}
        onOpenChange={(newOpen) => setState('open', newOpen)}
      />
    </ScopeProvider>
  );
}