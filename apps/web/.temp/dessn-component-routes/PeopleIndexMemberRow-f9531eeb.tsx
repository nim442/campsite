import React from 'react';
import { useParentState } from '../useIframeState';
import { PeopleIndexMemberRow } from '../../components/People/PeopleIndexMemberRow';
import { ScopeProvider } from '@/contexts/scope';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    username: {
      type: "string",
      value: "johndoe",
      label: "Username"
    },
    displayName: {
      type: "string",
      value: "John Doe",
      label: "Display Name"
    },
    email: {
      type: "string",
      value: "john@example.com",
      label: "Email"
    },
    role: {
      type: "dropdown",
      value: "member",
      options: ["admin", "member", "viewer", "guest"],
      label: "Role"
    },
    deactivated: {
      type: "boolean",
      value: false,
      label: "Deactivated"
    }
  });

  const mockMember = {
    id: "1",
    role: state.role.value,
    deactivated: state.deactivated.value,
    last_seen_at: new Date().toISOString(),
    user: {
      id: "user1",
      avatar_urls: {
        xs: "https://via.placeholder.com/24",
        sm: "https://via.placeholder.com/32",
        base: "https://via.placeholder.com/48",
        lg: "https://via.placeholder.com/64",
        xl: "https://via.placeholder.com/96",
        xxl: "https://via.placeholder.com/128"
      },
      display_name: state.displayName.value,
      username: state.username.value,
      email: state.email.value,
      integration: false,
      notifications_paused: false
    }
  };

  return (
    <ScopeProvider>
      <ul className="max-w-2xl">
        <PeopleIndexMemberRow
          id="preview-member"
          member={mockMember}
          onFocus={() => {}}
          onPointerMove={() => {}}
        />
      </ul>
    </ScopeProvider>
  );
}