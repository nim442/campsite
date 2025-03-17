import React from 'react';
import { useParentState } from '../useIframeState';
import { DeactivateMemberDialog } from '../../components/People/DeactivateMemberDialog';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Dialog Open"
    },
    member: {
      type: "object",
      value: {
        id: "123",
        role: "member",
        deactivated: false,
        user: {
          id: "user123",
          display_name: "John Doe",
          username: "johndoe",
          email: "john@example.com",
          avatar_urls: {
            xs: "https://placekitten.com/50/50",
            sm: "https://placekitten.com/100/100",
            base: "https://placekitten.com/200/200",
            lg: "https://placekitten.com/300/300",
            xl: "https://placekitten.com/400/400",
            xxl: "https://placekitten.com/500/500"
          },
          integration: false,
          notifications_paused: false
        },
        last_seen_at: new Date().toISOString()
      },
      label: "Member Data"
    }
  });

  return (
    <ScopeProvider value={{ scope: "test-scope" }}>
      <DeactivateMemberDialog
        member={state.member.value}
        open={state.open.value}
        onOpenChange={(open) => setState('open', open)}
      />
    </ScopeProvider>
  );
}