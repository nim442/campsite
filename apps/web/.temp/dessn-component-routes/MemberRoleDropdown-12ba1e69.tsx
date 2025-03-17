import React from 'react';
import { useParentState } from '../useIframeState';
import { MemberRoleDropdown } from '../../components/People/MemberRoleDropdown';
import { ScopeProvider } from '../../contexts/scope';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
      onError: () => {
        // Suppress errors in preview
      }
    }
  }
});

export default function ComponentPreview() {
  const [state] = useParentState({
    role: {
      type: "dropdown",
      value: "member",
      options: ["admin", "member", "viewer", "guest"],
      label: "Member Role"
    },
    memberId: {
      type: "string",
      value: "123",
      label: "Member ID"
    }
  });

  const mockMember = {
    id: state.memberId.value,
    role: state.role.value as 'admin' | 'member' | 'viewer' | 'guest',
    deactivated: false,
    last_seen_at: new Date().toISOString(),
    user: {
      id: "user123",
      avatar_urls: {
        xs: "https://placekitten.com/24/24",
        sm: "https://placekitten.com/32/32",
        base: "https://placekitten.com/48/48",
        lg: "https://placekitten.com/64/64",
        xl: "https://placekitten.com/128/128",
        xxl: "https://placekitten.com/256/256"
      },
      display_name: "John Doe",
      username: "johndoe",
      email: "john@example.com",
      integration: false,
      notifications_paused: false
    }
  };

  // Override the window object to include the required properties
  if (typeof window !== 'undefined') {
    // @ts-ignore
    window.next = {
      router: {
        query: { org: 'test-org' },
        isReady: true,
        asPath: '/test-org/people'
      }
    };
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ScopeProvider>
        <MemberRoleDropdown 
          member={mockMember}
          value={state.role.value}
        />
      </ScopeProvider>
    </QueryClientProvider>
  );
}