import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizationMemberOverflowMenu } from '../../components/People/PeopleList';
import { ScopeProvider } from '../../contexts/scope';

export default function ComponentPreview() {
  const [state] = useParentState({
    member: {
      type: "object",
      value: {
        id: "1",
        role: "member",
        deactivated: false,
        user: {
          id: "user1",
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
      label: "Member"
    }
  });

  return (
    <ScopeProvider>
      <OrganizationMemberOverflowMenu member={state.member.value} />
    </ScopeProvider>
  );
}